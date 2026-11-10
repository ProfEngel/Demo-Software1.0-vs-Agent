// Standard 10 Fachkarten
const DEFAULT_CARDS = [
  {
    id: "card-1",
    term: "Software 1.0",
    category: "Grundlagen",
    definition: "Klassische Programmierung: Menschen schreiben explizite Wenn-Dann-Regeln und Algorithmen Zeile für Zeile. Das System tut strikt das programmierte Verhalten.",
    learned: false
  },
  {
    id: "card-2",
    term: "Chatbot (Software 2.0)",
    category: "KI-Modell",
    definition: "Ein Sprachmodell antwortet im Dialog auf Textnachrichten. Es generiert Worte anhand statistischer Wahrscheinlichkeiten, führt aber von sich aus keine Aktionen in der Welt aus.",
    learned: false
  },
  {
    id: "card-3",
    term: "Agentic AI",
    category: "Autonomie & Handlung",
    definition: "Ein System, das selbstständig mehrstufige Ziele verfolgt: Es plant Schritte, wählt passende Werkzeuge, prüft Zwischenergebnisse und passt sein Vorgehen an.",
    learned: false
  },
  {
    id: "card-4",
    term: "Prompt",
    category: "Steuerung",
    definition: "Die Anweisung oder Eingabe an ein Sprachmodell. Gute Prompts definieren Rolle, Kontext, Ziel, Randbedingungen und gewünschtes Ausgabeformat präzise.",
    learned: false
  },
  {
    id: "card-5",
    term: "Harness (Das Steuergerüst)",
    category: "Architektur",
    definition: "Die Software-Umgebung (in verlässlicher Software 1.0!), die das KI-Modell umgibt. Sie fängt Aufrufe ab, setzt Sicherheitsregeln durch, verwaltet Tokens und steuert den Ablauf.",
    learned: false
  },
  {
    id: "card-6",
    term: "Tools (Werkzeuge)",
    category: "Erweiterung",
    definition: "Schnittstellen (APIs, Taschenrechner, Websuche, Dateizugriff), die ein Modell aufrufen kann. Erst durch Tools kann ein Modell reale Aktionen ausführen und aktuelle Daten abrufen.",
    learned: false
  },
  {
    id: "card-7",
    term: "Skills",
    category: "Wissen & Anleitung",
    definition: "Strukturierte Anleitungen, Arbeitsabläufe oder Best Practices, die dem Agenten vorgeben, wie er bei bestimmten Aufgabenstellungen methodisch vorgehen soll.",
    learned: false
  },
  {
    id: "card-8",
    term: "Memory (Gedächtnis)",
    category: "Kontext",
    definition: "Der Mechanismus, mit dem Informationen über die aktuelle Nachricht hinaus gespeichert werden: Kurzzeitgedächtnis (Chat-Historie) und Langzeitgedächtnis (gespeicherte Profildaten/Dateien).",
    learned: false
  },
  {
    id: "card-9",
    term: "Human-in-the-Loop (Menschliche Prüfung)",
    category: "Sicherheit",
    definition: "Entscheidende Handlungen (z. B. Geldüberweisungen, Löschungen, finale Dokumentfreigaben) erfordern vor der Ausführung die explizite Bestätigung durch den Menschen.",
    learned: false
  },
  {
    id: "card-10",
    term: "Halluzination & Grenzen",
    category: "Kritische Reflexion",
    definition: "Sprachmodelle besitzen kein echtes Weltverständnis. Sie klingen oft überzeugend, können aber plausibel wirkende Falschaussagen erfinden – Kontrolle bleibt unverzichtbar.",
    learned: false
  }
];

