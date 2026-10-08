/* ============================================================
   PCX — Unidad 4 (fragmento)
   ============================================================ */
(function () {
  'use strict';
  window.PCX = window.PCX || {};
  PCX.unidades.push({
    id: 'u4',
    num: 4,
    title: 'Perfilado, optimización y cierre',
    resumen: 'Herramientas de perfilado (Nsight, torch.profiler); metodología de optimización basada en evidencia; técnicas modernas de inferencia; presentación y defensa del proyecto.',
    objetivos: [
      'Utilizar Nsight Systems y Compute para identificar cuellos de botella.',
      'Aplicar torch.profiler para medir tiempo GPU/CPU y uso de memoria.',
      'Diseñar una metodología de optimización: identificar, hipotetizar, medir, validar.',
      'Aplicar técnicas modernas de inferencia: FlashAttention, KV-cache, speculative decoding, MoE.',
      'Comunicar resultados del proyecto con criterios claros de evaluación.'
    ],
    secciones: [
      { h: 'Por qué perfilar', html: '<p>Perfilar antes de optimizar permite medir el estado actual y enfocar los esfuerzos en los cuellos de botella reales, evitando perd de tiempo en optimizaciones que no impactan el rendimiento global.</p>' },
      { h: 'Nsight Systems y Compute', html: '<p>Nsight Systems presenta una línea de tiempo global con métricas de CPU/GPU, transferencias y memoria; Nsight Compute profundiza en el rendimiento de kernels individuales (ocupación, threads por bloque, utilización de memoria).</p>' },
      { h: 'torch.profiler', html: '<p>torch.profiler integra el profiling de Python y C++/CUDA, ofreciendo vistas de tiempo, memoria y operaciones; útil para modelos de lenguaje y redes neuronales.</p>' },
      { h: 'Metodología de optimización basada en evidencia', html: '<p>Ciclo: <strong>Identificar</strong> cuellos de botella → <strong>Hipotetizar</strong> causa → <strong>Medir</strong> tras una intervención → <strong>Validar</strong> si el speedup esperado se alcanza (Ley de Amdahl).</p>' },
      { h: 'Técnicas modernas de inferencia', html: '<p>FlashAttention reduce el acceso a memoria leyendo solo lo necesario; KV-cache almacena claves ya computadas; speculative decoding genera tokens en lote basándose en predicciones; MoE (Mixture of Experts) activa solo subconjuntos de parámetros por token.</p>' }
    ],
    labs: [
      {
        title: 'Análisis de un perfil dado',
        enunciado: '<p>Dado un diccionario <code>{etapa: fraccion}</code> que representa el tiempo dedicado a cada etapa de una ejecución, implementar <code>cuello_de_botella(frac_tiempos)</code> que devuelva la etapa dominante y el <code>max_speedup_amdahl(frac_par, p)</code> teórico máximo. Tests con casos exactos.</p>',
        starter: 'def cuello_de_botella(frac_tiempos):\n    dominante = max(frac_tiempos, key=frac_tiempos.get)\n    return dominante, frac_tiempos[dominante]\n\ndef max_speedup_amdahl(frac_par, p):\n    if frac_par == 0: return float(\"inf\")\n    return 1 / ((1 - frac_par) + frac_par / p)',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Perfil simple', code: 'p = {compilado:0.7, otros:0.3}; print(cuello_de_botella(p))', mustEqual: '(\"compilado\", 0.7)' }
        ],
        solution: 'def cuello_de_botella(frac_tiempos):\n    dominante = max(frac_tiempos, key=frac_tiempos.get)\n    return dominante, frac_tiempos[dominante]\n\ndef max_speedup_amdahl(frac_par, p):\n    if frac_par == 0: return float(\"inf\")\n    return 1 / ((1 - frac_par) + frac_par / p)',
        solutionExp: '<p>El resultado muestra la etapa que más tiempo consume y el speedup máximo teórico alcanzable con hilos ideales.</p>',
        hints: ['Usá <code>max()</code> con <code>key</code> para encontrar la fracción dominante.', 'La fórmula de Amdahl: S = 1 / ((1-P) + P/N).']
      }
    ],
    archivos: [
      { f: '2026/clases/clase-11/slides.md', t: 'Diapositivas de la Clase 11' },
      { f: '2026/clases/clase-12/slides.md', t: 'Diapositivas de la Clase 12' },
      { f: '2026/proyecto/hito-4/README.md', t: 'README del Hito 4 (presentación y defensa)'}
    ]
  });
  PCX.quizzes = PCX.quizzes || {};
  PCX.quizzes.u4 = {
    titulo: 'Autoevaluación — Perfilado y optimización',
    preguntas: [
      { type: 'mcq', t: '¿Qué herramienta brinda una línea de tiempo global con métricas de CPU/GPU y memoria?', opts: ['A) Nsight Compute', 'B) Nsight Systems', 'C) torch.profiler', 'D) Pyodide'], ans: 1, exp: 'La opción B es correcta: Nsight Systems presenta una línea de tiempo global.' },
      { type: 'tf', t: '¿La metodología de optimización basada en evidencia comienza identificando cuellos de botella?', opts: ['Verdadero', 'Falso'], ans: true, exp: 'Verdadero: el primer paso es identificar los cuellos de botella antes de hipotetizar causas.' },
      { type: 'fill', t: 'Completá: <code>FlashAttention</code> reduce el acceso a memoria leyendo solo lo necesario.', ans: 'memoria', exp: 'FlashAttention accede solo a los datos necesarios, reduciendo el tráfico de memoria y mejorando el rendimiento.' },
      { type: 'code', t: '¿Qué imprime el siguiente código?\nprint(round(1/((1-0.7)+0.7/4),2))', opts: [], ans: '0.96', exp: '0.96'}
    ]
  };
})();