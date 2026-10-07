const PYODIDE_INDEX = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
const PASS_MARK = 70;

let activeUnit = 1;
let activeTp = 0;
let pyodidePromise = null;
let pyStdout = null;
let pyStderr = null;
const quizStates = {};
const codeDrafts = {};
const labDrafts = {};
const tpDrafts = {};

const store = {
  load() {
    try {
      const raw = localStorage.getItem("ayed-progress-v2");
      if (raw) return JSON.parse(raw);
    } catch (error) { console.warn("Progreso ilegible", error); }
    return { units: {}, exam: { best: null, attempts: 0 } };
  },
  save() {
    localStorage.setItem("ayed-progress-v2", JSON.stringify(progress));
  }
};

let progress = store.load();
if (!progress.units) progress.units = {};
if (!progress.exam) progress.exam = { best: null, attempts: 0 };

const elements = {
  nav: document.querySelector("#module-nav"),
  kicker: document.querySelector("#module-kicker"),
  title: document.querySelector("#module-title"),
  summary: document.querySelector("#module-summary"),
  status: document.querySelector("#module-status"),
  count: document.querySelector("#module-count"),
  topics: document.querySelector("#topic-list"),
  tip: document.querySelector("#module-tip"),
  caption: document.querySelector("#example-caption"),
  editor: document.querySelector("#code-editor"),
  output: document.querySelector("#code-output"),
  pyodideStatus: document.querySelector("#pyodide-status"),
  theory: document.querySelector("#theory-text"),
  concepts: document.querySelector("#concept-list"),
  notes: document.querySelector("#notes-list"),
  notesLabel: document.querySelector("#notes-label"),
  extras: document.querySelector("#extra-exercises"),
  objetivos: document.querySelector("#objetivos-list"),
  objetivosLabel: document.querySelector("#objetivos-label"),
  sections: document.querySelector("#theory-sections"),
  sectionsLabel: document.querySelector("#secciones-label"),
  exerciseTitle: document.querySelector("#exercise-title"),
  exercisePrompt: document.querySelector("#exercise-prompt"),
  exerciseSolution: document.querySelector("#exercise-solution"),
  labArea: document.querySelector("#lab-area"),
  labEditor: document.querySelector("#lab-editor"),
  labStatus: document.querySelector("#lab-status"),
  testResults: document.querySelector("#test-results"),
  tpTabs: document.querySelector("#tp-tabs"),
  tpBody: document.querySelector("#tp-body"),
  vizTabs: document.querySelector("#viz-tabs"),
  vizMount: document.querySelector("#viz-mount"),
  resources: document.querySelector("#resource-list"),
  empty: document.querySelector("#empty-resources"),
  search: document.querySelector("#resource-search"),
  progress: document.querySelector("#progress-bars"),
  progressText: document.querySelector("#progress-text"),
  question: document.querySelector("#quiz-question"),
  quizProgress: document.querySelector("#quiz-progress"),
  options: document.querySelector("#quiz-options"),
  feedback: document.querySelector("#quiz-feedback"),
  quizScore: document.querySelector("#quiz-score"),
  nextQuestion: document.querySelector("#next-question"),
  examBody: document.querySelector("#exam-body"),
  examHistory: document.querySelector("#exam-history"),
  terminal: document.querySelector("#terminal-output")
};

function currentUnit() { return units.find((unit) => unit.id === activeUnit); }

function unitState(id) {
  const saved = progress.units[id];
  if (!saved) return { key: "pendiente", label: "PENDIENTE", score: null };
  if (saved.passed) return { key: "aprobada", label: `APROBADA (${saved.score}%)`, score: saved.score };
  if (saved.reviewed) return { key: "revisada", label: "REVISADA", score: saved.score };
  if (saved.score != null) return { key: "pendiente", label: `PENDIENTE (${saved.score}%)`, score: saved.score };
  return { key: "pendiente", label: "PENDIENTE", score: null };
}

function saveUnitScore(id, score) {
  const saved = progress.units[id] || {};
  const best = saved.score == null ? score : Math.max(saved.score, score);
  progress.units[id] = { ...saved, score: best, passed: (saved.passed || best >= PASS_MARK) };
  store.save();
}

function markReviewed(id) {
  const saved = progress.units[id] || {};
  progress.units[id] = { ...saved, reviewed: !saved.reviewed };
  store.save();
}

function escapeHtml(text) {
  return String(text).replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
}

function resourceMarkup(resource) {
  const [type, name, category, path] = resource;
  const href = encodeURI(path);
  const search = `${type} ${name} ${category}`.toLowerCase();
  return `<article class="resource" data-search="${search}"><span class="resource-type">${type}</span><a href="${href}" target="_blank" rel="noopener">${name}</a><span class="resource-category">${category}</span></article>`;
}

function renderNavigation() {
  elements.nav.innerHTML = units.map((unit) => {
    const state = unitState(unit.id);
    return `<button class="module-button ${unit.id === activeUnit ? "active" : ""}" type="button" data-id="${unit.id}">
      <span class="number">${String(unit.id).padStart(2, "0")}</span>
      <span>${unit.short}</span>
      <small class="state-${state.key}">${state.label}</small>
    </button>`;
  }).join("");
}