// Zuordnungsfragen mit begründeten Lösungen
const QUIZ_ITEMS = [
  {
    id: "q1",
    scenario: "Eine Universitätsverwaltung nutzt ein Skript, das Notendurchschnitte nach einer fest definierten mathematischen Formel berechnet.",
    options: [
      { id: "opt1", text: "Software 1.0" },
      { id: "opt2", text: "Agentic AI" },
      { id: "opt3", text: "Prompt Engineering" }
    ],
    correctId: "opt1",
    explanation: "Begründung: Eine feste Formel ohne statistisches Sprachmodell oder Handlungsspielraum ist klassische, deterministische Software 1.0."
  },
  {
    id: "q2",
    scenario: "Ein System liest eine Kundenfrage, sucht in internen PDFs, ruft eine Buchungs-API auf und prüft danach selbst, ob die Reservierung geklappt hat.",
    options: [
      { id: "opt1", text: "Einfacher Chatbot" },
      { id: "opt2", text: "Agentic AI" },
      { id: "opt3", text: "Reines Prompting" }
    ],
    correctId: "opt2",
    explanation: "Begründung: Das System plant mehrere Schritte, nutzt Werkzeuge (Tools) und reflektiert das Ergebnis – genau das macht einen agentischen Ablauf aus."
  },
  {
    id: "q3",
    scenario: "Warum reicht ein reines Sprachmodell (Chatbot) allein nicht aus, um deinen Kalendereintrag verlässlich zu aktualisieren?",
    options: [
      { id: "opt1", text: "Weil es ohne Tools und Harness keine Schnittstelle zum Kalender aufrufen kann." },
      { id: "opt2", text: "Weil Sprachmodelle überhaupt keine Datumsformate verstehen können." },
      { id: "opt3", text: "Weil dafür immer ein kostenpflichtiger Cloud-Account zwingend nötig ist." }
    ],
    correctId: "opt1",
    explanation: "Begründung: Ein Sprachmodell erzeugt nur Text. Um in die reale digitale Welt einzugreifen, benötigt es Werkzeuge (Tools) und ein Harness, das die API sicher ansteuert."
  },
  {
    id: "q4",
    scenario: "Welche Funktion erfüllt das 'Harness' rund um ein KI-Modell?",
    options: [
      { id: "opt1", text: "Es dient nur als bunte Benutzeroberfläche ohne technische Schutzfunktionen." },
      { id: "opt2", text: "Es ist das Schutz- und Steuergerüst (Software 1.0), das Berechtigungen prüft, Ausgaben abfängt und den Loop kontrolliert." },
      { id: "opt3", text: "Es trainiert das Sprachmodell täglich komplett neu." }
    ],
    correctId: "opt2",
    explanation: "Begründung: Das Harness setzt die Leitplanken. Es garantiert als verlässliche Software 1.0, dass das Modell keine unerlaubten Werkzeuge nutzt oder Endlosschleifen dreht."
  },
  {
    id: "q5",
    scenario: "Wieso ist 'Menschliche Prüfung' (Human-in-the-Loop) bei Agenten unverzichtbar?",
    options: [
      { id: "opt1", text: "Weil Agenten rechtlich die volle persönliche Haftung übernehmen." },
      { id: "opt2", text: "Weil Agenten irren oder halluzinieren können und folgenreiche Aktionen vom Menschen autorisiert werden müssen." },
      { id: "opt3", text: "Weil der Computer sonst nach 10 Minuten automatisch herunterfährt." }
    ],
    correctId: "opt2",
    explanation: "Begründung: KI-Systeme tragen keine Verantwortung und können Fehler machen. Kritische Aktionen bedürfen menschlicher Urteilskraft und Freigabe."
  }
];

const EXACT_TARGET = "Ein Agent wählt erlaubte Werkzeuge und prüft ihre Ergebnisse.";
const MAX_IMPORT_BYTES = 512 * 1024; // 512 KB Limit zur Abwehr von DoS

// App State Management
class AppState {
  constructor() {
    this.cards = [];
    this.notes = "";
    this.quizAnswers = {};
    this.currentCardIndex = 0;
    this.filter = "all"; // "all" | "learning" | "learned"
    this.load();
  }

  load() {
    try {
      const savedCards = localStorage.getItem("ki_cards");
      if (savedCards) {
        this.cards = JSON.parse(savedCards);
      } else {
        this.cards = JSON.parse(JSON.stringify(DEFAULT_CARDS));
      }
    } catch (e) {
      this.cards = JSON.parse(JSON.stringify(DEFAULT_CARDS));
    }

    try {
      this.notes = localStorage.getItem("ki_notes") || "";
    } catch (e) {
      this.notes = "";
    }

    try {
      const savedQuiz = localStorage.getItem("ki_quiz");
      this.quizAnswers = savedQuiz ? JSON.parse(savedQuiz) : {};
    } catch (e) {
      this.quizAnswers = {};
    }
  }

  save() {
    try {
      localStorage.setItem("ki_cards", JSON.stringify(this.cards));
      localStorage.setItem("ki_notes", this.notes);
      localStorage.setItem("ki_quiz", JSON.stringify(this.quizAnswers));
    } catch (e) {
      console.error("Speicherfehler in localStorage", e);
    }
  }

