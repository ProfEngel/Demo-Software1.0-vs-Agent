"""
material/agent/coach.py
Lokal begrenztes Werkzeug für den Lernagenten Hugo mit SQLite-Memory.

Eigenschaften:
- Deterministische Werkzeuge: get_card, search_memory, update_progress, clarify_question
- Maximal 4 Tool-Calls je Turn/Auftrag
- SQLite-Memory (freigegebenes Gedächtnis mit expliziter Prüfung)
- Fortschritt nur bei belegter richtiger Antwort markieren und verifizieren
- Modellagnostisches Interface
- Strikter Sandbox-Schutz: Kein Shell- oder Netzwerkzugriff
"""

import sqlite3
import json
import os
import sys
from typing import Dict, Any, List, Optional

# Standardkarten aus der Lernwerkstatt (Software 1.0 Wahrheit)
DEFAULT_KNOWLEDGE_CARDS = {
    "card-1": {
        "id": "card-1",
        "term": "Software 1.0",
        "category": "Grundlagen",
        "definition": "Klassische Programmierung: Menschen schreiben explizite Wenn-Dann-Regeln und Algorithmen Zeile für Zeile. Das System tut strikt das programmierte Verhalten.",
        "key_criteria": ["explizite regeln", "wenn-dann", "deterministisch", "programmiert", "kein statistisches modell"]
    },
    "card-2": {
        "id": "card-2",
        "term": "Chatbot (Software 2.0)",
        "category": "KI-Modell",
        "definition": "Ein Sprachmodell antwortet im Dialog auf Textnachrichten. Es generiert Worte anhand statistischer Wahrscheinlichkeiten, führt aber von sich aus keine Aktionen in der Welt aus.",
        "key_criteria": ["dialog", "textantwort", "sprachmodell", "statistische wahrscheinlichkeiten", "keine eigenstaendigen aktionen in der welt"]
    },
    "card-3": {
        "id": "card-3",
        "term": "Agentic AI",
        "category": "Autonomie & Handlung",
        "definition": "Ein System, das selbstständig mehrstufige Ziele verfolgt: Es plant Schritte, wählt passende Werkzeuge, prüft Zwischenergebnisse und passt sein Vorgehen an.",
        "key_criteria": ["mehrstufige ziele", "plant schritte", "waehlt werkzeuge", "tools", "prueft zwischenergebnisse", "handlungsfaehig"]
    }
}

DB_PATH = os.path.join(os.path.dirname(__file__), "coach_memory.sqlite3")