function renderModule() {
  const unit = currentUnit();
  const state = unitState(unit.id);
  elements.kicker.textContent = `UNIDAD ${String(unit.id).padStart(2, "0")} / ${String(units.length).padStart(2, "0")}`;
  elements.title.textContent = unit.title;
  elements.summary.textContent = unit.summary;
  elements.count.textContent = `${String(unit.resources.length).padStart(2, "0")} RECURSOS`;
  elements.status.textContent = `[ ${state.label} ]`;
  elements.status.className = `unit-state state-${state.key}`;
  elements.topics.innerHTML = unit.topics.map((topic) => `<li>${topic}</li>`).join("");
  elements.tip.textContent = unit.tip;
  elements.caption.textContent = unit.caption;
  elements.editor.value = codeDrafts[unit.id] != null ? codeDrafts[unit.id] : unit.code;
  elements.output.textContent = "Salida del interprete aparecera aqui.";
  elements.output.className = "code-output";
  elements.theory.innerHTML = (Array.isArray(unit.theory) ? unit.theory : [unit.theory])
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  elements.concepts.innerHTML = unit.concepts.map((concept) => `<li>${concept}</li>`).join("");
  const deep = (typeof teoria !== "undefined" && teoria[String(unit.id)]) || null;
  const objetivos = (deep && deep.objetivos) || [];
  elements.objetivos.innerHTML = objetivos.map((objetivo) => `<li>${escapeHtml(objetivo)}</li>`).join("");
  elements.objetivosLabel.hidden = !objetivos.length;
  elements.objetivos.hidden = !objetivos.length;
  const secciones = (deep && deep.secciones) || [];
  elements.sections.innerHTML = secciones.map((section, index) => `
    <details class="theory-section"${index === 0 ? " open" : ""}>
      <summary>${escapeHtml(section.h)}</summary>
      <div class="section-body">${section.html}</div>
      <pre><code>${escapeHtml(section.code)}</code></pre>
    </details>`).join("");
  elements.sectionsLabel.hidden = !secciones.length;
  elements.sections.hidden = !secciones.length;
  const notas = unit.notes || [];
  elements.notes.innerHTML = notas.map((note) => `<li>${escapeHtml(note)}</li>`).join("");
  elements.notesLabel.hidden = !notas.length;
  elements.notes.hidden = !notas.length;
  elements.extras.innerHTML = (unit.extraExercises || []).map((item) => `
    <details class="extra-exercise">
      <summary>${escapeHtml(item.title)}</summary>
      <p class="exercise-prompt">${escapeHtml(item.prompt)}</p>
      <pre><code>${escapeHtml(item.solution)}</code></pre>
    </details>`).join("");
  elements.exerciseTitle.textContent = unit.exercise.title;
  elements.exercisePrompt.textContent = unit.exercise.prompt;
  renderLab();
  elements.resources.innerHTML = unit.resources.map(resourceMarkup).join("");
  elements.search.value = "";
  filterResources();
  renderNavigation();
  renderProgress();
  renderQuiz();
}

