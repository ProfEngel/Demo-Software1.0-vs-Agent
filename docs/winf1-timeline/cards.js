export const CATEGORIES = [
  { id: 'alle', label: 'Alle Themen' },
  { id: 'sozio', label: 'Sozio-technische IS' },
  { id: 'genai', label: 'Generative AI' },
  { id: 'agentic', label: 'Agentic AI' },
  { id: 'begriffe', label: 'Weitere Begriffe' }
];

export const CARDS = [
  // Sozio-technische Informationssysteme
  {
    id: 'sozio-1',
    category: 'sozio',
    categoryLabel: 'Sozio-technische IS',
    question: 'Was versteht man unter einem sozio-technischen Informationssystem?',
    answer: 'Ein System, das aus menschlichen (sozialen) und technischen Komponenten besteht, die zur Erfassung, Verarbeitung, Speicherung und Übertragung von Informationen zusammenwirken.',
    hint: 'Es geht nicht nur um Software, sondern um das Zusammenspiel von Mensch, Aufgabe und Technik.',
    conceptGroups: [
      { name: 'Menschliche / soziale Komponente', terms: ['mensch', 'sozial', 'personen', 'mitarbeiter', 'nutzer', 'anwender'] },
      { name: 'Technische Komponente', terms: ['technik', 'technisch', 'it', 'software', 'hardware', 'system'] },
      { name: 'Informationsverarbeitung', terms: ['information', 'erfassung', 'verarbeitung', 'speicherung', 'übertragung', 'daten'] }
    ]
  },
  {
    id: 'sozio-2',
    category: 'sozio',
    categoryLabel: 'Sozio-technische IS',
    question: 'Welche drei Kernkomponenten beschreibt das Mensch-Aufgabe-Technik-Modell (MAT)?',
    answer: '1. Mensch (Aufgabenträger mit Fähigkeiten & Rollen)\n2. Aufgabe (betriebliche Problemstellung / Ziel)\n3. Technik (IT-Systeme, Software, Hardware, Netze)',
    hint: 'Alle drei Komponenten müssen aufeinander abgestimmt sein, damit ein IS erfolgreich funktioniert.',
    conceptGroups: [
      { name: 'Mensch', terms: ['mensch', 'person', 'mitarbeiter', 'aufgabenträger', 'rolle', 'nutzer'] },
      { name: 'Aufgabe', terms: ['aufgabe', 'ziel', 'problemstellung', 'prozess', 'arbeit'] },
      { name: 'Technik', terms: ['technik', 'technologie', 'it', 'software', 'hardware', 'system'] }
    ]
  },
  {
    id: 'sozio-3',
    category: 'sozio',
    categoryLabel: 'Sozio-technische IS',
    question: 'Was ist der Unterschied zwischen einem Informationssystem (IS) und einem Anwendungssystem (AS)?',
    answer: 'Das Anwendungssystem umfasst nur die Software und Hardware (technischer Teil). Das Informationssystem umfasst zusätzlich die Menschen, die organisatorischen Regeln und die Geschäftsprozesse.',
    hint: 'AS ⊂ IS: Das Anwendungssystem ist der rein maschinelle Teil des Informationssystems.',
    conceptGroups: [
      { name: 'Anwendungssystem (AS)', terms: ['anwendungssystem', 'as', 'software', 'hardware', 'maschinell', 'rechnergestützt', 'technisch'] },
      { name: 'Informationssystem (IS)', terms: ['informationssystem', 'is', 'umfassender', 'mensch', 'organisation', 'prozess', 'regeln'] }
    ]
  },
  {
    id: 'sozio-4',
    category: 'sozio',
    categoryLabel: 'Sozio-technische IS',
    question: 'Warum scheitern IT-Projekte häufig aus sozio-technischer Sicht?',
    answer: 'Weil oft nur die technische Komponente optimiert wird, während Akzeptanz, Unternehmenskultur, Schulung der Mitarbeitenden und Anpassung der Geschäftsprozesse vernachlässigt werden.',
    hint: 'Stichwort: Change Management und gemeinsame Optimierung (Joint Optimization).',
    conceptGroups: [
      { name: 'Fokus nur auf Technik', terms: ['technik', 'technisch', 'software', 'hardware', 'fokus', 'einseitig'] },
      { name: 'Vernachlässigung des Menschen / Organisation', terms: ['akzeptanz', 'kultur', 'mensch', 'schulung', 'mitarbeiter', 'prozess', 'organisation', 'change', 'wandel'] }
    ]
  },
  {
    id: 'sozio-5',
    category: 'sozio',
    categoryLabel: 'Sozio-technische IS',
    question: 'Was ist ein ERP-System (Enterprise Resource Planning)?',
    answer: 'Ein integriertes Anwendungssystem, das alle wesentlichen Geschäftsprozesse eines Unternehmens (z. B. Einkauf, Produktion, Vertrieb, Finanzen, HR) auf einer gemeinsamen Datenbasis abbildet.',
    hint: 'Bekannte Beispiele: SAP S/4HANA, Microsoft Dynamics, Odoo.',
    conceptGroups: [
      { name: 'Integrierte Software / ERP', terms: ['erp', 'enterprise resource planning', 'integriert', 'standardsoftware', 'anwendungssystem'] },
      { name: 'Geschäftsprozesse / Bereiche', terms: ['geschäftsprozess', 'bereich', 'abteilung', 'einkauf', 'produktion', 'vertrieb', 'finanzen', 'hr', 'personal'] },
      { name: 'Gemeinsame Datenbasis', terms: ['datenbasis', 'zentral', 'datenbank', 'gemeinsam', 'einheitlich'] }
    ]
  },
  {
    id: 'sozio-6',
    category: 'sozio',
    categoryLabel: 'Sozio-technische IS',
    question: 'Wozu dient die Geschäftsprozessmodellierung (z. B. mit BPMN 2.0)?',
    answer: 'Sie visualisiert Abläufe, Rollen, Ereignisse und Entscheidungen im Unternehmen standardisiert, um Prozesse zu analysieren, zu optimieren und zwischen Fachabteilung und IT zu kommunizieren.',
    hint: 'BPMN = Business Process Model and Notation.',
    conceptGroups: [
      { name: 'Visualisierung & Standardisierung', terms: ['visualisier', 'modell', 'bpmn', 'darstellung', 'standard', 'grafisch'] },
      { name: 'Abläufe & Prozesse verstehen', terms: ['prozess', 'ablauf', 'rolle', 'ereignis', 'aktivität', 'entscheidung'] },
      { name: 'Zweck (Analyse, Optimierung, Kommunikation)', terms: ['optimier', 'analyse', 'kommunikation', 'fachabteilung', 'it', 'verständnis'] }
    ]
  },

  // Generative AI (GenAI)
  {
    id: 'genai-1',
    category: 'genai',
    categoryLabel: 'Generative AI',
    question: 'Was ist Generative AI (GenAI)?',
    answer: 'Ein Teilbereich der Künstlichen Intelligenz, der auf Basis gelernter Muster aus Trainingsdaten neue, originäre Inhalte wie Text, Bilder, Code, Audio oder Video erzeugen kann.',
    hint: 'Im Gegensatz zu klassischer KI (Klassifikation/Vorhersage) generiert GenAI neue Artefakte.',
    conceptGroups: [
      { name: 'Erzeugung neuer Inhalte', terms: ['neu', 'generier', 'erzeug', 'erstell', 'originär', 'inhalte'] },
      { name: 'Lernen aus Trainingsdaten', terms: ['muster', 'trainingsdaten', 'gelernt', 'daten', 'modell'] },
      { name: 'Modalitäten / Medien', terms: ['text', 'bild', 'code', 'audio', 'video', 'medien'] }
    ]
  },
  {
    id: 'genai-2',
    category: 'genai',
    categoryLabel: 'Generative AI',
    question: 'Wie funktioniert ein Large Language Model (LLM) im Kern?',
    answer: 'Es sagt auf Basis eines gegebenen Kontexts (Prompts) statistisch das jeweils wahrscheinlichste nächste Token (Wortteil) voraus – ermöglicht durch die Transformer-Architektur und Self-Attention.',
    hint: 'Autoregressive Next-Token Prediction.',
    conceptGroups: [
      { name: 'Vorhersage des nächsten Tokens', terms: ['nächst', 'token', 'wort', 'wortteil', 'vorhersage', 'prediction'] },
      { name: 'Statistische Wahrscheinlichkeit', terms: ['statistisch', 'wahrscheinlich', 'plausibel', 'muster', 'probabilistisch'] },
      { name: 'Kontext / Transformer', terms: ['kontext', 'prompt', 'transformer', 'attention'] }
    ]
  },
  {
    id: 'genai-3',
    category: 'genai',
    categoryLabel: 'Generative AI',
    question: 'Was bedeutet RAG (Retrieval-Augmented Generation)?',
    answer: 'Ein Verfahren, bei dem ein LLM vor der Antwortgenerierung relevante Informationen aus einer externen Wissensbasis (z. B. Vektordatenbank mit Firmendokumenten) abruft und in den Prompt einbindet.',
    hint: 'Reduziert Halluzinationen und macht aktuelles/internes Wissen ohne Neutraining nutzbar.',
    conceptGroups: [
      { name: 'Abruf (Retrieval) externer Quellen', terms: ['retrieval', 'abruf', 'suche', 'extern', 'wissensbasis', 'vektordatenbank', 'dokument'] },
      { name: 'Generierung mit Kontext', terms: ['prompt', 'kontext', 'einbinden', 'anreichern', 'generierung', 'antwort'] },
      { name: 'Nutzen (Fakten / keine Halluzinationen)', terms: ['halluzination', 'aktuell', 'fakten', 'firmenwissen', 'unternehmensdaten'] }
    ]
  },
  {
    id: 'genai-4',
    category: 'genai',
    categoryLabel: 'Generative AI',
    question: 'Was sind „Halluzinationen“ bei LLMs?',
    answer: 'Faktisch falsche, erfundene oder nicht durch Quellen gedeckte Aussagen, die das Modell dennoch sprachlich überzeugend und selbstbewusst formuliert.',
    hint: 'Ursache: Das Modell optimiert auf sprachliche Plausibilität, nicht auf Faktenprüfung.',
    conceptGroups: [
      { name: 'Falsche oder erfundene Aussagen', terms: ['falsch', 'erfunden', 'unwahr', 'erdacht', 'nicht belegt', 'fehler'] },
      { name: 'Überzeugende Formulierung', terms: ['überzeugend', 'selbstbewusst', 'plausibel', 'gut formuliert', 'flüssig', 'scheinbar'] }
    ]
  },
  {
    id: 'genai-5',
    category: 'genai',
    categoryLabel: 'Generative AI',
    question: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?',
    answer: 'Prompt Engineering steuert das Modellverhalten allein über die Eingabe (Kontext, Beispiele, Rollen) ohne Gewichte zu ändern. Fine-Tuning trainiert das Modell gezielt auf domänenspezifischen Daten nach.',
    hint: 'Faustregel: Erst Prompting, dann RAG, und nur bei Bedarf Fine-Tuning.',
    conceptGroups: [
      { name: 'Prompt Engineering (Eingabe steuern)', terms: ['prompt engineering', 'eingabe', 'kontext', 'rolle', 'beispiel', 'ohne gewichte', 'anweisung'] },
      { name: 'Fine-Tuning (Modell trainieren)', terms: ['fine-tuning', 'feinabstimmung', 'trainieren', 'nachtrainieren', 'gewichte', 'daten'] }
    ]
  },
  {
    id: 'genai-6',
    category: 'genai',
    categoryLabel: 'Generative AI',
    question: 'Was beschreibt das Kontextfenster (Context Window) eines LLMs?',
    answer: 'Die maximale Anzahl an Tokens (Eingabe + Ausgabe), die das Modell in einer einzigen Anfrage gleichzeitig verarbeiten und „im Blick behalten“ kann.',
    hint: '1 Token entspricht im Deutschen grob 3–4 Zeichen.',
    conceptGroups: [
      { name: 'Maximale Menge / Grenze', terms: ['maximal', 'grenze', 'anzahl', 'größe', 'menge', 'kapazität'] },
      { name: 'Tokens / Text', terms: ['token', 'wörter', 'eingabe', 'ausgabe', 'prompt'] },
      { name: 'Gleichzeitige Verarbeitung', terms: ['verarbeiten', 'kontext', 'erinnern', 'blick behalten', 'anfrage'] }
    ]
  },

  // Agentic AI
  {
    id: 'agentic-1',
    category: 'agentic',
    categoryLabel: 'Agentic AI',
    question: 'Was versteht man unter Agentic AI (KI-Agenten)?',
    answer: 'KI-Systeme, die eigenständig Ziele verfolgen, ihre Umgebung wahrnehmen, mehrstufige Pläne erstellen, Werkzeuge (Tools) nutzen und Aktionen ausführen, um komplexe Aufgaben zu lösen.',
    hint: 'Übergang vom passiven „Chatbot auf Abruf“ zum aktiv handelnden System.',
    conceptGroups: [
      { name: 'Eigenständigkeit / Zielorientierung', terms: ['eigenständig', 'autonom', 'selbstständig', 'ziel', 'verfolgen', 'agieren'] },
      { name: 'Planung & Wahrnehmung', terms: ['plan', 'planung', 'wahrnehmung', 'umgebung', 'schritte'] },
      { name: 'Werkzeugnutzung & Aktionen', terms: ['tool', 'werkzeug', 'aktion', 'handeln', 'ausführen', 'function calling'] }
    ]
  },
  {
    id: 'agentic-2',
    category: 'agentic',
    categoryLabel: 'Agentic AI',
    question: 'Wie funktioniert das ReAct-Pattern bei KI-Agenten?',
    answer: 'ReAct kombiniert Reasoning (Nachdenken/Planen) und Acting (Ausführen von Aktionen/Tool-Calls) in einer Schleife: Gedanke → Aktion → Beobachtung → nächster Gedanke, bis das Ziel erreicht ist.',
    hint: 'Ermöglicht schrittweise Problemlösung und Fehlerkorrektur zur Laufzeit.',
    conceptGroups: [
      { name: 'Reasoning (Nachdenken)', terms: ['reasoning', 'denken', 'nachdenken', 'planen', 'gedanke', 'reason'] },
      { name: 'Acting (Aktion)', terms: ['acting', 'aktion', 'handeln', 'ausführen', 'tool call', 'act'] },
      { name: 'Schleife / Beobachtung', terms: ['schleife', 'loop', 'beobachtung', 'observation', 'schrittweise', 'korrektur'] }
    ]
  },
  {
    id: 'agentic-3',
    category: 'agentic',
    categoryLabel: 'Agentic AI',
    question: 'Was bedeutet Tool Use / Function Calling bei einem KI-Agenten?',
    answer: 'Die Fähigkeit eines Modells, strukturierte Aufrufe an externe Systeme (APIs, Datenbanken, Websuche, Code-Ausführung) zu generieren, um Daten abzurufen oder Aktionen in der realen Welt auszulösen.',
    hint: 'Das LLM entscheidet, welches Tool mit welchen Parametern aufgerufen wird.',
    conceptGroups: [
      { name: 'Aufruf von Werkzeugen / Funktionen', terms: ['tool', 'werkzeug', 'funktion', 'function calling', 'aufruf'] },
      { name: 'Externe Systeme / Schnittstellen', terms: ['extern', 'api', 'datenbank', 'suche', 'code', 'schnittstelle'] },
      { name: 'Aktionen / Datenbeschaffung', terms: ['daten', 'aktion', 'ausführen', 'parameter', 'struktur'] }
    ]
  },
  {
    id: 'agentic-4',
    category: 'agentic',
    categoryLabel: 'Agentic AI',
    question: 'Was ist ein Multi-Agenten-System (MAS) im Kontext von Agentic AI?',
    answer: 'Eine Architektur, in der mehrere spezialisierte KI-Agenten (z. B. Researcher, Coder, Reviewer) zusammenarbeiten, Aufgaben aufteilen und Ergebnisse austauschen, um komplexe Ziele zu erreichen.',
    hint: 'Ähnlich einem Projektteam mit klar verteilten Rollen.',
    conceptGroups: [
      { name: 'Mehrere Agenten', terms: ['mehrere', 'gruppe', 'team', 'system', 'multi-agent', 'mas'] },
      { name: 'Spezialisierung / Rollen', terms: ['spezialisiert', 'rolle', 'aufteilung', 'expert', 'coder', 'forscher'] },
      { name: 'Zusammenarbeit / Kooperation', terms: ['zusammenarbeit', 'kooperation', 'austausch', 'gemeinsam', 'ziel'] }
    ]
  },
  {
    id: 'agentic-5',
    category: 'agentic',
    categoryLabel: 'Agentic AI',
    question: 'Warum ist Human-in-the-Loop (HITL) bei Agentic AI besonders wichtig?',
    answer: 'Da autonome Agenten reale Aktionen (z. B. E-Mails senden, Zahlungen auslösen, Code deployen) durchführen können, sichern menschliche Kontroll- und Freigabeschritte Qualität, Sicherheit und Haftung.',
    hint: 'Besonders kritisch bei irreversiblen oder risikobehafteten Entscheidungen.',
    conceptGroups: [
      { name: 'Reale / risikoreiche Aktionen', terms: ['reale aktion', 'zahlung', 'email', 'löschen', 'deploy', 'risiko', 'gefahr', 'auswirkung'] },
      { name: 'Menschliche Kontrolle / Freigabe', terms: ['mensch', 'kontrolle', 'freigabe', 'überwachung', 'human-in-the-loop', 'hitl', 'bestätigung'] },
      { name: 'Sicherheit & Haftung', terms: ['sicherheit', 'qualität', 'haftung', 'fehlervermeidung', 'vertrauen'] }
    ]
  },
  {
    id: 'agentic-6',
    category: 'agentic',
    categoryLabel: 'Agentic AI',
    question: 'Welche Rolle spielt Memory (Gedächtnis) bei KI-Agenten?',
    answer: 'Kurzzeitgedächtnis (Kontextfenster der aktuellen Sitzung) und Langzeitgedächtnis (z. B. Vektordatenbanken) erlauben es Agenten, sich an frühere Interaktionen, Präferenzen und gelernte Fakten zu erinnern.',
    hint: 'Ohne Memory beginnt jeder Durchlauf wieder bei null.',
    conceptGroups: [
      { name: 'Gedächtnis / Erinnerung', terms: ['memory', 'gedächtnis', 'speicher', 'erinnern', 'merken', 'behalten'] },
      { name: 'Kurzzeit- & Langzeitgedächtnis', terms: ['kurzzeit', 'langzeit', 'kontextfenster', 'sitzung', 'vektordatenbank', 'datenbank'] },
      { name: 'Kontinuität / Wissen über Zeit', terms: ['früher', 'interaktion', 'historie', 'präferenz', 'fakten', 'lernen'] }
    ]
  },

  // Weitere WINF-Begriffe
  {
    id: 'begriffe-1',
    category: 'begriffe',
    categoryLabel: 'Weitere Begriffe',
    question: 'Was unterscheidet Digitalisierung von Digitaler Transformation?',
    answer: 'Digitalisierung überführt analoge Prozesse/Daten in digitale Form (z. B. PDF statt Papier). Digitale Transformation verändert Geschäftsmodelle, Wertschöpfung und Organisation grundlegend durch digitale Technologien.',
    hint: 'Digitalisierung = „etwas schneller/papierlos machen“; Transformation = „Neues möglich machen“.',
    conceptGroups: [
      { name: 'Digitalisierung (analog zu digital)', terms: ['digitalisierung', 'analog', 'papier', 'digital', 'pdf', 'umwandeln', 'elektronisch'] },
      { name: 'Digitale Transformation (Geschäftsmodell/Organisation)', terms: ['transformation', 'geschäftsmodell', 'wertschöpfung', 'kultur', 'organisation', 'grundlegend', 'strategie'] }
    ]
  },
  {
    id: 'begriffe-2',
    category: 'begriffe',
    categoryLabel: 'Weitere Begriffe',
    question: 'Was sind die drei klassischen Cloud-Service-Modelle (IaaS, PaaS, SaaS)?',
    answer: '• IaaS (Infrastructure): Virtuelle Server, Speicher, Netz (z. B. AWS EC2)\n• PaaS (Platform): Laufzeitumgebung für eigene Apps (z. B. Heroku, Azure App Service)\n• SaaS (Software): Fertige Anwendung im Browser (z. B. M365, Salesforce)',
    hint: 'Von links nach rechts sinkt die eigene Verwaltungsarbeit, aber auch die Kontrolle.',
    conceptGroups: [
      { name: 'IaaS (Infrastruktur)', terms: ['iaas', 'infrastructure', 'infrastruktur', 'server', 'speicher', 'netzwerk', 'hardware'] },
      { name: 'PaaS (Plattform)', terms: ['paas', 'platform', 'plattform', 'laufzeitumgebung', 'entwickl'] },
      { name: 'SaaS (Software)', terms: ['saas', 'software', 'fertige anwendung', 'browser', 'cloud-software'] }
    ]
  },
  {
    id: 'begriffe-3',
    category: 'begriffe',
    categoryLabel: 'Weitere Begriffe',
    question: 'Was ist eine API (Application Programming Interface)?',
    answer: 'Eine definierte Programmierschnittstelle, über die verschiedene Softwaresysteme standardisiert Daten austauschen und Funktionen gegenseitig aufrufen können (z. B. über REST oder GraphQL).',
    hint: 'Ermöglicht lose Kopplung und Integration in modernen IT-Landschaften.',
    conceptGroups: [
      { name: 'Programmierschnittstelle', terms: ['api', 'schnittstelle', 'programmierschnittstelle', 'interface'] },
      { name: 'Datenaustausch / Kommunikation', terms: ['austausch', 'daten', 'kommunikation', 'aufruf', 'interaktion'] },
      { name: 'Standardisierung / Systeme verbinden', terms: ['standard', 'systeme', 'verbinden', 'integration', 'rest', 'graphql'] }
    ]
  },
  {
    id: 'begriffe-4',
    category: 'begriffe',
    categoryLabel: 'Weitere Begriffe',
    question: 'Was ist der Unterschied zwischen einem Data Warehouse und einem Data Lake?',
    answer: 'Ein Data Warehouse speichert strukturierte, bereinigte Daten nach einem festen Schema (Schema-on-Write) für BI/Reporting. Ein Data Lake speichert Rohdaten aller Art (strukturiert & unstrukturiert) flexibel (Schema-on-Read).',
    hint: 'Data Warehouse = aufgeräumtes Lager; Data Lake = großer See für Rohdaten & ML.',
    conceptGroups: [
      { name: 'Data Warehouse (strukturiert / BI)', terms: ['data warehouse', 'dwh', 'strukturiert', 'bereinigt', 'schema-on-write', 'bi', 'reporting', 'schema'] },
      { name: 'Data Lake (Rohdaten / unstrukturiert)', terms: ['data lake', 'rohdaten', 'unstrukturiert', 'alle daten', 'schema-on-read', 'flexibel', 'see'] }
    ]
  },
  {
    id: 'begriffe-5',
    category: 'begriffe',
    categoryLabel: 'Weitere Begriffe',
    question: 'Was regelt der EU AI Act im Kern?',
    answer: 'Er reguliert KI-Systeme in der EU nach einem risikobasierten Ansatz (unannehmbares, hohes, begrenztes und minimales Risiko) mit Transparenz-, Dokumentations- und Governance-Pflichten.',
    hint: 'Wichtiger Compliance-Rahmen für Unternehmen, die KI entwickeln oder einsetzen.',
    conceptGroups: [
      { name: 'Regulierung / Gesetzgebung', terms: ['eu ai act', 'regulierung', 'gesetz', 'vorschrift', 'regeln', 'rahmen'] },
      { name: 'Risikobasierter Ansatz', terms: ['risiko', 'risikobasiert', 'risikostufen', 'unannehmbar', 'hoch', 'minimal', 'klassen'] },
      { name: 'Pflichten / Transparenz', terms: ['transparenz', 'dokumentation', 'governance', 'pflicht', 'sicherheit'] }
    ]
  },
  {
    id: 'begriffe-6',
    category: 'begriffe',
    categoryLabel: 'Weitere Begriffe',
    question: 'Was bedeutet DevOps?',
    answer: 'Eine Kultur und Praxis, die Softwareentwicklung (Dev) und IT-Betrieb (Ops) eng verzahnt, um durch Automatisierung (CI/CD) schneller, häufiger und zuverlässiger Software auszuliefern.',
    hint: 'CI/CD = Continuous Integration / Continuous Delivery.',
    conceptGroups: [
      { name: 'Entwicklung & Betrieb verzahnen', terms: ['dev', 'ops', 'entwicklung', 'betrieb', 'verzahnung', 'zusammenarbeit', 'kultur'] },
      { name: 'Automatisierung & CI/CD', terms: ['automatisierung', 'ci/cd', 'pipeline', 'kontinuierlich', 'continuous'] },
      { name: 'Schnellere & stabilere Auslieferung', terms: ['schnell', 'häufig', 'zuverlässig', 'auslieferung', 'release', 'qualität'] }
    ]
  }
];