  resetAll() {
    this.cards = JSON.parse(JSON.stringify(DEFAULT_CARDS));
    this.notes = "";
    this.quizAnswers = {};
    this.currentCardIndex = 0;
    this.filter = "all";
    this.save();
  }
}

const state = new AppState();

// DOM Elements
const elements = {
  tabButtons: document.querySelectorAll('[role="tab"]'),
  tabPanels: document.querySelectorAll('.tab-panel'),
  cardCounter: document.getElementById('card-counter'),
  progressPercent: document.getElementById('progress-percent'),
  progressFill: document.getElementById('progress-fill'),
  cardTag: document.getElementById('card-tag'),
  cardTerm: document.getElementById('card-term'),
  cardDefinition: document.getElementById('card-definition'),
  cardStatus: document.getElementById('card-status'),
  btnPrevCard: document.getElementById('btn-prev-card'),
  btnNextCard: document.getElementById('btn-next-card'),
  btnToggleLearn: document.getElementById('btn-toggle-learn'),
  btnDeleteCard: document.getElementById('btn-delete-card'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  newCardForm: document.getElementById('new-card-form'),
  newCardTerm: document.getElementById('new-card-term'),
  newCardCategory: document.getElementById('new-card-category'),
  newCardDef: document.getElementById('new-card-def'),
  studyNotes: document.getElementById('study-notes'),
  notesStatus: document.getElementById('notes-status'),
  quizContainer: document.getElementById('quiz-container'),
  exactInput: document.getElementById('exact-input'),
  btnCheckExact: document.getElementById('btn-check-exact'),
  exactResult: document.getElementById('exact-result'),
  btnExportJson: document.getElementById('btn-export-json'),
  importFileInput: document.getElementById('import-file-input'),
  btnResetData: document.getElementById('btn-reset-data'),
  statusBanner: document.getElementById('status-banner'),
  confirmModal: document.getElementById('confirm-modal'),
  btnConfirmModalYes: document.getElementById('btn-confirm-modal-yes'),
  btnConfirmModalNo: document.getElementById('btn-confirm-modal-no'),
  installBanner: document.getElementById('install-banner'),
  btnInstallPwa: document.getElementById('btn-install-pwa')
};

// Notification Helper
function showBanner(message, type = "success") {
  if (!elements.statusBanner) return;
  elements.statusBanner.textContent = message;
  elements.statusBanner.className = `status-banner show ${type}`;
  setTimeout(() => {
    elements.statusBanner.className = 'status-banner';
  }, 4000);
}

// Helper: Escape text for secure DOM rendering
function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
}

// Filtered Cards
function getVisibleCards() {
  if (state.filter === 'learned') {
    return state.cards.filter(c => c.learned);
  }
  if (state.filter === 'learning') {
    return state.cards.filter(c => !c.learned);
  }
  return state.cards;
}

// Update Flashcard View
function renderCards() {
  const visible = getVisibleCards();
  const totalCards = state.cards.length;
  const learnedCount = state.cards.filter(c => c.learned).length;
  const pct = totalCards > 0 ? Math.round((learnedCount / totalCards) * 100) : 0;

  if (elements.progressPercent) {
    elements.progressPercent.textContent = `${pct}% (${learnedCount} von ${totalCards} verstanden)`;
  }
  if (elements.progressFill) {
    elements.progressFill.style.width = `${pct}%`;
  }

  if (visible.length === 0) {
    elements.cardCounter.textContent = "0 von 0";
    elements.cardTag.textContent = "Keine Karten";
    elements.cardTerm.textContent = "Keine passenden Karten vorhanden";
    elements.cardDefinition.textContent = "Wechsle den Filter (z. B. auf 'Alle') oder füge eine eigene Karte hinzu.";
    elements.cardStatus.textContent = "";
    elements.btnToggleLearn.disabled = true;
    elements.btnPrevCard.disabled = true;
    elements.btnNextCard.disabled = true;
    elements.btnDeleteCard.style.display = "none";
    return;
  }

  if (state.currentCardIndex >= visible.length) {
    state.currentCardIndex = 0;
  } else if (state.currentCardIndex < 0) {
    state.currentCardIndex = visible.length - 1;
  }

  const card = visible[state.currentCardIndex];
  elements.cardCounter.textContent = `Karte ${state.currentCardIndex + 1} von ${visible.length}`;
  elements.cardTag.textContent = card.category || "Allgemein";
  elements.cardTerm.textContent = card.term;
  elements.cardDefinition.textContent = card.definition;

  elements.btnToggleLearn.disabled = false;
  elements.btnPrevCard.disabled = visible.length <= 1;
  elements.btnNextCard.disabled = visible.length <= 1;

  if (card.learned) {
    elements.cardStatus.textContent = "Status: Als verstanden markiert ✓";
    elements.btnToggleLearn.textContent = "Nochmals üben";
    elements.btnToggleLearn.className = "btn btn-outline";
  } else {
    elements.cardStatus.textContent = "Status: Im Lernprozess";
    elements.btnToggleLearn.textContent = "Ich habe diesen Begriff verstanden";
    elements.btnToggleLearn.className = "btn btn-secondary";
  }

  // Delete option only for user cards (id does not start with card-1..card-10)
  const isDefault = DEFAULT_CARDS.some(dc => dc.id === card.id);
  if (!isDefault) {
    elements.btnDeleteCard.style.display = "inline-flex";
  } else {
    elements.btnDeleteCard.style.display = "none";
  }
}

