/* ================================================================
   Kalkulations-Meister – AVB / Einzelhandel (NRW Berufskolleg)
   Handlungsfeld 2: "Waren verkaufen" – Verkaufskalkulation
   SAMR: Modification/Redefinition – Selbstgesteuertes Üben mit
   Sofortfeedback, Gamification und dauerhaftem Fortschritt.
   ================================================================ */

/* ================================================================
   1) ZENTRALE LERNINHALTE (JSON) – hier neue Aufgaben ergänzen!
   ================================================================ */
const APP_DATA = {

  meta: {
    title: "Kalkulations-Meister",
    fach: "Einzelhandel (AVB)",
    handlungsfeld: "Handlungsfeld 2: Waren verkaufen – Verkaufsgespräche kalkulatorisch vorbereiten",
    lehrplan: "Impulskatalog_AVB_Einzelhandel_11-12.indd (Handlungsfeld 2)"
  },

  quiz: [
    {
      frage: "Was bedeutet der Begriff 'Bezugskalkulation'?",
      antworten: [
        "Sie berechnet den Einstandspreis einer Ware.",
        "Sie berechnet den Gewinn des Kunden.",
        "Sie berechnet die Mehrwertsteuer."
      ],
      richtig: 0,
      erklaerung: "Die Bezugskalkulation rechnet alle Kosten zusammen, die entstehen, bis die Ware im Laden ist. Das Ergebnis ist der Einstandspreis.",
      lernpfad: ["Was kostet die Ware wirklich im Laden?", "Was zahlt der Kunde am Ende?"]
    },
    {
      frage: "Was ist der Einstandspreis (EP)?",
      antworten: [
        "Listeneinkaufspreis + Bezugskosten (z. B. Fracht, Versicherung)",
        "Verkaufspreis minus Mehrwertsteuer",
        "Der Preis auf der Rechnung vom Lieferanten"
      ],
      richtig: 0,
      erklaerung: "Zum Einstandspreis gehören alle Kosten bis zur Ware im Lager: Listenpreis minus Rabatte, plus Bezugskosten wie Fracht und Versicherung.",
      lernpfad: ["Einkauf: Was zahle ich dem Lieferanten?", "Verkauf: Was zahlt der Kunde bei mir?"]
    },
    {
      frage: "Wofür ist der Kalkulationszuschlag (KZ) da?",
      antworten: [
        "Er deckt Kosten und Gewinn ab und wird auf den Einstandspreis geschlagen.",
        "Er ist ein Rabatt für Stammkunden.",
        "Er ist die Mehrwertsteuer."
      ],
      richtig: 0,
      erklaerung: "Mit dem Kalkulationszuschlag werden Geschäftskosten (Miete, Gehälter) und der Gewinn auf den Einstandspreis gerechnet.",
      lernpfad: ["Kosten decken", "Gewinn machen"]
    },
    {
      frage: "Was macht der Kalkulationsrabatt (KR)?",
      antworten: [
        "Er senkt den Barverkaufspreis für Kunden, die bar zahlen.",
        "Er erhöht den Einstandspreis.",
        "Er senkt die Mehrwertsteuer."
      ],
      richtig: 0,
      erklaerung: "Der Kalkulationsrabatt ist ein Preisnachlass für Barzahlung. Er senkt den Verkaufspreis des Geschäfts.",
      lernpfad: []
    },
    {
      frage: "Wann spricht man von 'vorwärts kalkulieren'?",
      antworten: [
        "Man rechnet vom Einstandspreis zum Verkaufspreis.",
        "Man rechnet vom Verkaufspreis zurück zum Einstandspreis.",
        "Man rechnet nur die Mehrwertsteuer."
      ],
      richtig: 0,
      erklaerung: "Vorwärts = vom Einkauf zum Verkauf. Rückwärts = vom Verkaufspreis zurück zum Einstandspreis.",
      lernpfad: ["Vorwärts: EP + KZ = BVK", "Rückwärts: vom Bruttoverkaufspreis zurück"]
    }
  ],

  dragdrop: {
    titel: "Baue die Kalkulationstabelle in der richtigen Reihenfolge",
    zeilen: [
      { id: "lep", label: "Listeneinkaufspreis (LEP)" },
      { id: "rabatte", label: "− Liefererrabatte / Bezugsrabatte" },
      { id: "bk", label: "+ Bezugskosten (Fracht, Versicherung)" },
      { id: "ep", label: "= Einstandspreis (EP)" },
      { id: "kz", label: "+ Kalkulationszuschlag (KZ)" },
      { id: "bvk", label: "= Barverkaufspreis (BVK)" },
      { id: "kr", label: "− Kalkulationsrabatt (KR)" },
      { id: "sk", label: "− Skonto" },
      { id: "zvk", label: "= Zielverkaufspreis (ZVK)" },
      { id: "mwst", label: "+ Umsatzsteuer (19 % oder 7 %)" },
      { id: "brutto", label: "= Bruttoverkaufspreis (Backend)" }
    ]
  },

  kalkulation: [
    {
      titel: "Regenschirm kalkulieren",
      text: "Ein Regenschirm hat einen Einstandspreis von 20,00 €. Der Kalkulationszuschlag beträgt 50 %. Die Mehrwertsteuer ist 19 %.",
      frage: "Wie hoch ist der Bruttoverkaufspreis (Preis für den Kunden)?",
      loesung: 35.70,
      tipp: "Rechne Schritt für Schritt: 20 € + 50 % = 30 €. Dann 30 € + 19 % = 35,70 €.",
      schritte: ["20,00 € × 1,5 = 30,00 € (Barverkaufspreis)", "30,00 € × 1,19 = 35,70 € (Bruttoverkaufspreis)"]
    },
    {
      titel: "Rabattrechnung",
      text: "Der Bruttoverkaufspreis eines Artikels ist 47,60 €. Der Kunde zahlt bar und bekommt 10 % Kalkulationsrabatt.",
      frage: "Wie viel zahlt der Kunde bar?",
      loesung: 42.84,
      tipp: "Ziehe 10 % vom Bruttoverkaufspreis ab: 47,60 € × 0,9.",
      schritte: ["47,60 € × 0,90 = 42,84 €"]
    },
    {
      titel: "Rückwärts kalkulieren",
      text: "Ein Produkt kostet im Laden 119,00 € brutto (19 % MwSt.). Der Kalkulationszuschlag betrug 100 %.",
      frage: "Wie hoch war der Einstandspreis?",
      loesung: 50,
      tipp: "Erst die Mehrwertsteuer rausrechnen (÷ 1,19). Dann durch (1 + KZ) teilen (÷ 2,00).",
      schritte: ["119,00 € ÷ 1,19 = 100,00 € (Barverkaufspreis)", "100,00 € ÷ 2,00 = 50,00 € (Einstandspreis)"]
    }
  ],

  badges: [
    { id: "first",     icon: "🌱", name: "Erster Schritt",  bedingung: "1 Aufgabe richtig" },
    { id: "quizmaster",icon: "🧠", name: "Quiz-Ass",       bedingung: "Quiz komplett richtig" },
    { id: "sortierer", icon: "🧩", name: "Sortier-Profi",   bedingung: "alle 11 Zeilen richtig" },
    { id: "rechenking",icon: "🧮", name: "Rechen-König",    bedingung: "alle Kalkulationen richtig" },
    { id: "level5",    icon: "🚀", name: "Level 5",         bedingung: "erreicht" }
  ],

  level: { punkteProLevel: 40, maxLevel: 6 }
};

