/* Página de una unidad: toda la materia de un solo módulo, sin ruido de otras unidades. */

const UNIT_ID = Number(document.body.dataset.unit) || 1;
const unit = unitById(UNIT_ID);
if (!unit) throw new Error(`Unidad inexistente: ${UNIT_ID}`);

const quiz = quizzes[String(UNIT_ID)] || [];
const lab = typeof labs !== "undefined" ? labs[String(UNIT_ID)] || null : null;
const deep = typeof teoria !== "undefined" ? teoria[String(UNIT_ID)] || null : null;
const CODE_KEY = `code:${UNIT_ID}`;
const LAB_KEY = `lab:${UNIT_ID}`;

const VIZS = [
  { key: "recursividad", unit: 6, label: "Recursión paso a paso" },
  { key: "linkedList", unit: 8, label: "Lista enlazada" },
  { key: "pila", unit: 8, label: "Pila" },
  { key: "cola", unit: 8, label: "Cola" },
  { key: "ordenamiento", unit: 9, label: "Ordenamientos paso a paso" },
  { key: "arbolBinario", unit: 12, label: "Árbol binario de búsqueda" },
  { key: "avl", unit: 12, label: "AVL y rotaciones" },
  { key: "arbolGeneral", unit: 12, label: "Árbol general" },
  { key: "heap", unit: 12, label: "Montículo / cola de prioridad" },
  { key: "grafo", unit: 12, label: "Grafos: DFS, BFS y Dijkstra" },
  { key: "adyacencia", unit: 12, label: "Matriz vs lista de adyacencia" }
];
const MY_VIZS = VIZS.filter((viz) => viz.unit === UNIT_ID);
const OTHER_VIZ_UNITS = [...new Set(VIZS.map((viz) => viz.unit))];

const el = {
  kicker: document.querySelector("#unit-kicker"),
  title: document.querySelector("#unit-title"),
  summary: document.querySelector("#unit-summary"),
  state: document.querySelector("#unit-state"),
  count: document.querySelector("#unit-count"),
  tip: document.querySelector("#unit-tip"),
  topics: document.querySelector("#topic-list"),
  objetivos: document.querySelector("#objetivos-list"),
  objetivosLabel: document.querySelector("#objetivos-label"),
  theory: document.querySelector("#theory-text"),
  concepts: document.querySelector("#concept-list"),
  sections: document.querySelector("#theory-sections"),
  sectionsLabel: document.querySelector("#secciones-label"),
  notes: document.querySelector("#notes-list"),
  notesLabel: document.querySelector("#notes-label"),
  extras: document.querySelector("#extra-exercises"),
  caption: document.querySelector("#code-caption"),
  editor: document.querySelector("#code-editor"),
  output: document.querySelector("#code-output"),
  pyodideStatus: document.querySelector("#pyodide-status"),
  exerciseTitle: document.querySelector("#exercise-title"),
  exercisePrompt: document.querySelector("#exercise-prompt"),
  exerciseSolution: document.querySelector("#exercise-solution"),
  labArea: document.querySelector("#lab-area"),
  labEditor: document.querySelector("#lab-editor"),
  labStatus: document.querySelector("#lab-status"),
  labFallback: document.querySelector("#lab-fallback"),
  testResults: document.querySelector("#test-results"),
  resources: document.querySelector("#resource-list"),
  empty: document.querySelector("#empty-resources"),
  search: document.querySelector("#resource-search"),
  vizTabs: document.querySelector("#viz-tabs"),
  vizMount: document.querySelector("#viz-mount"),
  quizMount: document.querySelector("#quiz-mount"),
  progressFigures: document.querySelector("#progress-figures"),
  progressBar: document.querySelector("#progress-bar"),
  progressText: document.querySelector("#progress-text"),
  miniRoute: document.querySelector("#mini-route"),
  footer: document.querySelector("#unit-footer")
};

