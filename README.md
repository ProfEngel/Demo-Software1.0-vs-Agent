# Demo: Software 1.0 vs. Agentic AI (Lerncoach Hugo)

Herzlich willkommen! Dieses Repository veranschaulicht anhand eines greifbaren Beispiels den fundamentalen Unterschied zwischen **klassischer deterministischer Software (Software 1.0)** und **modernen autonomen KI-Agenten (Agentic AI)**.

Es richtet sich ganz bewusst an **Studierende und Interessierte ohne IT-Vorkenntnisse**.

---

## 🌐 Interaktive Live-Timelines (GitHub Pages)

Die Entstehungsgeschichte, alle Prompts und die didaktischen Highlights kannst du direkt im Browser als eigenständige Progressive Web App (PWA) aufrufen:

1. 👉 **[1. Timeline-PWA: Software 1.0 vs. Agentic AI (Lerncoach Hugo)](https://profengel.github.io/Demo-Software1.0-vs-Agent/)**
2. 👉 **[2. Timeline: WINF1 Lernapp & Security Audit der Skripte](https://profengel.github.io/Demo-Software1.0-vs-Agent/winf1-timeline/timeline.html)** *(inkl. [WINF1 Lernapp-PWA](https://profengel.github.io/Demo-Software1.0-vs-Agent/winf1-timeline/index.html))*

*(Die Timelines und Lernapps lassen sich auf dem Smartphone oder Tablet per „Zum Home-Bildschirm“ als echte Offline-App installieren!)*

---

## 💡 Der Kernunterschied einfach erklärt

| Merkmal | 1. Software 1.0 PWA (`pwa-software1`) | 2. Agentic AI: Coach Hugo (`agent-hugo`) |
| :--- | :--- | :--- |
| **Wie wird gedacht?** | **Reine Wenn-Dann-Regeln:** Ein Mensch hat jede Antwort und Verzweigung vorher fest programmiert. | **Verstehendes Kolloquium:** Ein KI-Modell liest deine Formulierung und versteht auch andere Worte (Paraphrasen). |
| **Braucht es eine KI?** | Nein (Zero AI / Zero API). Läuft komplett ohne Internet und ohne Modell im Browser. | Ja, ein lokales Sprachmodell wird über einen sicheren Steuerrahmen (*Harness*) eingebunden. |
| **Freitext-Prüfung** | Vergleicht Buchstaben für Buchstaben. Bei Abweichung: *„nicht exakt gleich – Bedeutung selbst prüfen“*. | Versteht den Sinn deiner Erklärung und erkennt Lücken oder Halbwahrheiten. |
| **Sicherheit & Kontrolle** | 100% deterministisch, keinerlei Eigenleben. | **Zero-Trust-Sandbox:** Der Agent darf nicht frei im Computer schalten, sondern hat strikt nur **4 erlaubte Werkzeuge**. |

---

## 📦 Inhalt dieses Repositories

### 1. `pwa-software1/` – Die klassische Lern-App (Software 1.0)
* **Ziel:** Vermittlung von KI-Grundbegriffen ganz ohne KI-Magie.
* **Dateien:** `index.html`, `app.js`, `styles.css`, `sw.js`, `manifest.webmanifest`.
* **Funktionen:** 10 Lernkarten, Zuordnungsfragen mit Begründung, lokaler Fortschrittsspeicher im Browser (`localStorage`), sicherer JSON-Export/Import.

### 2. `agent-hugo/` – Der sichere Lerncoach (Agentic AI)
* **Ziel:** Ein didaktischer Coach für ein echtes Fachgespräch.
* **Dateien:** 
  * `AGENTS.md` – Der feste Verhaltenskodex für Hugo (Belegpflicht für Lernerfolge, Human-in-the-Loop).
  * `material/agent/coach.py` – Die **4 deterministischen Werkzeuge** (`get_card`, `search_memory`, `update_progress`, `clarify_question`).
  * `material/agent/coach_memory.sqlite3` – Das lokale SQLite-Gedächtnis des Agenten.
  * `hugo_agent.py` & `harness_cli.py` – Die sichere Ausführungsumgebung (*Harness*).
  * `hub/` – Ein lokaler Web-Hub zur Visualisierung der Denkschritte.
  * `hub/sandbox_comic.jpg` – Das Comic-Schaubild zur Sandkasten-Metapher.

### 3. `timeline-docs/` – Die interaktive PWA-Timeline
* Alle Entwicklungsschritte chronologisch mit Buttons zum Aufklappen der Original-Aufträge (Prompts).
* Dient als Vorlage für das Hosting über **GitHub Pages**.

---

## 🛡️ Was ist eine „Sandbox“? (Kindgerecht erklärt)

Stell dir vor, du spielst im Wohnzimmer mit Wasserfarben und Schere. Wenn du das direkt auf dem teuren Teppich machst, gibt es Flecken. 
Deshalb geben dir deine Eltern einen **abgegrenzten Sandkasten (eine Sandbox)**:
* Du darfst **nur drinnen** buddeln.
* Deine Schaufeln und Förmchen sind die **erlaubten Werkzeuge**.
* Außerhalb des Kastens kannst du nichts bemalen oder beschädigen.

Genauso funktioniert **Agent Hugo**: Er sitzt in einer Software-Sandbox. Er hat **keinen Zugriff auf die Computer-Befehlszeile, keine Festplattenrechte und keinen freien Internetzugang**. Er kann nur auf seine 4 Werkzeuge und seine eigene kleine Datenbank zugreifen.

---

## 🚀 Schnellanleitung: GitHub Pages aktivieren

1. Repository auf GitHub öffnen &rarr; **Settings** &rarr; **Pages**.
2. Unter **Build and deployment** &rarr; **Branch**: `main` (oder `master`) und den Ordner `/timeline-docs` (oder `/root`) auswählen.
3. Auf **Save** klicken. Nach etwa 1–2 Minuten ist deine Timeline-PWA weltweit unter `https://<dein-name>.github.io/<repo>/` erreichbar!
