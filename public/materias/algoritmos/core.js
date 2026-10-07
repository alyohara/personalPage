/* Nucleo compartido por todas las paginas del sitio.
   Progreso, borradores, ruta horizontal, tema, Pyodide, motor de quiz y terminal. */

const PASS_MARK = 70;
const PROGRESS_KEY = "ayed-progress-v2";
const DRAFTS_KEY = "ayed-drafts-v1";
const THEME_KEY = "ayed-theme-v1";
const UNIT_COUNT = 12;

function pad2(value) {
  return String(value).padStart(2, "0");
}

function unitFile(id) {
  return `unidad-${pad2(id)}.html`;
}

function unitById(id) {
  return units.find((unit) => unit.id === id) || null;
}

function unitIndex(id) {
  return units.findIndex((unit) => unit.id === id);
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

/* ---------------------------------------------------------------- progreso */

const progressStore = {
  read() {
    let raw = null;
    try { raw = localStorage.getItem(PROGRESS_KEY); } catch (error) { console.warn("Progreso ilegible", error); }
    let data = {};
    if (raw) {
      try { data = JSON.parse(raw) || {}; } catch (error) { data = {}; }
    }
    if (!data.units || typeof data.units !== "object") data.units = {};
    if (!data.exam || typeof data.exam !== "object") data.exam = { best: null, attempts: 0 };
    return data;
  },
  write() { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); },
  reset() {
    progress = { units: {}, exam: { best: null, attempts: 0 } };
    progressStore.write();
    Object.keys(drafts).forEach((key) => delete drafts[key]);
    draftStore.write();
  }
};

let progress = progressStore.read();

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
  progress.units[id] = { ...saved, score: best, passed: saved.passed || best >= PASS_MARK };
  progressStore.write();
}

function markReviewed(id) {
  const saved = progress.units[id] || {};
  progress.units[id] = { ...saved, reviewed: !saved.reviewed };
  progressStore.write();
}

function rememberVisit(id) {
  progress.lastUnit = id;
  progress.lastVisit = Date.now();
  progressStore.write();
}

function progressTotals() {
  const revisadas = units.filter((unit) => ["revisada", "aprobada"].includes(unitState(unit.id).key)).length;
  const aprobadas = units.filter((unit) => unitState(unit.id).key === "aprobada").length;
  const promedio = (() => {
    const scores = units.map((unit) => unitState(unit.id).score).filter((score) => score != null);
    return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
  })();
  return { revisadas, aprobadas, promedio, total: units.length };
}

function nextPendingUnit() {
  return units.find((unit) => unitState(unit.id).key === "pendiente") || units[units.length - 1];
}

function resumeUnit() {
  const last = Number(progress.lastUnit);
  if (Number.isInteger(last) && last >= 1 && last <= units.length) return last;
  return nextPendingUnit().id;
}

/* --------------------------------------------------------------- borradores */

let drafts = {};

const draftStore = {
  read() {
    try {
      const raw = localStorage.getItem(DRAFTS_KEY);
      if (raw) drafts = JSON.parse(raw) || {};
    } catch (error) { drafts = {}; }
  },
  write() {
    try { localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts)); } catch (error) { /* cuota llena */ }
  },
  get(key, fallback) { return drafts[key] != null ? drafts[key] : fallback; },
  set(key, value) { drafts[key] = value; draftStore.write(); },
  clear(key) { delete drafts[key]; draftStore.write(); }
};
draftStore.read();

function resetAllProgress() {
  if (!confirm("Se borrara el progreso, los puntajes y los borradores guardados en este navegador. Continuar?")) return;
  progressStore.reset();
}

/* ------------------------------------------------------------------ recursos */

function resourceMarkup(resource, extra) {
  const [type, name, category, path] = resource;
  const search = `${type} ${name} ${category}`.toLowerCase();
  const suffix = extra ? `<span class="resource-category">${escapeHtml(extra)}</span>` : "";
  return `<article class="resource" data-search="${search}">
      <span class="resource-type">${escapeHtml(type)}</span>
      <a href="${encodeURI(path)}" target="_blank" rel="noopener" title="${escapeHtml(path)}">${escapeHtml(name)}</a>
      ${suffix || `<span class="resource-category">${escapeHtml(category)}</span>`}
    </article>`;
}

function assessmentMarkup(assessment) {
  return `<a class="assessment-link" href="${encodeURI(assessment[3])}" target="_blank" rel="noopener">
      <strong>[${escapeHtml(assessment[0])}]</strong> ${escapeHtml(assessment[1])}<small>${escapeHtml(assessment[2])}</small>
    </a>`;
}

/* ------------------------------------------------- ruta horizontal 01 -> 12 */

