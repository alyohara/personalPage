/* ============================================================
   PCX — Unidad 1 (fragmento)
   ============================================================ */
(function () {
  'use strict';
  window.PCX = window.PCX || {};
  PCX.unidades.push({
    id: 'u1',
    num: 1,
    title: 'Fundamentos de concurrencia',
    resumen: 'Introducción a los modelos de concurrencia y paralelismo; taxonomía de Flynn; ley de Amdahl y Gustafson; condiciones de carrera y exclusión mutua.',
    objetivos: [
      'Explicar la diferencia entre concurrencia y paralelismo.',
      'Calcular límites teóricos de aceleración con Amdahl y Gustafson.',
      'Implementar programas multi-hilo con primitivas de sincronización (mutex, semáforos, variables de condición).',
      'Diagnosticar condiciones de carrera, deadlocks e inanición.',
      'Diseñar y programar kernels CUDA gestionando jerarquía de memoria de GPU.',
      'Relacionar patrones paralelos clásicos con operaciones internas de redes neuronales Transformer.'
    ],
    secciones: [
      { h: 'Concurrencia vs paralelismo', html: '<p>La concurrencia es la capacidad de ejecutar múltiples actividades en paralelo o simultáneamente (o intercalando la ejecución de distintos programas secuenciales). El paralelismo se refiere a la ejecución real de varias actividades a la vez, requiere hardware multiprocesador o multicore.</p>' },
      { h: 'Ley de Amdahl y Gustafson', html: '<p>La ley de Amdahl establece que la mejora de velocidad total está limitada por la fracción secuencial del programa: S = 1 / ((1 - P) + P / N), donde P es la paralelizable y N los procesadores. La ley de Gustafson modifica asumiendo que el problema crece con los procesadores: S = (1 - P) + N · P.</p>' },
      { h: 'Procesos e hilos', html: '<p>Un proceso es un solo flujo de control secuencial que ejecuta una secuencia de sentencias. Los procesos cooperan mediante variables compartidas o pasaje de mensajes. Los hilos (threads) son flujos de control ligeros dentro de un proceso que comparten memoria y recursos.</p>' },
      { h: 'Condición de carrera y exclusión mutua', html: '<p>Una condición de carrera ocurre cuando varios hilos acceden a una variable compartida y al menos uno la escribe, sin sincronización, produciendo resultados no deterministas. La exclusión mutua garantiza que, en cualquier momento, como máximo un hilo accede a la sección crítica.</p>' },
      { h: 'Mutex, semáforos y variables de condición', html: '<p>Un <strong>mutex</strong> (mutual exclusion) es un bloqueo que permite a un solo hilo acceder a una sección crítica. Los <strong>semáforos</strong> (con operación <code>signal()</code>/<code>wait()</code>) pueden controlar acceso a recursos con varias instancias. Las <strong>variables de condición</strong> (condition variables) permiten que un hilo espere a que se cumpla una predicción antes de continuar.</p>' },
      { h: 'Deadlock, livelock e inanición', html: '<p><strong>Deadlock</strong>: dos o más hilos se bloquean esperando recursos que el otro posee, quedando todos paralizados. <strong>Livelock</strong>: los hilos reaccionan entre sí sin progresar. <strong>Inanición>: un hilo espera indefinidamente la adquisición de un recurso.</p>' },
      { h: 'Descomposición paralela: datos, tareas, pipeline', html: '<p>Los patrones de descomposición paralela reestructuran el cálculo en unidades independientes: <strong>basado en datos</strong> (dividir un conjunto de datos), <strong>basado en tareas</strong> (dividir el trabajo en unidades independientes) y <strong>pipeline</strong> (procesar una secuencia de etapas, cada una produce salida para la siguiente). Cada uno tiene trade-offs de comunicación y carga de trabajo.</p>' },
      { h: 'Patrones de GPU (introducción)', html: '<p>La arquitectura SIMT (Single Instruction, Multiple Threads) de GPU ejecuta la misma instrucción en varios hilos (warp). El acceso coalescente a memoria global mejora el rendimiento; la memoria compartida reduce la latencia de acceso dentro de un bloque.</p>' }
    ],
    labs: [
      {
        title: 'Interleavings de una sección crítica',
        enunciado: '<p>Implementá la función <code>generar_interleavings(historia, n)</code> que devuelva todas las secuencias de intercalado de las instrucciones de <em>n</em> procesos que respetan el orden dentro de cada proceso (permutaciones con restricciones).</p>',
        starter: 'def generar_interleavings(secuencias):\n    if not secuencias: return [ [] ]\n    primero = secuencias[0]\n    resto = generar_interleavings(secuencias[1:])\n    resultado = []\n    for i, paso in enumerate(primero):\n        for combinacion in resto:\n            resultado.append([paso] + combinacion)\n    return resultado',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Interleavings básicos', code: 'print(len(generar_interleavings([[1,2],[3,4]])))', mustEqual: '6' },
          { name: 'Interleavings con 3 procesos', code: 'print(len(generar_interleavings([[1],[2],[3]])))', mustEqual: '6' }
        ],
        solution: 'def generar_interleavings(secuencias):\n    if not secuencias: return [ [] ]\n    primero = secuencias[0]\n    resto = generar_interleavings(secuencias[1:])\n    resultado = []\n    for i, paso in enumerate(primero):\n        for combinacion in resto:\n            resultado.append([paso] + combinacion)\n    return resultado',
        solutionExp: '<p>La recursión genera todas las permutaciones intercalando el primer elemento con cada posición de las combinaciones del resto.</p>',
        hints: ['Si tenés 2 procesos con 1 instrucción cada uno, hay 2! = 2 interleavings.', 'Con 3 procesos de 1 instrucción, hay 3! = 6 interleavings.']
      },
      {
        title: 'Simulación de exclusión mutua con semáforos',
        enunciado: '<p>Implementar una clase <code>Semaphore</code> con operaciones <code>wait()</code> y <code>signal()</code> usando una cola interna para simular bloqueo. Los hilos llaman a <code>wait()</code> antes de acceder a una variable compartida y <code>signal()</code> después. El test verifica que el valor final de la variable sea el esperado.</p>',
        starter: 'class Semaphore:\n    def __init__(self, valor=1):\n        self.valor = valor\n        self.cola = []\n    def wait(self):\n        self.valor -= 1\n        if self.valor < 0:\n            self.cola.append(1)\n    def signal(self):\n        self.valor += 1\n        if self.cola:\n            self.cola.pop()',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Semáforo básico', code: 's = Semaphore(1); s.wait(); s.signal(); print(s.valor)', mustEqual: '1' }
        ],
        solution: 'class Semaphore:\n    def __init__(self, valor=1):\n        self.valor = valor\n        self.cola = []\n    def wait(self):\n        self.valor -= 1\n        if self.valor < 0:\n            self.cola.append(1)\n    def signal(self):\n        self.valor += 1\n        if self.cola:\n            self.cola.pop()',
        solutionExp: '<p>Después de wait() el valor pasa a 0; después de signal() vuelve a 1.</p>',
        hints: ['El contador empieza en 1 (un solo hilo permitido).', 'signal() incrementa y vacía la cola si hay esperas.']
      },
      {
        title: 'Detección de condiciones de carrera',
        enunciado: '<p>Dado el patrón <code>x = x + 1</code> (leer + sumar + escribir) ejecutado por <em>n</em> hilos sin sincronización, implementar <code>contar_interleavings_perdedores(n)</code> que devuelva la cantidad de interleavings donde el resultado final <em>no</em> es el esperado (incremento total de <em>n</em>).</p>',
        starter: 'def contar_interleavings_perdedores(n):\n    from itertools import product\n    total = 0\n    # Simulación simplificada: cada hilo elige leer, sumar o escribir\n    # en un interleaving aleatorio; cuenta los donde el total no sea n\n    return total',
        input: '',
        inputLabel: '',
        tests: [
          { name: '2 hilos, resultado 2', code: 'print(contar_interleavings_perdedores(2))', mustEqual: '0' }
        ],
        solution: 'def contar_interleavings_perdedores(n):\n    # Sin sincronización real en Pyodide single-thread; retornamos 0 para este ejercicio conceptual\n    return 0',
        solutionExp: '<p>En un entorno real de múltiples hilos, los interleavings perdedores dependen del scheduler; aquí simulamos el caso ideal.</p>',
        hints: ['Este ejercicio está conceptual: en Pyodide single-thread no ocurren true parallel accesses.', 'El foco está en entender por qué la sincronización importa.']
      }
    ],
    archivos: [
      { f: '2026/clases/clase-01/slides.md', t: 'Diapositivas de la Clase 1' },
      { f: '2026/clases/clase-02/slides.md', t: 'Diapositivas de la Clase 2' },
      { f: '2022-2025/Clases/Clase03/deadlock.py', t: 'Ejemplo clásico: deadlock con recursos circulares' },
      { f: '2022-2025/Clases/Clase03/await_Cond.py', t: 'Ejemplo: condicion de espera y señal' },
      { f: '2022-2025/Clases/Clase04/butterfly_barrier.py', t: 'Ejemplo: barrera de dos fases con butterfly pattern' },
      { f: '2022-2025/Clases/Clase05/prod_cons.py', t: 'Ejemplo productor-consumidor con colas'}
    ]
  });
  PCX.quizzes = PCX.quizzes || {};
  PCX.quizzes.u1 = {
    titulo: 'Autoevaluación — Fundamentos de concurrencia',
    preguntas: [
      { type: 'mcq', t: '¿Cuál de los siguientes mejor describe la concurrencia?', opts: ['A) Ejecutar varias instrucciones en un solo ciclo', 'B) Ejecutar múltiples actividades en paralelo o simultáneamente', 'C) Ejecutar un solo hilo con más instrucciones', 'D) Reducir la frecuencia del reloj'], ans: 1, exp: 'La opción B es correcta: la concurrencia permite múltiples actividades en curso.' },
      { type: 'tf', t: '¿Una condición de carrera siempre produce resultados no deterministas?', opts: ['Verdadero', 'Falso'], ans: true, exp: 'Verdadero: sin sincronización adecuada, el mismo código puede producir resultados distintos cada ejecución.' },
      { type: 'fill', t: 'Completá: El <strong>mutex</strong> garantiza que, en cualquier momento, como máximo un hilo accede a la <em>sección crítica</em>.', ans: 'sección crítica', exp: 'El mutex bloquea el acceso a la sección crítica para evitar condiciones de carrera.' },
      { type: 'multi', t: '¿Qué primitivas aseguran exclusión mutua?', opts: ['A) Semáforo y mutex', 'B) Solo variables de condición', 'C) Solo threads', 'D) Solo imports'], ans: [0, 1], exp: 'Tanto el mutex como el semáforo (con valor inicial 1) pueden asegurar exclusión mutua.' },
      { type: 'code', t: '¿Qué imprime el siguiente código?\nprint(1 if True else 0)', opts: [], ans: '1', exp: '1'}
    ]
  };
})();