function goToUnit(id) {
  if (id < 1 || id > units.length) return;
  activeUnit = id;
  renderModule();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function labStatusText(lab) {
  return `${lab.tests.length} tests con Pyodide (namespace limpio por test).`;
}

function renderLab() {
  const lab = (typeof labs !== "undefined" && labs[String(activeUnit)]) || null;
  elements.labArea.hidden = !lab;
  elements.testResults.hidden = true;
  elements.testResults.innerHTML = "";
  elements.exerciseSolution.textContent = lab && lab.solution ? lab.solution : currentUnit().exercise.solution;
  if (!lab) return;
  elements.labEditor.value = labDrafts[activeUnit] != null ? labDrafts[activeUnit] : lab.starter;
  elements.labStatus.textContent = labStatusText(lab);
}

function shortTestError(error) {
  const raw = String((error && error.message) || error);
  const lines = raw.split("\n").filter((line) => line.trim() && !line.includes("File \"<exec>\""));
  return (lines[lines.length - 1] || "error").slice(0, 140);
}

async function runTestSuite(suite, resultsEl, statusEl, runningText) {
  resultsEl.hidden = false;
  resultsEl.innerHTML = `<li class="test-running">${escapeHtml(runningText)}</li>`;
  statusEl.textContent = runningText;
  try {
    const py = await getPyodide();
    py.setStdout({ batched: () => {} });
    py.setStderr({ batched: () => {} });
    try {
      const results = [];
      for (const test of suite.tests) {
        const program = [suite.prelude, suite.code, test.code].filter(Boolean).join("\n\n");
        try {
          const namespace = py.toPy({});
          await py.runPythonAsync(program, { globals: namespace });
          results.push({ name: test.name, ok: true });
        } catch (error) {
          results.push({ name: test.name, ok: false, detail: shortTestError(error) });
        }
      }
      resultsEl.innerHTML = results.map((result) => `
        <li class="${result.ok ? "test-pass" : "test-fail"}">${result.ok ? "PASS" : "FAIL"} &middot; ${escapeHtml(result.name)}${result.detail ? `<span class="test-detail">${escapeHtml(result.detail)}</span>` : ""}</li>`).join("");
      const passed = results.filter((result) => result.ok).length;
      statusEl.textContent = passed === results.length
        ? `${passed}/${results.length} tests OK`
        : `${passed}/${results.length} tests OK - revisa los FALLIDOS`;
      return passed === results.length;
    } finally {
      if (pyStdout) py.setStdout({ batched: pyStdout });
      if (pyStderr) py.setStderr({ batched: pyStderr });
    }
  } catch (error) {
    resultsEl.hidden = true;
    resultsEl.innerHTML = "";
    statusEl.textContent = error.message && error.message.includes("Pyodide")
      ? "No se pudo cargar Python. Revisa tu conexion y vuelve a intentar."
      : `Error al correr los tests: ${shortTestError(error)}`;
    return false;
  }
}

function renderTps() {
  if (typeof tps === "undefined" || !tps.length) return;
  elements.tpTabs.innerHTML = tps.map((tp, index) =>
    `<button class="tp-tab${index === activeTp ? " active" : ""}" data-tp="${index}" type="button">TP ${escapeHtml(String(tp.num))}</button>`).join("");
  const tp = tps[activeTp];
  const fileName = tp.archivo.split("/").pop();
  elements.tpBody.innerHTML = `
    <p class="label">TRABAJO PRACTICO ${escapeHtml(String(tp.num))}</p>
    <h2>${escapeHtml(tp.titulo)}</h2>
    <p class="tp-file"><a href="${encodeURI(tp.archivo)}" target="_blank" rel="noopener">ENUNCIADO: ${escapeHtml(fileName)} &#8599;</a></p>
    <p class="exercise-prompt">${escapeHtml(tp.resumen)}</p>
    <ul class="tp-temas">${tp.temas.map((tema) => `<li>${escapeHtml(tema)}</li>`).join("")}</ul>
    <p class="label tp-label">CONSIGNAS</p>
    <ol class="tp-consignas">${tp.consignas.map((consigna) => `<li>${escapeHtml(consigna)}</li>`).join("")}</ol>
    <p class="label tp-label">PLANTILLA (EDITA Y CORRE LOS TESTS)</p>
    <textarea id="tp-editor" class="code-editor" spellcheck="false" rows="12" aria-label="Editor del TP"></textarea>
    <div class="editor-toolbar">
      <button id="tp-run" class="action" type="button">RUN TESTS &gt;</button>
      <button id="tp-solution" class="quiet-action" type="button">VER SOLUCION</button>
      <button id="tp-reset" class="quiet-action" type="button">RESET</button>
      <span id="tp-status" class="muted">${tp.tests.length} tests con Pyodide (namespace limpio por test).</span>
    </div>
    <ul id="tp-results" class="test-results" hidden aria-live="polite"></ul>
    <details>
      <summary>VER UNA POSIBLE SOLUCION</summary>
      <pre><code>${escapeHtml(tp.solution)}</code></pre>
    </details>`;
  const editor = document.querySelector("#tp-editor");
  editor.value = tpDrafts[tp.id] != null ? tpDrafts[tp.id] : tp.plantilla;
  editor.addEventListener("input", () => { tpDrafts[tp.id] = editor.value; });
  document.querySelector("#tp-run").addEventListener("click", async () => {
    const button = document.querySelector("#tp-run");
    button.disabled = true;
    try {
      await runTestSuite({ code: editor.value, tests: tp.tests },
        document.querySelector("#tp-results"), document.querySelector("#tp-status"), "Ejecutando tests...");
    } finally {
      button.disabled = false;
    }
  });
  document.querySelector("#tp-solution").addEventListener("click", () => {
    tpDrafts[tp.id] = tp.solution;
    editor.value = tp.solution;
  });
  document.querySelector("#tp-reset").addEventListener("click", () => {
    delete tpDrafts[tp.id];
    editor.value = tp.plantilla;
    const results = document.querySelector("#tp-results");
    results.innerHTML = "";
    results.hidden = true;
    document.querySelector("#tp-status").textContent = `${tp.tests.length} tests con Pyodide (namespace limpio por test).`;
  });
}

function filterResources() {
  const query = elements.search.value.trim().toLocaleLowerCase("es");
  let matches = 0;
  elements.resources.querySelectorAll(".resource").forEach((resource) => {
    const visible = resource.dataset.search.includes(query);
    resource.hidden = !visible;
    if (visible) matches += 1;
  });
  elements.empty.hidden = matches !== 0;
}

function renderProgress() {
  elements.progress.innerHTML = units.map((unit) => {
    const state = unitState(unit.id);
    const done = state.key !== "pendiente" || state.score != null;
    return `<div class="progress-row ${done ? "done" : ""}">
      <button type="button" data-goto="${unit.id}" title="Ir a la unidad ${unit.id}">U${String(unit.id).padStart(2, "0")}</button>
      <div class="bar"><span style="width:${state.score != null ? state.score : done ? 100 : 0}%"></span></div>
      <span class="state-${state.key}">${state.score != null ? state.score : done ? "OK" : "--"}</span>
    </div>`;
  }).join("");
  const reviewed = units.filter((unit) => {
    const state = unitState(unit.id);
    return state.key === "revisada" || state.key === "aprobada";
  }).length;
  const approved = units.filter((unit) => unitState(unit.id).key === "aprobada").length;
  elements.progressText.textContent = `${reviewed} / ${units.length} unidades revisadas · ${approved} aprobadas`;
}

function quizFor(id) { return quizzes[String(id)] || []; }

function qtype(item) { return item.type || "mcq"; }

function normText(value) { return String(value == null ? "" : value).trim().toLowerCase(); }

function shuffle(list) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

function sameIntSet(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  const sa = a.slice().sort((x, y) => x - y).join(",");
  const sb = b.slice().sort((x, y) => x - y).join(",");
  return sa === sb;
}

function checkAnswer(item, state) {
  const type = qtype(item);
  if (type === "fill") {
    const text = normText(state.text);
    return text !== "" && (item.a || []).some((option) => normText(option) === text);
  }
  if (type === "multi") return sameIntSet(state.selected, item.correct);
  if (type === "order") {
    return state.seq.length === item.a.length && state.seq.every((value, i) => value === item.a[i]);
  }
  return state.sel === item.correct;
}

function resetQuestionState(state) {
  state.answered = false;
  state.sel = null;
  state.selected = [];
  state.seq = [];
  state.text = "";
  state.pool = null;
  state.feedback = "";
  state.feedbackClass = "";
}

function feedbackFor(item, state, ok) {
  let extra = "";
  if (!ok) {
    const type = qtype(item);
    if (type === "fill") extra = ` Respuesta: ${item.a[0]}.`;
    else if (type === "order") extra = ` Orden correcto: ${item.a.join(" -> ")}.`;
    else if (type === "multi") extra = ` Correctas: ${item.correct.map((i) => String.fromCharCode(65 + i)).join(", ")}.`;
  }
  return `${ok ? "CORRECTO" : "REVISAR"} > ${item.note}${extra}`;
}

function questionBody(item, state) {
  const type = qtype(item);
  const answered = state.answered;
  const codeHtml = item.code ? `<pre class="q-code">${escapeHtml(item.code)}</pre>` : "";

  if (type === "fill") {
    return `${codeHtml}
      <div class="fill-row">
        <input class="fill-input" type="text" data-qact="text" placeholder="escribi tu respuesta..." value="${escapeHtml(state.text || "")}" ${answered ? "disabled" : ""} autocomplete="off">
        <button class="action" data-qact="submit" type="button" ${answered ? "disabled" : ""}>RESPONDER</button>
      </div>`;
  }

  if (type === "order") {
    if (!state.pool) state.pool = shuffle(item.a.map((_, i) => i));
    const pool = state.pool.filter((ai) => !state.seq.includes(item.a[ai])).map((ai) =>
      `<button class="quiz-option" data-qact="order-add" data-i="${ai}" type="button" ${answered ? "disabled" : ""}>${escapeHtml(item.a[ai])}</button>`
    ).join("");
    const seq = state.seq.map((value, i) => {
      const cl = answered ? (item.a[i] === value ? " correct" : " incorrect") : "";
      return `<button class="seq-slot${cl}" data-qact="order-del" data-i="${i}" type="button" ${answered ? "disabled" : ""}>${i + 1}. ${escapeHtml(value)}</button>`;
    }).join("");
    return `${codeHtml}
      <div class="order-pool">${pool}</div>
      <div class="order-seq">${seq || '<span class="muted">Hace clic en los items para armar el orden...</span>'}</div>
      <div class="quiz-controls">
        <button class="action" data-qact="submit" type="button" ${answered || !state.seq.length ? "disabled" : ""}>RESPONDER</button>
        <button class="quiet-action" data-qact="clear" type="button" ${answered ? "disabled" : ""}>LIMPIAR</button>
      </div>`;
  }

  const multi = type === "multi";
  const options = item.a.map((answer, index) => {
    let extra = "";
    if (multi) {
      if (state.selected.includes(index)) extra = " selected";
      if (answered) extra = item.correct.includes(index) ? " correct" : (state.selected.includes(index) ? " incorrect" : "");
    } else if (answered) {
      if (index === item.correct) extra = " correct";
      else if (index === state.sel) extra = " incorrect";
    }
    const action = multi ? "toggle" : "pick";
    return `<button class="quiz-option${extra}" data-qact="${action}" data-i="${index}" type="button" ${answered ? "disabled" : ""}>${String.fromCharCode(65 + index)}. ${escapeHtml(answer)}</button>`;
  }).join("");
  const submit = multi && !answered
    ? `<div class="quiz-controls"><button class="action" data-qact="submit" type="button" ${state.selected.length ? "" : "disabled"}>RESPONDER</button></div>`
    : "";
  return `${codeHtml}<div class="quiz-options">${options}</div>${submit}`;
}

function applyQuestionAction(item, state, element) {
  const action = element.dataset.qact;
  if (action === "text") return;
  if (state.answered) return;
  if (action === "pick") {
    state.sel = Number(element.dataset.i);
    finalizeQuestion(item, state);
  } else if (action === "toggle") {
    const index = Number(element.dataset.i);
    const at = state.selected.indexOf(index);
    if (at >= 0) state.selected.splice(at, 1);
    else state.selected.push(index);
  } else if (action === "submit") {
    finalizeQuestion(item, state);
  } else if (action === "order-add") {
    state.seq.push(item.a[Number(element.dataset.i)]);
  } else if (action === "order-del") {
    state.seq.splice(Number(element.dataset.i), 1);
  } else if (action === "clear") {
    state.seq = [];
  }
}

function finalizeQuestion(item, state) {
  if (state.answered) return;
  const type = qtype(item);
  if (type === "multi" && !state.selected.length) return;
  if (type === "fill" && !normText(state.text)) return;
  if (type === "order" && !state.seq.length) return;
  state.answered = true;
  const ok = checkAnswer(item, state);
  if (ok) state.correct += 1;
  state.feedback = feedbackFor(item, state, ok);
  state.feedbackClass = ok ? "success" : "error";
}

function quizStateFor(id) {
  if (!quizStates[id]) {
    quizStates[id] = { index: 0, correct: 0, answered: false, finished: false, sel: null, selected: [], seq: [], text: "", pool: null, feedback: "", feedbackClass: "" };
  }
  return quizStates[id];
}

function renderQuiz() {
  const quiz = quizFor(activeUnit);
  const state = quizStateFor(activeUnit);
  if (state.finished) {
    const total = quiz.length;
    const pct = Math.round((state.correct / total) * 100);
    elements.quizProgress.textContent = `RESULTADO UNIDAD ${String(activeUnit).padStart(2, "0")}`;
    elements.question.textContent = `${state.correct} / ${total} correctas (${pct}%)`;
    elements.options.innerHTML = "";
    elements.feedback.textContent = pct >= PASS_MARK
      ? `APROBADA > superaste el 70%. La unidad queda marcada como aprobada.`
      : `REVISAR > necesitas ${Math.ceil((PASS_MARK / 100) * total)} correctas para aprobar (70%).`;
    elements.feedback.className = `feedback ${pct >= PASS_MARK ? "success" : "error"}`;
    elements.nextQuestion.hidden = true;
    elements.quizScore.textContent = `Mejor puntaje de la unidad: ${unitState(activeUnit).score ?? "--"}%`;
    return;
  }
  const item = quiz[state.index];
  const typeLabel = { tf: "V/F", multi: "MULTIPLE", fill: "COMPLETAR", order: "ORDENAR" }[qtype(item)] || "OPCION";
  elements.quizProgress.textContent = `PREGUNTA ${state.index + 1} / ${quiz.length} · ${typeLabel}`;
  elements.question.textContent = item.q;
  elements.feedback.textContent = state.feedback || "";
  elements.feedback.className = `feedback ${state.feedbackClass || ""}`;
  elements.nextQuestion.hidden = false;
  elements.quizScore.textContent = `Correctas hasta ahora: ${state.correct}`;
  elements.options.innerHTML = questionBody(item, state);
}

function nextQuestion() {
  const state = quizStateFor(activeUnit);
  const quiz = quizFor(activeUnit);
  if (state.finished) return;
  if (state.index + 1 >= quiz.length) {
    state.finished = true;
    const pct = Math.round((state.correct / quiz.length) * 100);
    saveUnitScore(activeUnit, pct);
  } else {
    state.index += 1;
    resetQuestionState(state);
  }
  renderQuiz();
  renderNavigation();
  renderProgress();
  const stateNow = unitState(activeUnit);
  elements.status.textContent = `[ ${stateNow.label} ]`;
  elements.status.className = `unit-state state-${stateNow.key}`;
}

function resetQuiz() {
  quizStates[activeUnit] = { index: 0, correct: 0, answered: false, finished: false, sel: null, selected: [], seq: [], text: "", pool: null, feedback: "", feedbackClass: "" };
  renderQuiz();
}

function markCurrentReviewed() {
  markReviewed(activeUnit);
  renderModule();
}

function resetAllProgress() {
  if (!confirm("Se borrara el progreso y los puntajes guardados en este navegador. Continuar?")) return;
  progress = { units: {}, exam: { best: null, attempts: 0 } };
  store.save();
  Object.keys(quizStates).forEach((key) => delete quizStates[key]);
  renderModule();
}

function appendOutput(text, kind) {
  elements.output.classList.remove("empty-output");
  const line = document.createElement("span");
  line.textContent = text;
  if (kind) line.className = kind;
  elements.output.append(line);
}

async function getPyodide() {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      if (!window.loadPyodide) {
        elements.pyodideStatus.textContent = "Descargando Python (Pyodide)...";
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = `${PYODIDE_INDEX}pyodide.js`;
          script.onload = resolve;
          script.onerror = () => reject(new Error("No se pudo descargar Pyodide (sin conexion?)"));
          document.head.appendChild(script);
        });
      }
      const py = await window.loadPyodide({ indexURL: PYODIDE_INDEX });
      pyStdout = (text) => appendOutput(`${text}\n`);
      pyStderr = (text) => appendOutput(`${text}\n`, "error-line");
      py.setStdout({ batched: pyStdout });
      py.setStderr({ batched: pyStderr });
      return py;
    })().catch((error) => {
      pyodidePromise = null;
      throw error;
    });
  }
  return pyodidePromise;
}