// Navigation between tabs
elements.tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    elements.tabButtons.forEach(b => {
      b.setAttribute('aria-selected', 'false');
    });
    elements.tabPanels.forEach(p => {
      p.classList.remove('active');
    });

    btn.setAttribute('aria-selected', 'true');
    const panelId = btn.getAttribute('aria-controls');
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });

  // Keyboard navigation for tabs (Left/Right)
  btn.addEventListener('keydown', (e) => {
    const tabs = Array.from(elements.tabButtons);
    const index = tabs.indexOf(btn);
    if (e.key === 'ArrowRight') {
      const nextTab = tabs[(index + 1) % tabs.length];
      nextTab.focus();
      nextTab.click();
    } else if (e.key === 'ArrowLeft') {
      const prevTab = tabs[(index - 1 + tabs.length) % tabs.length];
      prevTab.focus();
      prevTab.click();
    }
  });
});

// Flashcard interactions
elements.btnPrevCard.addEventListener('click', () => {
  const visible = getVisibleCards();
  if (visible.length <= 1) return;
  state.currentCardIndex = (state.currentCardIndex - 1 + visible.length) % visible.length;
  renderCards();
});

elements.btnNextCard.addEventListener('click', () => {
  const visible = getVisibleCards();
  if (visible.length <= 1) return;
  state.currentCardIndex = (state.currentCardIndex + 1) % visible.length;
  renderCards();
});

elements.btnToggleLearn.addEventListener('click', () => {
  const visible = getVisibleCards();
  if (!visible.length) return;
  const current = visible[state.currentCardIndex];
  // Toggle status
  current.learned = !current.learned;
  state.save();
  renderCards();
  showBanner(current.learned ? "Als verstanden markiert!" : "Zurück in die Lernliste gelegt.", "success");
});

elements.btnDeleteCard.addEventListener('click', () => {
  const visible = getVisibleCards();
  if (!visible.length) return;
  const current = visible[state.currentCardIndex];
  state.cards = state.cards.filter(c => c.id !== current.id);
  state.save();
  state.currentCardIndex = 0;
  renderCards();
  showBanner("Eigene Karte gelöscht.", "success");
});

// Filter buttons
elements.filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    elements.filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.filter = btn.getAttribute('data-filter');
    state.currentCardIndex = 0;
    renderCards();
  });
});

// Add New Card Form
elements.newCardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const term = elements.newCardTerm.value.trim();
  const category = elements.newCardCategory.value.trim() || "Eigene Notiz";
  const def = elements.newCardDef.value.trim();

  if (!term || !def) {
    showBanner("Bitte Begriff und Erklärung ausfüllen.", "error");
    return;
  }

  const newCard = {
    id: "user-" + Date.now(),
    term: term,
    category: category,
    definition: def,
    learned: false
  };

  state.cards.push(newCard);
  state.save();
  elements.newCardForm.reset();
  showBanner("Neue Karte erfolgreich angelegt!", "success");
  
  // Switch to flashcard tab and show new card
  const cardTab = document.querySelector('[aria-controls="tab-cards"]');
  if (cardTab) cardTab.click();
  state.filter = "all";
  elements.filterButtons.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
  });
  state.currentCardIndex = state.cards.length - 1;
  renderCards();
});

