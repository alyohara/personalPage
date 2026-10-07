/* Examen integrador: 40 preguntas mezclando todas las unidades. */

const intro = document.querySelector("#exam-intro");
const mount = document.querySelector("#exam-mount");
const history = document.querySelector("#exam-history");
const needed = Math.ceil((PASS_MARK / 100) * finalExam.length);

function renderHistory() {
  const best = progress.exam.best;
  const attempts = progress.exam.attempts;
  history.textContent = best == null
    ? "Sin intentos todavía."
    : `Mejor intento: ${best}% en ${attempts} ${attempts === 1 ? "intento" : "intentos"} (aprobado: ${best >= PASS_MARK ? "sí" : "no"}).`;
}

let quiz = null;
let lastResult = null;

function start() {
  intro.hidden = true;
  mount.hidden = false;
  lastResult = null;
  quiz = createQuiz({
    mount,
    items: finalExam.slice(),
    title: () => "RESULTADO DEL EXAMEN",
    abortLabel: "SALIR",
    footer: () => {
      const r = lastResult;
      const estado = r.pct >= PASS_MARK ? "Aprobaste" : "No aprobaste";
      return `${estado} con ${r.correct} de ${r.total} correctas (${r.pct}%). Necesitabas ${needed} (${PASS_MARK}%). Mejor puntaje: ${progress.exam.best}% · ${progress.exam.attempts} ${progress.exam.attempts === 1 ? "intento" : "intentos"}`;
    },
    onFinish(correct, total) {
      const pct = Math.round((correct / total) * 100);
      lastResult = { correct, total, pct };
      progress.exam.attempts += 1;
      progress.exam.best = progress.exam.best == null ? pct : Math.max(progress.exam.best, pct);
      progressStore.write();
      renderHistory();
    }
  });
  mount.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#start-exam").addEventListener("click", start);

mount.addEventListener("click", (event) => {
  if (event.target.closest('[data-qact="abort"]')) {
    intro.hidden = false;
    mount.hidden = true;
    renderHistory();
  }
});

window.addEventListener("keydown", (event) => {
  if (document.activeElement.matches("input, textarea")) return;
  if (event.key.toLowerCase() === "h") window.location.href = "index.html";
  if (event.key.toLowerCase() === "t") window.location.href = "trabajos-practicos.html";
});

initTheme();
initClock();
renderHistory();