document.title = `AYED // Unidad ${pad2(UNIT_ID)} - ${unit.title}`;

/* ------------------------------------------------------------------ teoría */

function renderTheory() {
  el.theory.innerHTML = (Array.isArray(unit.theory) ? unit.theory : [unit.theory])
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  el.concepts.innerHTML = unit.concepts.map((concept) => `<li>${escapeHtml(concept)}</li>`).join("");
  el.topics.innerHTML = unit.topics.map((topic) => `<li>${escapeHtml(topic)}</li>`).join("");
  el.tip.textContent = unit.tip;

  const objetivos = (deep && deep.objetivos) || [];
  el.objetivos.innerHTML = objetivos.map((objetivo) => `<li>${escapeHtml(objetivo)}</li>`).join("");
  el.objetivosLabel.hidden = el.objetivos.hidden = !objetivos.length;

  const secciones = (deep && deep.secciones) || [];
  el.sections.innerHTML = secciones.map((section, index) => `
    <details class="theory-section"${index === 0 ? " open" : ""}>
      <summary>${escapeHtml(section.h)}</summary>
      <div class="section-body">${section.html}</div>
      <pre><code>${escapeHtml(section.code)}</code></pre>
    </details>`).join("");
  el.sectionsLabel.hidden = el.sections.hidden = !secciones.length;

  const notas = unit.notes || [];
  el.notes.innerHTML = notas.map((note) => `<li>${escapeHtml(note)}</li>`).join("");
  el.notesLabel.hidden = el.notes.hidden = !notas.length;

  el.extras.innerHTML = (unit.extraExercises || []).map((item) => `
    <details class="extra-exercise">
      <summary>${escapeHtml(item.title)}</summary>
      <p class="exercise-prompt">${escapeHtml(item.prompt)}</p>
      <pre><code>${escapeHtml(item.solution)}</code></pre>
    </details>`).join("");
}

/* --------------------------------------------------------- código + editor */

function renderCode() {
  el.caption.textContent = unit.caption;
  el.editor.value = draftStore.get(CODE_KEY, unit.code);
  resetOutput(el.output, "Salida del intérprete aparecerá acá.");
  pyOutput = el.output;
}

async function runCode() {
  draftStore.set(CODE_KEY, el.editor.value);
  resetOutput(el.output, "");
  pyOutput = el.output;
  const button = document.querySelector("#run-code");
  button.disabled = true;
  try {
    const py = await getPyodide(el.pyodideStatus);
    el.pyodideStatus.textContent = "Ejecutando...";
    await py.runPythonAsync(el.editor.value);
    if (!el.output.textContent) appendOutput("[sin salida]");
    el.pyodideStatus.textContent = "Listo. Podés editar el código y volver a ejecutar.";
  } catch (error) {
    const message = String(error && error.message ? error.message : error);
    appendOutput(message.split("\n").slice(-6).join("\n"), "error-line");
    el.pyodideStatus.textContent = error.message && error.message.includes("Pyodide")
      ? "No se pudo cargar Python. Revisá tu conexión y volvé a intentar."
      : "El código terminó con un error (ver salida).";
  } finally {
    button.disabled = false;
  }
}

function resetCode() {
  draftStore.clear(CODE_KEY);
  el.editor.value = unit.code;
  resetOutput(el.output, "Salida del intérprete aparecerá acá.");
}

async function copyCode() {
  const text = el.editor.value;
  const button = document.querySelector("#copy-code");
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "COPIED";
    setTimeout(() => { button.textContent = "COPY"; }, 1300);
  } catch (error) {
    el.editor.select();
    document.execCommand("copy");
  }
}

/* --------------------------------------------------------------- laboratorio */

