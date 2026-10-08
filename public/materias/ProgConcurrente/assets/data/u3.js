/* ============================================================
   PCX — Unidad 3 (fragmento)
   ============================================================ */
(function () {
  'use strict';
  window.PCX = window.PCX || {};
  PCX.unidades.push({
    id: 'u3',
    num: 3,
    title: 'Paralelismo aplicado a modelos de lenguaje',
    resumen: 'Transformers como cómputo paralelo masivo; atención, matmuls; cuantización e inferencia local de LLMs; batching, streams y paralelismo de datos/modelo/tensor.',
    objetivos: [
      'Explicar Transformers como cómputo paralelo masivo (matmuls, atención).',
      'Describir cuantización (q8/int8, int4) y trade-offs precisión/velocidad.',
      'Instalar y ejecutar un LLM local con llama.cpp/Ollama.',
      'Medir métricas de rendimiento (tokens/segundo, latencia, uso memoria).',
      'Identificar paralelismo de datos, modelo, tensor y pipeline.',
      'Aplicar comunicación colectiva all-reduce a nivel conceptual.'
    ],
    secciones: [
      { h: 'Transformers como cómputo paralelo', html: '<p>Los Transformers operan como cómputo masivamente paralelo: los matmuls (multiplicación de matrices) y el mecanismo de atención permiten procesar secuencias de tokens en paralelo en GPUs.</p>' },
      { h: 'Cuantización e inferencia local', html: '<p>La cuantización reduce la precisión de los pesos (p. ej. de 32-bit float a 8-bit int), acelerando la inferencia y reduciendo uso de memoria con pérdida controlada de calidad.</p>' },
      { h: 'Inferencia con llama.cpp/Ollama', html: '<p>Instalar y ejecutar un LLM localmente brinda control sobre el hardware y privacidad; se usan <code>batching</code> (lotes de tokens) y <code>streams</code> para paralelismo.</p>' },
      { h: 'Paralelismo de datos y modelo', html: '<p>El paralelismo de datos divide el lote de entrada entre varias GPUs; el paralelismo de modelo divide el modelo en partições. El paralelismo de tensor y pipeline son variantes avanzadas.</p>' },
      { h: 'All-reduce y comunicación colectiva', html: '<p>All-reduce combina resultados de todas las GPU/ procesos (p. ej. suma o máximo) y es fundamental para el entrenamiento distribuido de LLMs.</p>' }
    ],
    labs: [
      {
        title: 'Cuantización int8',
        enunciado: '<p>Implementar <code>cuantizar(v, bits=8)</code> que devuelva (valores_cuantizados, escala) y <code>descuantizar(valores, escala)</code> que recupere una aproximación. Tests con vector conocido y error relativo dentro de umbral.</p>',
        starter: 'def cuantizar(v, bits=8):\n    import numpy as np\n    max_abs = max(abs(v))\n    escala = (2**(bits-1)-1) / max_abs if max_abs else 1\n    q = np.clip(np.round(v * escala), -(2**(bits-1)), 2**(bits-1)-1).astype(int)\n    return q, escala\n\ndef descuantizar(q, escala):\n    return q.astype(float) / escala',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Vector básico', code: 'v,q,e = cuantizar([-3.0,-1.0,0.0,2.0,8.5]); print(round(descuantizar(q,e)[0],2))', mustEqual: '[ -3.0  -1.   0.   2.   8.43]'}
        ],
        solution: 'def cuantizar(v, bits=8):\n    import numpy as np\n    max_abs = max(abs(v))\n    escala = (2**(bits-1)-1) / max_abs if max_abs else 1\n    q = np.clip(np.round(v * escala), -(2**(bits-1)), 2**(bits-1)-1).astype(int)\n    return q, escala\n\ndef descuantizar(q, escala):\n    return q.astype(float) / escala',
        solutionExp: '<p>El vector reconstruido debería coincidir con el original dentro del error de cuantización.</p>',
        hints: ['Usá <code>numpy</code> para operaciones vectorizadas.', 'El escalado asegura que los valores cabúquen en el rango del tipo entero elegido.']
      }
    ],
    archivos: [
      { f: '2026/clases/clase-08/slides.md', t: 'Diapositivas de la Clase 8' },
      { f: '2026/clases/clase-09/slides.md', t: 'Diapositivas de la Clase 9' },
      { f: '2026/clases/clase-10/slides.md', t: 'Diapositivas de la Clase 10' },
      { f: '2026/proyecto/hito-3/README.md', t: 'README del Hito 3 (instalación LLM)'}
    ]
  });
  PCX.quizzes = PCX.quizzes || {};
  PCX.quizzes.u3 = {
    titulo: 'Autoevaluación — Paralelismo y modelos de lenguaje',
    preguntas: [
      { type: 'mcq', t: '¿Qué es la cuantización en el contexto de LLMs?', opts: ['A) Aumentar la precisión de los pesos', 'B) Reducir la precisión de los pesos para acelerar la inferencia', 'C) Añadir capas extra al modelo', 'D) Cambiar la función de activación'], ans: 1, exp: 'La opción B es correcta: la cuantización reduce la precisión (p. ej. a 8-bit) para acelerar y ahorrar memoria.' },
      { type: 'tf', t: '¿La cuantización siempre degrada significativamente la calidad del modelo?', opts: ['Verdadero', 'Falso'], ans: false, exp: 'Falso: con una cuantización adecuada (p. ej. q8) la pérdida de calidad es a menudo imperceptible mientras se obtienen importantes ganancias de velocidad.' },
      { type: 'fill', t: 'Completá: <code>batching</code> permite procesar <em>lotes</em> de tokens juntos, mejorando el throughput (tokens/segundo).', ans: 'lotes', exp: 'El batching agrupa múltiples solicitudes de tokens para procesarlas en paralelo, aumentando el rendimiento.' },
      { type: 'code', t: '¿Qué imprime el siguiente código?\nprint(round(8.432, 2))', opts: [], ans: '8.43', exp: '8.43'}
    ]
  };
})();