// Study Notes Auto-Save
let notesTimer = null;
elements.studyNotes.value = state.notes;
elements.studyNotes.addEventListener('input', () => {
  elements.notesStatus.textContent = "Wird gespeichert...";
  clearTimeout(notesTimer);
  notesTimer = setTimeout(() => {
    state.notes = elements.studyNotes.value;
    state.save();
    elements.notesStatus.textContent = "Automatisch lokal gespeichert ✓";
  }, 400);
});

// Render Quiz Questions
function renderQuiz() {
  if (!elements.quizContainer) return;
  elements.quizContainer.innerHTML = "";

  QUIZ_ITEMS.forEach((q, qIndex) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'quiz-item';

    const savedAnswer = state.quizAnswers[q.id];

    let optionsHtml = q.options.map(opt => {
      const isChecked = savedAnswer === opt.id ? 'checked' : '';
      return `
        <label class="option-label">
          <input type="radio" name="quiz-${q.id}" value="${opt.id}" ${isChecked}>
          <span>${sanitizeText(opt.text)}</span>
        </label>
      `;
    }).join('');

    itemDiv.innerHTML = `
      <div class="quiz-scenario">Frage ${qIndex + 1}: ${sanitizeText(q.scenario)}</div>
      <div class="options-group" role="radiogroup" aria-label="Antwortoptionen für Frage ${qIndex + 1}">
        ${optionsHtml}
      </div>
      <div class="quiz-feedback" id="feedback-${q.id}"></div>
    `;

    // Event listener for answer selection
    const radios = itemDiv.querySelectorAll(`input[name="quiz-${q.id}"]`);
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        state.quizAnswers[q.id] = radio.value;
        state.save();
        updateQuizFeedback(q);
      });
    });

    elements.quizContainer.appendChild(itemDiv);

    if (savedAnswer) {
      updateQuizFeedback(q);
    }
  });
}

function updateQuizFeedback(q) {
  const feedbackDiv = document.getElementById(`feedback-${q.id}`);
  if (!feedbackDiv) return;

  const chosen = state.quizAnswers[q.id];
  if (!chosen) {
    feedbackDiv.className = 'quiz-feedback';
    feedbackDiv.textContent = '';
    return;
  }

  const isCorrect = chosen === q.correctId;
  feedbackDiv.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
  feedbackDiv.innerHTML = `
    <strong>${isCorrect ? 'Richtig!' : 'Noch nicht ganz richtig.'}</strong><br>
    ${sanitizeText(q.explanation)}
  `;
}

// Exact String Match Task
elements.btnCheckExact.addEventListener('click', () => {
  const userInput = elements.exactInput.value;
  elements.exactResult.className = 'exact-result show';

  if (userInput === EXACT_TARGET) {
    elements.exactResult.classList.remove('diff');
    elements.exactResult.classList.add('match');
    elements.exactResult.innerHTML = `
      <strong>Exakte Übereinstimmung!</strong><br>
      Deine Eingabe stimmt zeichengenau mit der Musterlösung überein.
    `;
  } else {
    elements.exactResult.classList.remove('match');
    elements.exactResult.classList.add('diff');
    elements.exactResult.innerHTML = `
      <strong>nicht exakt gleich – Bedeutung selbst prüfen</strong><br>
      <div style="margin-top: 0.5rem; font-size: 0.95rem;">
        <strong>Musterlösung:</strong><br>
        <code>${sanitizeText(EXACT_TARGET)}</code>
      </div>
      <div style="margin-top: 0.5rem; font-size: 0.95rem;">
        <strong>Deine Eingabe:</strong><br>
        <code>${sanitizeText(userInput || "(leer)")}</code>
      </div>
    `;
  }
});

