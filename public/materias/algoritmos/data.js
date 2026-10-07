const T = "Algoritmos y Estructuras de Datos - Teorias";
const L = "Lectures-2022/Lectures-2022";

const units = [
  {
    id: 1,
    title: "Introduccion a los algoritmos",
    short: "Introduccion",
    summary: "Que es un algoritmo, sus propiedades y como resolver un problema con el metodo axiomatico antes de escribir codigo.",
    topics: [
      "Algoritmos: entrada, proceso y salida",
      "Propiedades: finitud, precision y verificabilidad",
      "Acciones primitivas, ambito y condiciones",
      "Analisis del problema: entrada esperada y casos de prueba",
      "Metodologia: analizar, disenar, implementar y probar",
      "Depuracion y pruebas de casos borde"
    ],
    tip: "Antes de escribir una sola linea de Python, anota los casos de entrada y la salida esperada de tu algoritmo.",
    theory: [
      "Un algoritmo es una secuencia finita y ordenada de pasos que transforma una entrada en una salida. Se define primero en lenguaje natural o pseudocodigo para concentrarse en la logica: que datos recibe, que operaciones realiza y que resultado devuelve, sin preocuparse todavia por la sintaxis de un lenguaje.",
      "Todo algoritmo debe cumplir propiedades basicas: finitud (terminar en un numero finito de pasos), precision (cada paso definido sin ambiguedad), entrada y salida claras, y efectividad (cada accion ser executable). En pseudocodigo las estructuras son las mismas que despues se traducen a Python: SECUENCIA para ordenar pasos, SI...ENTONCES...SINO para decisiones y MIENTRAS o PARA para repeticiones.",
      "Resolver un problema sigue cuatro pasos: analizar (entender que entra y que debe salir), disenar (elegir la estrategia y escribirla en pseudocodigo), implementar (pasarla a lenguaje) y probar con casos normales, borde y error. El pseudocodigo y el diagrama de flujo, vistos en el capitulo siguiente, son las dos formas habituales de escribir ese diseno antes de programar. Correr el algoritmo en mesa con valores a mano anticipa errores antes de ejecutar el programa."
    ],
    concepts: [
      "Entrada: datos que el algoritmo recibe del exterior.",
      "Proceso: operaciones, calculos y decisiones sobre esos datos.",
      "Salida: resultado observable y verificable.",
      "Una decision elige entre caminos segun una condicion; una repeticion ejecuta pasos mientras se cumpla una condicion.",
      "Finitud: el algoritmo siempre termina; precision: cada paso esta definido sin ambiguedad.",
      "Caso borde: situacion limite (lista vacia, valor negativo) que conviene probar siempre."
    ],
    caption: "Ejemplo: clasificar una temperatura sin pedir datos por teclado.",
    code: "temperatura = -3\n\nif temperatura < 0:\n    print('Bajo cero')\nelif temperatura <= 25:\n    print('Templado')\nelse:\n    print('Caluroso')",
    exercise: {
      title: "Clasificador de temperatura",
      prompt: "Escribi un algoritmo que reciba una temperatura e informe si esta bajo cero, en rango templado (0 a 25) o caluroso. Primero escribi el pseudocodigo y despues pasalo a Python.",
      solution: "temperatura = float(input('Temperatura: '))\n\nif temperatura < 0:\n    print('Bajo cero')\nelif temperatura <= 25:\n    print('Templado')\nelse:\n    print('Caluroso')"
    },
    extraExercises: [
      { title: "Subir en ascensor al piso X", prompt: "Escribir un algoritmo que suba en ascensor al piso X, determinando a criterio propio las acciones primitivas, suponiendo que quien realiza las acciones es un 'procesador inexperto' (Practica 1, ej. 1a).", solution: "piso_actual = 1\npiso_destino = 5\nwhile piso_actual < piso_destino:\n    print('Subo un piso')\n    piso_actual += 1\nprint('Abrir puerta y salir')" },
      { title: "Promedio de tres numeros", prompt: "Describir el procesamiento (ambito, acciones primitivas, condiciones) y el algoritmo para calcular el promedio de tres numeros utilizando una calculadora (Practica 1, ej. 2a).", solution: "a, b, c = 8, 6, 9\npromedio = (a + b + c) / 3\nprint('Promedio:', promedio)" },
      { title: "Numero palindromo", prompt: "Dado un numero de 2n + 1 cifras, decir si el mismo es palindromo o capicua (Practica 1, ej. 3a).", solution: "numero = '12321'\nif numero == numero[::-1]:\n    print('Es palindromo')\nelse:\n    print('No es palindromo')" }
    ],
    notes: [
      "Modelizacion: analizar el problema, generar una abstraccion y simplificar su expresion buscando requerimientos, datos y contexto (Introduccion parte 1).",
      "Etapas de la resolucion de problemas con computadoras: analizar, disenar, codificar y probar (Introduccion parte 1).",
      "Un lenguaje de programacion es un conjunto de simbolos y reglas sintacticas y semanticas que controlan el comportamiento de una maquina (Introduccion parte 1).",
      "Algoritmo: especificacion rigurosa de la secuencia de pasos para alcanzar un resultado deseado en un tiempo finito (Introduccion parte 1).",
      "Propiedades: finito, precision (cada paso sin ambiguedad), cero o mas entradas, una o mas salidas, eficacia y eficiencia (Introduccion parte 1).",
      "Eficacia: todas las operaciones deben poder realizarse con lapiz y papel; la eficiencia depende de que se optimice (tiempo, espacio, legibilidad) (Introduccion parte 1).",
      "Secuencia: la estructura de control mas simple; el orden de ejecucion coincide con el orden sintactico de aparicion (Introduccion parte 1).",
      "Repeticion: el numero de vueltas es fijo y conocido de antemano; iteracion: el numero de vueltas es desconocido (Introduccion parte 1)."
    ],
    resources: [
      ["PDF", "Introduccion a la programacion (parte 1)", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase1-Introduccion-parte1.pdf`],
      ["PDF", "Ejercicios en clase", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase1-Ejercicios_en_Clase.pdf`]
    ],
  },
  {
    id: 2,
    title: "Pseudocodigo y diagramas de flujo",
    short: "Pseudocodigo y flujos",
    summary: "Representar el algoritmo antes de programar: pseudocodigo con sus estructuras basicas y modelado grafico con diagramas de flujo.",
    topics: [
      "Diagrama de flujo: representacion grafica del algoritmo",
      "Pseudocodigo: validez y caracteristicas",
      "Asignacion, Leer y Escribir",
      "Decision y seleccion: si...entonces y caso",
      "Repeticion: para...fin para y mientras...fin mientras",
      "Metodo axiomatico: entradas, salidas y proceso"
    ],
    tip: "Antes de codificar, apunta en lenguaje natural las entradas, la salida esperada y el proceso de transformacion del problema.",
    theory: [
      "Un diagrama de flujo representa la esquema grafica de un algoritmo: muestra graficamente los pasos a seguir para alcanzar la resolucion de un problema, con simbolos unidos por flechas que fijan el orden de ejecucion. El pseudocodigo describe el algoritmo con una serie de palabras lexicas y grammaticales referidas a los lenguajes de programacion, sin llegar a la rigidez de la sintaxis de estos ni a la fluidez del lenguaje coloquial.",
      "Las estructuras basicas del pseudocodigo son: asignacion (X := 10, X = 10 o X <- 10) para guardar un valor; leer(X) y escribir(X) para la entrada y la salida; decision (si condicion entonces ... si no ... fin si) para ramificar en dos alternativas; seleccion (seleccionar ... caso ... en otro caso) cuando las alternativas son varias; y repeticion con para...fin para (contador fijo de vueltas) o mientras...fin mientras (mientras la condicion sea cierta). Si la condicion del mientras es falsa al entrar, el cuerpo no se ejecuta ni una vez.",
      "Para escribir el algoritmo conviene seguir el metodo axiomatico: primero leer el enunciado y apuntar en lenguaje natural las entradas, la salida esperada y el proceso de transformacion; despues definir el ambito (las variables disponibles), las acciones primitivas que no se descomponen y las condiciones; recien ahi escribir el pseudocodigo o dibujar el diagrama de flujo, y finalmente traducirlo a Python. Las estructuras de control minimas que exige todo lenguaje son asignacion, decision e iteracion."
    ],
    concepts: [
      "Diagrama de flujo: representacion grafica del algoritmo con simbolos y flechas.",
      "Pseudocodigo: descripcion del algoritmo entre el lenguaje natural y la sintaxis.",
      "Asignacion: X := 10 guarda 10 en la variable X.",
      "Leer(X) toma datos de entrada; Escribir(X) los muestra en pantalla.",
      "Decision: si...entonces...si no...fin si ramifica; seleccion elige entre varios casos.",
      "Repeticion: para...fin para cuenta vueltas; mientras...fin mientras repite mientras la condicion sea cierta."
    ],
    caption: "Ejemplo: decision y repeticion del pseudocodigo traducidas a Python.",
    code: "# Pseudocodigo: LEER(numero); MIENTRAS numero > 0 ...\nnumero = 5\nfactorial = 1\nfor i in range(1, numero + 1):\n    factorial = factorial * i\nprint('Factorial de', numero, '=', factorial)\n\n# Decision: SI...ENTONCES...FIN SI\nn = 42\nif n == 0:\n    print('El numero es 0')\nelif n > 0:\n    print('Es positivo')\nelse:\n    print('Es negativo')",
    exercise: {
      title: "Mayor de tres numeros",
      prompt: "Disena el algoritmo (diagrama de flujo y/o pseudocodigo) que muestre el mayor de tres numeros enteros entrados por teclado, y despues pasalo a Python (Practica 1, ej. 5).",
      solution: "a, b, c = 12, 7, 25\n\nif a >= b and a >= c:\n    print('Mayor:', a)\nelif b >= c:\n    print('Mayor:', b)\nelse:\n    print('Mayor:', c)"
    },
    extraExercises: [
      { title: "Suma de pares entre 2 y 100", prompt: "Realizar el diagrama de flujo del algoritmo que calcula e imprime la suma de los numeros pares comprendidos entre 2 y 100 (Practica 1, ej. 7).", solution: "suma = 0\nfor n in range(2, 101, 2):\n    suma = suma + n\nprint('Suma de pares:', suma)" },
      { title: "Factorial de un numero", prompt: "Realizar el diagrama de flujo y/o pseudocodigo de un algoritmo que visualice el factorial de un numero (Practica 1, ej. 8).", solution: "numero = 6\nfactorial = 1\nfor i in range(1, numero + 1):\n    factorial = factorial * i\nprint(numero, '! =', factorial)" },
      { title: "Buzones de expedientes", prompt: "Un empleado recibe expedientes codificados con un digito (0 a 9) y debe depositarlos en los buzones A a J: 0 va al buzon A, 1 al B, y asi sucesivamente. Escribir el pseudocodigo que le indique en que buzon depositar cada expediente (Practica 2, ej. 8).", solution: "buzones = 'ABCDEFGHIJ'\nexpediente = 7\nprint('Expediente', expediente, '-> buzon', buzones[expediente])" },
      { title: "Media de numeros positivos", prompt: "Disenar el algoritmo que calcule la media de una serie de numeros positivos entrados por teclado; un valor igual a cero indica el fin del ingreso (Practica 1, ej. 6).", solution: "suma = 0\ncantidad = 0\nnumeros = [4, 7, 2, 0]\nfor n in numeros:\n    if n == 0:\n        break\n    suma += n\n    cantidad += 1\nprint('Media:', suma / cantidad)" }
    ],
    notes: [
      "El diagrama de flujo representa la esquema grafica de un algoritmo y muestra graficamente los pasos a seguir (Pseudocodigo-Diagramas).",
      "El pseudocodigo codifica con mayor agilidad, vale para cualquier lenguaje de programacion y mantiene la misma validez semantica (Pseudocodigo-Diagramas).",
      "Asignacion: X <- 10, X = 10 o X := 10; leer(X) para entrada y escribir(X) para salida (Pseudocodigo-Diagramas).",
      "Repeticion con contador: para I := 0 hasta 10 hacer ... fin para suma Y diez veces a X (Pseudocodigo-Diagramas).",
      "Decision anidada: si X <> 0 entonces ... si X > 0 entonces ... si no ... fin si (Pseudocodigo-Diagramas).",
      "Seleccion: seleccionar (edad) con casos y en otro caso; iteracion: mientras condicion ... fin mientras (Pseudocodigo-Diagramas).",
      "Metodo axiomatico: antes de codificar, apuntar en lenguaje natural las entradas, las salidas y el proceso de transformacion (Practica 1).",
      "Las estructuras de control minimas de todo lenguaje son asignacion, decision e iteracion (Introduccion parte 1)."
    ],
    resources: [
      ["PDF", "Pseudocodigo y diagramas de flujo (parte 2)", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase1-Pseudocodigo-Diagramas-parte2.pdf`],
      ["PDF", "Practica 1: diagramas de flujo", "Clase 1 / Practica", `${T}/Clase 1/Practica/Practica1.pdf`],
      ["PDF", "Practica 1 - resolucion", "Clase 1 / Practica", `${T}/Clase 1/Practica/Prog_I_TP1-R .pdf`],
      ["PDF", "Practica 2: pseudocodigo", "Clase 1 / Practica", `${T}/Clase 1/Practica/Prog_I_TP2.pdf`],
      ["PDF", "Practica 2 - resolucion", "Clase 1 / Practica", `${T}/Clase 1/Practica/Prog_I_TP2_RES.pdf`],
      ["PPTX", "Practica 1: diagramas y pseudocodigo", "Slides", `${L}/Lecture-01--03/slides/Clase1-Introduccion-parte1.pptx`]
    ],
  },
  {
    id: 3,
    title: "Sintaxis basica de Python",
    short: "Sintaxis basica",
    summary: "Variables, tipos basicos, operadores, entrada y salida, y la estructura de un programa Python.",
    topics: [
      "Identificadores, variables y asignacion",
      "Tipos: int, float, str y bool",
      "Operadores aritmeticos, de comparacion y logicos",
      "Indentacion, comentarios, input() y print()",
      "Cadenas: longitud, indexacion y f-strings",
      "De texto a numero: int(), float() y str()"
    ],
    tip: "Python no usa punto y coma ni llaves: la indentacion (espacios al inicio) define los bloques de codigo.",
    theory: [
      "Una variable es un nombre que referencia un objeto en memoria; el tipo lo determina el objeto, no la declaracion. Los operadores de comparacion (==, <, !=) devuelven bool, mientras que el operador = solo asigna valores. La funcion print() muestra resultados e input() lee texto desde el teclado, que casi siempre hay que convertir con int() o float().",
      "Python delimita los bloques con indentacion (4 espacios por convencion): lo que queda dentro de un if, for, while o def se anida un nivel mas y una indentacion incorrecta levanta IndentationError. Los identificadores comienzan con letra o guion bajo, nunca con un numero, y no pueden ser palabras reservadas como if, for o def. Los comentarios con # se ignoran al ejecutar.",
      "Los tipos basicos son int, float, str y bool. Los operadores aritmeticos (+, -, *, /, //, %, **) respetan la precedencia matematica, la division / siempre devuelve flotante y // trunca hacia abajo. Las comparaciones devuelven bool, no numeros. Ojo con input(): siempre devuelve cadena, hay que convertir con int() o float() antes de operar, y con str() para concatenar."
    ],
    concepts: [
      "= asigna; == compara valores.",
      "La division / siempre devuelve flotante; // devuelve la division entera.",
      "Los comentarios comienzan con # y el interprete los ignora.",
      "Los bloques se delimitan por indentacion, no por caracteres especiales.",
      "input() siempre entrega str: convertir con int() o float() antes de calcular.",
      "f'Texto {variable}' (f-string) incrusta valores dentro de una cadena."
    ],
    caption: "Ejemplo: variables, tipos y operaciones basicas.",
    code: "nombre = 'UNaB'\nanio = 2022\nmaterias = ['Algoritmos', 'Estructuras']\n\nprint(nombre, type(nombre))\nprint('Anio que viene:', anio + 1)\nprint('Primera materia:', materias[0])\nprint('Cantidad:', len(materias))\nprint('7 // 2 =', 7 // 2, '| 7 / 2 =', 7 / 2)",
    exercise: {
      title: "Calculadora de promedio",
      prompt: "Leer tres notas (podes hardcodearlas o usar input) y mostrar el promedio y si el alumno aprobo (promedio >= 4).",
      solution: "nota1 = 7\nnota2 = 5\nnota3 = 6\n\npromedio = (nota1 + nota2 + nota3) / 3\nprint('Promedio:', promedio)\n\nif promedio >= 4:\n    print('Aprobado')\nelse:\n    print('Desaprobado')"
    },
    extraExercises: [
      { title: "Sala del cine", prompt: "Asistir a un empleado de cine: segun el numero de la entrada (3 digitos) enviar a la audiencia a la Sala 1 si es par o a la Sala 2 si es impar; si el numero es 000 pedir que se dirija a administracion (Ej. 9, sintaxis).", solution: "n = int(input('Numero de entrada: '))\n\nif n == 0:\n    print('Dirigirse a administracion')\nelif n % 2 == 0:\n    print('Sala 1')\nelse:\n    print('Sala 2')" },
      { title: "Todos los divisores", prompt: "Pedir un numero entero estrictamente mayor a 1 y devolver todos sus divisores (Practica 2, ej. 10).", solution: "n = int(input('Numero: '))\ndivisores = []\nfor i in range(1, n + 1):\n    if n % i == 0:\n        divisores.append(i)\nprint('Divisores:', divisores)" },
      { title: "Segundos a H:M:S", prompt: "Desarrollar un programa que convierta una cantidad entera de segundos al formato HORAS:MINUTOS:SEGUNDOS (Practica 2, ej. 8).", solution: "segundos = 3671\nhoras = segundos // 3600\nminutos = (segundos % 3600) // 60\nseg = segundos % 60\nprint(f'{horas:02}:{minutos:02}:{seg:02}')" },
      { title: "Par o impar", prompt: "Programa que permite saber si un numero ingresado por teclado es par o impar, tanto positivo como negativo (Practica 2, ej. 11).", solution: "n = -7\nif n % 2 == 0:\n    print(n, 'es par')\nelse:\n    print(n, 'es impar')" }
    ],
    notes: [
      "Python es un lenguaje de programacion de alto nivel e interprete; en la catedra se sugiere la version 3.8 por compatibilidad (Syntaxis_Basica).",
      "Operadores aritmeticos: +, -, *, /, // (cociente de la division), % (resto) y ** (potencia) (Syntaxis_Basica).",
      "El operador or es perezoso: si la primera expresion es verdadera no evalua la segunda (Syntaxis_Basica).",
      "El tipo de la variable se asigna dinamicamente segun el valor; se convierte con int(), float() o complex() (Syntaxis_Basica).",
      "El salto de linea termina la orden, la barra invertida continu la linea y # comenta hasta el fin de linea (Syntaxis_Basica).",
      "if, elif y else terminan con dos puntos y deben compartir la misma indentacion (Syntaxis_Basica).",
      "while exige una condicion de corte; for recorre contenedores y con enumerate se tienen indice y valor; break interrumpe el ciclo (Syntaxis_Basica).",
      "print acepta sep y end; input siempre devuelve una cadena; help() muestra la documentacion de una funcion (Syntaxis_Basica)."
    ],
    resources: [
      ["IPYNB", "Sintaxis basica de Python", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase_1_Syntaxis_Basica.ipynb`],
      ["IPYNB", "Ejercicios de sintaxis", "Clase 3 / Practica", `${T}/Clase 3/Practica/Clase1_Exercises.ipynb`],
      ["PDF", "Practica 2: expresiones y control", "Clase 2 / Practica", `${T}/Clase 2/Practica/Practica2.pdf`],
      ["TXT", "Ejercicios de parcial con solucion", "Material de parcial", `${L}/MIX/ejercicios python parcial.txt`]
    ],
  },
  {
    id: 4,
    title: "Tipos de datos y contenedores",
    short: "Datos y contenedores",
    summary: "Representacion de datos y uso de listas, tuplas, conjuntos, diccionarios y comprensiones.",
    topics: [
      "Mutabilidad e inmutabilidad",
      "Listas y tuplas: indices, slicing y metodos",
      "Conjuntos: sin repetidos, operaciones de pertenencia",
      "Diccionarios: clave/valor y comprension de listas",
      "Indexacion desde 0 y slicing lista[a:b]",
      "Referencias vs copias y comprensiones"
    ],
    tip: "Elegir el contenedor correcto simplifica el algoritmo: lista para orden, conjunto para pertenencia, diccionario para clave/valor.",
    theory: [
      "Los contenedores agrupan valores y se eligen segun que importa: si el orden (lista, tupla), si hay repetidos (conjunto) o si se accede por una clave (diccionario). Las listas son mutables, las tuplas y las cadenas no; los conjuntos y diccionarios asocian elementos unicos, los primeros sin posicion y los segundos con clave propia.",
      "Las posiciones arrancan en 0 y el indice -1 refiere al ultimo elemento. El slicing lista[a:b] toma desde a hasta b sin incluir b, y un tercer termino lista[a:b:c] fija el paso. Como cadenas y tuplas son inmutables, operar sobre ellas devuelve una copia nueva; en cambio los metodos de la lista (append, insert, pop, sort) modifican el original.",
      "En un diccionario se itera con items() para recorrer clave y valor, y las claves deben ser unicas e inmutables (str, int o tupla). Los conjuntos responden rapido la pregunta 'esta elemento?' y ofrecen union |, interseccion & y diferencia -. Ojo con las referencias: b = a no copia la lista sino que apunta a la misma; para una copia independiente hay que usar b = a.copy()."
    ],
    concepts: [
      "Lista: ordenada, mutable, admite repetidos.",
      "Tupla: ordenada e inmutable; ideal para datos fijos como coordenadas.",
      "Conjunto: elementos unicos sin posicion; consulta de pertenencia en O(1).",
      "Diccionario: asocia claves unicas con valores; se accede por clave.",
      "lista[a:b] devuelve un fragmento; el limite b no se incluye.",
      "b = a crea un alias; b = a.copy() crea una copia independiente."
    ],
    caption: "Ejemplo: contenedores y operaciones de pertenencia.",
    code: "productos = ['lapiz', 'regla', 'lapiz', 'cuaderno']\ndistintos = set(productos)\n\nprint('Todos:', productos)\nprint('Sin repetidos:', distintos)\nprint('Cantidad:', len(distintos))\n\nprecios = {'lapiz': 150, 'cuaderno': 900}\nprint('Precio lapiz:', precios['lapiz'])\nprint('Tupla inmutable:', (1, 2, 3))",
    exercise: {
      title: "Inventario sin repetidos",
      prompt: "A partir de una lista de productos repetidos, obtene el conjunto de productos distintos, cuantos hay y si 'lapiz' esta en el inventario.",
      solution: "productos = ['lapiz', 'regla', 'lapiz', 'cuaderno', 'regla']\ndistintos = set(productos)\n\nprint('Distintos:', distintos)\nprint('Cantidad:', len(distintos))\nprint('Tiene lapiz?', 'lapiz' in distintos)"
    },
    extraExercises: [
      { title: "Potencias de 2 por comprension", prompt: "Generar por comprension la lista [1, 2, 4, 8, 16, 32, 64, 128, 256] (Contenedores, ej. 2).", solution: "L = [2**x for x in range(0, 9)]\nprint(L)" },
      { title: "Escalerita de asteriscos", prompt: "Utilizando estructuras de control, imprimir la salida donde cada linea tiene un espacio mas antes del asterisco (Practica 2, ej. 5b).", solution: "for i in range(1, 6):\n    print(' ' * (i - 1) + '*')" },
      { title: "Menor cantidad de billetes", prompt: "Ingresar una cantidad de dinero en pesos (entera) y devolver la menor cantidad de billetes de 100, 50, 20, 10, 5, 2 y monedas de 1 posibles (Practica 2, ej. 7).", solution: "dinero = 387\nbilletes = [100, 50, 20, 10, 5, 2, 1]\nfor b in billetes:\n    print(b, 'x', dinero // b)\n    dinero = dinero % b" }
    ],
    notes: [
      "Un string es una secuencia ordenada de caracteres; los indices comienzan en 0, admiten indices negativos y len() devuelve la longitud (Clase_5_Contenedores).",
      "Los strings son inmutables: c[2] = 's' esta prohibido; + concatena y 'in' chequea pertenencia (Clase_5_Contenedores).",
      "Metodos de string: c*n replica n copias, find da el primer indice, count cuenta, replace reemplaza y format inserta valores (Clase_5_Contenedores).",
      "Las tuplas se definen entre parentesis, son inmutables y sus metodos son count(obj) e index(obj) (Clase_5_Contenedores).",
      "Los conjuntos no aceptan repeticiones ni indexacion; usan intersection, union, difference y se pueden crear por comprension {f(x) for x in A} (Clase_5_Contenedores).",
      "Los diccionarios indexan por llave; si la llave se repite la ultima definicion sobrescribe el valor; metodos keys, values, pop, popitem y update (Clase_5_Contenedores).",
      "Las listas son mutables; el slicing L[i:j] y L[i::paso] vale para todo contenedor ordenado; metodos insert, remove, pop, reverse y sort (Clase_5_Contenedores).",
      "En Python no hay punteros: las variables son referencias a objetos y para copiar se usa copy() (Clase_1_Contenedores)."
    ],
    resources: [
      ["PDF", "Tipos de datos", "Clase 2 / Teoria", `${T}/Clase 2/Teoria/Clase4-Tipos_de_Datos.pdf`],
      ["PDF", "Tipos definidos por el usuario / contenedores", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase5-Tipos_de_Datos-Cont.pdf`],
      ["IPYNB", "Contenedores", "Clase 2 / Practica", `${T}/Clase 2/Practica/Clase_1_Contenedores.ipynb`],
      ["IPYNB", "Contenedores (teoria)", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_5_Contenedores.ipynb`],
      ["PDF", "Practica 2: expresiones y tipos", "Clase 2 / Practica", `${T}/Clase 2/Practica/Practica2.pdf`],
      ["PNG", "Mutabilidad en Python", "Clase 2 / Practica", `${T}/Clase 2/Practica/python_mutable.png`]
    ],
  },
  {
    id: 5,
    title: "Errores, excepciones y funciones",
    short: "Errores y funciones",
    summary: "Depuracion, manejo de errores con try/except y modularizacion de soluciones con funciones.",
    topics: [
      "Errores sintacticos vs errores de ejecucion",
      "Excepciones: try, except, raise",
      "Funciones: parametros, retorno y documentacion",
      "Alcance de variables: local, global y nonlocal",
      "Bloques else y finally",
      "Funciones con argumentos por defecto y pruebas"
    ],
    tip: "Una funcion debe tener una responsabilidad clara, entradas predecibles y un resultado verificable.",
    theory: [
      "Los errores de sintaxis los detecta el interprete antes de ejecutar; los errores de ejecucion (excepciones) aparecen durante la corrida y pueden atraparse con try/except. Las funciones encapsulan una tarea para reutilizarla y probarla de forma aislada, y raise permite comunicar condiciones invalidas al llamador en lugar de devolver resultados raros.",
      "El bloque try contiene el codigo que puede fallar, except captura la excepcion esperada (por ejemplo except ValueError), else se ejecuta solo si no hubo error y finally se ejecuta siempre, haya error o no. Atrapar solo lo esperado: un except demasiado general esconde errores nuevos. raise ValueError('mensaje') comunica una condicion invalida al que llama la funcion.",
      "Una funcion se define con def, recibe parametros, devuelve valores con return y puede tener argumentos por defecto. return entrega un resultado y corta la ejecucion; print solo muestra por pantalla y devuelve None. Las variables creadas dentro de la funcion son locales y desaparecen al salir: probar cada funcion por separado con casos simples la vuelve confiable."
    ],
    concepts: [
      "ZeroDivisionError, NameError, TypeError son excepciones comunes.",
      "try protege un bloque; except maneja la situacion esperada.",
      "return entrega el resultado y finaliza la funcion; sin return devuelve None.",
      "Las variables definidas dentro de una funcion tienen alcance local.",
      "else se ejecuta si no hubo excepcion; finally corre siempre.",
      "Argumento por defecto: parametro opcional declarado en la firma de la funcion."
    ],
    caption: "Ejemplo: funcion con validacion y manejo de excepciones.",
    code: "def dividir(a, b):\n    if b == 0:\n        raise ValueError('No se puede dividir por cero')\n    return a / b\n\ntry:\n    print(dividir(10, 0))\nexcept ValueError as error:\n    print('Error controlado:', error)\n\nprint('10 / 4 =', dividir(10, 4))",
    exercise: {
      title: "Division segura",
      prompt: "Escribi una funcion dividir(a, b) que informe un error claro cuando b sea cero, y que sea llamada dentro de un try/except.",
      solution: "def dividir(a, b):\n    if b == 0:\n        raise ValueError('No se puede dividir por cero')\n    return a / b\n\ntry:\n    print(dividir(10, 0))\nexcept ValueError as error:\n    print(error)"
    },
    extraExercises: [
      { title: "Maximo con assert", prompt: "Imprimir el maximo de una lista y su indice en la forma max = lista[i]; si la lista esta vacia debe informar un assert error (Errores y funciones).", solution: "mess = [1, 2, 3, 4]\nassert len(mess) > 0, 'la lista esta vacia'\n\nmaximo = 0\nfor x in mess:\n    if x > maximo:\n        maximo = x\nindices = []\nfor i in range(len(mess)):\n    if maximo == mess[i]:\n        indices.append(i)\nprint('maximo =', maximo, 'indices', indices)" },
      { title: "Funcion cambio de caracteres", prompt: "Escribir una funcion cambio con un argumento de string y dos argumentos opcionales que reemplace un caracter por otro; por defecto debe cambiar los espacios por asteriscos (Errores y funciones).", solution: "def cambio(texto, primero=' ', segundo='*'):\n    res = ''\n    for c in texto:\n        if c == primero:\n            res += segundo\n        else:\n            res += c\n    return res\n\nprint(cambio('este es el texto a modificar', segundo='s'))" },
      { title: "Cambio sobre diccionario", prompt: "Escribir una funcion que cambie todos los valores de un diccionario por un string nuevo (Errores y funciones).", solution: "def change(dico, c):\n    for key in dico.keys():\n        dico[key] = c\n\ndico = {'k1': 'algo1', 'k2': 'algo2'}\nchange(dico, 'otrovalor')\nprint(dico)" }
    ],
    notes: [
      "Los errores se agrupan en gramaticales/sintacticos, que no permiten continuar la ejecucion, y semanticos, donde el codigo termina de manera anomala (Errors_y_Functions).",
      "El interprete detecta los errores sintacticos y lanza una excepcion: marca las lineas responsables, nombra el error y pasa argumentos (Errors_y_Functions).",
      "Excepciones vistas: AssertionError, IndentationError, IndexError, NameError, OverflowError, RuntimeError, SyntaxError, TypeError, ValueError y UnboundLocalError (Errors_y_Functions).",
      "El bloque try ejecuta codigo con potenciales errores; except Error as e captura el error y else se ejecuta solo si no hubo errores (Errors_y_Functions).",
      "assert condicion, 'mensaje': si la condicion es falsa lanza AssertionError e imprime el mensaje; si es verdadera el codigo continua (Errors_y_Functions).",
      "raise NombreError('mensaje') detiene la ejecucion donde se invoca y lanza ese error; con raise se informan errores propios (Excepciones_y_Functiones).",
      "Las funciones se definen con def terminada en dos puntos; return finaliza la funcion y sin return el valor es NoneType (Errors_y_Functions).",
      "El alcance por defecto de una variable es el cuerpo de la funcion (evita efectos secundarios); global y nonlocal cambian ese alcance (Excepciones_y_Functiones)."
    ],
    resources: [
      ["PDF", "Errores y depuracion", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_2_Errors_y_Functions.pdf`],
      ["IPYNB", "Errores y funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_2_Errors_y_Functions.ipynb`],
      ["PDF", "Excepciones y funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_2_Excepciones_y_Functiones.pdf`],
      ["IPYNB", "Excepciones y funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_2_Excepciones_y_Functiones.ipynb`],
      ["PDF", "Funciones y modularizacion", "Clase 4 / Teoria", `${T}/Clase 4/Teoria/Clase6-Funciones_Modularizacion.pdf`],
      ["IPYNB", "Ejercicios en clase: funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Ejercicios_en_Clase-Funciones.ipynb`]
    ],
  },
  {
    id: 6,
    title: "Recursion",
    short: "Recursion",
    summary: "Funciones que se llaman a si mismas, casos base y problemas tipicos resueltos de forma recursiva.",
    topics: [
      "Casos base y llamada recursiva",
      "Factorial y Fibonacci",
      "Pila de llamadas y costo en memoria",
      "Recursion vs iteracion",
      "Profundidad de recursion y RecursionError",
      "Cuando conviene la recursion: jerarquias"
    ],
    tip: "Toda funcion recursiva necesita un caso base que devuelva un resultado sin volver a llamarse; si no, nunca termina.",
    theory: [
      "Una funcion recursiva resuelve un problema llamandose a si misma con una entrada mas pequena, hasta alcanzar un caso base. Facilita la escritura de algoritmos sobre estructuras jerarquicas, pero consume memoria porque cada llamada pendiente se guarda en la pila de ejecucion; Python corta la recursion con RecursionError si hay demasiadas llamadas.",
      "Toda recursion tiene dos partes: el caso base, que responde sin volver a llamarse, y el caso recursivo, que reduce el problema hasta alcanzar ese base. Cada llamada pendiente se guarda en la pila de ejecucion con sus parametros y variables locales; Python corta la recursion con RecursionError cuando se supera el limite de profundidad (unas 1000 llamadas por defecto).",
      "factorial(n) = n * factorial(n-1) con factorial(0) = 1 es el ejemplo tipico, y Fibonacci muestra la trampa: fib(n) = fib(n-1) + fib(n-2) vuelve a calcular los mismos valores muchas veces y crece exponencial. La recursion brilla sobre estructuras jerarquicas (arboles, directorios, combinaciones), pero para problemas lineales un while suele ser mas economico en memoria."
    ],
    concepts: [
      "Caso base: condicion que responde sin recursarse.",
      "Llamada recursiva: el problema se reduce hasta llegar al caso base.",
      "Cada llamada ocupa un lugar en la pila (stack) de ejecucion.",
      "La recursion exponencial (Fibonacci sin memoizacion) repite trabajo.",
      "Sin caso base la recursion infinita termina en RecursionError.",
      "Cada llamada pendiente consume memoria: la recursion profunda agota la pila."
    ],
    caption: "Ejemplo: factorial recursivo.",
    code: "def factorial(n):\n    if n <= 1:\n        return 1\n    return factorial(n - 1) * n\n\nfor i in range(6):\n    print(i, '->', factorial(i))",
    exercise: {
      title: "Suma de digitos con recursion",
      prompt: "Escribe una funcion recursiva que sume los digitos de un numero entero positivo. Ejemplo: suma_digitos(12345) debe devolver 15.",
      solution: "def suma_digitos(n):\n    if n < 10:\n        return n\n    return (n % 10) + suma_digitos(n // 10)\n\nprint(suma_digitos(12345))"
    },
    extraExercises: [
      { title: "Suma de n numeros (recursiva)", prompt: "Implementar una funcion recursiva que retorne la suma de los primeros n numeros (Ejercicios en clase, funciones).", solution: "def sumaN(n):\n    if n <= 1:\n        return n\n    return n + sumaN(n - 1)\n\nprint(sumaN(10))" },
      { title: "Maximo de una lista (recursiva)", prompt: "Implementar una funcion recursiva que reciba como parametro una lista de numeros enteros y retorne el maximo (Ejercicios en clase, funciones).", solution: "def maximo_lista(L):\n    if len(L) == 1:\n        return L[0]\n    m = maximo_lista(L[1:])\n    return m if m > L[0] else L[0]\n\nprint(maximo_lista([3, 9, 2, 7]))" },
      { title: "Palindromo con Bingo!", prompt: "Tomar un string, imprimirlo en orden reverso y mostrar 'Bingo!' si el string ingresado es palindromo (Ej_Clase_5).", solution: "str1 = 'reconocer'\nstr2 = str1[::-1]\nprint(str2)\nif str1 == str2:\n    print('Bingo!')" },
      { title: "Chocolates con envoltorios", prompt: "Con dinero, precio y cantidad de envoltorios a devolver por un chocolate extra, calcular el maximo de chocolates que se pueden comer (mas ejercicios con solucion).", solution: "def devolver(choc, wrap):\n    if choc < wrap:\n        return 0\n    nuevos = choc // wrap\n    return nuevos + devolver(nuevos + choc % wrap, wrap)\n\ndef max_chocolates(dinero, precio, wrap):\n    chocolates = dinero // precio\n    return chocolates + devolver(chocolates, wrap)\n\nprint(max_chocolates(16, 2, 2))" }
    ],
    notes: [
      "La secuencia de Siracusa parte de s0 = k; si el termino es par se divide por 2 y si es impar se calcula 3k+1; la serie se detiene al obtener 1 (Ejercicios_en_Clase-Funciones).",
      "Los enunciados de la clase piden una funcion recursiva y otra iterativa que retornen la suma de los primeros n numeros (Ejercicios_en_Clase-Funciones).",
      "Tambien se pide una funcion recursiva que reciba una lista de numeros enteros y retorne el maximo (Ejercicios_en_Clase-Funciones).",
      "Para producir los valores 8, 6, 4, 2, 0, -2, -4, -6, -8 se usa range(8, -9, -2) dentro de una comprension (Ej_Clase_5_Resuelto).",
      "La serie a_n = a_1 + sumatoria de 2n con a_1 = 0 se simplifica algebraicamente a n^2 - n (Ej_Clase_5_Resuelto).",
      "El cifrado Cesar desplaza cada caracter del alfabeto K lugares usando la operacion modulo, y chr y ord pasan de caracteres a numeros y viceversa (Ej_Clase_5_Resuelto)."
    ],
    resources: [
      ["IPYNB", "Ejercicios en clase: funciones y recursion", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Ejercicios_en_Clase-Funciones.ipynb`],
      ["PDF", "Ejercicios en clase: funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Ejercicios_en_Clase-Funciones.pdf`],
      ["IPYNB", "Practica 4: funciones", "Clase 4 / Practica", `${T}/Clase 4/Practica/Practica4.ipynb`],
      ["TXT", "Mas ejercicios (chocolate y digitos)", "Ejercicios", `mas ejercicios.txt`],
      ["TXT", "Mas ejercicios con solucion", "Ejercicios", `mas ejercicios con solución.txt`],
      ["TXT", "Ejercicios de parcial", "Material de parcial", `${L}/MIX/ejercicios python parcial.txt`]
    ],
  },
  {
    id: 7,
    title: "Modulos, clases y objetos",
    short: "Modulos y POO",
    summary: "Organizacion del codigo en modulos y modelado de entidades mediante clases e instancias.",
    topics: [
      "Modulos: import y espacios de nombres",
      "Clases: atributos, metodos y constructor __init__",
      "self y las instancias",
      "Encapsulamiento y validacion de invariantes",
      "from ... import y el bloque main",
      "Metodos especiales __init__ y __str__"
    ],
    tip: "Antes de escribir metodos, defini que representa el objeto y que operaciones debe permitir.",
    theory: [
      "Un modulo agrupa funciones y datos reutilizables que se traen con import. Una clase combina estado (atributos) y comportamiento (metodos) para crear muchas instancias iguales: __init__ fija el estado inicial, self identifica a la instancia que recibe el metodo, y validar en el constructor evita objetos inconsistentes.",
      "import trae el modulo completo (import math) y from math import sqrt trae solo lo que se usa; el codigo que debe ejecutarse unicamente al correr el archivo se protege con if __name__ == '__main__':. La libreria estandor ya trae herramientas: math para funciones matematicas, random para valores aleatorios y os/pathlib para trabajar con archivos y rutas.",
      "La clase es el plano y cada objeto una instancia concreta: los atributos guardan estado y los metodos definen comportamiento. __init__ se ejecuta al crear el objeto y valida el estado inicial, self identifica a la instancia que recibe cada metodo, y __str__ define como se la muestra con print(). Validar en el constructor evita objetos en estados invalidos y agrupar datos con su comportamiento reduce codigo repetido."
    ],
    concepts: [
      "import math trae el modulo; from math import sqrt trae solo una parte.",
      "__init__ se ejecuta al crear la instancia.",
      "self referencia el objeto sobre el que se llama el metodo.",
      "Encapsular la logica dentro de la clase facilita probar y reutilizar.",
      "if __name__ == '__main__': separa el codigo ejecutable del reutilizable.",
      "__str__ define la representacion en texto del objeto al hacer print(objeto)."
    ],
    caption: "Ejemplo: clase Rectangulo con validacion.",
    code: "class Rectangulo:\n    def __init__(self, ancho, alto):\n        if ancho <= 0 or alto <= 0:\n            raise ValueError('Medidas positivas')\n        self.ancho = ancho\n        self.alto = alto\n\n    def area(self):\n        return self.ancho * self.alto\n\nr = Rectangulo(4, 3)\nprint('Area:', r.area())",
    exercise: {
      title: "Cuenta bancaria simple",
      prompt: "Crea una clase Cuenta con saldo inicial y un metodo depositar que rechace montos no positivos, mas un metodo extraer que no permita dejar el saldo en negativo.",
      solution: "class Cuenta:\n    def __init__(self, saldo=0):\n        self.saldo = saldo\n\n    def depositar(self, monto):\n        if monto <= 0:\n            raise ValueError('El monto debe ser positivo')\n        self.saldo += monto\n\n    def extraer(self, monto):\n        if monto > self.saldo:\n            raise ValueError('Saldo insuficiente')\n        self.saldo -= monto\n\ncuenta = Cuenta()\ncuenta.depositar(500)\ncuenta.extraer(200)\nprint('Saldo:', cuenta.saldo)"
    },
    extraExercises: [
      { title: "Clase Persona con age()", prompt: "Definir la clase Persona con nombre, apellido, fecha de nacimiento, direccion, telefono y email, y el metodo age() que devuelva la edad calculada con la fecha actual; el atributo edad debe calcularse al instanciar (ejercicios de clase).", solution: "import datetime\n\nclass Persona:\n    def __init__(self, nombre, apellido, fecha_nac, telefono):\n        self.nombre = nombre\n        self.apellido = apellido\n        self.fecha_nac = fecha_nac\n        self.telefono = telefono\n        self.edad = self.age()\n\n    def age(self):\n        hoy = datetime.date.today()\n        edad = hoy.year - self.fecha_nac.year\n        if hoy < datetime.date(hoy.year, self.fecha_nac.month, self.fecha_nac.day):\n            edad -= 1\n        return edad\n\np = Persona('Jane', 'Doe', datetime.date(1992, 3, 12), '555 456 0987')\nprint(p.nombre, p.edad)" },
      { title: "Clase Mascota y lista propia", prompt: "Crear la clase Mascota con nombre y saludo; a la clase Persona agregarle una lista de mascotas y un metodo para agregar una nueva. Ojo: la lista debe inicializarse en __init__, no como atributo de clase (ejercicios de clase).", solution: "class Mascota:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\nclass Persona:\n    def __init__(self):\n        self.mascotas = []\n\n    def agregar_mascota(self, mascota):\n        self.mascotas.append(mascota)\n\nperro = Mascota('Ayudante')\nlisa = Persona()\nlisa.agregar_mascota(perro)\nprint(lisa.mascotas)" },
      { title: "Media aritmetico-geometrica", prompt: "Con u0 = 1 y v0 = x, iterar u(n+1) = (un + vn)/2 y v(n+1) = sqrt(un * vn) hasta que u no cambie; ambas secuencias convergen a un punto fijo (Modulos y objetos).", solution: "import math\n\ndef agm(x):\n    u, v = 1, x\n    while u != (u + v) / 2:\n        u = (u + v) / 2\n        v = math.sqrt(u * v)\n    return u\n\nprint(agm(0.75))" }
    ],
    notes: [
      "El comando import permite utilizar funciones y objetos definidos fuera de las predefinidas; evita el uso ineficiente de memoria y los conflictos de nombres (Modules_y_Classes).",
      "Formas de importar: import modulo, import modulo as alias, from modulo import algo as alias y from modulo import * (Modules_y_Classes).",
      "El guion bajo inicial (_nombre) denota uso interno y no se importa con import *; __nombre__ son identificadores 'dunder' definidos por el interprete, como __init__ (Modules_y_Classes).",
      "Modulos usuales: math (inf, nan, log, pi), numpy (array, matrix, linalg), scipy y random (random, randrange, shuffle, sample) (Modulos_y_Objetos).",
      "Una clase es un template de los objetos donde se definen atributos (variables internas) y metodos (funciones internas), invocables como obj.nombre (Modules_y_Classes).",
      "El metodo __init__ inicializa los atributos y siempre se usa self; q.val() y Ratio.val(q) son equivalentes (Modules_y_Classes).",
      "La sobrecarga de operadores redefina operadores para la clase: __add__, __mul__, __str__ (para print) e __int__ (Modules_y_Classes).",
      "Funcion vs metodo: len(c) es una funcion independiente; el metodo esta definido dentro de un tipo de objeto y se invoca como obj.metodo() (Modulos_y_Objetos)."
    ],
    resources: [
      ["IPYNB", "Modulos y clases", "Clase 6 / Teoria", `${T}/Clase 6/Teoria/Clase_3_Modules_y_Classes.ipynb`],
      ["IPYNB", "Modulos y objetos (encapsulamiento)", "Clase 6 / Teoria", `${T}/Clase 6/Teoria/Clase_9_Modulos_y_Objetos.ipynb`],
      ["IPYNB", "Funciones y objetos", "Clase 4 / Practica", `${T}/Clase 4/Practica/Clase_6_Funciones_y_Objetos.ipynb`],
      ["PDF", "Funciones y modularizacion", "Clase 4 / Teoria", `${T}/Clase 4/Teoria/Clase6-Funciones_Modularizacion.pdf`],
      ["PDF", "Adicional: ejercicios de clases", "Complementario", `Adicional Clases.pdf`],
      ["PDF", "Lectura adicional: clases y objetos", "Complementario", `Clases y Objetos - Lectura Adicional.pdf`],
      ["TXT", "Ejercicios de clases con solucion", "Ejercicios", `ejercicios clases.txt`]
    ],
  },
  {
    id: 8,
    title: "Estructuras de datos lineales",
    short: "Pilas, colas y listas",
    summary: "Tipos de datos abstractos: pilas (LIFO), colas (FIFO) y listas enlazadas con nodos.",
    topics: [
      "Tipos de datos abstractos (TAD)",
      "Pila: push, pop, is_empty y top",
      "Cola: enqueue y dequeue",
      "Listas enlazadas: nodos, iteradores e indices",
      "Operaciones basicas y su costo",
      "Elegir estructura segun el acceso necesario"
    ],
    tip: "Si el ultimo en entrar es el primero en salir, es pila; si el primero en entrar es el primero en salir, es cola.",
    theory: [
      "Un TAD define que operaciones ofrece una estructura sin importar como se implemente. La pila restringe el acceso al ultimo elemento agregado (LIFO) y la cola atiende al mas antiguo (FIFO). Las listas enlazadas guardan nodos que apuntan al siguiente, permitiendo inserciones sin desplazar todos los elementos como hace la lista de Python.",
      "La pila trabaja en un solo extremo: push apila, pop desapila y top (peek) mira el tope, siempre el ultimo en llegar (LIFO). La cola entra por un extremo y sale por el otro (FIFO): enqueue agrega al final y dequeue atiende desde el inicio. En Python se logran con listas, aunque collections.deque es mejor para colas porque quitar desde el inicio de una lista cuesta O(n).",
      "La lista enlazada guarda nodos con dato y referencia al siguiente: insertar al frente es O(1) porque no desplaza nada, pero llegar al i-esimo elemento exige recorrer i nodos. La lista de Python es un arreglo dinamico: append es O(1) amortizado, mientras que insert(0, x) es O(n). Si se accede por posicion conviene la lista; si se entra y sale frecuentemente por los extremos, deque o lista enlazada."
    ],
    concepts: [
      "Pila: append agrega al tope, pop extrae del tope.",
      "Cola: enqueue agrega al final, dequeue extrae del inicio.",
      "Nodo: guarda un elemento y una referencia al siguiente.",
      "Toda operacion debe contemplar el caso de la estructura vacia.",
      "LIFO: lo ultimo en entrar es lo primero en salir (como platos apilados).",
      "deque: doblemente enlazada; agrega y quita en O(1) en ambos extremos."
    ],
    caption: "Ejemplo: pila y cola con listas de Python.",
    code: "# Pila (LIFO)\npila = []\npila.append('primer elemento')\npila.append('segundo elemento')\nprint('Tope:', pila[-1])\nprint('Extraido:', pila.pop())\n\n# Cola (FIFO): entra al final, sale del inicio\ncola = []\ncola.append('paciente 1')\ncola.append('paciente 2')\nprint('Atiende:', cola.pop(0))\nprint('Quedan:', cola)",
    exercise: {
      title: "Verificar parentesis balanceados",
      prompt: "Usa una pila para comprobar si una expresion tiene parentesis (, ), [ ] y { } balanceados.",
      solution: "def balanceados(expresion):\n    pares = {')': '(', ']': '[', '}': '{'}\n    pila = []\n    for caracter in expresion:\n        if caracter in '([{':\n            pila.append(caracter)\n        elif caracter in pares:\n            if not pila or pila.pop() != pares[caracter]:\n                return False\n    return not pila\n\nprint(balanceados('(a + b) * (c - d)'))\nprint(balanceados('(a + b]'))"
    },
    extraExercises: [
      { title: "Invertir string con pila", prompt: "Escribir una funcion que reciba un string y devuelva el string invertido utilizando una pila (Practica 6, pilas y colas).", solution: "def invertir(s):\n    pila = []\n    for c in s:\n        pila.append(c)\n    r = ''\n    while pila:\n        r += pila.pop()\n    return r\n\nprint(invertir('reconocer'))" },
      { title: "Expresion postfija", prompt: "Recibir una expresion en notacion postfija (operandos 0-9 y operadores +, -, *, /) y devolver su evaluacion; ej. '4 6 * 3 /' vale 8 (Practica 6, pilas y colas).", solution: "def evaluar(expr):\n    pila = []\n    for t in expr.split():\n        if t in '+-*/':\n            b = pila.pop()\n            a = pila.pop()\n            if t == '+': pila.append(a + b)\n            elif t == '-': pila.append(a - b)\n            elif t == '*': pila.append(a * b)\n            else: pila.append(a / b)\n        else:\n            pila.append(int(t))\n    return pila.pop()\n\nprint(evaluar('4 6 * 3 /'))" },
      { title: "Metodo top de la pila", prompt: "Implementar el metodo top de la clase Pila, que retorne el elemento en el tope sin removerlo, apoyandose en pop y push (Clase 4, TAD).", solution: "def top(self):\n    if self.is_empty():\n        raise ValueError('La pila esta vacia')\n    x = self.pop()\n    self.push(x)\n    return x" }
    ],
    notes: [
      "TAD lineales de la clase 4: listas enlazadas, pilas y colas (Clase_4_Est_de_Datos_Lineales).",
      "En Python no hay punteros como en C/C++: todas las variables son referencias a objetos mutables (Clase_4_Est_de_Datos_Lineales).",
      "Pila LIFO: operaciones __init__, push, pop, is_empty y top opcional; el tope es la ultima posicion de la lista (Clase_4_Est_de_Datos_Lineales).",
      "Cola FIFO: enqueue agrega al final de la lista y desencolar usa pop(0), levantando ValueError si esta vacia (Clase_4_Est_de_Datos_Lineales).",
      "ListaEnlazada: Nodos (dato, prox) con atributos prim y len; insert/remove/pop levantan IndexError o ValueError (Clase_4_Est_de_Datos_Lineales).",
      "Iteradores: __iter__ crea el iterador, __next__ devuelve elemento a elemento y lanza StopIteration; el for equivale a un while con try/except (Clase_4_Est_de_Datos_Lineales).",
      "La practica 6 agrega especificaciones con reverse y pushAll, cadenas balanceadas y expresiones postfijas (Practica 6, pilas y colas).",
      "La Exercise Session trae la criba de Eratostenes como ejemplo de algoritmo con estructuras (Exercise+Session)."
    ],
    resources: [
      ["IPYNB", "Estructuras de datos lineales (TAD)", "Clase 4 / Teoria", `Clase_4_Est_de_Datos_Lineales.ipynb`],
      ["IPYNB", "Repaso: estructuras lineales", "Clase 5 / Teoria", `${T}/Clase 5/Teoria/Clase_5_Repaso-Est_de_Datos_Lineales-PRACTICA.ipynb`],
      ["IPYNB", "Practica de repaso", "Clase 5 / Practica", `${T}/Clase 5/Practica/Clase_5_Repaso-PRACTICA.ipynb`],
      ["PDF", "Adicional: pilas y colas", "Complementario", `Adcional Pilas y Colas.pdf`],
      ["PDF", "Practica 6: ejercicios de pilas y colas", "Complementario", `practica-6-ejercicios-sobre-pilas-y-colas.pdf`],
      ["PY", "Ejercicio: operar con una lista", "Practica adicional", `${T}/PracticaAdicional/ejercicioLista.py`],
      ["PY", "Ejercicio: palindromo con pila", "Practica adicional", `${T}/PracticaAdicional/ejercicioPalindromo.py`]
    ],
  },
  {
    id: 9,
    title: "Busqueda y ordenamiento",
    short: "Busqueda y orden",
    summary: "Busqueda lineal y binaria, ordenamiento por seleccion e insercion, invariantes y costo de comparaciones.",
    topics: [
      "Problema de busqueda: devolver indice o -1",
      "Busqueda lineal: O(n)",
      "Busqueda binaria sobre listas ordenadas: O(log n)",
      "Ordenamiento por seleccion y por insercion",
      "Ordenamiento por burbuja y estabilidad",
      "Costo combinado de ordenar y buscar"
    ],
    tip: "La busqueda binaria descarta la mitad del espacio en cada paso, pero solo sirve si la lista esta ordenada.",
    theory: [
      "Buscar consiste en encontrar un valor x en una lista L y devolver su indice o -1. La busqueda lineal recorre elemento por elemento y en el peor caso hace una comparacion por dato. Si la lista esta ordenada, la binaria divide el segmento de busqueda por la mitad en cada paso, logrando O(log n). Ordenar primero suele valer la pena cuando se busca muchas veces.",
      "Los ordenamientos por comparacion de orden cuadratico son burbuja (intercambia adyacentes hasta que no hay cambios), seleccion (lleva el minimo de la parte sin ordenar a su posicion) e insercion (acomoda cada elemento dentro del prefijo ya ordenado, el mas rapido cuando la lista esta casi ordenada). Todos hacen en el peor caso un orden de n^2 comparaciones, por lo que se vuelven lentos con listas grandes.",
      "La binaria sostiene un invariante: si el objetivo existe, esta siempre entre bajo y alto; en cada paso calcula el medio y descarta media lista, por eso pide orden previo. Ordenar una vez (O(n log n)) y buscar muchas veces (O(log n) cada una) suele ganarle a la lineal (O(n) por busqueda). Ademas, un orden estable conserva el orden relativo de los elementos con igual clave, algo importante cuando se ordena por mas de un campo."
    ],
    concepts: [
      "Busqueda lineal: recorre todo, no requiere orden, O(n).",
      "Busqueda binaria: requiere orden previo, descarta mitades, O(log n).",
      "Ordenamiento por seleccion: lleva el minimo a su posicion en cada pasada.",
      "Ordenamiento por insercion: coloca cada elemento en su lugar dentro del prefijo ordenado.",
      "Orden estable: los elementos con igual clave conservan su orden original.",
      "Casi ordenada: insercion se acerca a O(n); burbuja sigue siendo O(n^2)."
    ],
    caption: "Ejemplo: busqueda lineal y binaria.",
    code: "def busqueda_lineal(datos, objetivo):\n    for i in range(len(datos)):\n        if datos[i] == objetivo:\n            return i\n    return -1\n\ndef busqueda_binaria(datos, objetivo):\n    izq, der = 0, len(datos) - 1\n    while izq <= der:\n        medio = (izq + der) // 2\n        if datos[medio] == objetivo:\n            return medio\n        if datos[medio] < objetivo:\n            izq = medio + 1\n        else:\n            der = medio - 1\n    return -1\n\nlista = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\nprint('Lineal 23 ->', busqueda_lineal(lista, 23))\nprint('Binaria 23 ->', busqueda_binaria(lista, 23))\nprint('Binaria 7 ->', busqueda_binaria(lista, 7))",
    exercise: {
      title: "Ordenamiento por seleccion",
      prompt: "Implementa una funcion que ordene una lista de menor a mayor usando ordenamiento por seleccion (en cada pasada lleva el minimo de la parte sin ordenar a su posicion).",
      solution: "def seleccion(datos):\n    datos = list(datos)\n    for i in range(len(datos)):\n        minimo = i\n        for j in range(i + 1, len(datos)):\n            if datos[j] < datos[minimo]:\n                minimo = j\n        datos[i], datos[minimo] = datos[minimo], datos[i]\n    return datos\n\nprint(seleccion([29, 10, 14, 37, 13]))"
    },
    extraExercises: [
      { title: "Busqueda binaria", prompt: "Dada una lista ordenada, dividir el segmento de busqueda a la mitad en cada paso hasta encontrar x o llegar a un segmento vacio, devolviendo -1 si no esta (Clase 6).", solution: "def busqueda_binaria(lista, x):\n    izq = 0\n    der = len(lista) - 1\n    while izq <= der:\n        medio = (izq + der) // 2\n        if lista[medio] == x:\n            return medio\n        elif lista[medio] > x:\n            der = medio - 1\n        else:\n            izq = medio + 1\n    return -1\n\nprint(busqueda_binaria([2, 5, 8, 12, 16, 23], 16))" },
      { title: "Merge sort", prompt: "Ordenar de forma recursiva: si la lista tiene menos de 2 elementos ya esta ordenada; si no, dividirla al medio, ordenar cada mitad e intercalar ambas de forma ordenada (Clase 6).", solution: "def merge_sort(lista):\n    if len(lista) < 2:\n        return lista\n    medio = len(lista) // 2\n    izq = merge_sort(lista[:medio])\n    der = merge_sort(lista[medio:])\n    return merge(izq, der)\n\ndef merge(a, b):\n    r, i, j = [], 0, 0\n    while i < len(a) and j < len(b):\n        if a[i] < b[j]:\n            r.append(a[i]); i += 1\n        else:\n            r.append(b[j]); j += 1\n    return r + a[i:] + b[j:]\n\nprint(merge_sort([29, 10, 14, 37, 13]))" }
    ],
    notes: [
      "El problema de busqueda: dada una lista L y un valor x, devolver el indice de x en L o -1 si no esta (Clase_6).",
      "Python provee index() y el operador in; combinados resuelven la busqueda simple, pero no saben cuantas comparaciones hacen (Clase_6).",
      "La busqueda lineal 'a mano' recorre uno a uno los elementos; en el peor caso hace n comparaciones (Clase_6).",
      "La busqueda binaria exige lista ordenada: divide el segmento en dos con izq, der y medio, descartando la mitad en cada paso (Clase_6).",
      "La busqueda binaria realiza aproximadamente log2(N) comparaciones en el peor caso (Clase_6).",
      "Ordenamiento por seleccion: invariante 'los elementos de n+1 al final ya estan ordenados'; costo T(N) = N(N+1)/2 ~ N^2 (Clase_6).",
      "Ordenamiento por insercion: en el peor caso N^2, pero si la lista ya esta ordenada T(N) ~ N (Clase_6).",
      "Divide y conquista: mergesort intercala sublistas con T(N) ~ N*log2(N) y quicksort particiona por un pivote, con version in-place y mediana-de-tres (Clase_6)."
    ],
    resources: [
      ["PDF", "Algoritmos de busqueda y ordenamiento", "Clase 6 / Teoria", `${L}/Lecture-10/old/Clase_6_Alg_de_Busqueda_y_Ordenamiento.pdf`],
      ["IPYNB", "Busqueda y ordenamiento", "Clase 6 / Teoria", `${L}/Lecture-10/old/Clase_6_Alg_de_Busqueda_y_Ordenamiento.ipynb`],
      ["PDF", "Parcialito: arreglos y matrices", "Material de parcial", `${L}/00-Programacion_2012-FACEI/Parcialito/parcialito.pdf`]
    ],
  },
  {
    id: 10,
    title: "Complejidad y computabilidad",
    short: "Complejidad",
    summary: "Como medir el costo de un algoritmo: operaciones primitivas, funciones de crecimiento y notacion Big-O.",
    topics: [
      "Analisis experimental y sus limitaciones",
      "Operaciones primitivas",
      "Funciones: constante, logaritmica, lineal, cuadratica",
      "Notacion Big-O y analisis comparativo",
      "Clases de crecimiento: O(1), O(n), O(n log n), O(n^2)",
      "Problemas decidibles e indecidibles"
    ],
    tip: "Para comparar algoritmos siempre pensa en el peor caso y en como crece el costo cuando crece la entrada.",
    theory: [
      "El analisis experimental mide tiempos reales pero depende del hardware y de los datos de prueba. El analisis asintotico estudia la descripcion del algoritmo contando operaciones primitivas (asignaciones, comparaciones, aritmetica) y expresa el crecimiento con notacion Big-O, lo que permite comparar soluciones sin ejecutarlas.",
      "La notacion Big-O describe como crece el costo en el peor caso: O(1) acceso por indice, O(log n) division por la mitad, O(n) un recorrido, O(n log n) ordenar, O(n^2) dos ciclos anidados y O(2^n) decisiones dobles sin control. Se ignoran el factor constante y la maquina: importa el crecimiento, no los milisegundos actuales. Se estima contando operaciones primitivas y multiplicando dentro de los ciclos anidados.",
      "La computabilidad estudia que problemas son resolubles en principio. El problema de la parada (termina un programa con una entrada dada?) no tiene solucion general: no existe algoritmo que lo decida en todos los casos. Eso separa los decidibles de los indecidibles, y dentro de los decidibles distingue los polinomicos (practicables) de los exponenciales (intratables) que, con datos grandes, no se pueden resolver."
    ],
    concepts: [
      "O(1): costo constante, no crece con n.",
      "O(log n): crece muy lento; ej. busqueda binaria.",
      "O(n): crece linealmente; ej. recorrer una lista.",
      "O(n^2): crece rapido; ej. dos ciclos anidados.",
      "O(n log n): el costo de ordenar con metodos eficientes.",
      "Problema de la parada: no hay algoritmo que diga siempre si un programa termina."
    ],
    caption: "Ejemplo: comparar un enfoque lineal con uno constante.",
    code: "import time\n\ndef suma_lineal(n):\n    total = 0\n    for i in range(n):\n        total += i\n    return total\n\ndef suma_constante(n):\n    return (n - 1) * n // 2\n\nfor n in (100000, 1000000, 5000000):\n    t0 = time.time()\n    suma_lineal(n)\n    t1 = time.time()\n    t2 = time.time()\n    suma_constante(n)\n    t3 = time.time()\n    print(f'n={n:>8} lineal={t1-t0:.5f}s formula={t3-t2:.6f}s')",
    exercise: {
      title: "Clasificar el costo",
      prompt: "Indica la notacion Big-O de: acceder a un elemento de una lista por indice, buscar de a uno en una lista desordenada, buscar en una lista ordenada con binaria y dos ciclos anidados sobre la misma lista.",
      solution: "# Acceso por indice:        O(1)\n# Busqueda lineal:          O(n)\n# Busqueda binaria:         O(log n)\n# Dos ciclos anidados:      O(n^2)\n\nprint('O(1), O(n), O(log n), O(n^2)')"
    },
    extraExercises: [
      { title: "Promedios acumulados (cuadratico)", prompt: "Devolver una lista A donde A[j] es el promedio de S[0..j] usando ciclos anidados y sumando de cero en cada iteracion (Clase 7).", solution: "def prefix_average1(S):\n    A = [0] * len(S)\n    for j in range(len(S)):\n        total = 0\n        for i in range(j + 1):\n            total += S[i]\n        A[j] = total / (j + 1)\n    return A\n\nprint(prefix_average1([2, 4, 6, 8]))" },
      { title: "Promedios acumulados (lineal)", prompt: "Igual que el anterior pero reutilizando la suma parcial acumulada, de modo que el costo sea lineal y no cuadratico (Clase 7).", solution: "def prefix_average3(S):\n    A = [0] * len(S)\n    total = 0\n    for j in range(len(S)):\n        total += S[j]\n        A[j] = total / (j + 1)\n    return A\n\nprint(prefix_average3([2, 4, 6, 8]))" },
      { title: "Sin repetidos (cuadratico)", prompt: "Devolver True si no hay elementos repetidos en S, comparando cada elemento con todos los que le siguen; costo cuadratico (Clase 7).", solution: "def unique1(S):\n    for j in range(len(S)):\n        for k in range(j + 1, len(S)):\n            if S[j] == S[k]:\n                return False\n    return True\n\nprint(unique1([1, 2, 3, 2]))" },
      { title: "Sin repetidos (n log n)", prompt: "Resolver lo mismo ordenando primero la secuencia y comparando elementos consecutivos, logrando tiempo n*log(n) (Clase 7).", solution: "def unique2(S):\n    temp = sorted(S)\n    for j in range(1, len(temp)):\n        if temp[j - 1] == temp[j]:\n            return False\n    return True\n\nprint(unique2([1, 2, 3, 2]))" }
    ],
    notes: [
      "El analisis experimental mide el tiempo con time() (segundos desde epoch), pero depende del hardware y solo cubre los casos de prueba medidos (Clase_7).",
      "Limitaciones del experimento: tiempos dificiles de comparar, entrada limitada a un set de datos y el algoritmo debe estar finalizado (Clase_7).",
      "Operaciones primitivas: asignacion, aritmetica, comparacion, acceso por indice, llamadas y return; se cuenta T(n) segun el tamano de entrada (Clase_7).",
      "Se foca el peor caso porque el caso promedio requiere un estudio estadistico de los datos de entrada (Clase_7).",
      "Funciones de crecimiento: constante, logaritmica (base 2), lineal, n*log n, cuadratica, cubica, polinomicas y exponenciales; 1+2+...+n = n(n+1)/2 (Clase_7).",
      "La notacion Big-Oh describe el crecimiento proporcional del tiempo: 8n + 5 es O(n) (Clase_7).",
      "En codigo: prefix_average1/2 son cuadraticos y prefix_average3 es lineal (Clase_7).",
      "En codigo: disjoint1 es cubico, disjoint2 y unique1 son cuadraticos, unique2 es n*log n gracias a sorted() (Clase_7)."
    ],
    resources: [
      ["IPYNB", "Computabilidad y complejidad", "Clase 7 / Teoria", `${L}/Lecture7/Clase_7_Computabilidad_y_Complejidad.ipynb`],
      ["PDF", "Computabilidad y complejidad", "Clase 7 / Teoria", `${L}/Lecture7/Clase_7_Computabilidad_y_Complejidad.pdf`],
      ["IPYNB", "Complejidad (version catedra)", "Clase 7 / Teoria", `Clase_7_Computabilidad_y_Complejidad.ipynb`],
      ["PDF", "Tema 5: complejidad", "Complementario", `${L}/MIX/tema5-complejidad.pdf`],
      ["IPYNB", "Complejidad (clase 8)", "Material historico", `${L}/Lecture8/Clase_8_Computabilidad_y_Complejidad.ipynb`]
    ],
  },
  {
    id: 11,
    title: "Archivos",
    short: "Archivos",
    summary: "Lectura y escritura de archivos de texto y binarios para conservar datos mas alla del programa.",
    topics: [
      "Abrir, leer y cerrar archivos",
      "Modos: r, w, a y b",
      "Lectura por lineas y con context manager",
      "Procesamiento de datos persistentes",
      "Lectura completa, por lineas e iteracion",
      "CSV y rutas con pathlib"
    ],
    tip: "Usa siempre with open(...) as archivo: asi el archivo se cierra solo aunque haya una excepcion.",
    theory: [
      "Los archivos permiten guardar datos despues de que el programa termina. Se abren con open(ruta, modo): 'r' para leer, 'w' para crear o sobreescribir, 'a' para agregar al final. El context manager with cierra el recurso automaticamente y conviene pasar encoding='utf-8' para trabajar bien con acentos y caracteres especiales.",
      "Abrir con 'w' crea o sobreescribe (borra lo anterior); para agregar sin perder lo existente se usa 'a'. En lectura, read() devuelve todo el texto, readlines() una lista de lineas e iterar con for linea in archivo es lo mas economico en memoria. Si la ruta no existe se levanta FileNotFoundError, y una escritura sin cerrar puede perder datos: por eso se usa with, que cierra el recurso siempre.",
      "Para tablas de datos conviene el modulo csv (reader y writer) en lugar de partir las lineas a mano. Las rutas se arman con os.path.join o con pathlib.Path, que evitan problemas entre Windows y Linux. Buena practica: pasar encoding='utf-8' para soportar acentos, trabajar con rutas relativas al proyecto y no dejar archivos abiertos fuera del bloque with."
    ],
    concepts: [
      "read() devuelve todo el contenido; readlines() una lista de lineas.",
      "Iterar sobre el archivo linea por linea es la forma mas eficiente.",
      "Modo 'w' borra el contenido anterior del archivo.",
      "Los datos binarios se manejan con 'rb' / 'wb'.",
      "'w' sobreescribe; 'a' agrega al final sin borrar lo existente.",
      "FileNotFoundError: la ruta o el archivo pedido no existe."
    ],
    caption: "Ejemplo: escribir y leer un archivo de texto.",
    code: "with open('datos.txt', 'w', encoding='utf-8') as archivo:\n    archivo.write('python\\n')\n    archivo.write('algoritmos\\n')\n    archivo.write('estructuras\\n')\n\nwith open('datos.txt', encoding='utf-8') as archivo:\n    lineas = archivo.readlines()\n\nprint('Cantidad de lineas:', len(lineas))\nfor i, linea in enumerate(lineas, start=1):\n    print(i, linea.strip())",
    exercise: {
      title: "Contador de lineas y palabras",
      prompt: "Escribi una funcion que cree un archivo de prueba y devuelva cuantas lineas y cuantas palabras contiene.",
      solution: "def contar(ruta):\n    with open(ruta, encoding='utf-8') as archivo:\n        texto = archivo.read()\n    lineas = texto.splitlines()\n    palabras = texto.split()\n    return len(lineas), len(palabras)\n\nwith open('prueba.txt', 'w', encoding='utf-8') as archivo:\n    archivo.write('hola mundo de archivos\\nsegunda linea aqui\\n')\n\nprint(contar('prueba.txt'))"
    },
    extraExercises: [
      { title: "Leer un archivo con with", prompt: "Abrir un archivo en modo lectura con la sentencia with, imprimir su contenido y verificar que al salir del bloque el archivo quedo cerrado (Clase 9).", solution: "with open('prueba.txt', 'w', encoding='utf-8') as f:\n    f.write('python\\nalgoritmos\\n')\n\nwith open('prueba.txt', encoding='utf-8') as f:\n    print(f.read())\nprint('Cerrado:', not f.closed)" },
      { title: "Agregar al final con modo 'a'", prompt: "Abrir un archivo en modo 'a' y escribir una frase al final sin borrar el contenido existente, verificando la posicion del puntero con tell() (Clase 9).", solution: "with open('registro.txt', 'w', encoding='utf-8') as f:\n    f.write('linea 1\\n')\n\nf = open('registro.txt', 'a', encoding='utf-8')\nprint('Posicion:', f.tell())\nf.write('Una frase, en un archivo!\\n')\nf.close()\n\nwith open('registro.txt', encoding='utf-8') as f:\n    print(f.read())" },
      { title: "Listar archivos con glob", prompt: "Usar la clase Path del modulo pathlib y su metodo glob con el patron '*.txt' para obtener la coleccion de archivos de un directorio (Clase 9).", solution: "from pathlib import Path\n\np = Path('.')\narchivos = list(p.glob('*.txt'))\nfor a in archivos:\n    print(a)" }
    ],
    notes: [
      "Las rutas a archivos son strings con formato especial y se manejan con la clase Path del modulo pathlib (Clase_9).",
      "Se pueden concatenar rutas con '/' y consultar el directorio actual con Path.cwd() y el home con Path.home() (Clase_9).",
      "Los metodos exists(), is_dir() e is_file() permiten validar un path antes de usarlo (Clase_9).",
      "mkdir(exist_ok=True) crea directorios, rmdir() solo borra directorios vacios; glob('*.pdf') itera paths segun un patron y parts da los componentes (Clase_9).",
      "El modulo os permite os.remove() para borrar y os.rename() para renombrar; shutil.copy, copy2 y copyfile copian archivos (copy2 tambien copia metadata) (Clase_9).",
      "open(path, modo): 'r' lectura, 'w' sobreescribe todo, 'r+' lee y escribe, 'a' agrega al final y 'b' para binario (Clase_9).",
      "read() lee hasta EOF y deja el puntero al final (tell() informa su posicion), readline() lee por lineas y el archivo tambien funciona como iterador (Clase_9).",
      "La sentencia with cierra el archivo automaticamente al salir del bloque; los archivos de texto usan codificacion utf-8 y los binarios no se leen como texto (Clase_9)."
    ],
    resources: [
      ["PDF", "Manejo de archivos", "Complementario", `${T}/Manejo de archivos.pdf`],
      ["PDF", "Clase 9: archivos", "Clase 9 / Teoria", `${L}/Lecture9/Clase_9_Archivos.pdf`],
      ["IPYNB", "Clase 9: archivos", "Clase 9 / Teoria", `${L}/Lecture9/Clase_9_Archivos.ipynb`],
      ["PY", "Ejercicios practice: archivos", "Ejercicios", `${T}/ejercicios.py`],
      ["IPYNB", "Ejercicios de la clase", "Clase 3 / Practica", `${T}/Clase 3/Practica/Clase1_Exercises.ipynb`]
    ],
  },
  {
    id: 12,
    title: "Estructuras no lineales: arboles y grafos",
    short: "Arboles y grafos",
    summary: "Representaciones jerarquicas y de redes: partes de un arbol, BST, recorridos y conceptos basicos de grafos.",
    topics: [
      "Partes: raiz, hijos, hojas, altura y nivel",
      "Arboles binarios y arboles de busqueda (BST)",
      "Recorridos: inorden, preorden y postorden",
      "Grafos: nodos, aristas, BFS y DFS",
      "Recorridos por niveles y por profundidad",
      "Grafos: matriz y lista de adyacencia"
    ],
    tip: "En un BST el recorrido inorden devuelve siempre los valores ordenados de menor a mayor.",
    theory: [
      "Las estructuras no lineales no siguen una secuencia: en un arbol cada nodo tiene un padre y cero o mas hijos, y en un grafo los nodos se conectan por aristas sin una jerarquia fija. Los arboles modelan organizaciones (archivos, categorias) y los grafos redes (rutas, conexiones), y ambos se recorren de forma recursiva.",
      "El arbol tiene vocabulario propio: raiz (nodo sin padre), hoja (sin hijos), altura (camino mas largo hasta una hoja) y nivel. En un arbol binario de busqueda (BST) cada nodo tiene hasta dos hijos y cumple izquierda < nodo < derecha, de modo que el recorrido inorden devuelve los valores ordenados. Los recorridos se escriben de forma recursiva: preorden (nodo, izquierda, derecha) para replicar la estructura, inorden para listar ordenado y postorden (los hijos primero) para eliminar.",
      "En un grafo no hay jerarquia: vertices conectados por aristas, que pueden ser dirigidas o tener peso. Se representa con matriz de adyacencia (consultar si hay arista en O(1), pero ocupa n^2 lugares) o con lista de adyacencia (mas economica cuando las conexiones son pocas). BFS recorre por niveles con una cola y DFS profundiza con pila o recursion; ambos sirven para buscar caminos, conectar nodos o detectar ciclos. A diferencia del arbol, el grafo puede tener ciclos."
    ],
    concepts: [
      "Raiz: nodo inicial sin padre; hojas: sin hijos.",
      "Altura: camino mas largo desde la raiz hasta una hoja.",
      "BST: izquierda < raiz < derecha; inorden ordena ascendente.",
      "Grafo: nodos + aristas; BFS usa cola, DFS usa pila o recursion.",
      "inorden sobre un BST imprime los valores de menor a mayor.",
      "BFS: cola, por niveles. DFS: pila o recursion, en profundidad."
    ],
    caption: "Ejemplo: arbol binario de busqueda e inorden.",
    code: "class Nodo:\n    def __init__(self, valor):\n        self.valor = valor\n        self.izq = None\n        self.der = None\n\ndef insertar(raiz, valor):\n    if raiz is None:\n        return Nodo(valor)\n    if valor < raiz.valor:\n        raiz.izq = insertar(raiz.izq, valor)\n    else:\n        raiz.der = insertar(raiz.der, valor)\n    return raiz\n\ndef inorden(nodo):\n    if nodo is None:\n        return []\n    return inorden(nodo.izq) + [nodo.valor] + inorden(nodo.der)\n\nraiz = None\nfor v in (50, 30, 70, 20, 40, 60, 80):\n    raiz = insertar(raiz, v)\n\nprint('Inorden:', inorden(raiz))",
    exercise: {
      title: "Contar hojas de un arbol",
      prompt: "Escribe una funcion recursiva que cuente cuantos nodos hoja (sin hijos) tiene el arbol binario construido en el ejemplo.",
      solution: "def contar_hojas(nodo):\n    if nodo is None:\n        return 0\n    if nodo.izq is None and nodo.der is None:\n        return 1\n    return contar_hojas(nodo.izq) + contar_hojas(nodo.der)\n\n# con el arbol del ejemplo: raiz = 50 con hojas 20, 40, 60, 80\n# print(contar_hojas(raiz))"
    },
    extraExercises: [
      { title: "Cola con queue.Queue", prompt: "Escribir un programa que cree una cola de 4 numeros consecutivos y que imprima todos sus miembros y su tamano (Practica: tipos de datos no lineales, ej. 4).", solution: "import queue\nq = queue.Queue()\nfor x in range(4):\n    q.put(x)\nprint('Miembros de la cola:')\nfor n in list(q.queue):\n    print(n, end=' ')\nprint('\\nTamano:', q.qsize())" },
      { title: "Diferencia de fechas", prompt: "Escribir un programa que calcule la diferencia entre dos fechas (Practica: tipos de datos no lineales, ej. 1b).", solution: "from datetime import date\na = date(2000, 2, 28)\nb = date(2001, 2, 28)\nprint(b - a)" },
      { title: "Imprimir con pausas", prompt: "Escribir un programa que imprima un string cinco veces esperando tres segundos entre cada impresion (Practica: tipos de datos no lineales, ej. 1c).", solution: "import time\nx = 0\nwhile x < 5:\n    print('Algoritmos y Estructuras')\n    time.sleep(3)\n    x = x + 1" }
    ],
    notes: [
      "Las estructuras no lineales no siguen un orden lineal: arboles, grafos, mapas (diccionarios) y conjuntos (arboles.docx).",
      "En un arbol cada nodo tiene un padre y uno o mas hijos; la raiz es el nodo principal y el punto de partida (arboles.docx).",
      "Hojas o nodos terminales: los que no tienen hijos; la profundidad es la distancia de un nodo a su padre (arboles.docx).",
      "Tipos: arbol binario (maximo 2 hijos), AVL (balanceado por altura), B (grandes volumenes), rojinegro y Trie de prefijos (arboles.docx).",
      "Arbol de busqueda: izquierda < padre < derecha; permite busquedas en tiempo logaritmico (arboles.docx).",
      "Usos: almacenamiento y acceso, jerarquias (sistemas de archivos), ordenamiento (mergesort, heapsort), decisiones en IA y compresion (arboles.docx).",
      "Vocabulario: la altura es el camino mas largo desde la raiz hasta una hoja; el nivel mide la distancia desde la raiz (la raiz es nivel 0) (arboles.docx).",
      "Grafo: conjunto de vertices y aristas, donde cada arista representa una relacion; tipos dirigido, no dirigido, ponderado, bipartito, completo y ciclico (grafos.docx).",
      "DFS sigue un camino hasta el final antes de retroceder; BFS explora por capas desde los nodos cercanos al origen (grafos.docx).",
      "Dijkstra halla el camino mas corto con una cola de prioridad; Bellman-Ford acepta pesos negativos; A* mejora Dijkstra con una heuristica (grafos.docx)."
    ],
    resources: [
      ["PPTX", "Clase: arboles", "Clase / Slides", `clase/Arboles.pptx`],
      ["DOCX", "Apunte: arboles", "Clase / Apunte", `clase/árboles.docx`],
      ["PPTX", "Clase: grafos", "Clase / Slides", `clase/Grafos.pptx`],
      ["DOCX", "Apunte: grafos", "Clase / Apunte", `clase/grafos.docx`],
      ["PDF", "Practica: tipos de datos no lineales", "Practica", `Práctica Tipos de Datos No Lineales.pdf`],
      ["PDF", "Practica: solucion", "Practica", `Práctica Tipos de Datos No Lineales Solución.pdf`],
      ["PY", "Arbol binario de busqueda", "Codigo de arboles", `clase/Código Arboles --20230213/binary_search_tree.py`],
      ["PY", "Arbol AVL", "Codigo de arboles", `clase/Código Arboles --20230213/avl_tree.py`],
      ["TXT", "Notas de clase sobre no lineales", "Notas", `clase/noytas.txt`]
    ],
  }
];



const assessments = [
  ["XLSX", "Cuestionario: introduccion a Python", "Preguntas de la clase 1", "2022-04-05 22_19 UNaB - Alg. y Estruc. de Datos - Clase 1 - Introducción a Python - Questions.xlsx"],
  ["IPYNB", "Primer parcial", "Ejercicios para resolver", `${L}/MIX/1erParcial.ipynb`],
  ["IPYNB", "Primer parcial resuelto", "Mutabilidad, range, funciones y recursion", `${L}/MIX/1erParcial-resuleto.ipynb`],
  ["IPYNB", "Segundo parcial resuelto", "Clases, rectangulos y listas enlazadas", `2doPARCIAL-Resuelto.ipynb`],
  ["TXT", "Ejercicios de parcial con solucion", "Python aplicado a parcial", `${L}/MIX/ejercicios python parcial.txt`],
  ["PDF", "Adicional: pilas y colas", "Practica de estructuras", `Adcional Pilas y Colas.pdf`],
  ["PDF", "Adicional: clases", "Practica de POO", `Adicional Clases.pdf`]
];