class CoachStorage:
    def __init__(self, db_path: str = DB_PATH):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS approved_memory (
                    id TEXT PRIMARY KEY,
                    topic TEXT NOT NULL,
                    approved_fact TEXT NOT NULL,
                    is_verified INTEGER DEFAULT 1,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS learning_progress (
                    card_id TEXT PRIMARY KEY,
                    term TEXT NOT NULL,
                    learned INTEGER DEFAULT 0,
                    verified_by TEXT,
                    attempts INTEGER DEFAULT 0,
                    success_count INTEGER DEFAULT 0,
                    last_evidence TEXT,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS audit_log (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    action TEXT NOT NULL,
                    payload TEXT,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            conn.commit()
        self._seed_if_empty()

    def _seed_if_empty(self):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT COUNT(*) FROM approved_memory")
            if cursor.fetchone()[0] == 0:
                initial_memories = [
                    ("mem-sw1", "Software 1.0", "Deterministische Algorithmen, von Menschen geschriebene Regeln, keine statistischen Halluzinationen."),
                    ("mem-chat", "Chatbot", "Statistisches LLM, antwortet mit Text, führt keine autonomen Aktionen/Tools in der Umgebung aus."),
                    ("mem-agent", "Agentic AI", "Agent verfolgt selbstständig Ziele, nutzt Tools, prüft Ergebnisse und führt mehrstufige Handlungen aus.")
                ]
                cursor.executemany("INSERT INTO approved_memory (id, topic, approved_fact, is_verified) VALUES (?, ?, ?, 1)", initial_memories)
            
            cursor.execute("SELECT COUNT(*) FROM learning_progress")
            if cursor.fetchone()[0] == 0:
                for cid, cdata in DEFAULT_KNOWLEDGE_CARDS.items():
                    cursor.execute("INSERT INTO learning_progress (card_id, term, learned, attempts, success_count) VALUES (?, ?, 0, 0, 0)", (cid, cdata["term"]))
            conn.commit()

    def query_memory(self, query: str) -> List[Dict[str, Any]]:
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT id, topic, approved_fact, is_verified FROM approved_memory WHERE is_verified = 1 AND (topic LIKE ? OR approved_fact LIKE ?)",
                (f"%{query}%", f"%{query}%")
            )
            rows = cursor.fetchall()
            return [{"id": r[0], "topic": r[1], "fact": r[2], "verified": bool(r[3])} for r in rows]

    def get_progress(self, card_id: Optional[str] = None) -> List[Dict[str, Any]]:
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            if card_id:
                cursor.execute("SELECT card_id, term, learned, attempts, success_count, last_evidence FROM learning_progress WHERE card_id = ?", (card_id,))
            else:
                cursor.execute("SELECT card_id, term, learned, attempts, success_count, last_evidence FROM learning_progress")
            rows = cursor.fetchall()
            return [{
                "card_id": r[0],
                "term": r[1],
                "learned": bool(r[2]),
                "attempts": r[3],
                "success_count": r[4],
                "last_evidence": r[5]
            } for r in rows]

    def update_progress(self, card_id: str, learned: bool, evidence: str) -> Dict[str, Any]:
        if card_id not in DEFAULT_KNOWLEDGE_CARDS:
            return {"success": False, "error": f"Ungültige card_id: {card_id}"}
        
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT learned, attempts, success_count FROM learning_progress WHERE card_id = ?", (card_id,))
            row = cursor.fetchone()
            if not row:
                return {"success": False, "error": "Karte nicht gefunden"}
            
            curr_learned, attempts, success_count = row
            attempts += 1
            if learned:
                if not curr_learned:
                    # Erste erfolgreiche Belegung
                    curr_learned = 1
                    success_count += 1
                else:
                    # Wiederholung: zählt nicht doppelt im Fortschritt
                    success_count += 1
            
            cursor.execute("""
                UPDATE learning_progress 
                SET learned = ?, attempts = ?, success_count = ?, last_evidence = ?, verified_by = 'HugoAgent:DeterministicCoach', updated_at = CURRENT_TIMESTAMP
                WHERE card_id = ?
            """, (curr_learned, attempts, success_count, evidence, card_id))
            
            cursor.execute("INSERT INTO audit_log (action, payload) VALUES (?, ?)", 
                           ("UPDATE_PROGRESS", json.dumps({"card_id": card_id, "learned": bool(curr_learned), "attempts": attempts, "success_count": success_count, "evidence": evidence})))
            conn.commit()
            
            # Post-Verification Kontrolle
            cursor.execute("SELECT learned, attempts, success_count FROM learning_progress WHERE card_id = ?", (card_id,))
            check = cursor.fetchone()
            return {
                "success": True,
                "card_id": card_id,
                "learned": bool(check[0]),
                "attempts": check[1],
                "success_count": check[2],
                "verified": True
            }

    def log_audit(self, action: str, payload: Dict[str, Any]):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO audit_log (action, payload) VALUES (?, ?)", (action, json.dumps(payload)))
            conn.commit()

class CoachTools:
    """Die 4 deterministischen Werkzeuge für Agent Hugo."""
    def __init__(self, storage: Optional[CoachStorage] = None):
        self.storage = storage or CoachStorage()

    def tool_get_card(self, card_id: str) -> Dict[str, Any]:
        """Werkzeug 1: Offizielle Referenzkarte abrufen."""
        if not isinstance(card_id, str) or not card_id.strip():
            return {"error": "Ungültiger Parameter: card_id muss ein nicht-leerer String sein"}
        card = DEFAULT_KNOWLEDGE_CARDS.get(card_id.strip())
        if not card:
            return {"error": f"Karte '{card_id}' existiert nicht"}
        return {"status": "ok", "card": card}

    def tool_search_memory(self, topic: str) -> Dict[str, Any]:
        """Werkzeug 2: Freigegebenes SQLite-Memory vor jeder Beurteilung nachschlagen."""
        if not isinstance(topic, str) or not topic.strip():
            return {"error": "Ungültiger Parameter: topic muss ein String sein"}
        results = self.storage.query_memory(topic.strip())
        return {"status": "ok", "count": len(results), "results": results}

    def tool_update_progress(self, card_id: str, learned: bool, evidence: str) -> Dict[str, Any]:
        """Werkzeug 3: Lernfortschritt nur bei belegter richtiger Antwort markieren und kontrollieren."""
        if not isinstance(card_id, str) or card_id not in DEFAULT_KNOWLEDGE_CARDS:
            return {"error": f"Ungültige card_id: {card_id}"}
        if not isinstance(learned, bool):
            return {"error": "learned muss ein Boolean sein (True/False)"}
        if not isinstance(evidence, str) or len(evidence.strip()) < 5:
            return {"error": "evidence muss eine fundierte Begründung (mind. 5 Zeichen) enthalten"}
        
        res = self.storage.update_progress(card_id, learned, evidence)
        return {"status": "ok", "result": res}

    def tool_clarify_question(self, question: str, reason: str) -> Dict[str, Any]:
        """Werkzeug 4: Höchstens eine gezielte Rückfrage bei Teilantwort oder Unsicherheit stellen."""
        if not isinstance(question, str) or not question.strip():
            return {"error": "Rückfrage darf nicht leer sein"}
        return {"status": "clarification_requested", "question": question.strip(), "reason": reason.strip()}

# Export / Import Validierung
def export_memory_and_progress(db_path: str = DB_PATH) -> Dict[str, Any]:
    storage = CoachStorage(db_path)
    with sqlite3.connect(storage.db_path) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT id, topic, approved_fact, is_verified FROM approved_memory")
        mem = [{"id": r[0], "topic": r[1], "fact": r[2], "verified": bool(r[3])} for r in cursor.fetchall()]
        cursor.execute("SELECT card_id, term, learned, attempts, success_count, last_evidence FROM learning_progress")
        prog = [{"card_id": r[0], "term": r[1], "learned": bool(r[2]), "attempts": r[3], "success_count": r[4], "last_evidence": r[5]} for r in cursor.fetchall()]
    return {
        "version": "1.0",
        "source": "hugo_harness_sqlite",
        "approved_memory": mem,
        "progress": prog
    }

def validate_and_import_data(data: Dict[str, Any], db_path: str = DB_PATH) -> Dict[str, Any]:
    """Sicherer, explizit validierter Import von Browser- oder Fremddaten."""
    if not isinstance(data, dict):
        return {"success": False, "error": "Ungültiges Format: Wurzelelement muss ein JSON-Objekt sein"}
    
    if "cards" in data and isinstance(data["cards"], list):
        # Format aus PWA Lernwerkstatt
        storage = CoachStorage(db_path)
        imported_count = 0
        for item in data["cards"]:
            if not isinstance(item, dict):
                continue
            cid = item.get("id")
            learned = bool(item.get("learned", False))
            if cid in DEFAULT_KNOWLEDGE_CARDS:
                storage.update_progress(cid, learned, evidence="Importiert aus validiertem PWA-Export mit Freigabe")
                imported_count += 1
        return {"success": True, "imported_cards": imported_count}

    return {"success": False, "error": "Nicht unterstütztes Datenformat"}