/* ================================================================
   2) PERSISTENZ (LocalStorage)
   ================================================================ */
const STORE_KEY = "kalkMeister_v1";
const store = {
  daten: { score: 0, badges: [], quizBest: {}, calcBest: {}, dragDone: false, theme: "dark" },
  laden() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) this.daten = Object.assign(this.daten, JSON.parse(raw));
    } catch (e) { /* Offline/Speicherfehler ignorieren */ }
    this.anwenden();
  },
  speichern() { localStorage.setItem(STORE_KEY, JSON.stringify(this.daten)); },
  anwenden() {
    document.documentElement.classList.toggle("dark", this.daten.theme === "dark");
    document.getElementById("theme-icon").textContent = this.daten.theme === "dark" ? "🌙" : "☀️";
  }
};
store.laden();

/* ================================================================
   3) HILFSFUNKTIONEN
   ================================================================ */
const $ = (id) => document.getElementById(id);
const fmt = (n) => n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

function punkte(n) {
  store.daten.score += n;
  checkLevel();
  store.speichern();
  renderHeader();
}
function level() { return Math.min(APP_DATA.level.maxLevel, 1 + Math.floor(store.daten.score / APP_DATA.level.punkteProLevel)); }

function checkLevel() {
  const lv = level();
  if (lv >= 5) verleihe("level5", "🚀 Level 5 erreicht!");
}

function verleihe(badgeId, text) {
  if (store.daten.badges.includes(badgeId)) return;
  store.daten.badges.push(badgeId);
  store.speichern();
  toast("🎉 " + text);
  renderBadges();
}

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add("hidden"), 2600);
}