function renderRoute(activeId) {
  const mount = document.querySelector("#route-strip");
  if (!mount) return;
  mount.innerHTML = [
    `<a class="route-home" href="index.html" title="Volver al path">PATH</a>`,
    `<span class="route-sep">&rsaquo;</span>`
  ].concat(units.map((unit, index) => {
    const state = unitState(unit.id);
    const classes = ["route-node", `state-${state.key}`];
    if (unit.id === activeId) classes.push("current");
    const link = [`unidad-${pad2(unit.id)}.html`];
    if (index === unitIndex(activeId) + 1) link.push("#seccion-recursos");
    if (index === unitIndex(activeId) - 1) link.push("#seccion-codigo");
    const content = `<span class="route-num">${pad2(unit.id)}</span><span class="route-label">${escapeHtml(unit.short)}</span>`;
    if (unit.id === activeId) return `<a class="${classes.join(" ")}" href="${link.join("")}" aria-current="page">${content}</a>`;
    return `<a class="${classes.join(" ")}" href="${link.join("")}" title="${escapeHtml(unit.title)}">${content}</a>`;
  })).join("");
}

/* ------------------------------------------------------------------ tema/UI */

const THEME_NAMES = ["", "matrix", "nord"];
const THEME_LABELS = ["MOCHA", "MATRIX", "NORD"];

function initTheme() {
  let stored = null;
  try { stored = localStorage.getItem(THEME_KEY); } catch (error) { stored = null; }
  const theme = THEME_NAMES.includes(stored) ? stored : "";
  if (theme) document.documentElement.dataset.theme = theme;
  const button = document.querySelector("#theme-toggle");
  if (button) {
    button.textContent = `THEME: ${THEME_LABELS[THEME_NAMES.indexOf(theme)]}`;
    button.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme || "";
      const next = (THEME_NAMES.indexOf(current) + 1) % THEME_NAMES.length;
      if (THEME_NAMES[next]) document.documentElement.dataset.theme = THEME_NAMES[next];
      else delete document.documentElement.dataset.theme;
      const label = THEME_LABELS[next];
      button.textContent = `THEME: ${label}`;
      try { localStorage.setItem(THEME_KEY, THEME_NAMES[next]); } catch (error) { /* sin quota */ }
    });
  }
}

function initClock() {
  const clock = document.querySelector("#clock");
  if (!clock) return;
  const tick = () => { clock.textContent = new Date().toLocaleTimeString("es-AR", { hour12: false }); };
  tick();
  setInterval(tick, 1000);
}

