/* Portada: path de 12 tarjetas, progreso global, buscador de material y terminal. */

const els = {
  heroPrimary: document.querySelector("#hero-primary"),
  resume: document.querySelector("#resume-link"),
  numbers: document.querySelector("#overall-numbers"),
  bar: document.querySelector("#overall-bar"),
  note: document.querySelector("#overall-note"),
  grid: document.querySelector("#path-grid"),
  assessments: document.querySelector("#assessment-links"),
  search: document.querySelector("#global-search"),
  results: document.querySelector("#global-results"),
  count: document.querySelector("#global-count")
};

const TOTAL_RESOURCES = units.reduce((sum, unit) => sum + unit.resources.length, 0) + assessments.length;

/* --------------------------------------------------------------- progreso */

function renderOverall() {
  const totals = progressTotals();
  const examBest = progress.exam.best;
  els.numbers.innerHTML = `
    <div class="overall-figure"><b>${totals.revisadas}/${totals.total}</b><span>unidades revisadas</span></div>
    <div class="overall-figure"><b>${totals.aprobadas}/${totals.total}</b><span>aprobadas con quiz</span></div>
    <div class="overall-figure"><b>${totals.promedio == null ? "--" : `${totals.promedio}%`}</b><span>promedio de quizzes</span></div>
    <div class="overall-figure"><b>${examBest == null ? "--" : `${examBest}%`}</b><span>mejor examen</span></div>`;
  els.bar.style.width = `${Math.round((totals.revisadas / totals.total) * 100)}%`;

  const pending = nextPendingUnit();
  if (totals.revisadas === 0) {
    els.note.textContent = "Todavía no empezaste. Arrancá por la unidad 01: introducción a los algoritmos.";
  } else if (pending.id === units.length && totals.revisadas === totals.total) {
    els.note.textContent = "Completaste las 12 unidades. Te queda el examen integrador.";
  } else {
    els.note.textContent = `Tu próxima unidad pendiente es la ${pad2(pending.id)}: ${pending.title}.`;
  }

  const resume = resumeUnit();
  const label = progress.lastUnit && totals.revisadas > 0
    ? `CONTINUAR EN LA UNIDAD ${pad2(resume)} >`
    : `EMPEZAR POR LA UNIDAD ${pad2(resume)} >`;
  els.resume.textContent = label;
  els.resume.href = unitFile(resume);
  els.heroPrimary.textContent = `EMPEZAR POR LA UNIDAD ${pad2(resume)} >`;
  els.heroPrimary.href = unitFile(resume);
}

/* ---------------------------------------------------------------- tarjetas */

function vizCount(id) {
  return VIZ_BY_UNIT[id] ? VIZ_BY_UNIT[id].length : 0;
}

const VIZ_BY_UNIT = {};
[
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
].forEach((viz) => {
  (VIZ_BY_UNIT[viz.unit] = VIZ_BY_UNIT[viz.unit] || []).push(viz);
});

function cardMarkup(unit) {
  const state = unitState(unit.id);
  const lab = typeof labs !== "undefined" && labs[String(unit.id)];
  const viz = vizCount(unit.id);
  const tags = [`${unit.topics.length} temas`, `${unit.resources.length} recursos`];
  if (lab) tags.push(`${lab.tests.length} tests`);
  if (viz) tags.push(`${viz} visualizador${viz > 1 ? "es" : ""}`);
  const pct = state.score != null ? state.score : state.key === "pendiente" ? 0 : 100;
  return `<a class="path-card state-${state.key}" href="${unitFile(unit.id)}">
      <span class="path-head"><span class="path-num">${pad2(unit.id)}</span><h3>${escapeHtml(unit.short)}</h3></span>
      <p class="path-summary">${escapeHtml(unit.summary)}</p>
      <span class="path-tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</span>
      <span class="path-foot">
        <span class="bar"><span style="width:${pct}%"></span></span>
        <span class="path-score state-${state.key}">${escapeHtml(state.label)}</span>
      </span>
    </a>`;
}

function renderPath() {
  els.grid.innerHTML = units.map(cardMarkup).join("");
}

/* ------------------------------------------------------ buscador global */

const CATALOG = units.map((unit) => ({ unit, resources: unit.resources }));
CATALOG.push({ unit: { id: 0, title: "Parciales y material de evaluación", short: "Parciales" }, resources: assessments });

