/* ============================================================
   PCX — Tareas prácticas y proyecto
   ============================================================ */
(function () {
  'use strict';
  window.PCX = window.PCX || {};
  PCX.tps = PCX.tps || [];

  /* ------------------------------------------------------------
     Prácticas clásicas (2022-2025)
     ------------------------------------------------------------ */
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
  PCX.tps.push({
    id: 'pr-2',
    num: 2,
    titulo: 'Práctica 2',
    resumen: 'Enunciado clásico de la cátedra: profundización en sincronización.',
    consignas: ['Leé el enunciado PDF', 'Implementá las soluciones propuestas', 'Verificá la corrección de tus primitivas'],
    temas: ['Sincronización'],
    archivo: '2022-2025/Practicas/Practica2.pdf',
    archivoTexto: 'Práctica 2 — PDF',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'practicas'
  });
  PCX.tps.push({
    id: 'pr-3',
    num: 3,
    titulo: 'Práctica 3',
    resumen: 'Enunciado clásico de la cátedra: problemas de sincronización.',
    consignas: ['Leé el enunciado PDF', 'Implementá las soluciones propuestas', 'Verificá la corrección de tus primitivas'],
    temas: ['Sincronización', 'Problemas clásicos'],
    archivo: '2022-2025/Practicas/Practica3.pdf',
    archivoTexto: 'Práctica 3 — PDF',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'practicas'
  });
  PCX.tps.push({
    id: 'pr-4',
    num: 4,
    titulo: 'Práctica 4',
    resumen: 'Enunciado de la versión más reciente de la práctica (carpeta NEW).',
    consignas: ['Leé el enunciado PDF', 'Implementá las soluciones propuestas', 'Verificá la corrección de tus primitivas'],
    temas: ['Sincronización'],
    archivo: '2022-2025/Practicas/NEW/Practicas/Practica4.pdf',
    archivoTexto: 'Práctica 4 — PDF',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'practicas'
  });
  PCX.tps.push({
    id: 'pr-5',
    num: 5,
    titulo: 'Práctica 5',
    resumen: 'Enunciado clásico de la cátedra: integración de conceptos del curso.',
    consignas: ['Leé el enunciado PDF', 'Implementá las soluciones propuestas', 'Verificá la corrección de tus primitivas'],
    temas: ['Integración'],
    archivo: '2022-2025/Practicas/Practica5.pdf',
    archivoTexto: 'Práctica 5 — PDF',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'practicas'
  });

  /* ------------------------------------------------------------
     Proyecto incremental (2026) — 4 hitos
     ------------------------------------------------------------ */
  PCX.tps.push({
    id: 'hito-1',
    num: 1,
    titulo: 'Hito 1 — Concurrencia básica',
    resumen: 'Secuencial vs. paralelo con primitiva de sincronización, más curva de speedup contra el techo de Amdahl.',
    consignas: ['Elegí un problema de concurrencia', 'Implementá la versión secuencial y la paralela con primitiva de sincronización', 'Medí tiempos y graficá speedup vs. Amdahl'],
    temas: ['Hilos', 'Sincronización', 'Amdahl'],
    archivo: '2026/proyecto/hito-1/README.md',
    archivoTexto: 'Enunciado (README)',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'proyecto'
  });
  PCX.tps.push({
    id: 'hito-2',
    num: 2,
    titulo: 'Hito 2 — Kernels CUDA optimizados',
    resumen: 'Portar el problema del Hito 1 a GPU: baseline con atomicAdd vs. reducción con memoria compartida, perfilado con Nsight Compute (o fallback de cudaEvent).',
    consignas: ['Compilá kernel_ingenuo.cu (baseline con atomicAdd)', 'Completá los TODO de kernel_optimizado.cu (memoria compartida / tiling / coalescencia)', 'Perfilá ambas versiones con ncu o cudaEvent', 'Informe: CPU vs. GPU ingenua vs. GPU optimizada, con tus ms'],
    temas: ['CUDA', 'Memoria compartida', 'Nsight Compute'],
    archivo: '2026/proyecto/hito-2/README.md',
    archivoTexto: 'Enunciado (README)',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'proyecto'
  });
  PCX.tps.push({
    id: 'hito-3',
    num: 3,
    titulo: 'Hito 3 — LLM local y métricas de inferencia',
    resumen: 'Instalá llama.cpp u Ollama, corré un modelo cuantizado que entre en tu hardware y medí tokens/s y memoria variando cuantización y batch/contexto.',
    consignas: ['Instalá llama.cpp y Ollama', 'Elegí un modelo abierto cuantizado que entre en GPU/RAM', 'Medí tokens/s y memoria: Q4 vs. Q8 y variando batch/ctx con medir_inferencia.py', 'Analizá los números con conceptos de la Unidad 2 (SIMT, jerarquía de memoria)'],
    temas: ['LLM', 'Cuantización', 'Batching'],
    archivo: '2026/proyecto/hito-3/README.md',
    archivoTexto: 'Enunciado (README)',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'proyecto'
  });
  PCX.tps.push({
    id: 'hito-4',
    num: 4,
    titulo: 'Hito 4 — Integración final',
    resumen: 'Ruta A: kernel propio de una operación de Transformer (softmax, layer norm, matmul) vs. referencia. Ruta B: dos optimizaciones de inferencia medidas con bitácora. Repo consolidado + defensa oral.',
    consignas: ['Elegí Ruta A (kernel propio) o Ruta B (optimización de sistema)', 'Medí con nsys / ncu / nvidia-smi / torch.profiler según aplique', 'Consolidá el repo con los hitos 1–4 y el informe con hilo conductor', 'Defendé oralmente (10–15 min con demo en vivo, preguntas individuales)'],
    temas: ['CUDA', 'LLM', 'Perfilado'],
    archivo: '2026/proyecto/hito-4/README.md',
    archivoTexto: 'Enunciado (README)',
    plantilla: '',
    setup: '',
    input: '',
    inputLabel: '',
    tests: [],
    grupo: 'proyecto'
  });
})();