async function runCode() {
  const code = elements.editor.value;
  codeDrafts[activeUnit] = code;
  elements.output.textContent = "";
  elements.output.className = "code-output";
  const runButton = document.querySelector("#run-code");
  runButton.disabled = true;
  try {
    const py = await getPyodide();
    elements.pyodideStatus.textContent = "Ejecutando...";
    await py.runPythonAsync(code);
    if (!elements.output.textContent) appendOutput("[sin salida]");
    elements.pyodideStatus.textContent = "Listo. Podes editar el codigo y volver a ejecutar.";
  } catch (error) {
    const message = String(error && error.message ? error.message : error);
    appendOutput(message.split("\n").slice(-6).join("\n"), "error-line");
    elements.pyodideStatus.textContent = error.message && error.message.includes("Pyodide")
      ? "No se pudo cargar Python. Revisa tu conexion y vuelve a intentar."
      : "El codigo termino con un error (ver salida).";
  } finally {
    runButton.disabled = false;
  }
}

function resetCode() {
  delete codeDrafts[activeUnit];
  elements.editor.value = currentUnit().code;
  elements.output.textContent = "Salida del interprete aparecera aqui.";
  elements.output.className = "code-output";
}

async function copyCode() {
  const text = elements.editor.value;
  try {
    await navigator.clipboard.writeText(text);
    const button = document.querySelector("#copy-code");
    button.textContent = "COPIED";
    setTimeout(() => { button.textContent = "COPY"; }, 1300);
  } catch (error) {
    elements.editor.select();
    document.execCommand("copy");
  }
}

