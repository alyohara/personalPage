/* ============================================================
   PCX — Unidad 2 (fragmento)
   ============================================================ */
(function () {
  'use strict';
  window.PCX = window.PCX || {};
  PCX.unidades.push({
    id: 'u2',
    num: 2,
    title: 'Programación GPU con CUDA',
    resumen: 'Arquitectura GPU y modelo SIMT: grid, bloques, hilos y warps; jerarquía de memoria, coalescencia y los patrones paralelos clásicos (reducción, scan, tiling) con CUDA.',
    objetivos: [
      'Explicar el modelo SIMT y la divergencia de control dentro de un warp.',
      'Calcular índices globales (grid / bloque / hilo) para cualquier lanzamiento de kernel.',
      'Gestionar la jerarquía de memoria: global, compartida, registros y constante.',
      'Diseñar accesos coalescentes a memoria global y detectar patrones que la penalizan.',
      'Implementar reducción, scan e histograma como patrones paralelos en GPU.',
      'Aplicar tiling con memoria compartida en multiplicación de matrices y razonar sobre ocupación.'
    ],
    secciones: [
      {
        h: 'Por qué GPU: paralelismo masivo',
        html: '<p>Una CPU tiene pocos cores pero muy potentes, pensados para latencia baja y ejecución secuencial compleja. Una GPU tiene miles de cores simples diseñados para <strong>throughput</strong>: ejecutar la misma operación sobre muchísimos datos a la vez. Por eso el entrenamiento y la inferencia de LLMs, que consisten en enormes multiplicaciones de matrices, corren en GPUs.</p>' +
          '<p>El modelo de programación CUDA expone esa paralelismo masivo: el programador escribe un <strong>kernel</strong> (una función que corre en la GPU) y lo lanza indicando cuántos bloques y cuántos hilos por bloque quiere. La GPU se encarga de mapear esos hilos a sus cores físicos.</p>'
      },
      {
        h: 'Modelo SIMT y divergencia de control',
        html: '<p>CUDA ejecuta hilos agrupados en <strong>warps</strong> de 32 hilos. Todos los hilos de un warp ejecutan la <em>misma instrucción</em> en el mismo ciclo (SIMT: Single Instruction, Multiple Threads), cada uno con sus propios registros.</p>' +
          '<p>Cuando los hilos de un warp toman caminos distintos en un <code>if</code> (divergencia de control), el warp ejecuta <em>ambas ramas</em> y enmascara los hilos que no corresponden: el trabajo se duplica. La regla práctica es mantener a los hilos de un warp lo más alineados posible en sus decisiones.</p>'
      },
      {
        h: 'Jerarquía de ejecución: grid, bloque, hilo',
        html: '<p>El lanzamiento de un kernel organiza el trabajo en una <strong>grid</strong> de <strong>bloques</strong>, y cada bloque en <strong>hilos</strong>. Cada hilo conoce su posición con tres variables built-in: <code>blockIdx</code> (índice del bloque), <code>blockDim</code> (tamaño del bloque) y <code>threadIdx</code> (índice del hilo dentro del bloque). Con ellas se calcula el índice global y cada hilo procesa su porción de datos.</p>',
        code: `// Índice global del hilo en el grid
int idx = blockIdx.x * blockDim.x + threadIdx.x;
if (idx < n) {
    c[idx] = a[idx] + b[idx];   // cada hilo suma un elemento
}`
      },
      {
        h: 'Coalescencia de accesos',
        html: '<p>La memoria global de la GPU se lee en <strong>transacciones</strong> de 32 (o 128) bytes. Cuando los 32 hilos de un warp leen direcciones <em>contiguas</em>, el hardware fusiona todo en una o dos transacciones: eso es un acceso <strong>coalescente</strong>. Si los hilos leen direcciones separadas por un stride, cada acceso puede consumir una transacción completa y el rendimiento se desploma.</p>',
        code: `// Coalescente: el hilo i lee a[i] (direcciones contiguas)
float v = a[threadIdx.x + blockIdx.x * blockDim.x];

// No coalescente: stride 2, se desperdicia la mitad del ancho de banda
float v = a[2 * (threadIdx.x + blockIdx.x * blockDim.x)];`
      },
      {
        h: 'Patrones paralelos: reducción en árbol',
        html: '<p>Sumar N valores de forma secuencial tiene profundidad O(N). La <strong>reducción en árbol</strong> suma pares, luego pares de pares, y así sucesivamente: la profundidad baja a O(log N) porque en cada paso trabajan la mitad de los hilos. Es el patrón base de sums, máximos y histogramas en GPU.</p>',
        code: `__global__ void reducir(float *entrada, float *salida, int n) {
    extern __shared__ float parcial[];
    int tid = threadIdx.x;
    int idx = blockIdx.x * blockDim.x + tid;

    // Carga al bloque (memoria compartida)
    parcial[tid] = (idx < n) ? entrada[idx] : 0.0f;
    __syncthreads();

    // Reducción en árbol dentro del bloque
    for (int paso = blockDim.x / 2; paso > 0; paso >>= 1) {
        if (tid < paso) {
            parcial[tid] += parcial[tid + paso];
        }
        __syncthreads();
    }

    if (tid == 0) {
        salida[blockIdx.x] = parcial[0];  // resultado del bloque
    }
}`
      },
      {
        h: 'Scan (suma de prefijos)',
        html: '<p>El <strong>scan</strong> calcula, para cada posición <em>i</em>, la suma (o cualquier operación asociativa) de todos los elementos anteriores. El scan <em>exclusivo</em> devuelve la suma de los elementos anteriores a <em>i</em> (sin incluirlo); el <em>inclusivo</em> lo incluye. Sirve para ordenar (radix sort), comprimir streams y construir histogramas, y se implementa en O(log N) pasos con el algoritmo de Blelloch.</p>'
      },
      {
        h: 'Multiplicación de matrices con tiling',
        html: '<p>En una multiplicación de matrices naive, cada elemento de resultado relee filas y columnas enteras de memoria global: O(N³) accesos. Con <strong>tiling</strong>, se copia un bloque (tile) de cada matriz a <strong>memoria compartida</strong> una sola vez y desde ahí se hacen todos los productos parciales del tile: los accesos a memoria global bajan a O(N³ / T) con tile T×T.</p>',
        code: `#define TILE 16

__global__ void matmul_tiled(float *a, float *b, float *c, int n) {
    __shared__ float tileA[TILE][TILE];
    __shared__ float tileB[TILE][TILE];

    int fila = blockIdx.y * TILE + threadIdx.y;
    int col  = blockIdx.x * TILE + threadIdx.x;
    float suma = 0.0f;

    for (int t = 0; t < n / TILE; ++t) {
        tileA[threadIdx.y][threadIdx.x] = a[fila * n + t * TILE + threadIdx.x];
        tileB[threadIdx.y][threadIdx.x] = b[(t * TILE + threadIdx.y) * n + col];
        __syncthreads();

        for (int k = 0; k < TILE; ++k) {
            suma += tileA[threadIdx.y][k] * tileB[k][threadIdx.x];
        }
        __syncthreads();
    }

    if (fila < n && col < n) {
        c[fila * n + col] = suma;
    }
}`
      },
      {
        h: 'Ocupación y tamaño de bloque',
        html: '<p>La <strong>ocupación</strong> mide cuántos warps activos tiene el multiprocesador en un momento dado. Los limites vienen de los <strong>registros por hilo</strong>, la <strong>memoria compartida por bloque</strong> y el máximo de hilos por bloque. Un bloque de 128 o 256 hilos (múltiplo de 32 = tamaño de warp) suele dar buena ocupación; bloques demasiado grandes pueden reducir la cantidad de bloques residentes y empeorar el ocultamiento de latencia.</p>'
      }
    ],
    labs: [
      {
        title: 'Mapeo de índices GPU',
        enunciado: '<p>Al lanzar un kernel hay que decidir cuántos bloques pedir. Implementá <code>asignar_bloques(total_hilos, hilos_por_bloque)</code>, que devuelve una lista de tuplas <code>(inicio, fin)</code> con el rango global de hilos de cada bloque. El último bloque puede quedar incompleto.</p>',
        starter: 'def asignar_bloques(total_hilos, hilos_por_bloque):\n    bloques = []\n    # TODO: recorrer de a hilos_por_bloque y guardar (inicio, fin)\n    return bloques',
        setup: '',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Caben todos en un bloque', code: 'print(len(asignar_bloques(233, 256)))', mustEqual: '1' },
          { name: 'Mil hilos en bloques de 64', code: 'print(len(asignar_bloques(1000, 64)))', mustEqual: '16' },
          { name: 'El primer bloque empieza en cero', code: 'print(asignar_bloques(256, 32)[0])', mustEqual: '(0, 32)' },
          { name: 'Bloque parcial al final', code: 'print(asignar_bloques(8, 16))', mustEqual: '[(0, 8)]' }
        ],
        solution: 'def asignar_bloques(total_hilos, hilos_por_bloque):\n    bloques = []\n    for inicio in range(0, total_hilos, hilos_por_bloque):\n        fin = min(inicio + hilos_por_bloque, total_hilos)\n        bloques.append((inicio, fin))\n    return bloques',
        solutionExp: '<p><code>range(0, total, por_bloque)</code> avanza de a <code>hilos_por_bloque</code>; <code>min</code> recorta el último bloque para que no se pase del total. Con 1000 hilos y bloques de 64 quedan 16 bloques (15 completos y uno de 40 hilos: 15×64 = 960, 960+40 = 1000).</p>',
        hints: ['Un bloque nunca puede tener más hilos que <code>hilos_por_bloque</code>, pero sí menos al final.', '¿Cuántos bloques necesitas para 1000 hilos con 64 por bloque? Pedí 15 y te quedan 40 hilos sin bloque.']
      },
      {
        title: 'Reducción en árbol',
        enunciado: '<p>La reducción en árbol suma elementos separados por un <code>paso</code> dado, achicando el array a la mitad (o menos) en cada ronda. Implementá <code>reducir_arbol(v, paso)</code>, que devuelve la lista donde cada elemento es <code>v[i] + v[i + paso]</code> para <code>i</code> saltando de <code>paso * 2</code> en <code>paso * 2</code>. Si no hay compañero a la derecha, el elemento pasa solo.</p>',
        starter: 'def reducir_arbol(v, paso):\n    resultado = []\n    # TODO: sumar v[i] con v[i + paso] para i en saltos de paso * 2\n    return resultado',
        setup: '',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Primer paso: pares adyacentes', code: 'print(reducir_arbol([1, 2, 3, 4], 1))', mustEqual: '[3, 7]' },
          { name: 'Segundo paso: queda el total', code: 'print(reducir_arbol([3, 7], 1))', mustEqual: '[10]' },
          { name: 'Paso 2 estilo mariposa', code: 'print(reducir_arbol([1, 2, 3, 4, 5, 6, 7, 8], 2))', mustEqual: '[4, 12]' },
          { name: 'Ocho unos se reducen a cuatro doses', code: 'print(reducir_arbol([1, 1, 1, 1, 1, 1, 1, 1], 1))', mustEqual: '[2, 2, 2, 2]' }
        ],
        solution: 'def reducir_arbol(v, paso):\n    resultado = []\n    for i in range(0, len(v), paso * 2):\n        if i + paso < len(v):\n            resultado.append(v[i] + v[i + paso])\n        else:\n            resultado.append(v[i])\n    return resultado',
        solutionExp: '<p>Cada ronda combina elementos distantes <code>paso</code>: con <code>[1,2,3,4]</code> y <code>paso=1</code> se suman (1+2) y (3+4) dando <code>[3,7]</code>; con <code>paso=2</code> sobre <code>[1..8]</code> se suman (1+3) y (5+7) dando <code>[4,12]</code>, que es el segundo nivel del árbol de reducción (mariposa).</p>',
        hints: ['El bucle avanza de <code>paso * 2</code> en <code>paso * 2</code> para no pisar pares ya sumados.', 'Si <code>i + paso</code> se sale del array, el elemento sobrevive solo a la siguiente ronda.']
      },
      {
        title: '¿Es coalescente?',
        enunciado: '<p>Un warp de 32 hilos lee memoria global. Si el <strong>stride</strong> entre los accesos consecutivos es 1, los 32 hilos tocan 32 direcciones contiguas: acceso <em>coalescente</em>. Implementá <code>clasificar_accesos(stride, n=8)</code>, que genere los índices <code>[0, stride, 2*stride, ...]</code> y devuelva <code>True</code> si el rango de memoria tocado (máximo − mínimo + 1) es igual a la cantidad de accesos (es decir, no hay huecos), o <code>False</code> en caso contrario.</p>',
        starter: 'def clasificar_accesos(stride, n=8):\n    indices = [i * stride for i in range(n)]\n    # TODO: calcular el rango tocado y compararlo con n\n    return False',
        setup: '',
        input: '',
        inputLabel: '',
        tests: [
          { name: 'Stride 1 es coalescente', code: 'print(clasificar_accesos(1))', mustEqual: 'True' },
          { name: 'Stride 2 no es coalescente', code: 'print(clasificar_accesos(2))', mustEqual: 'False' },
          { name: 'Stride 32 mucho menos', code: 'print(clasificar_accesos(32))', mustEqual: 'False' }
        ],
        solution: 'def clasificar_accesos(stride, n=8):\n    indices = [i * stride for i in range(n)]\n    rango = max(indices) - min(indices) + 1\n    return rango == n',
        solutionExp: '<p>Con <code>stride=1</code> los 8 accesos tocan 8 direcciones contiguas (rango 8 == 8 → <code>True</code>). Con <code>stride=2</code> tocan 0,2,4,...,14: un rango de 15 direcciones para 8 accesos, o sea la mitad del ancho de banda se desperdicia (<code>False</code>). Con <code>stride=32</code> el rango es 225 para 8 accesos: catastrófico.</p>',
        hints: ['El rango se calcula como <code>max(indices) - min(indices) + 1</code>.', 'Acceso coalescente ⇔ rango tocado == cantidad de accesos.']
      }
    ],
    archivos: [
      { f: '2026/clases/clase-05/slides.md', t: 'Diapositivas de la Clase 5 — GPU y CUDA' },
      { f: '2026/proyecto/hito-2/kernel_ingenuo.cu', t: 'Kernel CUDA ingenuo (Hito 2)' },
      { f: '2026/proyecto/hito-2/kernel_optimizado.cu', t: 'Kernel CUDA optimizado (Hito 2)' },
      { f: '2022-2025/ConcurrentGPUAlgorithms.ipynb', t: 'Notebook: algoritmos GPU concurrentes' },
      { f: '2022-2025/Clases/Clase04/suma_prefijos.py', t: 'Suma de prefijos (scan) en Python' }
    ]
  });
  PCX.quizzes = PCX.quizzes || {};
  PCX.quizzes.u2 = {
    titulo: 'Autoevaluación — Programación GPU con CUDA',
    preguntas: [
      { type: 'mcq', t: '¿Qué es un **warp** en CUDA?', opts: ['Un grupo de 4 hilos con instrucciones distintas', 'Un grupo de 32 hilos que ejecutan la misma instrucción al mismo tiempo', 'La memoria compartida de un bloque', 'Un bloque de la grid'], ans: 1, exp: 'Un warp son 32 hilos que ejecutan la misma instrucción en SIMT; es la unidad de planificación de la GPU.' },
      { type: 'tf', t: 'Un kernel de CUDA se ejecuta en la CPU y la GPU solo almacena datos.', opts: ['Verdadero', 'Falso'], ans: false, exp: 'Falso: el kernel es la función que se ejecuta *en la GPU*; la CPU (host) solo la lanza.' },
      { type: 'mcq', t: 'El índice global de un hilo se calcula como:', opts: ['`threadIdx.x * blockDim.x + blockIdx.x`', '`blockIdx.x * blockDim.x + threadIdx.x`', '`blockDim.x * gridDim.x`', '`threadIdx.x + blockIdx.x`'], ans: 1, exp: '`blockIdx.x * blockDim.x` da el desplazamiento del bloque y `threadIdx.x` el del hilo dentro del bloque.' },
      { type: 'fill', t: 'La memoria **compartida** es rápida y la comparten los hilos de un mismo ___', ans: ['bloque'], exp: 'La memoria compartida es la memoria on-chip que comparten todos los hilos de un mismo bloque.' },
      { type: 'mcq', t: 'Un acceso a memoria global es **coalescente** cuando:', opts: ['Los hilos del warp acceden a direcciones contiguas', 'Todos los hilos acceden a la misma dirección', 'El acceso usa stride 2', 'El kernel usa pocos bloques'], ans: 0, exp: 'Accesos contiguos de los 32 hilos del warp se fusionan en una o dos transacciones de memoria.' },
      { type: 'multi', t: '¿Qué factores limitan la **ocupación** de un kernel?', opts: ['Registros por hilo', 'Memoria compartida por bloque', 'Máximo de hilos por bloque', 'El color del tema del sitio'], ans: [0, 1, 2], exp: 'Los tres primeros son limites reales del hardware; el tema del sitio, lamentablemente, no.' },
      { type: 'code', t: '¿Qué vale `idx` si `blockIdx.x = 2`, `blockDim.x = 32` y `threadIdx.x = 5`?\n```\nint idx = blockIdx.x * blockDim.x + threadIdx.x;\n```', opts: ['37', '69', '74', '39'], ans: 1, exp: '`2 * 32 + 5 = 69`.' },
      { type: 'tf', t: 'La reducción en árbol baja la profundidad de la suma de O(N) a O(log N).', opts: ['Verdadero', 'Falso'], ans: true, exp: 'Verdadero: en cada ronda se combina la mitad de los elementos, así que la profundidad es logarítmica.' },
      { type: 'fill', t: 'Para que la ocupación sea buena, el tamaño de bloque suele ser múltiplo de ___ (el tamaño del warp)', ans: ['32'], exp: 'Los bloques de 64, 128 o 256 hilos (múltiplos de 32) alinean los warps y suelen dar buena ocupación.' }
    ]
  };
})();