function renderHeader() {
  const lv = level();
  $("level-pill").textContent = "Level " + lv;
  const imLevel = store.daten.score % APP_DATA.level.punkteProLevel;
  $("level-bar").style.width = Math.min(100, (imLevel / APP_DATA.level.punkteProLevel) * 100) + "%";
}

function renderBadges() {
  $("badge-wall").innerHTML = APP_DATA.badges.map(b => `
    <div class="badge-tile ${store.daten.badges.includes(b.id) ? "earned" : ""}"
         role="img" aria-label="${b.name}: ${b.bedingung}${store.daten.badges.includes(b.id) ? ' – erreicht' : ' – noch nicht erreicht'}">
      <span class="text-2xl">${b.icon}</span><span>${b.name}</span>
    </div>`).join("");
}

function switchView(name) {
  ["start", "quiz", "drag", "calc", "export"].forEach(v =>
    $("view-" + v).classList.toggle("hidden", v !== name));
  document.querySelectorAll(".nav-item").forEach(b =>
    b.classList.toggle("active", b.dataset.go === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ================================================================
   4) QUIZ (Multiple Choice mit Lernpfad & Sofortfeedback)
   ================================================================ */
let quizIndex = 0, quizKorrekt = 0;

function startQuiz() {
  quizIndex = 0; quizKorrekt = 0;
  renderQuizFrage();
}

function renderQuizFrage() {
  const frage = APP_DATA.quiz[quizIndex];
  $("quiz-progress").textContent = `Frage ${quizIndex + 1} von ${APP_DATA.quiz.length}`;
  const lernpfad = frage.lernpfad && frage.lernpfad.length
    ? `<p class="text-xs uppercase tracking-wide text-brand-600 dark:text-indigo-400 font-semibold mb-2">Lernpfad: ${frage.lernpfad.join(" → ")}</p>` : "";
  $("quiz-card").innerHTML = `
    ${lernpfad}
    <h3 class="font-semibold text-lg mb-4">${frage.frage}</h3>
    ${frage.antworten.map((a, i) =>
      `<button class="answer-btn" data-i="${i}">${a}</button>`).join("")}`;
  $("quiz-card").querySelectorAll(".answer-btn").forEach(btn =>
    btn.addEventListener("click", () => quizAntworten(btn, frage)));
  $("quiz-feedback").classList.add("hidden");
}

function quizAntworten(btn, frage) {
  const fb = $("quiz-feedback");
  const i = Number(btn.dataset.i);
  $("quiz-card").querySelectorAll(".answer-btn").forEach(b => b.disabled = true);
  if (i === frage.richtig) {
    btn.classList.add("correct");
    quizKorrekt++;
    punkte(8);
    fb.className = "mt-4 p-4 rounded-xl bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100";
    fb.innerHTML = `<p class="font-bold mb-1">✅ Richtig! +8 Punkte</p>
      <details><summary>Warum? (nachlesen)</summary><p class="mt-1">${frage.erklaerung}</p></details>`;
    fb.classList.remove("hidden");
    if (store.daten.quizBest[quizIndex] !== true) { store.daten.quizBest[quizIndex] = true; store.speichern(); }
  } else {
    btn.classList.add("wrong");
    const richtigBtn = $("quiz-card").querySelector(`[data-i="${frage.richtig}"]`);
    if (richtigBtn) richtigBtn.classList.add("correct");
    fb.className = "mt-4 p-4 rounded-xl bg-red-100 text-red-900 dark:bg-red-900/40 dark:text-red-100";
    fb.innerHTML = `<p class="font-bold mb-1">❌ Nicht ganz. So geht es richtig:</p>
      <p class="mb-1"><strong>${frage.antworten[frage.richtig]}</strong></p>
      <p>${frage.erklaerung}</p>`;
    fb.classList.remove("hidden");
  }
  if (quizKorrekt === APP_DATA.quiz.length) verleihe("quizmaster", "Quiz-Ass: alles richtig!");
  setTimeout(() => {
    quizIndex++;
    if (quizIndex < APP_DATA.quiz.length) renderQuizFrage();
    else {
      $("quiz-card").innerHTML = `<p class="text-center font-semibold">Quiz beendet: ${quizKorrekt} von ${APP_DATA.quiz.length} richtig.</p>
        <button class="btn-primary mt-4" onclick="startQuiz()">Nochmal üben</button>`;
      $("quiz-progress").textContent = "";
    }
  }, i === frage.richtig ? 1200 : 4200);
}

/* ================================================================
   5) DRAG & DROP (mit Touch-Fallback durch Antippen)
   ================================================================ */
let chips = [], gewaehlterChip = null;

function startDrag() {
  chips = shuffle([...APP_DATA.dragdrop.zeilen.map(z => z.id)]);
  gewaehlterChip = null;
  renderChips();
  renderZonen();
}
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function renderChips() {
  const container = $("chips");
  const vergeben = [...document.querySelectorAll(".dropzone .chip")].map(c => c.dataset.id);
  const offen = chips.filter(id => !vergeben.includes(id));
  const namen = Object.fromEntries(APP_DATA.dragdrop.zeilen.map(z => [z.id, z.label]));
  container.innerHTML = offen.map(id => `<div class="chip" draggable="true" data-id="${id}" tabindex="0" role="button"
    aria-label="Element ${namen[id]}">${id.toUpperCase()}</div>`).join("");
  container.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("dragstart", e => e.dataTransfer.setData("text/plain", chip.dataset.id));
    chip.addEventListener("click", () => {
      gewaehlterChip = gewaehlterChip === chip.dataset.id ? null : chip.dataset.id;
      container.querySelectorAll(".chip").forEach(c => c.classList.toggle("selected", c.dataset.id === gewaehlterChip));
    });
    chip.addEventListener("keydown", e => { if (e.key === "Enter") chip.click(); });
  });
}