const examState = { active: false, index: 0, correct: 0, answered: false, sel: null, selected: [], seq: [], text: "", pool: null, feedback: "", feedbackClass: "" };

const VIZS = [
  { key: "recursividad", unit: 6, label: "Recursion paso a paso" },
  { key: "linkedList", unit: 8, label: "Lista enlazada" },
  { key: "pila", unit: 8, label: "Pila" },
  { key: "cola", unit: 8, label: "Cola" },
  { key: "ordenamiento", unit: 9, label: "Ordenamientos paso a paso" },
  { key: "arbolBinario", unit: 12, label: "Arbol binario de busqueda" },
  { key: "avl", unit: 12, label: "AVL y rotaciones" },
  { key: "arbolGeneral", unit: 12, label: "Arbol general" },
  { key: "heap", unit: 12, label: "Monticulo / cola de prioridad" },
  { key: "grafo", unit: 12, label: "Grafos: DFS, BFS y Dijkstra" },
  { key: "adyacencia", unit: 12, label: "Matriz vs lista de adyacencia" }
];
let activeViz = 0;

function renderViz() {
  elements.vizTabs.innerHTML = VIZS.map((viz, index) =>
    `<button class="tp-tab${index === activeViz ? " active" : ""}" data-viz="${index}" type="button">U${viz.unit} &middot; ${escapeHtml(viz.label)}</button>`).join("");
  const viz = VIZS[activeViz];
  elements.vizMount.innerHTML = "";
  if (typeof EDD === "undefined" || !EDD.viz[viz.key]) {
    elements.vizMount.innerHTML = '<p class="muted">Visualizador no disponible.</p>';
    return;
  }
  try {
    EDD.viz[viz.key](elements.vizMount, { unit: `u${viz.unit}` });
  } catch (error) {
    elements.vizMount.innerHTML = `<p class="muted">No se pudo montar el visualizador: ${escapeHtml(String(error))}</p>`;
  }
}

