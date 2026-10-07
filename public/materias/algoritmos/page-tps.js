/* Página de trabajos prácticos: los 4 TP con plantilla editable y tests automáticos. */

let activeTp = 0;

const tabs = document.querySelector("#tp-tabs");
const body = document.querySelector("#tp-body");

function draftKey(id) { return `tp:${id}`; }

function labTestsNote(count) {
  return `${count} tests con Pyodide (namespace limpio por test).`;
}

function renderTp() {
  tabs.innerHTML = tps.map((tp, index) =>
    `<button class="tp-tab${index === activeTp ? " active" : ""}" data-tp="${index}" type="button">TP ${escapeHtml(String(tp.num))}</button>`).join("");

  const tp = tps[activeTp];
  const fileName = tp.archivo.split("/").pop();
  body.innerHTML = `
    <p class="label">TRABAJO PRÁCTICO ${escapeHtml(String(tp.num))}</p>
    <h2>${escapeHtml(tp.titulo)}</h2>
    <p class="tp-file"><a href="${encodeURI(tp.archivo)}" target="_blank" rel="noopener">ENUNCIADO: ${escapeHtml(fileName)} &#8599;</a></p>
    <p class="exercise-prompt">${escapeHtml(tp.resumen)}</p>
    <ul class="tp-temas">${tp.temas.map((tema) => `<li>${escapeHtml(tema)}</li>`).join("")}</ul>
    <p class="label tp-label">CONSIGNAS</p>
    <ol class="tp-consignas">${tp.consignas.map((consigna) => `<li>${escapeHtml(consigna)}</li>`).join("")}</ol>
    <p class="label tp-label">PLANTILLA (EDITÁ Y CORRÉ LOS TESTS)</p>
    <textarea id="tp-editor" class="code-editor" spellcheck="false" rows="14" aria-label="Editor del TP"></textarea>
    <div class="editor-toolbar">
      <button id="tp-run" class="action" type="button">RUN TESTS &gt;</button>
      <button id="tp-solution" class="quiet-action" type="button">VER SOLUCIÓN</button>
      <button id="tp-reset" class="quiet-action" type="button">RESET</button>
      <span id="tp-status" class="muted">${labTestsNote(tp.tests.length)}</span>
    </div>
    <ul id="tp-results" class="test-results" hidden aria-live="polite"></ul>
    <details>
      <summary>VER UNA POSIBLE SOLUCIÓN</summary>
      <pre><code>${escapeHtml(tp.solution)}</code></pre>
    </details>`;

  const editor = document.querySelector("#tp-editor");
  const status = document.querySelector("#tp-status");
  const results = document.querySelector("#tp-results");
  editor.value = draftStore.get(draftKey(tp.id), tp.plantilla);

  editor.addEventListener("input", () => draftStore.set(draftKey(tp.id), editor.value));

  document.querySelector("#tp-run").addEventListener("click", async () => {
    const button = document.querySelector("#tp-run");
    button.disabled = true;
    draftStore.set(draftKey(tp.id), editor.value);
    try {
      await runTestSuite({ code: editor.value, tests: tp.tests }, results, status, "Ejecutando tests...");
    } finally {
      button.disabled = false;
    }
  });

  document.querySelector("#tp-solution").addEventListener("click", () => {
    draftStore.set(draftKey(tp.id), tp.solution);
    editor.value = tp.solution;
  });

  document.querySelector("#tp-reset").addEventListener("click", () => {
    draftStore.clear(draftKey(tp.id));
    editor.value = tp.plantilla;
    results.innerHTML = "";
    results.hidden = true;
    status.textContent = labTestsNote(tp.tests.length);
  });
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tp]");
  if (!button) return;
  activeTp = Number(button.dataset.tp);
  renderTp();
});

window.addEventListener("keydown", (event) => {
  if (document.activeElement.matches("input, textarea")) return;
  if (/^[1-4]$/.test(event.key)) { activeTp = Number(event.key) - 1; renderTp(); }
  if (event.key.toLowerCase() === "h") window.location.href = "index.html";
  if (event.key.toLowerCase() === "e") window.location.href = "examen.html";
});

initTheme();
initClock();
renderTp();