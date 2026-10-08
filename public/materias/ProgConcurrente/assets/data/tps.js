/* ============================================================
   PCX — Tareas prácticas y proyecto
   ============================================================ */
(function () {
  'use strict';
  window.PCX = window.PCX || {};
  /* Práctica 1 — enunciado PDF clásico + link a archivo */
  PCX.tps.push({
    id: 'pr-1',
    num: 1,
    titulo: 'Práctica 1 — Fundamentos de hilos',
    resumen: 'Ejercicios básicos con creación y sincronización de hilos simples.',
    consignas: ['Leé el enunciado PDF', 'Implementá el código propuesto', 'Ejecutá los tests automáticos si los hay'],
    temas: ['Hilos básicos', 'Sincronización simple'],
    archivo: '2022-2025/Practicas/Practica1.pdf',
    archivoTexto: 'Práctica 1 — PDF',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'practicas'
  });
  /* Hito 1 — proyecto incremental 2026 */
  PCX.tps.push({
    id: 'hito-1',
    num: 1,
    titulo: 'Hito 1 — Concurrencia básica',
    resumen: 'Primer hito del proyecto incremental: implementar una solución de concurrencia en Python/CUDA según el enunciado.',
    consignas: ['Elegí un problema de concurrencia', 'Implementá la solución', 'Probá con los casos de prueba'],
    temas: ['Hito 1', 'Concurrencia básica'],
    archivo: '2026/proyecto/hito-1/README.md',
    archivoTexto: 'Enunciado (README)',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'proyecto'
  });
})();