function examMarkup(question, state, index, total, correct) {
  return `
    <p class="label">PREGUNTA ${index + 1} / ${total} &middot; CORRECTAS: ${correct}</p>
    <h2>${escapeHtml(question.q)}</h2>
    ${questionBody(question, state)}
    <p id="exam-feedback" class="feedback ${state.feedbackClass || ""}">${escapeHtml(state.feedback || "")}</p>
    <div class="quiz-controls">
      <button id="exam-next" class="action" type="button" ${state.answered ? "" : "disabled"}>NEXT &gt;</button>
      <button id="exam-abort" class="quiet-action" type="button">SALIR</button>
    </div>`;
}

function renderExam() {
  if (!examState.active) {
    const best = progress.exam.best;
    const attempts = progress.exam.attempts;
    elements.examBody.innerHTML = `
      <button id="start-exam" class="action" type="button">INICIAR EXAMEN</button>
      <p id="exam-history" class="score-line">${best != null ? `Mejor intento: ${best}% en ${attempts} ${attempts === 1 ? "intento" : "intentos"} (aprobado: ${best >= PASS_MARK ? "si" : "no"})` : "Sin intentos todavia."}</p>`;
    document.querySelector("#start-exam").addEventListener("click", startExam);
    return;
  }
  if (examState.index >= finalExam.length) {
    const pct = Math.round((examState.correct / finalExam.length) * 100);
    progress.exam.attempts += 1;
    progress.exam.best = progress.exam.best == null ? pct : Math.max(progress.exam.best, pct);
    store.save();
    examState.active = false;
    elements.examBody.innerHTML = `
      <p class="label">RESULTADO FINAL</p>
      <h2>${examState.correct} / ${finalExam.length} correctas (${pct}%)</h2>
      <p class="feedback ${pct >= PASS_MARK ? "success" : "error"}">${pct >= PASS_MARK ? "APROBASTE el examen integrador." : `Para aprobar hacen falta ${Math.ceil((PASS_MARK / 100) * finalExam.length)} correctas.`}</p>
      <div class="quiz-controls">
        <button id="start-exam" class="action" type="button">REINICIAR EXAMEN</button>
        <button id="exam-abort" class="quiet-action" type="button">CERRAR</button>
      </div>`;
    document.querySelector("#start-exam").addEventListener("click", startExam);
    document.querySelector("#exam-abort").addEventListener("click", () => { elements.examBody.innerHTML = ""; renderExam(); });
    return;
  }
  const question = finalExam[examState.index];
  elements.examBody.innerHTML = examMarkup(question, examState, examState.index, finalExam.length, examState.correct);
  document.querySelector("#exam-next").addEventListener("click", nextExam);
  document.querySelector("#exam-abort").addEventListener("click", () => { examState.active = false; renderExam(); });
}

