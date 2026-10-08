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
        enunciado: '<p>La cuantización reduce la precisión de los pesos para acelerar la inferencia. Implementá <code>cuantizar(v, bits=8)</code>, que devuelve <code>(q, escala)</code>: <code>escala</code> es el mayor valor entero positivo del tipo (por ejemplo 127 para 8 bits) dividido por el máximo valor absoluto del vector, y <code>q</code> es la lista de cada valor multiplicado por la escala y redondeado a entero. Implementá también <code>descuantizar(q, escala)</code>, que devuelve la lista de cada entero dividido por la escala.</p>',
        starter: 'def cuantizar(v, bits=8):\n    # TODO: calcular escala = (2**(bits-1) - 1) / max(abs(v))\n    # TODO: devolver (lista de round(x * escala), escala)\n    pass\n\ndef descuantizar(q, escala):\n    # TODO: devolver la lista de valores / escala\n    pass',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Vector cuantizado a int8', code: 'q, e = cuantizar([-3.0, -1.0, 0.0, 2.0, 8.5])\nprint(q)', mustEqual: '[-45, -15, 0, 30, 127]' },
          { name: 'Se recupera el primer valor', code: 'q, e = cuantizar([-3.0, -1.0, 0.0, 2.0, 8.5])\nprint(round(descuantizar(q, e)[0], 2))', mustEqual: '-3.01' },
          { name: 'Escala para 4 bits', code: 'q, e = cuantizar([1.0, 2.0, 3.0], 4)\nprint(round(e, 2))', mustEqual: '2.33' }
        ],
        solution: 'def cuantizar(v, bits=8):\n    max_abs = max(abs(x) for x in v)\n    escala = ((2 ** (bits - 1)) - 1) / max_abs if max_abs else 1.0\n    q = [int(round(x * escala)) for x in v]\n    return q, escala\n\ndef descuantizar(q, escala):\n    return [x / escala for x in q]',
        solutionExp: '<p>Con <code>max_abs = 8.5</code> y 8 bits, <code>escala = 127 / 8.5 ≈ 14.94</code>; así <code>-3.0 → -45</code>, <code>8.5 → 127</code>. Al descuantizar, <code>-45 / 14.94 ≈ -3.01</code>: se recupera el valor original con un error de redondeo pequeño, el trade-off de la cuantización.</p>',
        hints: ['<code>escala</code> mapea el valor absoluto más grande al tope del tipo: <code>2**(bits-1) - 1</code>.', 'Para 4 bits el tope es 7, no 127: <code>7 / 3 ≈ 2.33</code>.']
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
      { type: 'code', t: '¿Qué imprime el siguiente código?\n```\nprint(round(8.432, 2))\n```', opts: ['8.4', '8.43', '8.432', '8.40'], ans: 1, exp: '`round(8.432, 2)` redondea a 2 decimales: `8.43`.' }
    ]
  };
})();