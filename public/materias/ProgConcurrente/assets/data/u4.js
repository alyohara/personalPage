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
        enunciado: '<p>El perfilado de una ejecución dice qué fracción del tiempo se gasta en cada etapa. Implementá <code>cuello_de_botella(frac_tiempos)</code>, que reciba un diccionario <code>{etapa: fraccion}</code> y devuelva <code>(etapa, fraccion)</code> de la etapa dominante. Implementá también <code>max_speedup_amdahl(frac_par, p)</code>: la Ley de Amdahl <code>S = 1 / ((1 - P) + P / p)</code> con <code>P</code> la fracción paralelizable y <code>p</code> la cantidad de procesadores.</p>',
        starter: 'def cuello_de_botella(frac_tiempos):\n    # TODO: devolver (etapa, fraccion) de la etapa con más fracción\n    pass\n\ndef max_speedup_amdahl(frac_par, p):\n    # TODO: devolver 1 / ((1 - frac_par) + frac_par / p)\n    pass',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'La etapa dominante es la que más tiempo consume', code: "print(cuello_de_botella({'compilado': 0.7, 'otros': 0.3}))", mustEqual: "('compilado', 0.7)" },
          { name: 'Amdahl con P=0.7 y 4 procesadores', code: 'print(round(max_speedup_amdahl(0.7, 4), 2))', mustEqual: '2.11' },
          { name: 'Amdahl con P=0.9 y 10 procesadores', code: 'print(round(max_speedup_amdahl(0.9, 10), 2))', mustEqual: '5.26' }
        ],
        solution: 'def cuello_de_botella(frac_tiempos):\n    dominante = max(frac_tiempos, key=frac_tiempos.get)\n    return dominante, frac_tiempos[dominante]\n\ndef max_speedup_amdahl(frac_par, p):\n    if frac_par == 0:\n        return float(\'inf\')\n    return 1 / ((1 - frac_par) + frac_par / p)',
        solutionExp: '<p>Con <code>P = 0.7</code> y 4 procesadores: <code>S = 1 / (0.3 + 0.175) ≈ 2.11</code>, lejos de 4: la parte secuencial (30%) pone el techo. Con <code>P = 0.9</code> y 10 procesadores: <code>S ≈ 5.26</code>. Optimizar la etapa dominante (70% del tiempo) es donde más se gana, no la más fácil.</p>',
        hints: ['<code>max(d, key=d.get)</code> devuelve la clave con el mayor valor.', 'Redondear a 2 decimales antes de comparar: <code>round(x, 2)</code>.']
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
      { type: 'code', t: '¿Qué imprime el siguiente código?\n```\nprint(round(1 / ((1 - 0.7) + 0.7 / 4), 2))\n```', opts: ['2.11', '2.50', '4.00', '0.48'], ans: 0, exp: '`1 / (0.3 + 0.175) = 1 / 0.475 ≈ 2.11`: el techo de Amdahl con 4 procesadores.' }
    ]
  };
})();