function scrollToSection(selector) {
  const target = document.querySelector(selector);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ----------------------------------------------------------------- Pyodide */

const PYODIDE_INDEX = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
let pyodidePromise = null;
let pyStdout = null;
let pyStderr = null;
let pyOutput = null;

function appendOutput(text, kind) {
  if (!pyOutput) return;
  pyOutput.classList.remove("empty-output");
  const line = document.createElement("span");
  line.textContent = text;
  if (kind) line.className = kind;
  pyOutput.append(line);
  pyOutput.scrollTop = pyOutput.scrollHeight;
}

function resetOutput(node, message) {
  node.textContent = message;
  node.className = "code-output";
}

function getPyodide(statusEl) {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      if (!window.loadPyodide) {
        if (statusEl) statusEl.textContent = "Descargando Python (Pyodide)...";
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = `${PYODIDE_INDEX}pyodide.js`;
          script.onload = resolve;
          script.onerror = () => reject(new Error("No se pudo descargar Pyodide (sin conexion?)"));
          document.head.append(script);
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

function shortError(error) {
  const raw = String((error && error.message) || error);
  const lines = raw.split("\n").filter((line) => line.trim() && !line.includes("File \"<exec>\""));
  return (lines[lines.length - 1] || "error").slice(0, 140);
}

async function runTestSuite(suite, resultsEl, statusEl, runningText) {
  resultsEl.hidden = false;
  resultsEl.innerHTML = `<li class="test-running">${escapeHtml(runningText)}</li>`;
  statusEl.textContent = runningText;
  try {
    const py = await getPyodide(statusEl);
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
          results.push({ name: test.name, ok: false, detail: shortError(error) });
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
      : `Error al correr los tests: ${shortError(error)}`;
    return false;
  }
}

/* -------------------------------------------------------------- motor quiz */

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
  return a.slice().sort((x, y) => x - y).join(",") === b.slice().sort((x, y) => x - y).join(",");
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

function feedbackFor(item, ok) {
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
  const code = item.code ? `<pre class="q-code">${escapeHtml(item.code)}</pre>` : "";

  if (type === "fill") {
    return `${code}
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
    return `${code}
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
  return `${code}<div class="quiz-options">${options}</div>${submit}`;
}

/* Motor unificado: lo usan el quiz de cada unidad y el examen integrador.
   config: { mount, items, title(id), passMark, onFinish, extras[], abortLabel } */
function createQuiz(config) {
  const state = { index: 0, correct: 0, answered: false, sel: null, selected: [], seq: [], text: "", pool: null, feedback: "", feedbackClass: "" };
  const items = config.items || [];
  const mount = config.mount;

  function reset() {
    Object.assign(state, { index: 0, correct: 0, answered: false, sel: null, selected: [], seq: [], text: "", pool: null, feedback: "", feedbackClass: "" });
  }

  function finalize(item) {
    if (state.answered) return;
    const type = qtype(item);
    if (type === "multi" && !state.selected.length) return;
    if (type === "fill" && !normText(state.text)) return;
    if (type === "order" && !state.seq.length) return;
    state.answered = true;
    const ok = checkAnswer(item, state);
    if (ok) state.correct += 1;
    state.feedback = feedbackFor(item, ok);
    state.feedbackClass = ok ? "success" : "error";
  }

  function finishedMarkup() {
    const total = items.length;
    const pct = Math.round((state.correct / total) * 100);
    const pass = pct >= PASS_MARK;
    const extras = (config.extras || []).map((extra) =>
      `<button class="quiet-action" data-qact="goto" data-href="${extra.href}">${escapeHtml(extra.label)}</button>`).join("");
    return `
      <p class="label">${escapeHtml(config.title())}</p>
      <h2>${state.correct} / ${total} correctas (${pct}%)</h2>
      <p class="feedback ${pass ? "success" : "error"}">${pass
        ? "APROBADA &gt; superaste el 70%."
        : `REVISAR &gt; necesitas ${Math.ceil((PASS_MARK / 100) * total)} correctas para aprobar (70%).`}</p>
      <div class="quiz-controls">
        <button class="action" data-qact="restart" type="button">REINTENTAR</button>
        ${extras}
      </div>
      ${config.footer ? `<p class="score-line">${escapeHtml(config.footer())}</p>` : ""}`;
  }

  function render() {
    if (!items.length) {
      mount.innerHTML = '<p class="empty">No hay preguntas para esta seccion.</p>';
      return;
    }
    if (state.index >= items.length) {
      if (config.onFinish) config.onFinish(state.correct, items.length);
      mount.innerHTML = finishedMarkup();
      return;
    }
    const item = items[state.index];
    const typeLabel = { tf: "V/F", multi: "MULTIPLE", fill: "COMPLETAR", order: "ORDENAR" }[qtype(item)] || "OPCION";
    mount.innerHTML = `
      <p class="label">PREGUNTA ${state.index + 1} / ${items.length} &middot; ${typeLabel}</p>
      <h2>${escapeHtml(item.q)}</h2>
      ${questionBody(item, state)}
      <p class="feedback ${state.feedbackClass || ""}">${escapeHtml(state.feedback || "")}</p>
      <div class="quiz-controls">
        <button class="action" data-qact="next" type="button">NEXT &gt;</button>
        <button class="quiet-action" data-qact="restart" type="button">REINICIAR</button>
        ${config.abortLabel ? `<button class="quiet-action danger-action" data-qact="abort" type="button">${escapeHtml(config.abortLabel)}</button>` : ""}
      </div>
      <p class="score-line">Correctas hasta ahora: ${state.correct}</p>`;
  }

  function applyAction(target) {
    const action = target.dataset.qact;
    if (action === "goto") { window.location.href = target.dataset.href; return; }
    if (action === "abort" || action === "restart") { reset(); render(); return; }
    if (action === "text" || state.index >= items.length) return;
    if (action === "next") {
      if (!state.answered) return;
      state.index += 1;
      Object.assign(state, { answered: false, sel: null, selected: [], seq: [], text: "", pool: null, feedback: "", feedbackClass: "" });
      render();
      return;
    }
    if (state.answered) return;
    const item = items[state.index];
    if (action === "pick") { state.sel = Number(target.dataset.i); finalize(item); }
    else if (action === "toggle") {
      const index = Number(target.dataset.i);
      const at = state.selected.indexOf(index);
      if (at >= 0) state.selected.splice(at, 1);
      else state.selected.push(index);
    } else if (action === "submit") finalize(item);
    else if (action === "order-add") state.seq.push(items[state.index].a[Number(target.dataset.i)]);
    else if (action === "order-del") state.seq.splice(Number(target.dataset.i), 1);
    else if (action === "clear") state.seq = [];
    render();
  }

  mount.addEventListener("click", (event) => {
    const target = event.target.closest("[data-qact]");
    if (target) applyAction(target);
  });
  mount.addEventListener("input", (event) => {
    const target = event.target.closest("[data-qact='text']");
    if (target) state.text = target.value;
  });

  if (config.shuffleOrder) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = items[i]; items[i] = items[j]; items[j] = tmp;
    }
  }

  render();
  return { render, reset };
}

/* ----------------------------------------------------------------- terminal */

function initTerminal(handlers) {
  const output = document.querySelector("#terminal-output");
  const form = document.querySelector("#terminal-form");
  const input = document.querySelector("#command-input");
  if (!output || !form || !input) return;

  function log(message, type) {
    const line = document.createElement("p");
    if (type) line.className = type;
    line.textContent = message;
    output.append(line);
    output.scrollTop = output.scrollHeight;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const raw = input.value.trim();
    input.value = "";
    if (!raw) return;
    log(`student@unab:~/ayed$ ${raw}`, "prompt");
    const [command, argument] = raw.toLowerCase().split(/\s+/, 2);
    if (handlers[command]) handlers[command](argument, raw, log);
    else if (command === "clear") output.innerHTML = "";
    else log(`Comando no encontrado: ${command}. Escribi help.`, "error");
  });

  return { log };
}