function startExam() {
  examState.active = true;
  examState.index = 0;
  examState.correct = 0;
  resetQuestionState(examState);
  renderExam();
  elements.examBody.scrollIntoView({ behavior: "smooth", block: "center" });
}

function nextExam() {
  if (!examState.answered) return;
  examState.index += 1;
  resetQuestionState(examState);
  renderExam();
}

function log(message, type) {
  const line = document.createElement("p");
  if (type) line.className = type;
  line.textContent = message;
  elements.terminal.append(line);
  elements.terminal.scrollTop = elements.terminal.scrollHeight;
}

function runCommand(raw) {
  const [command, argument] = raw.trim().toLowerCase().split(/\s+/, 2);
  if (!command) return;
  log(`student@unab:~/ayed$ ${raw}`, "prompt");
  if (command === "help") {
    log("Comandos: help, unidades, unidad [1-12], temas, recursos, quiz, examen, progreso, clear");
  } else if (command === "unidades") {
    log(units.map((unit) => `${String(unit.id).padStart(2, "0")}: ${unit.title} [${unitState(unit.id).label}]`).join("\n"));
  } else if (command === "unidad" && argument && /^\d{1,2}$/.test(argument) && Number(argument) >= 1 && Number(argument) <= units.length) {
    goToUnit(Number(argument));
    log(`Unidad ${String(Number(argument)).padStart(2, "0")} cargada.`, "success");
  } else if (command === "temas") {
    log(currentUnit().topics.map((topic) => `> ${topic}`).join("\n"));
  } else if (command === "recursos") {
    log(currentUnit().resources.map((resource) => `[${resource[0]}] ${resource[1]}`).join("\n"));
  } else if (command === "quiz") {
    document.querySelector("#seccion-quiz").scrollIntoView({ behavior: "smooth", block: "center" });
    log("Quiz de la unidad enfocado.", "success");
  } else if (command === "examen") {
    if (!examState.active) startExam();
    else elements.examBody.scrollIntoView({ behavior: "smooth", block: "center" });
    log("Examen integrador.", "success");
  } else if (command === "progreso") {
    const reviewed = units.filter((unit) => ["revisada", "aprobada"].includes(unitState(unit.id).key)).length;
    log(`${reviewed}/${units.length} unidades revisadas. Examen mejor puntaje: ${progress.exam.best ?? "--"}%`, "success");
  } else if (command === "clear") {
    elements.terminal.innerHTML = "";
  } else {
    log(`Comando no encontrado: ${command}. Escribi help.`, "error");
  }
}

document.querySelector("#assessment-links").innerHTML = assessments.map((assessment) =>
  `<a class="assessment-link" href="${encodeURI(assessment[3])}" target="_blank" rel="noopener"><strong>[${assessment[0]}]</strong> ${assessment[1]}<small>${assessment[2]}</small></a>`
).join("");

elements.nav.addEventListener("click", (event) => {
  const button = event.target.closest(".module-button");
  if (!button) return;
  goToUnit(Number(button.dataset.id));
});

elements.progress.addEventListener("click", (event) => {
  const button = event.target.closest("[data-goto]");
  if (button) goToUnit(Number(button.dataset.goto));
});