function renderLab() {
  el.labArea.hidden = !lab;
  el.labFallback.hidden = !!lab;
  el.exerciseSolution.textContent = lab && lab.solution ? lab.solution : unit.exercise.solution;
  if (!lab) return;
  el.labEditor.value = draftStore.get(LAB_KEY, lab.starter);
  el.labStatus.textContent = `${lab.tests.length} tests con Pyodide (namespace limpio por test).`;
  el.testResults.innerHTML = "";
  el.testResults.hidden = true;
}

function runLabTests() {
  if (!lab) return;
  const button = document.querySelector("#run-tests");
  button.disabled = true;
  draftStore.set(LAB_KEY, el.labEditor.value);
  runTestSuite({ prelude: lab.prelude, code: el.labEditor.value, tests: lab.tests },
    el.testResults, el.labStatus, "Ejecutando tests...")
    .finally(() => { button.disabled = false; });
}

/* ---------------------------------------------------------------- recursos */

function renderResources() {
  el.resources.innerHTML = unit.resources.map(resourceMarkup).join("");
  el.search.value = "";
  filterResources();
}

function filterResources() {
  const query = el.search.value.trim().toLocaleLowerCase("es");
  let matches = 0;
  el.resources.querySelectorAll(".resource").forEach((resource) => {
    const visible = resource.dataset.search.includes(query);
    resource.hidden = !visible;
    if (visible) matches += 1;
  });
  el.empty.hidden = matches !== 0;
}

/* ----------------------------------------------------------- visualizadores */

let activeViz = 0;

function renderViz() {
  if (!MY_VIZS.length) {
    el.vizTabs.innerHTML = "";
    const others = OTHER_VIZ_UNITS.map((id) => `<a href="${unitFile(id)}#seccion-viz">${pad2(id)}</a>`).join(", ");
    el.vizMount.innerHTML = `<p class="muted">Esta unidad no tiene visualizador propio. Los hay en las unidades ${others}.</p>`;
    return;
  }
  el.vizTabs.innerHTML = MY_VIZS.map((viz, index) =>
    `<button class="tp-tab${index === activeViz ? " active" : ""}" data-viz="${index}" type="button">${escapeHtml(viz.label)}</button>`).join("");
  const viz = MY_VIZS[activeViz];
  el.vizMount.innerHTML = "";
  if (typeof EDD === "undefined" || !EDD.viz[viz.key]) {
    el.vizMount.innerHTML = '<p class="muted">Visualizador no disponible.</p>';
    return;
  }
  try {
    EDD.viz[viz.key](el.vizMount, { unit: `u${viz.unit}` });
  } catch (error) {
    el.vizMount.innerHTML = `<p class="muted">No se pudo montar el visualizador: ${escapeHtml(String(error))}</p>`;
  }
}

/* ------------------------------------------------------------------ progreso */

function renderProgress() {
  const totals = progressTotals();
  const state = unitState(UNIT_ID);
  el.progressFigures.innerHTML = `
    <span class="overall-figure"><b>${totals.revisadas}/${totals.total}</b><span>revisadas</span></span>
    <span class="overall-figure"><b>${totals.aprobadas}/${totals.total}</b><span>aprobadas</span></span>`;
  el.progressBar.style.width = `${Math.round((totals.revisadas / totals.total) * 100)}%`;
  el.progressText.textContent = `Esta unidad: ${state.label}`;
  el.miniRoute.innerHTML = units.map((other) => {
    const otherState = unitState(other.id);
    const classes = ["mini-node", `state-${otherState.key}`];
    if (other.id === UNIT_ID) classes.push("current");
    return `<a class="${classes.join(" ")}" href="${unitFile(other.id)}">${pad2(other.id)}</a>`;
  }).join("");

  el.state.textContent = `[ ${state.label} ]`;
  el.state.className = `unit-state state-${state.key}`;
  renderRoute(UNIT_ID);
}

/* ------------------------------------------------------- navegación del pie */

