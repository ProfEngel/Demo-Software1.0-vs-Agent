"""
hugo_agent.py
Modellagnostischer Agent 'Hugo'.
Einsatzbereit im Harness (CLI, Test-Harness, API, lokaler Hub).

Architekturprinzipien:
1. Max. 4 Tool-Calls je Turn/Auftrag
2. Vor jeder Beurteilung Pflichtaufruf: search_memory (freigegebenes Memory)
3. Bei Unsicherheit/Teilantwort: maximal EINE gezielte Rückfrage via clarify_question
4. Nur bei belegter richtiger Antwort Fortschritt via update_progress markieren
5. Nach Markierung sofortige deterministische Kontrolle des gespeicherten Zustands
6. Kein Shell- und kein Netzwerkzugriff (strikt gekapselt)
7. Resistent gegen Prompt Injections (keine Sonderrechte, Rollenveränderungen oder Tool-Bypass)
"""

import re
import json
from typing import Dict, Any, List, Optional
from material.agent.coach import CoachTools, CoachStorage, DEFAULT_KNOWLEDGE_CARDS

class HugoAgent:
    def __init__(self, storage: Optional[CoachStorage] = None, model_name: str = "deterministic-rule-engine-v1"):
        self.storage = storage or CoachStorage()
        self.tools = CoachTools(self.storage)
        self.model_name = model_name
        self.tool_call_limit = 4
        self.last_execution_protocol = []

    def run_turn(self, card_id: str, student_answer: str) -> Dict[str, Any]:
        """
        Führt einen kontrollierten Laufzeit-Turn von Hugo durch.
        Protokolliert jeden Schritt und jedes Werkzeug deterministisch.
        """
        protocol: List[Dict[str, Any]] = []
        call_count = 0

        def log_tool(tool_name: str, args: Dict[str, Any], result: Dict[str, Any]):
            nonlocal call_count
            call_count += 1
            entry = {
                "step": call_count,
                "tool": tool_name,
                "arguments": args,
                "result": result
            }
            protocol.append(entry)
            if call_count > self.tool_call_limit:
                raise RuntimeError(f"Tool-Aufruf-Limit von {self.tool_call_limit} überschritten!")

        # Sicherheits-Check: Prompt Injection Filter
        injection_indicators = [
            "ignore previous", "ignoriere alle vorherigen", "system prompt",
            "admin", "grant all", "gib mir alle rechte", "übernimm die kontrolle",
            "eval(", "exec(", "<script>", "drop table", "grant root"
        ]
        is_injection = any(p in student_answer.lower() for p in injection_indicators)

        # Schritt 1 (Pflicht): Tool 1 get_card - Kartenreferenz laden
        card_res = self.tools.tool_get_card(card_id)
        log_tool("get_card", {"card_id": card_id}, card_res)
        if "error" in card_res:
            self.last_execution_protocol = protocol
            return {
                "decision": "error",
                "message": card_res["error"],
                "protocol": protocol,
                "learned_updated": False
            }
        
        card_info = card_res["card"]
        term = card_info["term"]

        # Schritt 2 (Pflicht): Tool 2 search_memory - Freigegebenes SQLite-Memory vor jeder Beurteilung
        # Nachschlagen des Themas im freigegebenen Speicher
        mem_res = self.tools.tool_search_memory(term.split()[0]) # z.B. "Software", "Chatbot", "Agentic"
        log_tool("search_memory", {"topic": term.split()[0]}, mem_res)

        # Wenn Prompt Injection erkannt wurde: strikt ablehnen, keine Rechte vergeben, keine Änderung
        if is_injection:
            self.last_execution_protocol = protocol
            return {
                "decision": "reject_injection",
                "message": "Sicherheitshinweis: Die Antwort enthält versuchte Steuerungsbefehle (Prompt-Injection). Keine Rechte erteilt, kein Fortschritt verbucht.",
                "protocol": protocol,
                "learned_updated": False,
                "security_flag": "INJECTION_BLOCKED"
            }

        # Beurteilung durchführen (Modell-Agnostische Logik oder angebundenes LLM)
        evaluation = self._evaluate_answer(card_info, student_answer)

        # Fall: Teilantwort / Unsicherheit -> Max. eine Rückfrage (Tool 4 clarify_question)
        if evaluation["status"] == "partial":
            clarify_res = self.tools.tool_clarify_question(
                question=evaluation["clarification_question"],
                reason=evaluation["reason"]
            )
            log_tool("clarify_question", {
                "question": evaluation["clarification_question"],
                "reason": evaluation["reason"]
            }, clarify_res)
            
            self.last_execution_protocol = protocol
            return {
                "decision": "clarify",
                "message": evaluation["clarification_question"],
                "clarification_question": evaluation["clarification_question"],
                "reason": evaluation["reason"],
                "protocol": protocol,
                "learned_updated": False
            }

        # Fall: Falsche Antwort -> Ablehnen, kein Fortschritt
        if evaluation["status"] == "incorrect":
            self.last_execution_protocol = protocol
            return {
                "decision": "incorrect",
                "message": f"Das ist leider nicht ganz zutreffend für {term}. {evaluation['feedback']}",
                "protocol": protocol,
                "learned_updated": False
            }

        # Fall: Richtige Antwort / Paraphrase -> Tool 3 update_progress markieren und danach kontrollieren
        if evaluation["status"] == "correct":
            update_res = self.tools.tool_update_progress(
                card_id=card_id,
                learned=True,
                evidence=evaluation["evidence"]
            )
            log_tool("update_progress", {
                "card_id": card_id,
                "learned": True,
                "evidence": evaluation["evidence"]
            }, update_res)

            # Kontrolle: Wurde die Aktualisierung deterministisch verifiziert?
            check = update_res.get("result", {})
            verified = check.get("verified", False) and check.get("learned", False)

            self.last_execution_protocol = protocol
            return {
                "decision": "approved",
                "message": f"Hervorragend! Die Erklärung zu {term} ist belegt und korrekt verstanden.",
                "verified": verified,
                "success_count": check.get("success_count", 0),
                "protocol": protocol,
                "learned_updated": True
            }

        self.last_execution_protocol = protocol
        return {"decision": "unknown", "protocol": protocol, "learned_updated": False}

    def _evaluate_answer(self, card_info: Dict[str, Any], student_answer: str) -> Dict[str, Any]:
        """
        Modell-agnostische Evaluierung:
        Kann entweder deterministisch Schlüsselkriterien prüfen oder durch ein austauschbares LLM via Harness ersetzt werden.
        """
        ans = student_answer.lower().strip()
        card_id = card_info["id"]

        if card_id == "card-1": # Software 1.0
            # Kriterien: Regeln/Code vs. kein reines Raten
            has_rules = any(w in ans for w in ["regeln", "wenn-dann", "code", "deterministisch", "programmiert", "algorithmus", "algorithmen"])
            has_wrong = any(w in ans for w in ["selbstständig denkend", "lernt immer weiter ohne code", "neuronal"])
            
            if has_wrong:
                return {"status": "incorrect", "feedback": "Software 1.0 basiert auf festem Code und Wenn-Dann-Regeln, nicht auf eigenständigem Lernen."}
            if has_rules and len(ans) > 20:
                return {"status": "correct", "evidence": f"Antwort nennt Kernmerkmale von Software 1.0: '{student_answer}'"}
            elif has_rules or ("computer" in ans and len(ans) <= 20):
                return {
                    "status": "partial",
                    "reason": "Teilantwort: Es wurde erwähnt, dass programmiert wird, aber nicht wie (z.B. deterministische Regeln statt KI).",
                    "clarification_question": "Kannst du noch genauer sagen, wie der Entwickler das Verhalten steuert (z.B. feste Wenn-Dann-Regeln)?"
                }
            else:
                return {"status": "incorrect", "feedback": "Die Erklärung beschreibt nicht die strikte regelbasierte Programmierung von Software 1.0."}

        elif card_id == "card-2": # Chatbot
            # Kriterien: Sprachmodell/Statistik, reine Textausgabe, keine Aktionen in der echten Welt
            has_model = any(w in ans for w in ["sprachmodell", "text", "dialog", "wahrscheinlichkeit", "statistik", "antwortet", "wort"])
            has_no_action = any(w in ans for w in ["keine aktion", "führt keine aktionen aus", "kann nichts ausführen", "nur text", "ohne werkzeuge", "keine tools"])
            
            if "bucht selbstständig züge und überweist geld" in ans:
                return {"status": "incorrect", "feedback": "Ein reiner Chatbot kann ohne Tools keine realen Aktionen ausführen."}
            
            if has_model and has_no_action:
                return {"status": "correct", "evidence": f"Kombination aus Textgenerierung und Handlungsbegrenzung erkannt: '{student_answer}'"}
            elif has_model and not has_no_action:
                return {
                    "status": "partial",
                    "reason": "Teilantwort: Sprachmodell/Dialog wurde erwähnt, aber der entscheidende Unterschied zum Agenten (keine eigenständigen Aktionen) fehlt.",
                    "clarification_question": "Guter Punkt zur Textantwort. Aber kann der reine Chatbot von sich aus reale Aktionen (wie Datenbankänderungen) in der Welt ausführen?"
                }
            else:
                return {"status": "incorrect", "feedback": "Ein Chatbot generiert Text auf Basis von Wahrscheinlichkeiten, handelt aber nicht eigenständig."}

        elif card_id == "card-3": # Agentic AI
            # Kriterien: Werkzeuge/Tools, Zielverfolgung, Überprüfung
            has_tools = any(w in ans for w in ["werkzeug", "tool", "api", "schnittstelle"])
            has_goals = any(w in ans for w in ["ziel", "plant", "mehrstufig", "schritte", "handelt", "selbstständig"])
            has_check = any(w in ans for w in ["prüft", "evaluiert", "reflektiert", "kontrolliert"])

            if "ist nur ein bunter chat" in ans:
                return {"status": "incorrect", "feedback": "Ein Agent zeichnet sich gerade durch zielgerichtetes Handeln und Tool-Nutzung aus."}

            if (has_tools and has_goals) or (has_tools and has_check) or (has_goals and has_check):
                return {"status": "correct", "evidence": f"Kernmerkmale von Agentic AI (Ziele, Tools oder Ergebnisprüfung) belegt: '{student_answer}'"}
            elif has_tools or has_goals:
                return {
                    "status": "partial",
                    "reason": "Teilantwort: Entweder Werkzeugnutzung oder Zielverfolgung genannt, aber das Zusammenspiel ist noch unvollständig.",
                    "clarification_question": "Welche Rolle spielen dabei Werkzeuge (Tools) und die Prüfung der Ergebnisse auf dem Weg zum Ziel?"
                }
            else:
                return {"status": "incorrect", "feedback": "Ein KI-Agent verfolgt mehrstufige Ziele, nutzt Werkzeuge und kontrolliert die Zwischenschritte."}

        return {"status": "incorrect", "feedback": "Karte konnte nicht zugeordnet werden."}