function renderZonen() {
  $("dropzones").innerHTML = APP_DATA.dragdrop.zeilen.map((z, i) => `
    <div class="dropzone" data-id="${z.id}" tabindex="0" role="group" aria-label="Zeile ${i + 1}">
      <span class="text-sm text-slate-500 dark:text-slate-400">${i + 1}.</span>
      <span class="flex-1 text-sm font-medium text-center min-h-[1.5rem]" data-slot="${z.id}">${z.label}</span>
    </div>`).join("");
  document.querySelectorAll(".dropzone").forEach(zone => {
    zone.addEventListener("dragover", e => { e.preventDefault(); zone.classList.add("over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("over"));
    zone.addEventListener("drop", e => { e.preventDefault(); zone.classList.remove("over"); platziere(zone, e.dataTransfer.getData("text/plain")); });
    zone.addEventListener("click", () => { if (gewaehlterChip) { platziere(zone, gewaehlterChip); } });
  });
}

function platziere(zone, chipId) {
  const vorhanden = document.querySelector(`.dropzone .chip[data-id="${chipId}"]`);
  if (vorhanden) vorhanden.remove();
  const slot = zone.querySelector("[data-slot]");
  slot.innerHTML = chipId.toUpperCase();
  slot.dataset.value = chipId;
  gewaehlterChip = null;
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("selected"));
  renderChips();
}

$("drag-check").addEventListener("click", () => {
  let richtig = 0, total = APP_DATA.dragdrop.zeilen.length;
  document.querySelectorAll(".dropzone").forEach(zone => {
    const soll = zone.dataset.id;
    const ist = zone.querySelector("[data-slot]").dataset.value;
    zone.classList.remove("ok", "bad");
    if (ist === soll) { zone.classList.add("ok"); richtig++; }
    else if (ist) { zone.classList.add("bad"); }
  });
  if (richtig === total) {
    punkte(12);
    store.daten.dragDone = true; store.speichern();
    verleihe("sortierer", "Sortier-Profi!");
    toast("🧩 Alles richtig! +12 Punkte");
  } else {
    toast(`❌ ${richtig} von ${total} richtig. Tipp: Findest du zuerst den Einstandspreis?`);
  }
  if (richtig >= 1) verleihe("first", "Erster Schritt!");
});

/* ================================================================
   6) KALKULATIONS-TRAINING
   ================================================================ */
let calcIndex = 0;

function startCalc() { calcIndex = 0; renderCalc(); }

function renderCalc() {
  const a = APP_DATA.kalkulation[calcIndex];
  $("calc-task").innerHTML = `
    <p class="text-xs uppercase tracking-wide text-brand-600 dark:text-indigo-400 font-semibold mb-2">Aufgabe ${calcIndex + 1} von ${APP_DATA.kalkulation.length}</p>
    <h3 class="font-semibold text-lg mb-2">${a.titel}</h3>
    <p class="mb-4">${a.text}</p>
    <label for="calc-input" class="block font-medium mb-1">${a.frage}</label>
    <input id="calc-input" type="number" step="0.01" inputmode="decimal"
      class="input-field w-full p-3 rounded-xl border-2 border-brand-500/40 bg-transparent text-lg"
      aria-describedby="calc-feedback" autofocus>
    <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Tipp: ${a.tipp}</p>`;
  $("calc-feedback").classList.add("hidden");
  $("calc-input").addEventListener("keydown", e => { if (e.key === "Enter") $("calc-check").click(); });
  $("calc-input").focus();
}

function checkCalc() {
  const a = APP_DATA.kalkulation[calcIndex];
  const wert = parseFloat($("calc-input").value.replace(",", "."));
  const fb = $("calc-feedback");
  fb.classList.remove("hidden");
  const ok = wert !== null && Math.abs(wert - a.loesung) < 0.05;
  if (ok) {
    punkte(10);
    fb.className = "p-4 rounded-xl bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100";
    fb.innerHTML = `<p class="font-bold mb-1">✅ Genau richtig: ${fmt(a.loesung)} (+10 Punkte)</p>
      <p class="text-sm">Rechenweg: ${a.schritte.join(" → ")}</p>`;
    store.daten.calcBest[calcIndex] = true; store.speichern();
    if (Object.keys(store.daten.calcBest).length === APP_DATA.kalkulation.length)
      verleihe("rechenking", "Rechen-König!");
    verleihe("first", "Erster Schritt!");
  } else {
    fb.className = "p-4 rounded-xl bg-red-100 text-red-900 dark:bg-red-900/40 dark:text-red-100";
    fb.innerHTML = `<p class="font-bold mb-1">❌ Noch nicht. Die richtige Antwort ist <strong>${fmt(a.loesung)}</strong>.</p>
      <p class="text-sm">So rechnest du es: ${a.schritte.join(" → ")}</p>`;
  }
  setTimeout(() => {
    calcIndex++;
    if (calcIndex < APP_DATA.kalkulation.length) renderCalc();
    else $("calc-task").innerHTML = `<p class="text-center font-semibold">Alle Aufgaben geschafft! 🎉</p>
      <button class="btn-primary mt-4" onclick="startCalc()">Nochmal üben</button>`;
  }, ok ? 1400 : 5000);
}
$("calc-check").addEventListener("click", () => { if (!$("calc-input").disabled) checkCalc(); });

/* ================================================================
   7) EXPORT (druckoptimierte Ergebnis-Ansicht)
   ================================================================ */
function renderExport() {
  const d = store.daten;
  const badgeListe = APP_DATA.badges.map(b => `
    <tr><td>${b.icon} ${b.name}</td><td>${b.bedingung}</td>
    <td>${d.badges.includes(b.id) ? "✔ erreicht" : "– offen"}</td></tr>`).join("");
  $("export-sheet").innerHTML = `
    <h2 class="text-2xl font-bold mb-1">Lern-Ergebnis: Kalkulations-Meister</h2>
    <p class="text-sm mb-4">Fach: Einzelhandel (AVB) · Stand: ${new Date().toLocaleDateString("de-DE")}</p>
    <table class="w-full text-sm border-collapse mb-4">
      <tr><td class="font-semibold pr-4">Punkte / Score:</td><td>${d.score}</td></tr>
      <tr><td class="font-semibold pr-4">Level:</td><td>${level()} von ${APP_DATA.level.maxLevel}</td></tr>
      <tr><td class="font-semibold pr-4">Quiz gelöst:</td><td>${Object.keys(d.quizBest).length} / ${APP_DATA.quiz.length}</td></tr>
      <tr><td class="font-semibold pr-4">Kalkulationen gelöst:</td><td>${Object.keys(d.calcBest).length} / ${APP_DATA.kalkulation.length}</td></tr>
      <tr><td class="font-semibold pr-4">Handlungsfeld:</td><td colspan="2">${APP_DATA.meta.handlungsfeld}</td></tr>
    </table>
    <h3 class="font-bold mb-2">Badges</h3>
    <table class="w-full text-sm border border-slate-300">
      <thead><tr class="text-left border-b border-slate-300"><th>Badge</th><th>Bedingung</th><th>Status</th></tr></thead>
      <tbody>${badgeListe}</tbody>
    </table>`;
}
$("btn-export").addEventListener("click", () => { renderExport(); switchView("export"); });
$("btn-print").addEventListener("click", () => window.print());

/* ================================================================
   8) START & EVENTS
   ================================================================ */
$("theme-toggle").addEventListener("click", () => {
  store.daten.theme = store.daten.theme === "dark" ? "light" : "dark";
  store.speichern(); store.anwenden();
});
document.querySelectorAll("[data-go]").forEach(btn =>
  btn.addEventListener("click", () => {
    const ziel = btn.dataset.go;
    if (ziel === "quiz") { switchView("quiz"); startQuiz(); }
    else if (ziel === "drag") { switchView("drag"); startDrag(); }
    else if (ziel === "calc") { switchView("calc"); startCalc(); }
    else switchView(ziel);
  }));

renderHeader();
renderBadges();
