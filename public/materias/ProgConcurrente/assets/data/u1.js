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
        title: 'Interleavings de procesos',
        enunciado: '<p>Cuando varios procesos corren en una misma CPU, sus instrucciones se <strong>intercalan</strong> respetando el orden interno de cada proceso. Implementá <code>generar_interleavings(secuencias)</code>, que devuelva <em>todos</em> los intercalados posibles: para <code>[[1], [2]]</code> hay 2 (<code>[[1, 2], [2, 1]]</code>); para tres procesos de una instrucción hay 6 (3!).</p>',
        setup: 'def intercalar_dos(a, b):\n    if not a:\n        return [list(b)]\n    if not b:\n        return [list(a)]\n    resultado = []\n    for cola in intercalar_dos(a[1:], b):\n        resultado.append([a[0]] + cola)\n    for cola in intercalar_dos(a, b[1:]):\n        resultado.append([b[0]] + cola)\n    return resultado',
        starter: 'def generar_interleavings(secuencias):\n    resultado = [[]]\n    # TODO: para cada secuencia, intercalarla con cada intercalado acumulado\n    return resultado',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Dos procesos de dos instrucciones', code: 'print(len(generar_interleavings([[1, 2], [3, 4]])))', mustEqual: '6' },
          { name: 'Tres procesos de una instrucción', code: 'print(len(generar_interleavings([[1], [2], [3]])))', mustEqual: '6' },
          { name: 'Los dos intercalados de [[1], [2]]', code: 'print(generar_interleavings([[1], [2]]))', mustEqual: '[[1, 2], [2, 1]]' }
        ],
        solution: 'def generar_interleavings(secuencias):\n    resultado = [[]]\n    for seq in secuencias:\n        nuevo = []\n        for acum in resultado:\n            for inter in intercalar_dos(acum, seq):\n                nuevo.append(inter)\n        resultado = nuevo\n    return resultado',
        solutionExp: '<p>Se arranca con el intercalado vacío y se va <em>plegando</em>: cada nueva secuencia se intercala (con <code>intercalar_dos</code>, ya definida en el setup) con todos los intercalados acumulados. Dos secuencias de 2 instrucciones dan C(4,2) = 6 intercalados; tres de una instrucción dan 3! = 6.</p>',
        hints: ['<code>intercalar_dos</code> ya está definida en el setup: devuelve la lista de todos los intercalados de dos secuencias.', 'El plegado es un bucle: <code>resultado = [inter para cada acum, para cada inter en intercalar_dos(acum, seq)]</code>.']
      },
      {
        title: 'Semáforo con cola de espera',
        enunciado: '<p>Un semáforo tiene un contador y una cola de procesos bloqueados. <code>wait()</code> decrementa el contador y, si queda negativo, encola al proceso; <code>signal()</code> incrementa y desencola. Implementá la clase <code>Semaphore</code> con ese comportamiento.</p>',
        starter: 'class Semaphore:\n    def __init__(self, valor=1):\n        self.valor = valor\n        self.cola = []\n\n    def wait(self):\n        # TODO: decrementar self.valor y encolar si quedó negativo\n        pass\n\n    def signal(self):\n        # TODO: incrementar self.valor y desencolar si había espera\n        pass',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'wait y signal dejan el contador en 1', code: 's = Semaphore(1)\ns.wait()\ns.signal()\nprint(s.valor)', mustEqual: '1' },
          { name: 'Dos waits sin signal dejan uno en cola', code: 's = Semaphore(1)\ns.wait()\ns.wait()\nprint(len(s.cola))', mustEqual: '1' }
        ],
        solution: 'class Semaphore:\n    def __init__(self, valor=1):\n        self.valor = valor\n        self.cola = []\n\n    def wait(self):\n        self.valor -= 1\n        if self.valor < 0:\n            self.cola.append(1)\n\n    def signal(self):\n        self.valor += 1\n        if self.cola:\n            self.cola.pop()',
        solutionExp: '<p>Tras <code>wait()</code> el contador pasa a 0 (recurso ocupado, nadie en cola); un segundo <code>wait()</code> lo lleva a -1 y encola al proceso. <code>signal()</code> devuelve el contador y libera al primero de la cola.</p>',
        hints: ['La cola crece solo cuando <code>self.valor &lt; 0</code> después de decrementar.', '<code>signal()</code> desencola solo si la cola no está vacía.']
      },
      {
        title: 'Lost update: cuántos interleavings pierden el incremento',
        enunciado: '<p>El clásico <strong>lost update</strong>: dos procesos hacen <code>x = x + 1</code> sobre una variable compartida <code>x</code> (que empieza en 0). Cada proceso ejecuta tres pasos: <code>r</code> (leer <code>x</code>), <code>i</code> (sumar 1 a su copia local), <code>w</code> (escribir la copia en <code>x</code>). En el setup ya tenés <code>intercalar_dos</code>, <code>generar_interleavings</code> y <code>simular(pasos)</code>, que corre un intercalado y devuelve el valor final de <code>x</code>. Implementá <code>contar_perdedores(procesos)</code>, que devuelva cuántos intercalados terminan con un <code>x</code> <em>distinto</em> del esperado (la cantidad de procesos).</p>',
        setup: 'def intercalar_dos(a, b):\n    if not a:\n        return [list(b)]\n    if not b:\n        return [list(a)]\n    resultado = []\n    for cola in intercalar_dos(a[1:], b):\n        resultado.append([a[0]] + cola)\n    for cola in intercalar_dos(a, b[1:]):\n        resultado.append([b[0]] + cola)\n    return resultado\n\ndef generar_interleavings(secuencias):\n    resultado = [[]]\n    for seq in secuencias:\n        nuevo = []\n        for acum in resultado:\n            for inter in intercalar_dos(acum, seq):\n                nuevo.append(inter)\n        resultado = nuevo\n    return resultado\n\ndef simular(pasos):\n    x = 0\n    local = {}\n    for proceso, op in pasos:\n        if op == \'r\':\n            local[proceso] = x\n        elif op == \'i\':\n            local[proceso] = local.get(proceso, 0) + 1\n        elif op == \'w\':\n            x = local.get(proceso, 0)\n    return x',
        starter: 'def contar_perdedores(procesos):\n    malos = 0\n    # TODO: generar todos los intercalados y contar los que simulan mal\n    return malos',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Ejecución serial siempre da 2', code: 'print(simular([(\'A\', \'r\'), (\'A\', \'i\'), (\'A\', \'w\'), (\'B\', \'r\'), (\'B\', \'i\'), (\'B\', \'w\')]))', mustEqual: '2' },
          { name: 'De 20 intercalados, 18 pierden el incremento', code: 'print(contar_perdedores([[(\'A\', \'r\'), (\'A\', \'i\'), (\'A\', \'w\')], [(\'B\', \'r\'), (\'B\', \'i\'), (\'B\', \'w\')]]))', mustEqual: '18' }
        ],
        solution: 'def contar_perdedores(procesos):\n    malos = 0\n    for inter in generar_interleavings(procesos):\n        if simular(inter) != len(procesos):\n            malos += 1\n    return malos',
        solutionExp: '<p>Hay C(6,3) = 20 intercalados posibles. Solo 2 dejan <code>x = 2</code> (los totalmente seriales: todo A y luego todo B, o viceversa). Los otros <strong>18</strong> tienen al menos una lectura antes de la escritura rival, así que algún incremento se pierde y <code>x</code> queda en 1. Sin exclusión mutua, el resultado es no determinista y casi siempre wrong.</p>',
        hints: ['Reutilizá <code>generar_interleavings</code> y <code>simular</code> del setup: solo te falta contar.', 'El valor esperado es <code>len(procesos)</code>: cada proceso aporta un incremento.']
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
      { type: 'code', t: '¿Qué imprime el siguiente código?\n```\nprint(1 if True else 0)\n```', opts: ['0', '1', 'True', 'Error de sintaxis'], ans: 1, exp: 'La condición `True` es verdadera, así que `print` recibe `1`.' }
    ]
  };
})();