function renderFooter() {
  const prev = units[unitIndex(UNIT_ID) - 1];
  const next = units[unitIndex(UNIT_ID) + 1];
  const side = (target, dir) => {
    if (!target) return `<span class="unit-off"></span>`;
    return `<a class="unit-${dir}" href="${unitFile(target.id)}"><small>${dir === "prev" ? "&larr; ANTERIOR" : "SIGUIENTE &rarr;"}</small>${escapeHtml(target.short)}</a>`;
  };
  el.footer.innerHTML = `${side(prev, "prev")}
    <a class="unit-back" href="index.html"><small>PATH</small>Volver a las 12 unidades</a>
    ${side(next, "next")}`;
}

/* --------------------------------------------------------------------- init */

el.kicker.textContent = `UNIDAD ${pad2(UNIT_ID)} / ${pad2(units.length)}`;
el.title.textContent = unit.title;
el.summary.textContent = unit.summary;
el.count.textContent = `${pad2(unit.resources.length)} RECURSOS`;
el.exerciseTitle.textContent = unit.exercise.title;
el.exercisePrompt.textContent = unit.exercise.prompt;

renderTheory();
renderCode();
renderLab();
renderResources();
renderViz();
renderProgress();
renderFooter();
rememberVisit(UNIT_ID);

createQuiz({
  mount: el.quizMount,
  items: quiz,
  title: () => `RESULTADO UNIDAD ${pad2(UNIT_ID)}`,
  extras: [{ label: "EXAMEN INTEGRADOR", href: "examen.html" }],
  footer: () => `Mejor puntaje de la unidad: ${unitState(UNIT_ID).score ?? "--"}%`,
  onFinish(correct, total) {
    const pct = Math.round((correct / total) * 100);
    saveUnitScore(UNIT_ID, pct);
    renderProgress();
  }
});

document.querySelector("#run-code").addEventListener("click", runCode);
document.querySelector("#reset-code").addEventListener("click", resetCode);
document.querySelector("#copy-code").addEventListener("click", copyCode);
el.editor.addEventListener("input", () => draftStore.set(CODE_KEY, el.editor.value));

document.querySelector("#run-tests").addEventListener("click", runLabTests);
document.querySelector("#lab-solution").addEventListener("click", () => {
  if (!lab) return;
  draftStore.set(LAB_KEY, lab.solution);
  el.labEditor.value = lab.solution;
});
document.querySelector("#lab-reset").addEventListener("click", () => {
  if (!lab) return;
  draftStore.clear(LAB_KEY);
  el.labEditor.value = lab.starter;
  el.testResults.innerHTML = "";
  el.testResults.hidden = true;
  el.labStatus.textContent = `${lab.tests.length} tests con Pyodide (namespace limpio por test).`;
});
el.labEditor.addEventListener("input", () => draftStore.set(LAB_KEY, el.labEditor.value));

el.search.addEventListener("input", filterResources);

el.vizTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-viz]");
  if (!button) return;
  activeViz = Number(button.dataset.viz);
  renderViz();
});

document.querySelector("#mark-reviewed").addEventListener("click", () => {
  markReviewed(UNIT_ID);
  renderProgress();
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  resetAllProgress();
  renderProgress();
  renderCode();
  renderLab();
});

window.addEventListener("keydown", (event) => {
  if (document.activeElement.matches("input, textarea")) return;
  if (event.key === "/") { event.preventDefault(); el.search.focus(); return; }
  if (event.key.toLowerCase() === "q") { scrollToSection("#seccion-quiz"); return; }
  if (event.key.toLowerCase() === "t") { scrollToSection("#seccion-practica"); return; }
  if (event.key.toLowerCase() === "e") { window.location.href = "examen.html"; return; }
  if (event.key.toLowerCase() === "h") { window.location.href = "index.html"; return; }
  const digit = { "0": 10, "-": 11, "=": 12, "+": 12 }[event.key] || (/^[1-9]$/.test(event.key) ? Number(event.key) : null);
  if (digit && digit !== UNIT_ID) window.location.href = unitFile(digit);
});

initTheme();
initClock();