function matches(resource, query) {
  if (!query) return true;
  return `${resource[0]} ${resource[1]} ${resource[2]}`.toLowerCase().includes(query);
}

function renderResults(query) {
  const needle = query.trim().toLocaleLowerCase("es");
  let shown = 0;
  const groups = [];
  for (const group of CATALOG) {
    const hits = group.resources.filter((resource) => matches(resource, needle));
    if (!hits.length) continue;
    shown += hits.length;
    const heading = group.unit.id
      ? `<a href="${unitFile(group.unit.id)}">${pad2(group.unit.id)} &middot; ${escapeHtml(group.unit.title)}</a>`
      : escapeHtml(group.unit.title);
    groups.push(`<section class="search-group">
        <h3>${heading}</h3>
        <div class="resource-list">${hits.map((resource) => resourceMarkup(resource)).join("")}</div>
      </section>`);
  }
  els.results.innerHTML = groups.length
    ? groups.join("")
    : '<p class="empty">Ningún recurso coincide con la búsqueda.</p>';
  els.count.textContent = `${shown} de ${TOTAL_RESOURCES} archivos${needle ? ` para "${query.trim()}"` : " en total"}`;
}

els.search.addEventListener("input", () => renderResults(els.search.value));

/* ----------------------------------------------------------------- varios */

els.assessments.innerHTML = assessments.map(assessmentMarkup).join("");

document.querySelector("#reset-progress").addEventListener("click", () => {
  resetAllProgress();
  renderOverall();
  renderPath();
  renderResults(els.search.value);
});

const terminal = initTerminal({
  help(argument, raw, log) {
    log("Comandos: help, unidades, unidad [1-12], ruta, tps, examen, progreso, material <texto>, clear");
  },
  unidades(argument, raw, log) {
    log(units.map((unit) => `${pad2(unit.id)}: ${unit.title} [${unitState(unit.id).label}]`).join("\n"));
  },
  ruta(argument, raw, log) {
    log(units.map((unit) => {
      const state = unitState(unit.id);
      const mark = state.key === "aprobada" ? "*" : state.key === "revisada" ? "+" : " ";
      return `${mark} ${pad2(unit.id)} ${unit.short}`;
    }).join("\n"));
  },
  unidad(argument, raw, log) {
    if (!/^\d{1,2}$/.test(argument || "") || Number(argument) < 1 || Number(argument) > units.length) {
      log("Uso: unidad [1-12]", "error");
      return;
    }
    log(`Abriendo ${unitFile(Number(argument))}...`, "success");
    window.location.href = unitFile(Number(argument));
  },
  tps(argument, raw, log) { log("Abriendo trabajos-practicos.html...", "success"); window.location.href = "trabajos-practicos.html"; },
  examen(argument, raw, log) { log("Abriendo examen.html...", "success"); window.location.href = "examen.html"; },
  progreso(argument, raw, log) {
    const totals = progressTotals();
    log(`${totals.revisadas}/${totals.total} revisadas · ${totals.aprobadas} aprobadas · examen: ${progress.exam.best ?? "--"}%`, "success");
  },
  material(argument, raw, log) {
    if (!argument) { log("Uso: material <texto>", "error"); return; }
    els.search.value = raw.slice(raw.indexOf(" ") + 1);
    renderResults(els.search.value);
    els.search.focus();
    log(`${els.count.textContent}`, "success");
  }
});

window.addEventListener("keydown", (event) => {
  if (document.activeElement.matches("input, textarea")) return;
  if (event.key === "/") { event.preventDefault(); els.search.focus(); return; }
  if (event.key === "e") { window.location.href = "examen.html"; return; }
  if (/^[1-9]$/.test(event.key)) { window.location.href = unitFile(Number(event.key)); return; }
  if (event.key === "0") { window.location.href = unitFile(10); return; }
  if (event.key === "-") { window.location.href = unitFile(11); return; }
  if (event.key === "=" || event.key === "+") { window.location.href = unitFile(12); return; }
  if (event.key === "?") terminal.log("Atajos: 1-9/0/-/= abren una unidad, / busca material, e abre el examen. En la terminal: help.");
});

initTheme();
initClock();
renderOverall();
renderPath();
renderResults("");