"""
harness_cli.py
CLI und interaktives Harness für Agent Hugo.
Bietet Modell-Agnostik, Schrittprotokollierung und Sicherheitsstopps.
"""

import sys
import json
from hugo_agent import HugoAgent
from material.agent.coach import CoachStorage, export_memory_and_progress, validate_and_import_data

def print_banner():
    print("=" * 65)
    print("  HARNESS-CHAT: AGENT HUGO (Lerncoach für KI-Konzepte)")
    print("  Modell: Modellagnostisch | Sicherheitsstufe: Strikt gekapselt")
    print("  Regeln: AGENTS.md | Tools: material/agent/coach.py")
    print("=" * 65)

def run_cli():
    print_banner()
    agent = HugoAgent()

    while True:
        print("\nVerfügbare Karten:")
        print(" [1] card-1: Software 1.0")
        print(" [2] card-2: Chatbot (Software 2.0)")
        print(" [3] card-3: Agentic AI")
        print(" [status] Aktueller Lernstand")
        print(" [export] Freigegebene Daten exportieren (JSON)")
        print(" [quit] Beenden")
        
        choice = input("\nWähle eine Karte oder Aktion: ").strip().lower()
        if choice in ("quit", "exit", "q"):
            print("Harness beendet.")
            break

        if choice == "status":
            progress = agent.storage.get_progress()
            print("\n--- Aktueller Lernfortschritt ---")
            for p in progress:
                status_symbol = "✓ (Gelernt)" if p["learned"] else "✗ (Offen)"
                print(f"- {p['term']} ({p['card_id']}): {status_symbol} | Erfolge: {p['success_count']} | Versuche: {p['attempts']}")
            continue

        if choice == "export":
            print("\n[SICHERHEITSSTOPP: Freigabe erforderlich]")
            confirm = input("Möchtest du das freigegebene Memory und den Lernstand jetzt exportieren? (j/n): ").strip().lower()
            if confirm in ("j", "ja", "y", "yes"):
                data = export_memory_and_progress()
                print(json.dumps(data, indent=2, ensure_ascii=False))
            else:
                print("Export abgebrochen.")
            continue

        card_map = {"1": "card-1", "2": "card-2", "3": "card-3", "card-1": "card-1", "card-2": "card-2", "card-3": "card-3"}
        selected_card = card_map.get(choice)
        if not selected_card:
            print("Ungültige Auswahl!")
            continue

        print(f"\nBitte erkläre den Begriff in eigenen Worten:")
        answer = input("> ").strip()
        if not answer:
            print("Leere Eingabe abgebrochen.")
            continue

        print("\n[Agent Hugo führt Loop aus (max 4 Tools, Memory-Prüfung vorab)...]")
        res = agent.run_turn(card_id=selected_card, student_answer=answer)

        print("\n" + "-" * 50)
        print(f"Entscheidung: {res['decision']}")
        print(f"Mitteilung:   {res['message']}")
        if "reason" in res:
            print(f"Begründung:   {res['reason']}")
        
        print("\n--- Tool-Protokoll dieser Runde ---")
        for step in res["protocol"]:
            print(f" Schritt {step['step']}: Tool '{step['tool']}'")
            print(f"   Parameter: {json.dumps(step['arguments'], ensure_ascii=False)}")
            print(f"   Ergebnis:  {json.dumps(step['result'], ensure_ascii=False)}")
        print("-" * 50)

if __name__ == "__main__":
    run_cli()