// JSON Export
elements.btnExportJson.addEventListener('click', () => {
  const exportData = {
    app: "KI-Superkraft",
    version: 1,
    exportedAt: new Date().toISOString(),
    cards: state.cards,
    notes: state.notes,
    quizAnswers: state.quizAnswers
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ki-superkraft-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showBanner("Lernstand erfolgreich als JSON exportiert!", "success");
});

// Schema and Size Validated JSON Import
function validateImportData(data) {
  if (!data || typeof data !== 'object') {
    return { valid: false, reason: "Ungültiges JSON-Objekt" };
  }
  if (data.app !== "KI-Superkraft") {
    return { valid: false, reason: "Ungültige Anwendungs-Kennung (keine KI-Superkraft Sicherung)" };
  }
  if (!Array.isArray(data.cards)) {
    return { valid: false, reason: "Ungültiges Karten-Format (Array erwartet)" };
  }

  // Check card items
  for (const c of data.cards) {
    if (!c || typeof c !== 'object') {
      return { valid: false, reason: "Ungültiges Kartenelement" };
    }
    if (typeof c.id !== 'string' || typeof c.term !== 'string' || typeof c.definition !== 'string') {
      return { valid: false, reason: "Karten enthalten fehlerhafte Felder" };
    }
    if (typeof c.learned !== 'boolean') {
      return { valid: false, reason: "Feld 'learned' muss boolesch sein" };
    }
  }

  // Check notes
  if (data.notes !== undefined && typeof data.notes !== 'string') {
    return { valid: false, reason: "Notizen müssen reiner Text sein" };
  }

  // Check quiz answers
  if (data.quizAnswers !== undefined && (typeof data.quizAnswers !== 'object' || Array.isArray(data.quizAnswers))) {
    return { valid: false, reason: "Quiz-Antworten haben ein ungültiges Format" };
  }

  return { valid: true };
}

elements.importFileInput.addEventListener('change', (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  // 1. Größencheck
  if (file.size > MAX_IMPORT_BYTES) {
    showBanner(`Import abgelehnt: Datei zu groß (max. ${MAX_IMPORT_BYTES / 1024} KB). Kein Zustand verändert.`, "error");
    elements.importFileInput.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      const validation = validateImportData(parsed);

      if (!validation.valid) {
        showBanner(`Import fehlgeschlagen: ${validation.reason}. Bestehende Daten wurden nicht verändert!`, "error");
        elements.importFileInput.value = '';
        return;
      }

      // Validated successfully -> apply state
      state.cards = parsed.cards;
      state.notes = parsed.notes || "";
      state.quizAnswers = parsed.quizAnswers || {};
      state.save();

      elements.studyNotes.value = state.notes;
      state.currentCardIndex = 0;
      renderCards();
      renderQuiz();
      showBanner("Lernstand erfolgreich wiederhergestellt!", "success");
    } catch (err) {
      showBanner("Import fehlgeschlagen: Datei ist kein valides JSON. Keine Daten geändert.", "error");
    } finally {
      elements.importFileInput.value = '';
    }
  };
  reader.readAsText(file);
});

// Modal Confirmation for Reset
elements.btnResetData.addEventListener('click', () => {
  elements.confirmModal.classList.add('show');
  elements.btnConfirmModalNo.focus();
});

elements.btnConfirmModalNo.addEventListener('click', () => {
  elements.confirmModal.classList.remove('show');
});

elements.btnConfirmModalYes.addEventListener('click', () => {
  elements.confirmModal.classList.remove('show');
  state.resetAll();
  elements.studyNotes.value = "";
  elements.exactInput.value = "";
  elements.exactResult.className = "exact-result";
  renderCards();
  renderQuiz();
  showBanner("Alle Daten wurden auf den Ausgangszustand zurückgesetzt.", "success");
});

// Close modal on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && elements.confirmModal.classList.contains('show')) {
    elements.confirmModal.classList.remove('show');
  }
});

// Keyboard Navigation for Flashcards (Arrow Keys)
window.addEventListener('keydown', (e) => {
  const activeTab = document.querySelector('.tab-btn[aria-selected="true"]');
  const isCardsTab = activeTab && activeTab.getAttribute('aria-controls') === 'tab-cards';

  // Only trigger when not typing in an input or textarea
  const targetTag = e.target.tagName.toLowerCase();
  if (targetTag === 'input' || targetTag === 'textarea' || targetTag === 'select') {
    return;
  }

  if (isCardsTab) {
    if (e.key === 'ArrowRight' || e.key === 'j') {
      elements.btnNextCard.click();
    } else if (e.key === 'ArrowLeft' || e.key === 'k') {
      elements.btnPrevCard.click();
    } else if (e.key === ' ' || e.key === 'Enter') {
      elements.btnToggleLearn.click();
    }
  }
});

// PWA Service Worker Registration & Install Prompt
let deferredPrompt = null;
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log("Service Worker registriert:", reg.scope);
      })
      .catch((err) => {
        console.log("Service Worker Registrierung fehlgeschlagen:", err);
      });
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (elements.installBanner) {
    elements.installBanner.style.display = 'block';
  }
});

if (elements.btnInstallPwa) {
  elements.btnInstallPwa.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`PWA Installation outcome: ${outcome}`);
    deferredPrompt = null;
    elements.installBanner.style.display = 'none';
  });
}

// Initial Rendering
renderCards();
renderQuiz();