elements.search.addEventListener("input", filterResources);
elements.options.addEventListener("click", (event) => {
  const target = event.target.closest("[data-qact]");
  if (!target) return;
  const state = quizStateFor(activeUnit);
  const item = quizFor(activeUnit)[state.index];
  if (!item) return;
  applyQuestionAction(item, state, target);
  renderQuiz();
});
elements.options.addEventListener("input", (event) => {
  const target = event.target.closest("[data-qact='text']");
  if (!target) return;
  const state = quizStateFor(activeUnit);
  state.text = target.value;
});
elements.examBody.addEventListener("click", (event) => {
  const target = event.target.closest("[data-qact]");
  if (!target) return;
  const item = finalExam[examState.index];
  if (!item) return;
  applyQuestionAction(item, examState, target);
  renderExam();
});
elements.examBody.addEventListener("input", (event) => {
  const target = event.target.closest("[data-qact='text']");
  if (!target) return;
  examState.text = target.value;
});
elements.nextQuestion.addEventListener("click", nextQuestion);
document.querySelector("#reset-quiz").addEventListener("click", resetQuiz);
document.querySelector("#mark-reviewed").addEventListener("click", markCurrentReviewed);
document.querySelector("#reset-progress").addEventListener("click", resetAllProgress);
document.querySelector("#prev-unit").addEventListener("click", () => goToUnit(activeUnit - 1));
document.querySelector("#next-unit").addEventListener("click", () => goToUnit(activeUnit + 1));
document.querySelector("#run-code").addEventListener("click", runCode);
document.querySelector("#reset-code").addEventListener("click", resetCode);
document.querySelector("#copy-code").addEventListener("click", copyCode);
elements.editor.addEventListener("input", () => { codeDrafts[activeUnit] = elements.editor.value; });

elements.labEditor.addEventListener("input", () => { labDrafts[activeUnit] = elements.labEditor.value; });
document.querySelector("#run-tests").addEventListener("click", async () => {
  const lab = (typeof labs !== "undefined" && labs[String(activeUnit)]) || null;
  if (!lab) return;
  const button = document.querySelector("#run-tests");
  button.disabled = true;
  try {
    await runTestSuite({ prelude: lab.prelude, code: elements.labEditor.value, tests: lab.tests },
      elements.testResults, elements.labStatus, "Ejecutando tests...");
  } finally {
    button.disabled = false;
  }
});
document.querySelector("#lab-solution").addEventListener("click", () => {
  const lab = (typeof labs !== "undefined" && labs[String(activeUnit)]) || null;
  if (!lab || !lab.solution) return;
  labDrafts[activeUnit] = lab.solution;
  elements.labEditor.value = lab.solution;
});
document.querySelector("#lab-reset").addEventListener("click", () => {
  const lab = (typeof labs !== "undefined" && labs[String(activeUnit)]) || null;
  if (!lab) return;
  delete labDrafts[activeUnit];
  elements.labEditor.value = lab.starter;
  elements.testResults.innerHTML = "";
  elements.testResults.hidden = true;
  elements.labStatus.textContent = labStatusText(lab);
});

elements.tpTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tp]");
  if (!button) return;
  activeTp = Number(button.dataset.tp);
  renderTps();
});

elements.vizTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-viz]");
  if (!button) return;
  activeViz = Number(button.dataset.viz);
  renderViz();
});

document.querySelector("#terminal-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#command-input");
  runCommand(input.value);
  input.value = "";
});

const themeNames = ["", "matrix", "nord"];
const themeLabels = ["MOCHA", "MATRIX", "NORD"];
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "";
  const next = (themeNames.indexOf(current) + 1) % themeNames.length;
  if (themeNames[next]) document.documentElement.dataset.theme = themeNames[next];
  else delete document.documentElement.dataset.theme;
  document.querySelector("#theme-toggle").textContent = `THEME: ${themeLabels[next]}`;
});

window.addEventListener("keydown", (event) => {
  if (document.activeElement.matches("input, textarea")) return;
  if (event.key === "/") { event.preventDefault(); elements.search.focus(); return; }
  if (/^[1-9]$/.test(event.key)) { goToUnit(Number(event.key)); return; }
  if (event.key === "0") { goToUnit(10); return; }
  if (event.key === "-") { goToUnit(11); return; }
  if (event.key === "=" || event.key === "+") { goToUnit(12); return; }
  if (event.key.toLowerCase() === "q") { document.querySelector("#seccion-quiz").scrollIntoView({ behavior: "smooth", block: "center" }); return; }
  if (event.key.toLowerCase() === "e") { document.querySelector(".exam-panel").scrollIntoView({ behavior: "smooth", block: "center" }); return; }
  if (event.key === "?") log("Atajos: 1-9/0/-/= carga unidades, / busca recursos, q abre el quiz, e el examen.");
});

setInterval(() => {
  document.querySelector("#clock").textContent = new Date().toLocaleTimeString("es-AR", { hour12: false });
}, 1000);

renderModule();
renderTps();
renderViz();
renderExam();
