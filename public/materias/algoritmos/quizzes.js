/* Bancos de quizzes por unidad y examen integrador.
   Formato de pregunta:
     { q: enunciado, type: 'mcq'|'tf'|'multi'|'fill'|'order' (default mcq),
       a: opciones (o respuestas aceptadas en fill, o orden correcto en order),
       correct: indice | [indices],
       code: codigo opcional mostrado con la pregunta,
       note: explicacion }
   Las unidades usan la clave del id de unidad (15 preguntas por unidad). */
const quizzes = {
  "1": [
    {"q":"En la teoria de la catedra, la propiedad de eficacia de un algoritmo exige que:","a":["cada paso este rigurosamente definido sin ambiguedad","todas las operaciones puedan realizarse con lapiz y papel","el algoritmo use siempre listas para guardar datos","termine en exactamente diez pasos"],"correct":1,"note":"Eficacia (efectividad) es que cada accion sea executable de forma concreta; la finitud es que termine y la precision es que cada paso sea inequivoco."},
    {"q":"Sobre la cantidad de entradas y salidas de un algoritmo, la propiedad correcta es:","a":["puede tener cero o mas entradas, pero una o mas salidas","debe recibir siempre al menos una entrada","puede no tener ninguna salida si no hay errores","tiene siempre dos entradas y dos salidas"],"correct":0,"note":"La especificacion clasica dice cero o mas entradas y una o mas salidas: sin un resultado observable el algoritmo no es verificable."},
    {"q":"En el material de la catedra, la REPETICION se distingue de la ITERACION porque:","a":["la iteracion solo puede escribirse con el bucle PARA","en la repeticion el numero de vueltas es fijo y conocido de antemano","la repeticion no puede incluir ninguna condicion","no hay diferencia: son dos sinonimos"],"correct":1,"note":"Repeticion: la cantidad de vueltas se conoce de antemano. Iteracion: se repite hasta que algo cambie y el total de vueltas se desconoce."},
    {"q":"Si se ejecuta linea por linea, que imprime este codigo?","code":"x = 10\ny = 4\nx = x - y\ny = x + y\nprint(x, y)","a":["6 10","6 4","10 6","6 14"],"correct":0,"note":"x vale 10 - 4 = 6; despues y se calcula con el valor ya actualizado de x, 6 + 4 = 10."},
    {"q":"Las etapas de la resolucion de problemas con computadoras, en su orden, son:","a":["disenar, instalar, compilar y ejecutar","probar, analizar, disenar y codificar","analizar, disenar, codificar y probar","codificar, analizar, probar y disenar"],"correct":2,"note":"Primero se analiza el problema (que entra y que debe salir), despues se disena la solucion y recien ahi se escribe el codigo y se prueba."},
    {"q":"Un caso borde es:","a":["un error de sintaxis detectado antes de correr el programa","la version final y depurada del algoritmo","el caso de prueba mas frecuente en la ejecucion","una situacion limite de la entrada, como lista vacia o valor cero"],"correct":3,"note":"El caso borde esta en el limite del rango de entradas validas y es el que mas errores de logica revela durante la prueba."},
    {"q":"Cual es la salida de este codigo?","code":"suma = 0\nfor n in [2, 4, 6]:\n    suma = suma + n\nprint(suma)","a":["12","6","18","24"],"correct":0,"note":"suma arranca en 0 y acumula 0 + 2 + 4 + 6 = 12; ese patron de acumulador aparece en casi todos los algoritmos."},
    {"q":"Un lenguaje de programacion se define como:","a":["un editor de texto donde se escribe el algoritmo","un conjunto de simbolos y reglas sintacticas y semanticas que controlan el comportamiento de una maquina","el sistema operativo que ejecuta el programa","un protocolo de comunicacion entre computadoras"],"correct":1,"note":"Es la definicion de la catedra: simbolos mas reglas de sintaxis (la forma) y de semantica (el significado)."},
    {"q":"Marca las afirmaciones verdaderas sobre las propiedades de todo algoritmo:","type":"multi","a":["Termina en un numero finito de pasos (finitud)","Puede recibir cero o mas entradas","Debe estar escrito en Python para ser valido","Cada paso esta definido sin ambiguedad (precision)"],"correct":[0,1,3],"note":"Finitud, precision y la admision de cero entradas son propiedades; el lenguaje de implementacion es indistinto."},
    {"q":"Sobre correr el algoritmo en mesa (mesa de trabajo del programador), marca las afirmaciones correctas.","type":"multi","code":"total = 0\nfor i in range(1, 5):\n    total = total + i\nprint(total)","a":["El valor final de total es 10","range(1, 5) genera 1, 2, 3 y 4","El bucle se ejecuta cinco veces","total arranca en 0"],"correct":[0,1,3],"note":"La suma 1 + 2 + 3 + 4 da 10 en cuatro vueltas; range(1, 5) nunca alcanza el limite superior 5."},
    {"q":"Escribi la propiedad que garantiza que un algoritmo termina despues de un numero finito de pasos.","type":"fill","a":["finitud","finito"],"note":"La finitud descarta el bucle infinito; es la propiedad que mas se confunde con la precision de cada paso."},
    {"q":"Escribi el nombre de la estructura de control mas simple, en la que el orden de ejecucion coincide con el orden sintactico de aparicion.","type":"fill","a":["secuencia","sequence"],"note":"La secuencia ejecuta las instrucciones tal como estan escritas; la decision y la iteracion son las que rompen ese orden lineal."},
    {"q":"En este codigo la variable x termina valiendo 3 y por eso el programa imprime 3.","type":"tf","code":"x = 0\nwhile x < 3:\n    x = x + 1\nprint(x)","a":["Verdadero","Falso"],"correct":0,"note":"El bucle suma 1 en cada vuelta: x toma 1, 2 y 3; cuando vale 3 la condicion x < 3 ya es falsa y el while se corta."},
    {"q":"Un algoritmo puede tener cero entradas si trabaja con valores internos o fijos.","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"La propiedad de entrada dice cero o mas entradas; la salida en cambio jamas puede ser cero."},
    {"q":"Ordena los pasos de la mesa de trabajo del programador para depurar un algoritmo escrito en pseudocodigo.","type":"order","a":["Escribir el algoritmo en pseudocodigo","Elegir un caso de prueba con valores concretos","Anotar paso a paso los valores de las variables en cada instruccion","Comparar la salida obtenida con la salida esperada","Corregir el algoritmo si las dos salidas no coinciden"],"note":"Se disena, se corre en mesa con un caso, se compara contra la salida esperada y se corrige: asi se depura sin ejecutar una sola linea de codigo."},
  ],
  "2": [
    {"q":"En un diagrama de flujo, el rectangulo representa:","a":["una decision o bifurcacion","una instruccion de proceso, como una asignacion o un calculo","la entrada o la salida de datos","el inicio o el fin del algoritmo"],"correct":1,"note":"El rectangulo es proceso; el rombo es la decision, el paralelogramo la entrada/salida y la elipse el inicio o el fin."},
    {"q":"El paralelogramo (o romboide) de un diagrama de flujo se usa para:","a":["la entrada o salida de datos","una repeticion con condicion","una asignacion de variables","el fin del diagrama"],"correct":0,"note":"Ahi se escriben Leer(X) y Escribir(X), las dos instrucciones que tocan al mundo exterior."},
    {"q":"Cual es la salida de este codigo traducido del pseudocodigo?","code":"total = 0\nfor i in range(3):\n    total = total + i\nprint(total)","a":["3","6","2","0"],"correct":0,"note":"range(3) genera 0, 1 y 2, de modo que el acumulador suma 0 + 1 + 2 = 3."},
    {"q":"Las estructuras de control minimas que exige todo lenguaje de programacion son:","a":["print, input y if","asignacion, decision e iteracion","listas, tuplas y diccionarios","suma, resta y multiplicacion"],"correct":1,"note":"Con asignar (guardar), decidir (ramificar) e iterar (repetir) se puede construir cualquier algoritmo."},
    {"q":"La instruccion de pseudocodigo Escribir(X) equivale en Python a:","a":["print(X)","input(X)","def X():","return X"],"correct":0,"note":"Escribir muestra en pantalla como print; Leer toma datos del teclado como input(), que siempre devuelve texto."},
    {"q":"Que muestra este codigo?","code":"n = -3\nif n < 0:\n    print('negativo')\nelif n == 0:\n    print('cero')\nelse:\n    print('positivo')","a":["negativo","cero","positivo","no imprime nada"],"correct":0,"note":"El control evalua las condiciones de arriba hacia abajo y ejecuta unicamente la primera que sea verdadera."},
    {"q":"Cual es la salida de este algoritmo, que resuelve la Practica 1 de suma de pares?","code":"suma = 0\nfor n in range(2, 101, 2):\n    suma = suma + n\nprint(suma)","a":["2550","5050","100","2500"],"correct":0,"note":"range(2, 101, 2) recorre los 50 pares de 2 a 100; la suma es 50 * (2 + 100) / 2 = 2550."},
    {"q":"En un diagrama de flujo, la flecha indica:","a":["el tipo de dato que circula","el nombre de la variable","la direccion en que se siguen los pasos","el punto final del programa"],"correct":2,"note":"Las flechas unen los simbolos y fijan el orden de ejecucion; una flecha que retrocede sobre un simbolo crea un ciclo."},
    {"q":"Marca las afirmaciones verdaderas sobre el diagrama de flujo:","type":"multi","a":["Es la representacion grafica de un algoritmo","Los simbolos se unen con flechas que fijan el orden","El rombo marca una decision","Se ejecuta directamente en la computadora"],"correct":[0,1,2],"note":"El diagrama representa al algoritmo pero no es un programa: hay que traducirlo a un lenguaje para que la maquina lo ejecute."},
    {"q":"Segun el metodo axiomatico, que hay que apuntar en lenguaje natural antes de escribir el pseudocodigo?","type":"multi","a":["Las entradas que recibe el problema","La salida esperada","El proceso de transformacion de esos datos","El interprete de Python a instalar"],"correct":[0,1,2],"note":"Primero se fijan entradas, salidas y proceso; recien despues vienen el ambito, las acciones primitivas y las condiciones."},
    {"q":"Escribi la instruccion del pseudocodigo que toma un valor por teclado y lo guarda en la variable X.","type":"fill","a":["leer(x)","leer","leer x"],"note":"leer(X) es la entrada del pseudocodigo y equivale en Python a X = int(input(...)) o X = float(input(...))."},
    {"q":"Escribi el nombre de la forma geometrica que se usa para marcar el inicio y el fin de un diagrama de flujo.","type":"fill","a":["elipse","ovalo","oval"],"note":"La elipse (o terminador) encierra INICIO y FIN; el rombo decide y el rectangulo procesa."},
    {"q":"La seleccion (seleccionar...caso...en otro caso) es una extension de la decision basica y se usa cuando las alternativas son mas de dos.","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"La decision bifurca en dos caminos; la seleccion resuelve casos multiples sin anidar varios si."},
    {"q":"Este codigo imprime 120, que es el factorial de 5.","type":"tf","code":"numero = 5\nfactorial = 1\nfor i in range(1, numero + 1):\n    factorial = factorial * i\nprint(factorial)","a":["Verdadero","Falso"],"correct":0,"note":"range(1, 6) genera 1, 2, 3, 4 y 5, y el acumulador calcula 5 * 4 * 3 * 2 * 1 = 120."},
    {"q":"Ordena los elementos que debe tener un diagrama de flujo para leer un numero, calcular su doble, mostrarlo y terminar.","type":"order","a":["Inicio (elipse)","Entrada: Leer(X)","Proceso: Y := X * 2","Salida: Escribir(Y)","Fin (elipse)"],"note":"Todo diagrama arranca en inicio, toma datos, los procesa, muestra el resultado y cierra en fin: esa es la forma entrada-proceso-salida."},
  ],
  "3": [
    {"q":"Que imprime este codigo?","code":"a = 3\nb = 2\na, b = b, a\nprint(a, b)","a":["2 3","3 2","2 2","5 5"],"correct":0,"note":"La asignacion multiple evalua el lado derecho completo antes de asignar: a toma 2 y b toma 3, sin variable auxiliar."},
    {"q":"Cual es el tipo de dato que devuelve type(True)?","a":["int","str","float","bool"],"correct":3,"note":"Los valores de verdad son de tipo bool; por eso toda comparacion devuelve bool y no un numero."},
    {"q":"Que imprime print(17 // 5, 17 % 5)?","code":"print(17 // 5, 17 % 5)","a":["3 2","3.4 2","3 2.0","2 3"],"correct":0,"note":"17 = 3 * 5 + 2: el operador // da el cociente entero 3 y % el resto 2."},
    {"q":"input() en Python devuelve siempre:","a":["int","float","el tipo que corresponda segun lo que se escriba","str"],"correct":3,"note":"Siempre entrega una cadena; hay que convertir con int() o float() antes de hacer cualquier calculo."},
    {"q":"Si var no esta definida, que produce la evaluacion de 1 == 1 or var == True?","a":["True sin evaluar var == True, porque or es perezoso","False porque var no existe","Un NameError en cualquier caso","True despues de evaluar las dos partes"],"correct":0,"note":"or corta el circuito: si la primera parte ya es verdadera no se evalua la segunda, por eso el error no aparece."},
    {"q":"Cual es la salida de este codigo?","code":"total = 0\nfor i in range(4):\n    if i % 2 == 0:\n        total += i\nprint(total)","a":["2","4","6","0"],"correct":0,"note":"range(4) genera 0, 1, 2 y 3; solo 0 y 2 son pares, de modo que total = 0 + 2 = 2."},
    {"q":"Los comentarios en Python se escriben con el caracter:","a":["//","#","--","/* */"],"correct":1,"note":"Todo lo que sigue a # hasta el fin de linea lo ignora el interprete; // en cambio es el operador de division entera."},
    {"q":"Que imprime este codigo?","code":"saludo = 'hola'\nprint(saludo + ' ' + saludo.upper())","a":["hola HOLA","hola hola","HOLA hola","Error de tipo"],"correct":0,"note":"upper() devuelve una copia en mayusculas sin tocar el original y el operador + concatena las tres cadenas."},
    {"q":"Marca las afirmaciones verdaderas sobre la asignacion en Python:","type":"multi","a":["= guarda un valor en la variable","== compara dos valores","x += 1 equivale a x = x + 1","El tipo de la variable se declara antes de usarla"],"correct":[0,1,2],"note":"Python no tiene declaracion de tipo: el tipo lo fija el objeto que se le asigna y puede cambiar en cada asignacion."},
    {"q":"Marca las expresiones que en Python terminan con un TypeError:","type":"multi","a":["2 + '3'","'a' - 1","2 * '3'","2 + 2"],"correct":[0,1],"note":"Sumar o restar str con int no esta definido; en cambio 2 * '3' si funciona y devuelve la cadena '33'."},
    {"q":"Escribi la palabra clave con la que se define una funcion en Python.","type":"fill","a":["def","definir","function","funcion"],"note":"def abre el bloque de la funcion y va seguida del nombre, los parentesis y los dos puntos."},
    {"q":"Escribi el nombre de la funcion que devuelve la cantidad de elementos de una cadena o de una lista.","type":"fill","a":["len","length","size"],"note":"len() es una funcion que devuelve un entero; no confundir con el metodo count(), que cuenta ocurrencias de un valor."},
    {"q":"En Python la expresion 5 / 2 devuelve un entero.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"5 / 2 devuelve 2.5 porque el operador / siempre produce float; la division entera es 5 // 2 = 2."},
    {"q":"La sentencia break interrumpe de inmediato el ciclo en el que se esta ejecutando.","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"break sale del while o del for mas cercano y el programa continua justo despues del bucle; continue solo salta a la siguiente vuelta."},
    {"q":"Ordena las lineas para que el programa calcule el promedio de tres notas y muestre si se aprobo.","type":"order","a":["nota1, nota2, nota3 = 7, 5, 6","promedio = (nota1 + nota2 + nota3) / 3","print('Promedio:', promedio)","if promedio >= 4:","    print('Aprobado')"],"note":"Primero se cargan los datos, despues se calcula y se muestra el resultado, y recien ahi se decide con el if."},
  ],
  "4": [
    {"q":"Que imprime este codigo?","code":"L = [1, 2, 3, 4, 5]\nprint(L[1:4], L[-1])","a":["[2, 3, 4] 5","[1, 2, 3] 5","[2, 3, 4] 4","[2, 3, 4, 5] 5"],"correct":0,"note":"El limite superior del slicing no se incluye: L[1:4] toma los indices 1, 2 y 3; L[-1] es el ultimo elemento."},
    {"q":"Que imprime este codigo?","code":"a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)","a":["[1, 2, 3, 4]","[1, 2, 3]","[4]","Error de tipo"],"correct":0,"note":"b = a no copia: ambas variables apuntan al mismo objeto; para una copia independiente hace falta b = a.copy()."},
    {"q":"Cual de estos contenedores no admite acceso por indice?","a":["conjunto (set)","lista","tupla","cadena (str)"],"correct":0,"note":"El conjunto no tiene posicion ni orden, por eso no existe s[0]; se consulta solo con pertenencia: x in s."},
    {"q":"Que imprime este codigo?","code":"c = 'algoritmos'\nprint(c[0], c[-1], len(c))","a":["a s 10","a s 9","a m 10","a s 11"],"correct":0,"note":"Los indices comienzan en 0, el -1 refiere al ultimo caracter y la palabra algoritmos tiene 10 letras."},
    {"q":"En un diccionario, si se vuelve a asignar sobre una clave que ya existia:","a":["se guardan los dos valores en una lista","Python levanta un error de sintaxis","el ultimo valor sobrescribe a los anteriores","se crea una clave nueva con un sufijo"],"correct":2,"note":"Las claves son unicas: el diccionario conserva unicamente el ultimo valor escrito para esa clave."},
    {"q":"El costo promedio de preguntar si un elemento pertenece a un conjunto (x in s) es:","a":["O(1)","O(n)","O(log n)","O(n^2)"],"correct":0,"note":"El conjunto se apoya en una tabla hash, asi que la pertenencia es O(1) en promedio, aunque en el peor caso puede caer a O(n)."},
    {"q":"Cual es la salida de esta comprension de lista?","code":"pares = [n for n in range(1, 11) if n % 2 == 0]\nprint(pares)","a":["[2, 4, 6, 8, 10]","[1, 3, 5, 7, 9]","[0, 2, 4, 6, 8]","[2, 4, 6, 8, 10, 12]"],"correct":0,"note":"La comprension recorre de 1 a 10, filtra los pares y devuelve una lista nueva con 2, 4, 6, 8 y 10."},
    {"q":"Los metodos propios de una tupla son unicamente:","a":["append y pop","sort y reverse","keys y values","count e index"],"correct":3,"note":"Al ser inmutable, la tupla solo expone count() para ocurrencias e index() para la posicion de un valor."},
    {"q":"Marca las afirmaciones verdaderas sobre las listas:","type":"multi","a":["Son mutables: admiten append, pop y sort","Admiten elementos repetidos","Sus indices comienzan en 0","Son inmutables como las tuplas"],"correct":[0,1,2],"note":"La mutabilidad es justamente lo que separa a la lista de la tupla; ambas son ordenadas y admiten repetidos."},
    {"q":"Marca las afirmaciones verdaderas sobre los diccionarios:","type":"multi","a":["Las claves deben ser unicas","Las claves deben ser inmutables, como str, int o tupla","Se recorre con items() para ver clave y valor a la vez","Se accede por posicion, igual que en una lista"],"correct":[0,1,2],"note":"Un diccionario no tiene posicion: d[0] busca la clave 0, no el primer elemento; para eso esta la lista."},
    {"q":"Escribi el nombre del metodo de la lista que agrega un elemento al final.","type":"fill","a":["append","agregar","push"],"note":"append() modifica la lista y devuelve None; para sumar dos listas se usa el operador +, que crea otra lista nueva."},
    {"q":"Escribi el nombre de la operacion que extrae un fragmento de un contenedor, como L[2:5].","type":"fill","a":["slicing","slice","rebanado"],"note":"El slicing devuelve una copia y no modifica el original; ademas nunca incluye el limite superior."},
    {"q":"En este codigo la segunda linea levanta un TypeError porque las tuplas son inmutables.","type":"tf","code":"t = (1, 2, 3)\nt[0] = 9","a":["Verdadero","Falso"],"correct":0,"note":"Las tuplas no admiten asignacion por indice; para cambiar un valor hay que construir una lista o una tupla nueva."},
    {"q":"En Python se puede modificar un caracter de una cadena en su posicion con c[2] = 's'.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"Las cadenas son inmutables: hay que crear una nueva con concatenacion, slicing o el metodo replace()."},
    {"q":"Ordena las lineas para que el programa ordene las notas y las guarde en una tupla.","type":"order","a":["notas = [7, 5, 9]","notas.sort()","tupla_notas = tuple(notas)","print(tupla_notas, len(tupla_notas))"],"note":"Primero se crea la lista, se ordena sobre si misma con sort(), despues se convierte con tuple() y recien ahi se muestra."},
  ],
  "5": [
    {"q":"Que produce este bloque?","code":"try:\n    print(int('12'))\nexcept ValueError:\n    print('valor malo')\nelse:\n    print('todo bien')\nfinally:\n    print('fin')","a":["Imprime 12, despues 'todo bien' y despues 'fin'","Imprime 12 y despues 'fin'","Imprime 'valor malo' y despues 'fin'","Imprime solo 'fin'"],"correct":0,"note":"No hay excepcion, asi que ademas del try corre el else y por ultimo siempre corre finally; el except se saltea."},
    {"q":"Un SyntaxError de Python se detecta:","a":["Antes de ejecutar, cuando el interprete analiza el modulo","Solo despues de recibir datos por teclado","Cuando una lista queda vacia","Cuando falla un assert"],"correct":0,"note":"El interprete no puede traducir la linea (por ejemplo, un if sin los dos puntos) y detiene todo antes de arrancar: es el grupo de errores gramaticales o sintacticos."},
    {"q":"Que excepcion se levanta en este codigo?","code":"texto = '12a'\nnumero = int(texto)\nprint(numero)","a":["ValueError","TypeError","IndexError","SyntaxError"],"correct":0,"note":"int() recibe un str, que es el tipo correcto, pero '12a' no es un valor valido para convertir: por eso es ValueError y no TypeError."},
    {"q":"En un manejo de excepciones, el bloque else se ejecuta:","a":["Solo si el try termino sin lanzar ninguna excepcion","Solo si hubo una excepcion capturada","Siempre, igual que finally","Despues de finally"],"correct":0,"note":"else es el lugar para el codigo que depende de que el try salio bien; finally corre siempre, con o sin error."},
    {"q":"Que imprime este codigo?","code":"x = 1\n\ndef g():\n    x = 2\n    return x\n\nprint(g(), x)","a":["2 1","2 2","1 1","NameError"],"correct":0,"note":"La asignacion x = 2 crea una x local a la funcion: el return devuelve 2 pero la x global sigue valiendo 1."},
    {"q":"Que imprime esta funcion con argumento por defecto?","code":"def h(a, b=3):\n    return a + b\n\nprint(h(1), h(1, b=5), h(1, 2))","a":["4 6 3","4 4 3","4 6 4","TypeError"],"correct":0,"note":"b solo vale 3 si no se lo pasa; se puede sobreescribir por nombre (b=5) o por posicion (h(1, 2) = 3)."},
    {"q":"Que hace 'assert condicion, mensaje' cuando la condicion es falsa?","a":["Detiene la ejecucion y lanza AssertionError mostrando el mensaje","Imprime el mensaje y el programa sigue","Lanza ValueError","No hace nada en Python 3"],"correct":0,"note":"assert es una ayuda de depuracion: con condicion verdadera el codigo continua; con condicion falsa interrumpe con AssertionError y muestra el mensaje."},
    {"q":"Cual de estos casos es un error semantico?","a":["El promedio se divide por la cantidad menos uno y el programa termina sin avisar nada","Falta un ':' despues de un if","Se mezclan tabs y espacios dentro de un bloque","Se olvida cerrar un parentesis en un print"],"correct":0,"note":"Los otros tres impiden que el codigo corra (sintaxis o indentacion); el error semantico corre perfecto pero devuelve un resultado equivocado."},
    {"q":"Sobre el bloque try y sus partes, marca las afirmaciones verdaderas.","type":"multi","a":["finally se ejecuta siempre, incluso si el try lanza una excepcion","else se ejecuta solo si no hubo excepcion","Un except sin tipo captura cualquier excepcion","El cuerpo de try puede quedar vacio"],"correct":[0,1,2],"note":"finally es para liberar recursos siempre; el except sin tipo atrapa todo (por eso conviene ser especifico) y un try sin cuerpo es error de sintaxis."},
    {"q":"Sobre las funciones, marca las afirmaciones verdaderas.","type":"multi","a":["return entrega el resultado y corta la ejecucion de la funcion","Una funcion sin return devuelve None","Los argumentos por defecto se evaluan en cada llamada","Las variables locales desaparecen al salir de la funcion"],"correct":[0,1,3],"note":"Los valores por defecto se evaluan una sola vez, al definir la funcion; por eso una lista usada como parametro por defecto se comparte entre llamadas."},
    {"q":"Escribi el nombre exacto de la excepcion que levanta un assert con la condicion falsa.","type":"fill","a":["assertionerror","assertion error"],"note":"assert condicion, 'msg' interrumpe con AssertionError y deja ver msg en pantalla; con condicion verdadera el codigo sigue de largo."},
    {"q":"Que valor devuelve una funcion de Python que termina sin ejecutar return?","type":"fill","a":["none","nonetype","none type"],"note":"Python agrega un return None implicito; ese None suele ser el origen del bug cuando el llamador recibe None en vez del resultado."},
    {"q":"El bloque finally se ejecuta aunque el try lance una excepcion que ningun except capture.","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"finally corre siempre; despues de el, si nadie atrapo la excepcion, el programa termina con su traceback."},
    {"q":"Un error semantico siempre muestra un traceback en pantalla.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"El programa corre hasta el final y devuelve resultados erroneos sin avisar; por eso se depura con prints, asserts y pruebas de casos borde."},
    {"q":"Ordena los bloques segun se ejecutan cuando el try no lanza ninguna excepcion.","type":"order","a":["try: el codigo protegido corre completo","else: corre solo si no hubo excepcion","finally: se ejecuta siempre, al final"],"note":"Sin excepcion el except se saltea; el orden real es try, despues else y por ultimo finally."},
  ],
  "6": [
    {"q":"Que imprime este codigo?","code":"def r(n):\n    if n == 0:\n        return 0\n    return n + r(n - 1)\n\nprint(r(4))","a":["10","4","6","RecursionError"],"correct":0,"note":"r(4) suma 4 + 3 + 2 + 1 + r(0), y r(0) devuelve 0 por el caso base: el total es 10."},
    {"q":"Que valor devuelve s(5)?","code":"def s(n):\n    if n <= 1:\n        return n\n    return s(n - 1) + s(n - 2)\n\nprint(s(5))","a":["5","3","8","10"],"correct":0,"note":"Con s(0) = 0 y s(1) = 1 la funcion genera la serie de Fibonacci 0, 1, 1, 2, 3, 5; por eso s(5) vale 5."},
    {"q":"Cual es la salida?","code":"def f(n):\n    if n == 0:\n        return\n    print(n)\n    f(n - 1)\n\nf(3)","a":["3 2 1","1 2 3","3","3 2 1 0"],"correct":0,"note":"El print esta antes de la llamada recursiva, asi que se muestra al bajar por la pila; el caso base n == 0 no imprime nada."},
    {"q":"Cual es el costo en memoria de una funcion recursiva?","a":["Cada llamada pendiente ocupa un marco en la pila de ejecucion","Ninguno: la recursion no usa memoria extra","Solo consume memoria si hay variables globales","La mitad que un while equivalente"],"correct":0,"note":"Ese costo crece con la profundidad; si la recursion es muy profunda Python corta con RecursionError (unas 1000 llamadas por defecto)."},
    {"q":"En una recursion sobre cadenas, que representan 'actual' y 'resto'?","code":"palabra = 'hola'\nactual = palabra[0]\nresto = palabra[1:]\nprint(actual, resto)","a":["El caracter actual y el problema mas chico, sin ese caracter","El indice y la longitud de la cadena","La primera y la ultima letra","Dos copias iguales de la cadena"],"correct":0,"note":"actual es el trabajo de esta llamada y resto es la misma cadena un caracter mas corta; asi se avanza hasta el caso base de cadena vacia o de un solo caracter."},
    {"q":"La version recursiva ingenua de Fibonacci (sin memoizacion) tiene costo:","a":["Exponencial, O(2^n), porque vuelve a calcular los mismos valores","Lineal, O(n)","Constante, O(1)","Cuadratico, O(n^2)"],"correct":0,"note":"fib(n) llama a fib(n-1) y fib(n-2) y esas ramas se superponen; guardando los valores ya calculados, o con un bucle, baja a O(n)."},
    {"q":"Toda funcion recursiva se puede reemplazar por:","a":["Un bucle con variables que guardan el estado pendiente","Una lista enlazada obligatoria","Un segundo modulo","Un bloque try/except"],"correct":0,"note":"El bucle reemplaza la pila de llamadas con sus propias variables: el resultado es el mismo y la memoria pasa de O(profundidad) a O(1)."},
    {"q":"Que ocurre al ejecutar este codigo?","code":"def p(n):\n    return p(n + 1)\n\np(0)","a":["Python lanza RecursionError","Devuelve 0","Lanza IndexError","Termina normalmente"],"correct":0,"note":"No hay caso base: cada llamada se apila hasta superar el limite de profundidad y el interprete corta con RecursionError."},
    {"q":"Sobre el caso base de una recursion, marca las afirmaciones verdaderas.","type":"multi","a":["Es la rama que responde sin volver a llamarse","Sin el, la recursion no termina y Python lanza RecursionError","Tiene que escribirse siempre como 'if n == 0'","En el factorial tipico se usa 'if n <= 1: return 1'"],"correct":[0,1,3],"note":"La forma del caso base depende del problema; lo importante es que detenga la cadena de llamadas con un valor ya conocido."},
    {"q":"Cuando conviene resolver un problema de forma recursiva? Marca las correctas.","type":"multi","a":["Problemas con estructura jerarquica, como arboles o directorios","Cuando se quiere consumir menos memoria que un while","Cuando cada llamada recibe una entrada mas chica hasta llegar al caso base","Cuando hay que procesar primero los subproblemas (por ejemplo, en postorden)"],"correct":[0,2,3],"note":"La recursion ahorra escribir la logica de control en problemas jerarquicos, pero gasta mas memoria que un bucle por la pila de llamadas."},
    {"q":"En la definicion tipica factorial(n) = n * factorial(n-1), que valor devuelve factorial(0)?","type":"fill","a":["1","uno"],"note":"0! vale 1 por convencion y ese valor hace que la cadena de multiplicaciones devuelva n! correcto; ese es el caso base de la recursion."},
    {"q":"Cuantas llamadas recursivas soporta Python por defecto antes de lanzar RecursionError?","type":"fill","a":["1000","mil"],"note":"El limite por defecto es 1000; se consulta con sys.getrecursionlimit() y se puede aumentar, pero cada marco consume memoria real."},
    {"q":"Cada llamada recursiva pendiente guarda sus parametros y variables locales en la pila de ejecucion.","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"Por eso la recursion profunda consume memoria: los marcos quedan vivos hasta que la funcion ejecuta return."},
    {"q":"La recursion es siempre mas rapida que la version iterativa equivalente.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"Hace mas o menos las mismas operaciones pero agrega el costo de crear y destruir marcos; y Fibonacci recursivo sin memoizacion es exponencial."},
    {"q":"Con suma(n) = n + suma(n-1) y caso base suma(0) = 0, ordena las llamadas segun se abren.","type":"order","a":["suma(4)","suma(3)","suma(2)","suma(1)","suma(0)"],"note":"Cada llamada abre la siguiente hasta llegar al caso base, que responde sin recursarse; despues los return se resuelven al reves, de suma(0) hasta suma(4)."},
  ],
  "7": [
    {"q":"Que imprime este codigo?","code":"from math import pi\nimport math\nprint(pi == math.pi)","a":["True","False","NameError","None"],"correct":0,"note":"Las dos formas traen el mismo valor de pi; import math ademas habilita el prefijo math.pi y from math import pi trae solo ese nombre."},
    {"q":"Que devuelve random.randrange(0, 4)?","a":["Un entero al azar entre 0 y 3, inclusive","Un entero entre 0 y 4 inclusive","Un flotante entre 0 y 1","Un entero entre 1 y 4"],"correct":0,"note":"Como en range, el limite superior no se incluye; para llegar al 4 habria que escribir randrange(0, 5)."},
    {"q":"Que valor devuelve la suma de los dos puntos?","code":"class Punto:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def sumar(self, otro):\n        return Punto(self.x + otro.x, self.y + otro.y)\n\nprint(Punto(1, 2).sumar(Punto(3, 4)).x)","a":["4","1","3","TypeError"],"correct":0,"note":"self es el punto que llama al metodo y otro el que se pasa como argumento: 1 + 3 = 4, y el metodo devuelve un Punto nuevo."},
    {"q":"El metodo especial __str__ sirve para:","a":["Definir como se muestra el objeto al hacer print(objeto)","Convertir el objeto a entero","Inicializar la instancia","Borrar el objeto de memoria"],"correct":0,"note":"print(objeto) llama a str(objeto) y usa ese texto; sin __str__ se muestra la representacion tecnica por defecto."},
    {"q":"Que imprime el codigo?","code":"class Caja:\n    def __init__(self, n):\n        self.n = n\n    def __add__(self, otra):\n        return Caja(self.n + otra.n)\n\nprint((Caja(2) + Caja(5)).n)","a":["7","2 5","25","TypeError"],"correct":0,"note":"Definir __add__ es sobrecargar el operador +: la suma construye una Caja nueva con 2 + 5 y despues se le lee el atributo n."},
    {"q":"len(c) es una funcion y c.index('e') es un metodo. La diferencia practica es:","a":["index esta definido dentro del tipo y se invoca sobre un objeto; len es una funcion independiente","len solo sirve para cadenas","index solo funciona con listas","Son lo mismo y es solo convencion"],"correct":0,"note":"Se llama obj.metodo() y funcion(obj); ademas el metodo no existe sin el tipo que lo define, mientras que len funciona con cualquier objeto de tamano conocible."},
    {"q":"Para que sirve el bloque if __name__ == '__main__': ?","a":["Ejecutar ese codigo solo cuando se corre el archivo, no cuando otro modulo lo importa","Definir el metodo principal de una clase","Importar el modulo principal","Comparar cadenas de texto"],"correct":0,"note":"Al importar el archivo __name__ vale el nombre del modulo y el bloque no se ejecuta; al correrlo directamente __name__ vale '__main__'."},
    {"q":"Que imprime?","code":"class Ratio:\n    def __init__(self, n, d):\n        self.n, self.d = n, d\n    def val(self):\n        return self.n / self.d\n\nq = Ratio(1, 4)\nprint(q.val(), Ratio.val(q))","a":["0.25 0.25","0.25 Error","Error de sintaxis","1 4"],"correct":0,"note":"q.val() es la forma corta de Ratio.val(q): en los dos caminos Python pasa q como self, por eso dan lo mismo."},
    {"q":"Formas validas de importar en Python. Marca las correctas.","type":"multi","a":["import math","import math as m","from math import sqrt","include math"],"correct":[0,1,2],"note":"import trae el modulo completo y se usa con prefijo, import as le pone alias y from ... import trae solo lo que se necesita; include no existe en Python."},
    {"q":"Sobre los modulos numpy y random, marca las afirmaciones verdaderas.","type":"multi","a":["np.array crea un arreglo de numpy","random.shuffle mezcla la lista en el lugar, sin devolver una copia","random.random() devuelve un entero al azar","Los arrays de numpy son mutables"],"correct":[0,1,3],"note":"random.random() devuelve un flotante entre 0 (incluido) y 1 (excluido); para enteros se usan randrange o randint."},
    {"q":"Escribi el nombre del metodo que se ejecuta automaticamente al crear una instancia de la clase.","type":"fill","a":["__init__","init","constructor"],"note":"__init__ recibe self y los argumentos de la llamada y fija el estado inicial; se ejecuta una vez por cada objeto nuevo."},
    {"q":"Como se llama el primer parametro de un metodo, que referencia a la instancia que lo recibe?","type":"fill","a":["self"],"note":"Python lo pasa solo: q.val() y Ratio.val(q) son equivalentes porque en ambos casos self es q."},
    {"q":"Los atributos creados con self.x dentro de __init__ pertenecen a cada instancia, no a la clase.","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"Cada objeto tiene su propio juego de atributos: cambiar self.x en una instancia no afecta a las otras."},
    {"q":"Python permite definir dos metodos con el mismo nombre y elegir uno segun la cantidad de argumentos.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"No hay sobrecarga por firma: el ultimo def pisa a los anteriores; para aceptar distinta cantidad de argumentos se usan valores por defecto o *args."},
    {"q":"Ordena los pasos para usar un modulo escrito por vos.","type":"order","a":["Crear un archivo .py con las funciones o clases","Guardarlo en la misma carpeta del programa (o en el path de Python)","Importarlo con import nombre_del_archivo","Llamar sus partes como nombre.funcion()"],"note":"El archivo tiene que ser alcanzable por el interprete; una vez importado, sus partes se usan con el prefijo del modulo o con from ... import."},
  ],
  "8": [
    {"q":"Que imprime este codigo?","code":"pila = []\npila.append(1)\npila.append(2)\nprint(pila.pop())\npila.append(3)\nprint(pila)","a":["2 y despues [1, 3]","2 y despues [1, 2, 3]","1 y despues [2, 3]","3 y despues [1, 2]"],"correct":0,"note":"pop() devuelve y quita el tope, que era 2; despues 3 se apila sobre [1] y la lista queda [1, 3]."},
    {"q":"Que imprime esta cola despues de encolar y desencolar?","code":"cola = ['ana', 'bel']\ncola.append('caro')\nprint(cola.pop(0))\nprint(cola)","a":["ana y despues ['bel', 'caro']","caro y despues ['ana', 'bel']","ana y despues ['ana', 'bel', 'caro']","bel y despues ['ana', 'caro']"],"correct":0,"note":"La cola es FIFO: atiende al primero que llego; pop(0) saca del inicio, por eso para colas conviene collections.deque, donde popleft() es O(1)."},
    {"q":"En una lista enlazada, llegar al elemento de la posicion i cuesta:","a":["O(i): hay que recorrer i nodos desde la cabeza","O(1): cada nodo guarda su posicion","O(log i)","O(1) si la lista esta ordenada"],"correct":0,"note":"Cada nodo solo conoce al siguiente; sin recorrer la cadena no se llega a la posicion i, a diferencia de la lista de Python, donde lista[i] es O(1)."},
    {"q":"Que imprime y cuanto cuesta insert(0, 5)?","code":"L = [10, 20, 30]\nL.insert(0, 5)\nprint(L)","a":["[5, 10, 20, 30] y cuesta O(n)","[5, 10, 20, 30] y cuesta O(1)","[10, 20, 30, 5] y cuesta O(n)","[5, 10, 20, 30] y cuesta O(log n)"],"correct":0,"note":"Insertar al principio desplaza todos los elementos una posicion; en cambio append(40) al final es O(1) amortizado."},
    {"q":"Que imprime el acceso al dato del segundo nodo?","code":"class Nodo:\n    def __init__(self, dato=None, prox=None):\n        self.dato = dato\n        self.prox = prox\n\nprim = Nodo('a', Nodo('b'))\nprint(prim.prox.dato)","a":["b, porque prim.prox apunta al segundo nodo","a, porque prox guarda el dato anterior","None, porque el ultimo nodo vale None","Error: Nodo no tiene atributo prox"],"correct":0,"note":"prox guarda la referencia al nodo siguiente: el primero apunta al segundo, y ese ultimo tiene prox en None."},
    {"q":"En un iterador propio, el metodo __next__ debe:","a":["Devolver un elemento por vez y levantar StopIteration al final","Devolver siempre una lista","Ejecutar el bloque del for","Levantar un IndexError al terminar"],"correct":0,"note":"Por eso el par __iter__/__next__ hace que funcione el for: cuando __next__ lanza StopIteration, el ciclo se corta limpio."},
    {"q":"collections.deque permite quitar del inicio en O(1) porque:","a":["Es una estructura circular con indices de entrada y salida: no desplaza los elementos","Esta ordenada de menor a mayor","Guarda los datos en un arbol binario","Reescribe la lista completa en cada operacion"],"correct":0,"note":"popleft() solo avanza el indice de lectura; list.pop(0), en cambio, mueve todos los elementos una posicion y es O(n)."},
    {"q":"Si la operacion mas frecuente es acceder por posicion, conviene usar:","a":["La lista de Python, porque lista[i] es O(1)","Una lista enlazada, porque cada acceso recorre de a un nodo","Una pila, porque no permite indices","Una cola, porque es FIFO"],"correct":0,"note":"La lista es un arreglo dinamico con acceso directo; la enlazada gana cuando se entra y sale mucho por los extremos, donde sus inserciones son O(1)."},
    {"q":"Operaciones del TAD Pila. Marca las correctas.","type":"multi","a":["push(x) agrega un elemento en el tope","pop() devuelve y quita el tope","top() o peek mira el tope sin quitarlo","dequeue() extrae el elemento mas antiguo"],"correct":[0,1,2],"note":"dequeue es de la cola, no de la pila; ademas toda operacion debe contemplar el caso de la estructura vacia."},
    {"q":"Sobre la lista enlazada y sus iteradores, marca las afirmaciones verdaderas.","type":"multi","a":["Insertar al frente cuesta O(1) porque solo se cambia la cabecera","Llegar al elemento i-esimo cuesta O(1)","remove(x) debe recorrer los nodos hasta encontrar x","El iterador usa __next__ y levanta StopIteration al final"],"correct":[0,2,3],"note":"El unico acceso en tiempo constante es el de la cabeza; todo lo demas (por posicion o por valor) exige recorrer la cadena de nodos."},
    {"q":"En el codigo de la catedra, como se llama el atributo del nodo que guarda la referencia al siguiente?","type":"fill","a":["prox","proximo"],"note":"El nodo tiene dato y prox; prox vale None en el ultimo nodo y con ese None se detecta el fin de la lista."},
    {"q":"Como se llama la operacion del TAD Cola que quita y devuelve el primer elemento?","type":"fill","a":["desencolar","dequeue"],"note":"En la clase Cola de la catedra es desencolar(); en la especificacion generica se llama dequeue, y su par enqueue (o encolar) agrega al final."},
    {"q":"En una pila, el ultimo elemento en apilarse es el primero en desapilarse.","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"Es la disciplina LIFO (last in, first out), igual que los platos apilados: solo se trabaja sobre el tope."},
    {"q":"Una lista enlazada permite acceder al elemento de la posicion 50 en tiempo constante.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"Hay que partir de la cabeza y hacer 50 saltos de prox: el acceso es O(i), no O(1)."},
    {"q":"Se apilaron los valores 1, 2 y 3 (en ese orden). Ordenalos segun los devuelve pop().","type":"order","a":["3","2","1"],"note":"LIFO: sale primero el ultimo apilado; si en cambio se encolaran 1, 2 y 3, dequeue devolveria primero el 1."},
  ],
  "9": [
    {"q":"Cual es la salida de este rastreo de la busqueda binaria?","code":"lista = [2, 5, 8, 12, 16, 23, 38, 56, 91]\nizq, der = 0, len(lista) - 1\nwhile izq <= der:\n    m = (izq + der) // 2\n    if lista[m] == 23: break\n    if lista[m] < 23: izq = m + 1\n    else: der = m - 1\nprint(izq, der, m)","a":["5 5 5","5 6 5","4 8 4","6 6 6"],"correct":0,"note":"El segmento arranca en [0, 8]: 16 < 23 sube izq a 5, 38 > 23 baja der a 5 y recien ahi el medio 5 contiene al 23."},
    {"q":"Cual es el invariante que sostiene la busqueda binaria?","a":["Si el objetivo existe, entonces esta siempre entre izq y der","El elemento del medio siempre es igual al objetivo","izq y der avanzan de a dos posiciones en cada paso","La lista se ordena a medida que se la recorre"],"correct":0,"note":"Ese invariante justifica cada movimiento de los extremos: nunca se descarta un lado donde el objetivo todavia podria estar."},
    {"q":"Que lista devuelve este ordenamiento por insercion?","code":"def insercion(a):\n    for i in range(1, len(a)):\n        v, j = a[i], i\n        while j > 0 and v < a[j-1]:\n            a[j], j = a[j-1], j-1\n        a[j] = v\n    return a\nprint(insercion([29, 10, 14, 37, 13]))","a":["[10, 13, 14, 29, 37]","[10, 14, 13, 29, 37]","[29, 10, 14, 13, 37]","[13, 10, 14, 29, 37]"],"correct":0,"note":"Cada elemento se desplaza hacia la derecha mientras sea menor que su predecesor: 13 termina entre 10 y 14, y 37 cierra la lista."},
    {"q":"El ordenamiento por insercion aplicado a una lista ya ordenada de n elementos hace:","a":["n - 1 comparaciones y ningun desplazamiento, costo O(n)","n^2 comparaciones, igual que el peor caso","log n comparaciones, como la busqueda binaria","cero comparaciones porque no hay nada que mover"],"correct":0,"note":"El while de desplazamiento nunca entra: solo se compara cada elemento con su predecesor, por eso insercion rinde muy bien casi ordenada."},
    {"q":"Cual de estos ordenamientos NO es estable?","a":["seleccion","insercion","burbujeo","mergesort"],"correct":0,"note":"Seleccion intercambia el minimo encontrado con la posicion i y puede cruzar dos elementos con igual clave; los otros conservan su orden relativo."},
    {"q":"Que imprime este contador de comparaciones del burbujeo?","code":"b = [7, 1, 9, 3, 5]\nc = 0\nfor p in range(len(b) - 1, 0, -1):\n    for i in range(p):\n        c += 1\n        if b[i] > b[i + 1]: b[i], b[i + 1] = b[i + 1], b[i]\nprint(c, b)","a":["10 [1, 3, 5, 7, 9]","10 [7, 1, 9, 3, 5]","4 [1, 3, 5, 7, 9]","15 [1, 3, 5, 7, 9]"],"correct":0,"note":"Las cuatro vueltas comparan 4 + 3 + 2 + 1 = 10 pares adyacentes y al final la lista queda ordenada de menor a mayor."},
    {"q":"Cual es la salida de este quicksort?","code":"def quicksort(a):\n    if len(a) < 2: return a\n    p = a[0]\n    men = [x for x in a[1:] if x < p]\n    may = [x for x in a[1:] if x >= p]\n    return quicksort(men) + [p] + quicksort(may)\nprint(quicksort([7, 1, 9, 3, 5]))","a":["[1, 3, 5, 7, 9]","[7, 5, 3, 1, 9]","[1, 3, 7, 5, 9]","[9, 7, 5, 3, 1]"],"correct":0,"note":"El pivote 7 separa menores [1, 3, 5] de mayores [9]; la recursion ordena cada parte y concatena menores, pivote y mayores."},
    {"q":"Teniendo una lista desordenada sobre la que se haran miles de busquedas, la estrategia mas economica es:","a":["ordenar una vez con un metodo O(n log n) y despues usar busqueda binaria","repetir la busqueda lineal en cada consulta","volver a ordenar con seleccion antes de cada busqueda","copiar la lista completa antes de cada busqueda"],"correct":0,"note":"Ordenar cuesta n log n una sola vez y cada binaria cuesta log n; la lineal sale O(n) por cada una de las miles de busquedas."},
    {"q":"Marca las afirmaciones correctas sobre los ordenamientos de la unidad.","type":"multi","a":["Seleccion e insercion hacen del orden de n^2 comparaciones en el peor caso","Insercion sobre una lista casi ordenada se acerca a O(n)","Burbujeo es mas rapido que mergesort cuando la lista es grande","Un orden estable conserva el orden relativo de los elementos con igual clave"],"correct":[0,1,3],"note":"Los tres cuadraticos pierden contra cualquier O(n log n) con n grande; insercion es el unico que se salva si la lista ya esta casi ordenada."},
    {"q":"Sobre esta busqueda lineal que cuenta comparaciones, marca las afirmaciones correctas.","type":"multi","code":"def buscar(L, x):\n    c = 0\n    for i in range(len(L)):\n        c += 1\n        if L[i] == x: return i, c\n    return -1, c\nprint(buscar([4, 8, 15, 16, 23], 23))\nprint(buscar([4, 8, 15, 16, 23], 99))","a":["La primera linea imprime (4, 5)","La segunda linea imprime (-1, 5)","Si se buscara 4 la salida seria (0, 0)","En el peor caso se hace una comparacion por elemento"],"correct":[0,1,3],"note":"23 esta en el indice 4 y se comparan los 5 elementos; el objetivo ausente recorre la lista entera y devuelve -1 con c igual a n."},
    {"q":"Escribi la precondicion que exige la busqueda binaria para poder descartar la mitad del segmento.","type":"fill","a":["lista ordenada","que la lista este ordenada","orden ascendente","ordenada"],"note":"Sin orden no hay forma de saber en que mitad podria estar el objetivo, y el algoritmo pierde su O(log n)."},
    {"q":"Escribi el nombre del ordenamiento que en cada pasada lleva el minimo de la parte sin ordenar a la posicion que le corresponde.","type":"fill","a":["seleccion","selection","por seleccion","seleccion simple"],"note":"Seleccion fija la posicion i con el minimo del resto y por eso hace a lo sumo n - 1 intercambios, aunque compare como burbujeo."},
    {"q":"El ordenamiento por insercion es estable porque conserva el orden original de los elementos con igual clave.","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"Al desplazar un elemento solo mientras sea menor que su predecesor, dos valores iguales nunca se cruzan entre si."},
    {"q":"Quicksort siempre ordena en O(n log n) porque particiona la lista por la mitad en cada llamada.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"Si el pivote queda siempre en un extremo las particiones son de a un elemento y el costo sube a O(n^2); por eso se elige con cuidado (mediana de tres)."},
    {"q":"Ordena los siguientes algoritmos de menor a mayor costo en el peor caso para una lista de n elementos.","type":"order","a":["busqueda binaria: O(log n)","busqueda lineal: O(n)","mergesort: O(n log n)","insercion: O(n^2)"],"note":"Esa es la jerarquia de crecimiento de la unidad: logaritmica, lineal, n log n y cuadratica, y en ese orden escalan los algoritmos cuando crece la lista."},
  ],
  "10": [
    {"q":"Cual es la salida de este contador de operaciones con ciclos anidados?","code":"total = 0\nfor i in range(10):\n    for j in range(i):\n        total += 1\nprint(total)","a":["45","90","10","100"],"correct":0,"note":"El ciclo interno corre i veces; sumando i de 0 a 9 queda 0 + 1 + ... + 9 = 45, del orden de n^2."},
    {"q":"Que imprime esta funcion de promedios acumulados?","code":"def promedios(S):\n    A = []\n    for j in range(len(S)):\n        A.append(sum(S[:j + 1]) / (j + 1))\n    return A\nprint(promedios([2, 4, 6, 8]))","a":["[2.0, 3.0, 4.0, 5.0]","[2.0, 4.0, 6.0, 8.0]","[4.0, 5.0, 6.0, 7.0]","[2.0, 3.0, 4.0, 5]"],"correct":0,"note":"Cada promedio vuelve a sumar el prefijo desde cero: 12 / 3 = 4.0 para [2, 4, 6] y 20 / 4 = 5.0 para la lista completa."},
    {"q":"Cual es la salida de esta funcion lineal?","code":"def f(n):\n    return 8 * n + 5\nprint(f(1), f(10), f(100))","a":["13 85 805","8 10 100","13 85 800","5 85 805"],"correct":0,"note":"8 * 1 + 5 = 13, 8 * 10 + 5 = 85 y 800 + 5 = 805: domina el termino 8n, por eso f(n) es O(n)."},
    {"q":"Cual de estas funciones crece mas rapido cuando n es grande?","a":["2^n","n^2","n log n","log n"],"correct":0,"note":"Las exponenciales dominan a cualquier polinomio: con n igual a 30, 2^n ya pasa los mil millones mientras n^2 vale 900."},
    {"q":"Cual de estas acciones se considera una estructura compuesta y no una operacion primitiva?","a":["el control completo de un for con su logica interna","el acceso a un elemento por indice","una suma aritmetica entre dos valores","una comparacion entre dos valores"],"correct":0,"note":"Las primitivas son acciones atomicas (asignar, comparar, sumar, acceder por indice); el bucle es una estructura compuesta que se descompone en primitivas."},
    {"q":"El costo T(n) de un algoritmo se calcula normalmente sobre el peor caso porque:","a":["el caso promedio exigiria un estudio estadistico de la distribucion de los datos de entrada","el peor caso es el que mas veces se ejecuta","el mejor caso no se puede contar","las computadoras solo trabajan en el peor caso"],"correct":0,"note":"Con esa decision se obtiene una cota valida para cualquier entrada, sin depender de la probabilidad de cada dato."},
    {"q":"Cual es la salida de este bloque que mide una suma?","code":"from time import time\nt0 = time()\ns = sum(range(100000))\nt1 = time()\nprint(s, isinstance(t1 - t0, float))","a":["4999950000 True","4999950000 False","99999 True","4999950000 0"],"correct":0,"note":"sum(range(100000)) es 99999 * 100000 / 2 = 4999950000 y la resta de dos time() devuelve un flotante con segundos desde la epoch."},
    {"q":"Dentro de los problemas decidibles, se dice que un problema es intratable cuando:","a":["su costo es exponencial y con entradas grandes no se puede resolver","no tiene solucion posible","se resuelve en O(1)","requiere una maquina distinta"],"correct":0,"note":"Los polinomicos son practicables; los exponenciales siempre terminan, pero con n grande superan cualquier tiempo razonable."},
    {"q":"Marca las afirmaciones correctas sobre la notacion asintotica.","type":"multi","a":["O(g(n)) es una cota superior del crecimiento","Omega(g(n)) es una cota inferior del crecimiento","Theta(g(n)) exige acotar por arriba y por abajo con la misma funcion","Que f(n) sea O(n) significa que tarda exactamente n milisegundos"],"correct":[0,1,2],"note":"La notacion describe el crecimiento y no un tiempo absoluto: por eso se descartan las constantes y el hardware de la maquina."},
    {"q":"Sobre estas funciones de crecimiento, marca las afirmaciones correctas.","type":"multi","code":"for n in (10, 100, 1000):\n    cuadrado = n * n\n    suma = n * (n + 1) // 2\n    print(n, cuadrado, suma)","a":["Para n igual a 1000, cuadrado vale 1000000","suma calcula 1 + 2 + ... + n","Las dos variables crecen del orden de n^2","cuadrado siempre es menor que suma"],"correct":[0,1,2],"note":"n * (n + 1) // 2 da 55 con n igual a 10 y ambas son cuadraticas; lo que falla es la ultima: n^2 siempre es mayor o igual a la suma."},
    {"q":"Escribi el nombre del problema que pregunta si un programa termina con una entrada dada y que se demostro que no tiene solucion general.","type":"fill","a":["problema de la parada","halting","halting problem","problema halting"],"note":"Es el caso canonico de un problema indecidible: la prueba por contradiccion muestra que ningun decisor universal puede existir."},
    {"q":"Escribi la notacion del costo que tiene en el peor caso el ordenamiento mergesort.","type":"fill","a":["o(n log n)","n log n","o(nlogn)","o(n * log n)"],"note":"Dividir la lista a la mitad da log n niveles y en cada uno se gastan n operaciones, de modo que el total es n log n."},
    {"q":"Se puede decidir si un programa termina ejecutandolo un tiempo suficiente y observando si sigue corriendo.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"Ejecutar con un limite de pasos solo detecta bucles largos; jamas permite afirmar que el programa nunca va a terminar."},
    {"q":"Un algoritmo O(n^2) siempre tarda mas que uno O(n log n), sin importar el tamano de la entrada.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"La notacion es asintotica: con n chico y constantes favorables el cuadratico puede ganar; lo que importa es como crece cuando n se hace grande."},
    {"q":"Ordena las siguientes clases de crecimiento de la que menos crece a la que mas crece.","type":"order","a":["O(1): constante","O(log n): logaritmica","O(n): lineal","O(n log n)","O(n^2): cuadratica"],"note":"Al duplicar n la constante no se mueve, el logaritmo apenas crece y el cuadrado se multiplica por cuatro: ese orden decide que algoritmo escala."},
  ],
  "11": [
    {"q":"Cual es la salida de este programa que escribe un archivo y luego le agrega una linea?","code":"with open('d.txt', 'w', encoding='utf-8') as f:\n    f.write('hola\\n')\nwith open('d.txt', 'a', encoding='utf-8') as f:\n    f.write('mundo\\n')\nwith open('d.txt', encoding='utf-8') as f:\n    print(f.read().split())","a":["['hola', 'mundo']","['mundo']","['hola\\nmundo']","[]"],"correct":0,"note":"El modo 'a' escribe al final sin truncar, asi que el archivo queda con las dos lineas y split() las separa en dos elementos."},
    {"q":"Que imprime este programa que lee la primera linea y consulta el puntero?","code":"with open('n.txt', 'w', encoding='utf-8', newline='') as f:\n    f.write('ana\\nluis\\n')\nwith open('n.txt', encoding='utf-8', newline='') as f:\n    print(f.readline().strip())\n    print(f.tell())","a":["ana y despues 4","ana y despues 8","ana y despues 3","ana y despues 5"],"correct":0,"note":"readline() devuelve 'ana\\n' y strip() quita el salto; tell() informa que ya se consumieron 4 caracteres del archivo."},
    {"q":"Un programa registra una linea por dia y debe conservar los dias anteriores. Que modo de open corresponde usar?","a":["'a', porque escribe al final sin truncar","'w', porque crea el archivo de nuevo cada vez","'r', porque el modo lectura tambien escribe","'x', porque falla si el archivo ya existe"],"correct":0,"note":"'w' borraria todo el historial en la primera ejecucion; 'a' deja el puntero al final y agrega lo nuevo."},
    {"q":"Con el modulo pathlib, Path('.').glob('*.txt') devuelve:","a":["un iterador con los paths de los archivos que cumplen el patron","una unica cadena con todos los nombres concatenados","un entero con la cantidad de archivos","un diccionario con nombre y contenido"],"correct":0,"note":"glob() itera paths del directorio segun el patron; conviene envolverlo en list() si se lo va a recorrer mas de una vez."},
    {"q":"Para copiar un archivo conservando ademas la fecha de modificacion y los permisos se usa:","a":["shutil.copy2","os.remove","os.rename","Path.rmdir"],"correct":0,"note":"copy copia el contenido y copy2 agrega la metadata; os.rename cambia de nombre o mueve y rmdir solo borra directorios vacios."},
    {"q":"Por que conviene usar el modulo csv en lugar de partir las lineas con split(',')?","a":["porque resuelve los campos que contienen comas o comillas propias","porque escribe directamente en formato binario","porque no hace falta abrir el archivo","porque convierte los numeros a texto"],"correct":0,"note":"El modulo csv se ocupa del separador y del escapado; ademas al escribir conviene pasar newline='' para no duplicar los saltos de linea."},
    {"q":"Que excepcion levanta open('informes.txt', 'r') cuando el archivo no existe?","a":["FileNotFoundError","ValueError","IndexError","TypeError"],"correct":0,"note":"El modo lectura exige que el archivo exista; con 'w' en cambio se crea, por eso conviene validar la ruta antes de abrir."},
    {"q":"Para borrar un directorio junto con todo lo que contiene se usa:","a":["shutil.rmtree","os.remove","Path.rmdir","shutil.copy"],"correct":0,"note":"rmdir() solo borra directorios vacios; rmtree() baja recursivamente y elimina el contenido completo sin pedir confirmacion."},
    {"q":"Sobre este programa, marca las afirmaciones correctas.","type":"multi","code":"with open('m.txt', 'w', encoding='utf-8') as f:\n    f.write('primera\\n')\nwith open('m.txt', 'w', encoding='utf-8') as f:\n    f.write('segunda\\n')\nwith open('m.txt', encoding='utf-8') as f:\n    print(f.read().strip())","a":["La salida del programa es 'segunda'","El modo 'w' dejo vacio el archivo en la segunda apertura","La primera linea quedo borrada","El archivo termina con dos lineas"],"correct":[0,1,2],"note":"'w' crea el archivo o lo sobreescribe por completo: por eso la segunda apertura arranca vacia y el contenido anterior se pierde."},
    {"q":"Marca las afirmaciones correctas sobre la lectura de archivos.","type":"multi","a":["read() devuelve todo el texto y deja el puntero al final","readline() devuelve una linea por llamada","Iterar con 'for linea in archivo' es la opcion que menos memoria usa","readlines() devuelve una cadena con todo el contenido"],"correct":[0,1,2],"note":"readlines() devuelve una lista de lineas, no una cadena; cargar todo el archivo puede agotar la memoria, por eso conviene iterarlo."},
    {"q":"Escribi el modo de open que crea el archivo nuevo o lo deja vacio si ya existia.","type":"fill","a":["w","escritura","write"],"note":"Es el modo de escritura: trunca el archivo por completo; para agregar sin borrar hay que usar el modo 'a'."},
    {"q":"Escribi el nombre del metodo que informa la posicion actual del puntero de lectura de un archivo.","type":"fill","a":["tell","tell()"],"note":"tell() devuelve cuantos caracteres o bytes ya se consumieron; seek(n) reposiciona el puntero para volver a leer."},
    {"q":"En este programa, len(datos) vale 2 y datos[1].strip() devuelve 'dos'.","type":"tf","code":"with open('q.txt', 'w', encoding='utf-8') as f:\n    f.write('uno\\ndos\\n')\nwith open('q.txt', encoding='utf-8') as f:\n    datos = f.readlines()\nprint(len(datos), datos[1].strip())","a":["Verdadero","Falso"],"correct":0,"note":"readlines() arma una lista con las dos lineas y cada elemento conserva su salto, por eso strip() es necesario para ver solo 'dos'."},
    {"q":"La sentencia with deja el archivo abierto si dentro del bloque se produce una excepcion.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"El context manager cierra el recurso al salir del bloque, tambien cuando la excepcion se propaga; justamente por eso se usa."},
    {"q":"Ordena los pasos para leer un archivo de texto sin dejarlo abierto.","type":"order","a":["Abrir con with open(ruta, encoding='utf-8') as f:","Leer dentro del bloque con read(), readline() o un for","Salir del bloque: el archivo queda cerrado automaticamente"],"note":"El with abre, el trabajo se hace dentro del bloque y al salir el archivo se cierra solo, incluso si algo fallo."},
  ],
  "12": [
    {"q":"Cuantas hojas tiene este arbol representado como (valor, izquierda, derecha)?","code":"def hojas(a):\n    if a is None:\n        return 0\n    if a[1] is None and a[2] is None:\n        return 1\n    return hojas(a[1]) + hojas(a[2])\nprint(hojas((5, (3, None, None), (7, (6, None, None), None))))","a":["2","3","1","4"],"correct":0,"note":"Los nodos 3 y 6 no tienen hijos, asi que son hojas; 5 y 7 son internos porque 7 tiene al hijo 6."},
    {"q":"Que imprime el recorrido inorden sobre este arbol binario de busqueda?","code":"def inorden(a):\n    if a is None: return []\n    return inorden(a[1]) + [a[0]] + inorden(a[2])\nt = (50, (30, (20, None, None), (40, None, None)), (70, None, None))\nprint(inorden(t))","a":["[20, 30, 40, 50, 70]","[50, 30, 20, 40, 70]","[20, 40, 30, 70, 50]","[70, 50, 40, 30, 20]"],"correct":0,"note":"Inorden recorre izquierda, raiz y derecha: sobre un BST eso devuelve siempre las claves ordenadas de menor a mayor."},
    {"q":"Cual es el orden de visita de BFS desde el vertice 0?","code":"from collections import deque\ng = {0: [1, 2], 1: [3], 2: [3], 3: []}\nc, visto, orden = deque([0]), {0}, []\nwhile c:\n    v = c.popleft(); orden.append(v)\n    for w in g[v]:\n        if w not in visto: visto.add(w); c.append(w)\nprint(orden)","a":["[0, 1, 2, 3]","[0, 2, 1, 3]","[0, 1, 3, 2]","[0, 3, 2, 1]"],"correct":0,"note":"La cola FIFO termina un nivel completo antes de bajar: despues de 0 se procesan 1 y 2 y recien despues se atiende a 3."},
    {"q":"Cual es la salida de esta relajacion de una arista?","code":"dist = {'A': 0, 'B': 4, 'C': 2, 'D': float('inf')}\nv, w, peso = 'C', 'B', 1\nif dist[v] + peso < dist[w]:\n    dist[w] = dist[v] + peso\nprint(dist['B'], dist['C'])","a":["3 2","4 2","3 4","2 3"],"correct":0,"note":"Relajar la arista C -> B de peso 1 mejora el camino a B (2 + 1 = 3 < 4) y la distancia a C no cambia."},
    {"q":"La altura de un arbol se mide como:","a":["el camino mas largo desde la raiz hasta una hoja","la cantidad total de nodos del arbol","la cantidad de hijos de la raiz","el ancho maximo alcanzado en cualquier nivel"],"correct":0,"note":"Una hoja tiene altura 0 y el arbol vacio vale -1; el nivel en cambio se mide desde la raiz, que queda en el nivel 0."},
    {"q":"En un arbol binario de busqueda, la propiedad que se respeta en cada nodo es:","a":["izquierda < nodo < derecha","izquierda > nodo > derecha","todos los hijos son mayores que la raiz","los hermanos tienen que estar ordenados"],"correct":0,"note":"Ese orden permite descartar un subarbol completo por comparacion, y por eso la busqueda cuesta O(log n) sobre un arbol balanceado."},
    {"q":"En un grafo sin pesos, BFS garantiza encontrar:","a":["el camino con la menor cantidad de aristas hasta cada vertice","el camino con el menor peso total","todos los ciclos del grafo","el camino mas largo posible"],"correct":0,"note":"BFS saca primero el vertice mas viejo de la cola, asi que la primera vez que llega a un vertice lo hace por el camino mas corto en aristas."},
    {"q":"Para un grafo muy grande y disperso (pocas aristas por vertice), la representacion mas economica en memoria es:","a":["lista de adyacencia, que ocupa O(V + E)","matriz de adyacencia, que ocupa V^2 lugares","la lista de todos los pares de vertices","un arreglo fijo de 1000 por 1000"],"correct":0,"note":"La matriz responde en O(1) si hay arista pero siempre ocupa n^2; la lista guarda unicamente las conexiones existentes."},
    {"q":"Sobre los recorridos de este arbol (valor, izquierda, derecha), marca las afirmaciones correctas.","type":"multi","code":"def rec(a, modo):\n    if a is None: return []\n    izq, der = rec(a[1], modo), rec(a[2], modo)\n    if modo == 'pre': return [a[0]] + izq + der\n    if modo == 'post': return izq + der + [a[0]]\n    return izq + [a[0]] + der\nt = (5, (3, None, None), (7, (6, None, None), None))\nprint(rec(t, 'pre'), rec(t, 'post'))","a":["preorden imprime [5, 3, 7, 6]","postorden imprime [3, 6, 7, 5]","preorden procesa la raiz antes que sus subarboles","en postorden la raiz se imprime primero"],"correct":[0,1,2],"note":"Preorden es raiz, izquierda y derecha; postorden deja la raiz para el final, y por eso sirve para eliminar de abajo hacia arriba."},
    {"q":"Marca las afirmaciones correctas sobre recorridos y caminos minimos.","type":"multi","a":["DFS usa una pila o la recursion y explora una rama completa antes de retroceder","BFS usa una cola FIFO","Dijkstra funciona igual con pesos negativos mientras no haya ciclos negativos","Bellman-Ford relaja todas las aristas V - 1 veces y puede detectar ciclos negativos"],"correct":[0,1,3],"note":"Dijkstra exige pesos no negativos: con negativos puede dar por cerrado un vertice con una distancia subestimada. Para eso esta Bellman-Ford."},
    {"q":"Escribi el nombre del recorrido que procesa la raiz despues de recorrer los dos subarboles.","type":"fill","a":["postorden","post-order","post order","post"],"note":"Postorden es izquierda, derecha y raiz al final; se usa para borrar el arbol o calcular valores de abajo hacia arriba."},
    {"q":"Escribi el nombre de la distancia que tiene un nodo contando los saltos hasta la raiz, que vale 0.","type":"fill","a":["nivel","level","nivel del nodo"],"note":"El nivel se mide hacia arriba hasta la raiz; la altura en cambio mide desde el nodo hasta la hoja mas lejana."},
    {"q":"Si se insertan claves en orden creciente en un BST sin balance, el arbol queda con forma de lista y la busqueda degrada a O(n).","type":"tf","a":["Verdadero","Falso"],"correct":0,"note":"Cada clave cuelga del lado derecho y no queda ningun nodo con dos hijos; por eso los arboles AVL o rojo-negro reequilibran las alturas."},
    {"q":"Dijkstra siempre encuentra el camino mas corto, incluso cuando hay aristas con peso negativo.","type":"tf","a":["Verdadero","Falso"],"correct":1,"note":"Dijkstra asume pesos no negativos y con negativos puede devolver un camino que no es el minimo; para eso existe Bellman-Ford."},
    {"q":"Ordena los pasos del recorrido BFS desde un vertice de origen.","type":"order","a":["Encolar el origen y marcarlo como visitado","Desencolar un vertice y agregarlo al recorrido","Encolar sus vecinos todavia no visitados y marcarlos","Repetir hasta que la cola quede vacia"],"note":"La marca se hace al encolar para no repetir vertices; cuando la cola se vacia termina el recorrido por niveles."},
  ]
};

const finalExam = [
 {
  "q": "Queres probar con casos borde este algoritmo de descuento. Que valor de entrada marca exactamente el limite de la condicion?",
  "code": "def descuento(precio):\n    if precio > 100:\n        return precio * 0.9\n    return precio\nprint(descuento(100), descuento(150))",
  "a": [
   "precio = 100, el ultimo valor al que todavia no se aplica el descuento",
   "precio = 150, un valor tipico que si recibe descuento",
   "precio = 1000, el precio maximo que se le puede ocurrir al usuario",
   "precio = 3, un valor muy chico que nunca llega a la condicion"
  ],
  "correct": 0,
  "note": "El programa imprime 100 135.0: el limite de la condicion es 100, porque con 100 no hay descuento y con 101 ya lo hay. Probar justo ahi delata un > mal escrito, por ejemplo >=."
 },
 {
  "q": "Cual de las siguientes NO es una propiedad que la materia exige a todo algoritmo?",
  "a": [
   "Que cada paso este definido sin ambiguedad (precision)",
   "Que produzca al menos una salida observable y verificable",
   "Que este escrito en un lenguaje de programacion concreto",
   "Que todas sus acciones puedan realizarse con lapiz y papel (eficacia)"
  ],
  "correct": 2,
  "note": "La especificacion clasica habla de finitud, precision, cero o mas entradas, una o mas salidas y eficacia; el lenguaje en que despues se implemente es indistinto."
 },
 {
  "q": "Al modelizar un problema antes de programar, la abstraccion consiste en:",
  "a": [
   "separar los datos y requerimientos relevantes del contexto y simplificar la expresion del problema",
   "escribir el algoritmo completo en Python y despues comentarlo linea por linea",
   "probar todos los casos posibles antes de contar con una solucion",
   "traducir el pseudocodigo a un diagrama de flujo antes de analizar el enunciado"
  ],
  "correct": 0,
  "note": "Modelizar es analizar el problema, generar una abstraccion y simplificar su expresion buscando requerimientos, datos y contexto; recien despues se disenia el algoritmo."
 },
 {
  "q": "Si este programa se corre en mesa de trabajo, la variable total termina en 6 y el print muestra 6.",
  "type": "tf",
  "code": "total = 0\ni = 1\nwhile i <= 3:\n    total = total + i\n    i = i + 1\nprint(total)",
  "a": [
   "Verdadero",
   "Falso"
  ],
  "correct": 0,
  "note": "El while suma i y luego lo incrementa: total toma 1, despues 3 y por ultimo 6; cuando i vale 4 la condicion i <= 3 ya es falsa y el bucle se corta."
 },
 {
  "q": "Que caracteristica distingue al pseudocodigo de un lenguaje de programacion?",
  "a": [
   "usa palabras del lenguaje comun y estructuras basicas, sin la rigidez de la sintaxis de un lenguaje",
   "no puede representar decisiones ni repeticiones",
   "solo admite vocabulario en ingles y palabras totalmente en mayusculas",
   "se ejecuta mas rapido que Python porque no necesita traducirse"
  ],
  "correct": 0,
  "note": "El pseudocodigo combina frases del lenguaje comun, instrucciones de programacion y palabras clave para las estructuras basicas, sin llegar a la rigidez sintactica de un lenguaje ni a la crudeza del habla coloquial."
 },
 {
  "q": "Cual es la salida de esta traduccion al Python de la estructura SELECCIONAR del pseudocodigo?",
  "code": "edad = 21\nif edad < 13:\n    print('criatura')\nelif edad < 19:\n    print('adolescente')\nelse:\n    print('adulto')",
  "a": [
   "adulto",
   "adolescente",
   "criatura",
   "imprime las dos ultimas lineas"
  ],
  "correct": 0,
  "note": "21 no es menor que 13 ni que 19, asi que cae en el else e imprime 'adulto': la seleccion evalua las condiciones de arriba hacia abajo y ejecuta unicamente la primera que se cumple."
 },
 {
  "q": "Escribi la instruccion del pseudocodigo que muestra un valor en pantalla, la opuesta a Leer.",
  "type": "fill",
  "a": [
   "escribir",
   "escribir(x)",
   "escribir x"
  ],
  "note": "Escribir(X) saca el valor por pantalla y equivale a print(X) en Python; Leer(X) es la opuesta y equivale a X = input(...) con la conversion que haga falta."
 },
 {
  "q": "Que imprime este bloque de operadores aritmeticos?",
  "code": "print(7 // 2, 7 % 2, 7 / 2)",
  "a": [
   "3 1 3.5",
   "3.5 1 3",
   "3 3.5 1",
   "3 1 3"
  ],
  "correct": 0,
  "note": "7 = 3 * 2 + 1: el operador // devuelve el cociente entero 3, % el resto 1 y / siempre produce un float, 3.5."
 },
 {
  "q": "Rastrea este bloque sobre la palabra Python: que termina imprimiendo?",
  "code": "palabra = 'Python'\nprint(palabra.lower(), palabra[1:4], len(palabra))",
  "a": [
   "python yth 6",
   "python yth 5",
   "Python yth 6",
   "python pyt 6"
  ],
  "correct": 0,
  "note": "lower() devuelve una copia en minusculas, el slicing [1:4] toma las posiciones 1, 2 y 3 (yth) sin incluir el limite superior 4, y la palabra Python tiene 6 caracteres."
 },
 {
  "q": "Que es cierto cuando un programa pide datos por teclado y los convierte a numeros? Marca todas las opciones correctas:",
  "type": "multi",
  "a": [
   "input() devuelve siempre una cadena, hay que convertirla antes de calcular",
   "int('12a') levanta ValueError porque el texto no es un entero valido",
   "float('3.5') devuelve el numero 3.5, listo para operar",
   "input('edad: ') guarda el valor leido directamente en la variable edad"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "note": "input solo imprime el prompt y devuelve str; para que la variable guarde un numero hace falta edad = int(input('edad: '))."
 },
 {
  "q": "Ordena las lineas para leer una temperatura por teclado, convertirla en numero y avisar si es negativa.",
  "type": "order",
  "a": [
   "temperatura = float(input('Temperatura: '))",
   "es_negativa = temperatura < 0",
   "print(es_negativa)"
  ],
  "note": "Primero se lee y se convierte a float, porque input devuelve texto; despues se calcula la comparacion y recien ahi se muestra el resultado. Si se comparara antes de convertir, Python daria un TypeError."
 },
 {
  "q": "Al terminar este programa, que valores muestran a y b si b se arma con un slicing?",
  "code": "a = [1, 2, 3]\nb = a[:]\nb.append(4)\nprint(a, b)",
  "a": [
   "[1, 2, 3] [1, 2, 3, 4]",
   "[1, 2, 3, 4] [1, 2, 3, 4]",
   "[1, 2, 3] [1, 2, 3]",
   "[1, 2, 3, 4] [1, 2, 3]"
  ],
  "correct": 0,
  "note": "a[:] crea una copia nueva: b crece sin tocar a. Con b = a en cambio las dos variables apuntarian al mismo objeto y a terminaria mostrando [1, 2, 3, 4]."
 },
 {
  "q": "Cual es la diferencia fundamental entre un conjunto y un diccionario en Python?",
  "a": [
   "el conjunto guarda elementos unicos sin valor asociado ni orden; el diccionario asocia cada clave con un valor",
   "el conjunto admite claves repetidas y el diccionario no",
   "el conjunto es inmutable y el diccionario es mutable",
   "el conjunto permite acceso por indice igual que la lista"
  ],
  "correct": 0,
  "note": "set es una coleccion sin duplicados ni posicion: se consulta solo por pertenencia, x in s. dict guarda pares clave: valor, con claves unicas e inmutables."
 },
 {
  "q": "Este programa imprime [1, 2, 3, 4] porque el slicing L[1:4] incluye al elemento de la posicion 4.",
  "type": "tf",
  "code": "L = [1, 2, 3, 4, 5]\nprint(L[1:4])",
  "a": [
   "Verdadero",
   "Falso"
  ],
  "correct": 1,
  "note": "El limite superior nunca se incluye: L[1:4] toma los indices 1, 2 y 3, asi que imprime [2, 3, 4]; el 4 recien entraria con L[1:5]."
 },
 {
  "q": "Cual es la salida de este manejo de excepciones cuando la conversion falla?",
  "code": "try:\n    print(int('12x'))\nexcept ValueError:\n    print('capturado')\nelse:\n    print('sin error')\nfinally:\n    print('fin')",
  "a": [
   "capturado y despues fin",
   "sin error y despues fin",
   "capturado, sin error y fin",
   "solo fin"
  ],
  "correct": 0,
  "note": "int('12x') lanza ValueError, asi que el except imprime capturado y el else se saltea; finally corre siempre, con o sin error."
 },
 {
  "q": "Analiza este programa con raise y try, y marca las afirmaciones que son verdaderas:",
  "type": "multi",
  "code": "def validar(n):\n    if n < 0: raise ValueError('negativo')\n    return n\ntry:\n    validar(-1)\nexcept ValueError as e:\n    print('error', e)\nprint('siempre')",
  "a": [
   "El programa termina imprimiendo 'error negativo' y despues 'siempre'",
   "raise lanza la excepcion y corta validar en ese momento: el return no se ejecuta",
   "Sin el try, la excepcion se propagaria y no llegaria a imprimir 'siempre'",
   "El except atrapa cualquier excepcion, incluso un TypeError"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "note": "except ValueError solo cubre ese tipo de error; si validar fallara con TypeError el bloque no lo atraparia y el programa terminaria con el traceback."
 },
 {
  "q": "Escribi el nombre exacto de la excepcion que levanta la expresion 10 / 0 en Python.",
  "type": "fill",
  "a": [
   "zerodivisionerror",
   "zero division error",
   "error de division por cero"
  ],
  "note": "El cero llega en tiempo de ejecucion, no en el analisis de sintaxis: Python interrumpe con ZeroDivisionError, por eso el programa nunca llega a la linea siguiente."
 },
 {
  "q": "Cual es el resultado de esta recursion con acumulador?",
  "code": "def f(n, acc):\n    if n == 0:\n        return acc\n    return f(n - 1, acc * n)\nprint(f(4, 1))",
  "a": [
   "24",
   "10",
   "4",
   "1"
  ],
  "correct": 0,
  "note": "Cada llamada multiplica el acumulador por n antes de descender: 1*4, despues *3, *2 y *1; el caso base n == 0 devuelve 24."
 },
 {
  "q": "Que lista devuelve esta construccion recursiva?",
  "code": "def r(n, acc):\n    if n <= 0:\n        return acc\n    return r(n - 1, [n] + acc)\nprint(r(4, []))",
  "a": [
   "[1, 2, 3, 4]",
   "[4, 3, 2, 1]",
   "[0, 1, 2, 3, 4]",
   "[]"
  ],
  "correct": 0,
  "note": "La llamada pendiente antepone n al acumulador mientras desciende: 4 queda al fondo, despues 3, 2 y 1, y el caso base devuelve [1, 2, 3, 4]."
 },
 {
  "q": "Escribi el nombre de la rama de una recursion que responde sin volver a llamarse a si misma.",
  "type": "fill",
  "a": [
   "caso base",
   "case base",
   "condicion de parada"
  ],
  "note": "Sin caso base la cadena de llamadas nunca se corta y Python termina con RecursionError al superar el limite de profundidad de la pila."
 },
 {
  "q": "Cual es la salida de esta clase con argumento por defecto?",
  "code": "class Contador:\n    def __init__(self):\n        self.n = 0\n    def sumar(self, k=1):\n        self.n += k\n        return self.n\nc = Contador()\nprint(c.sumar(5), c.sumar(), c.n)",
  "a": [
   "5 6 6",
   "5 1 6",
   "5 6 5",
   "6 6 6"
  ],
  "correct": 0,
  "note": "sumar(5) deja n en 5, la segunda llamada usa el valor por defecto k = 1 y n pasa a 6; c.n es exactamente el atributo que el metodo fue modificando."
 },
 {
  "q": "Que es cierto cuando se importa y se usa un modulo de Python? Marca todas las opciones correctas:",
  "type": "multi",
  "a": [
   "import math as m permite llamar a m.sqrt(9)",
   "from math import sqrt trae solo esa funcion al espacio de nombres actual",
   "El bloque if __name__ == '__main__': se ejecuta solo cuando el archivo se corre directamente",
   "import math vuelve a ejecutar todo el codigo del modulo cada vez que se llama a una funcion"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "note": "import se ejecuta una sola vez, al primer import: Python guarda el modulo en sys.modules y las siguientes llamadas solo resuelven nombres."
 },
 {
  "q": "En la definicion de un metodo se escribe self como primer parametro, pero en la llamada no se lo pasa: Python lo agrega solo con el objeto que recibe el metodo.",
  "type": "tf",
  "a": [
   "Verdadero",
   "Falso"
  ],
  "correct": 0,
  "note": "Por eso q.val() y Clase.val(q) son equivalentes: en los dos caminos el objeto termina llegando como self dentro del metodo."
 },
 {
  "q": "Un navegador debe poder volver a la pagina visitada inmediatamente anterior. Que estructura modela ese historial y por que?",
  "a": [
   "una pila, porque se retrocede sobre lo ultimo que se apilo (LIFO)",
   "una cola, porque se atiende la pagina mas antigua primero",
   "un conjunto, porque el orden de las paginas no importa",
   "un diccionario, porque cada pagina tiene una clave unica"
  ],
  "correct": 0,
  "note": "El boton atras desapila: lo ultimo visitado es lo primero que se recorre. Una cola atenderia la primera pagina abierta, que es justo lo contrario."
 },
 {
  "q": "Cual es la salida de este recorrido sobre una lista enlazada construida con nodos?",
  "code": "class Nodo:\n    def __init__(self, dato, prox=None):\n        self.dato = dato\n        self.prox = prox\na = Nodo('x', Nodo('y', Nodo('z')))\nb = a.prox\nprint(b.dato, b.prox.dato)",
  "a": [
   "y z",
   "x y",
   "y None",
   "z y"
  ],
  "correct": 0,
  "note": "a.prox es el segundo nodo, que guarda y y cuyo prox apunta al tercero, z; el prox del ultimo nodo valdria None."
 },
 {
  "q": "Escribi las siglas en ingles de la disciplina que cumple una pila: lo ultimo en entrar es lo primero en salir.",
  "type": "fill",
  "a": [
   "lifo",
   "last in first out",
   "last-in first-out"
  ],
  "note": "LIFO (last in, first out) es la pila; la cola es FIFO, first in first out, y por eso atiende al primero que llego."
 },
 {
  "q": "Ordena los pasos para recorrer una lista enlazada e imprimir todos sus datos.",
  "type": "order",
  "a": [
   "Guardar la cabeza de la lista en un puntero auxiliar",
   "Mientras el auxiliar no sea None, leer y mostrar su dato",
   "Avanzar el puntero al atributo prox del nodo actual",
   "Terminar cuando el auxiliar valga None"
  ],
  "note": "Sin un puntero auxiliar se perderia la cabeza y no se podria avanzar; el None del ultimo nodo es lo que corta el recorrido."
 },
 {
  "q": "Cuantos pasos de division a la mitad hace esta busqueda binaria y en que indice encuentra el objetivo?",
  "code": "lista = [1, 3, 4, 7, 9, 11, 15]\nizq, der, pasos = 0, len(lista) - 1, 0\nwhile izq <= der:\n    pasos += 1; m = (izq + der) // 2\n    if lista[m] == 15: break\n    if lista[m] < 15: izq = m + 1\n    else: der = m - 1\nprint(pasos, m)",
  "a": [
   "3 6",
   "3 5",
   "2 6",
   "4 6"
  ],
  "correct": 0,
  "note": "El segmento arranca en [0, 6]: el medio 3 vale 7 y sube izq a 4, despues el medio 5 vale 11 y sube izq a 6, y recien ahi el medio 6 contiene al 15."
 },
 {
  "q": "Que lista queda despues de ejecutar este ordenamiento?",
  "code": "a = [5, 2, 9, 1, 5, 6]\nfor i in range(len(a)):\n    for j in range(len(a) - 1, i, -1):\n        if a[j] < a[j-1]: a[j], a[j-1] = a[j-1], a[j]\nprint(a)",
  "a": [
   "[1, 2, 5, 5, 6, 9]",
   "[5, 2, 9, 1, 5, 6]",
   "[1, 5, 5, 2, 6, 9]",
   "[9, 6, 5, 5, 2, 1]"
  ],
  "correct": 0,
  "note": "El ciclo interno compara vecinos de derecha a izquierda y deja el minimo de la parte sin ordenar en la posicion i; repetido para cada i la lista queda ascendente."
 },
 {
  "q": "Sobre la busqueda y el ordenamiento vistos en la unidad, que opciones son correctas?",
  "type": "multi",
  "a": [
   "La busqueda binaria descarta la mitad del segmento en cada paso y cuesta O(log n)",
   "La busqueda lineal puede recorrer los n elementos y hacer hasta n comparaciones",
   "La busqueda binaria se aplica igual de bien sobre una lista desordenada",
   "Si se haran miles de busquedas, conviene ordenar una vez y usar binaria"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "note": "La binaria exige orden previo: sin orden no hay forma de saber en que mitad podria estar el objetivo y hay que recorrer la lista entera, como la lineal."
 },
 {
  "q": "Escribi el nombre del ordenamiento que compara pares de elementos vecinos y los intercambia si estan en el orden equivocado.",
  "type": "fill",
  "a": [
   "burbujeo",
   "burbuja",
   "bubble sort",
   "ordenamiento por burbuja"
  ],
  "note": "El burbujeo (bubble sort) compara vecinos y hace hasta n*(n-1)/2 comparaciones en el peor caso: es estable y su costo es O(n^2)."
 },
 {
  "q": "Cuantas sumas acumula este doble ciclo sobre s?",
  "code": "s = 0\nfor i in range(1, 20):\n    for j in range(i, 20):\n        s += 1\nprint(s)",
  "a": [
   "190",
   "361",
   "19",
   "21"
  ],
  "correct": 0,
  "note": "El ciclo interno corre 20 - i veces mientras i va de 1 a 19: 19 + 18 + ... + 1 = 190, un costo del orden de n^2 con n igual a 20."
 },
 {
  "q": "Si el tamano de la entrada n se duplica, cual de estas funciones multiplica su valor por 4?",
  "a": [
   "f(n) = n^2",
   "f(n) = 2n",
   "f(n) = log n",
   "f(n) = n + 100"
  ],
  "correct": 0,
  "note": "(2n)^2 = 4n^2, mientras que 2n solo se duplica, el logaritmo crece apenas y n + 100 ni siquiera se acerca a doblarse: por eso los cuadraticos se desploman con listas grandes."
 },
 {
  "q": "Se dice que un problema es indecidible cuando todavia nadie encontro la respuesta pero se espera que en el futuro exista un algoritmo general que lo resuelva.",
  "type": "tf",
  "a": [
   "Verdadero",
   "Falso"
  ],
  "correct": 1,
  "note": "Indecidible no significa todavia sin resolver: significa que se demostro por contradiccion que ningun programa general puede resolverlo siempre, como en el problema de la parada."
 },
 {
  "q": "Cual es la salida de este programa que reubica el puntero de lectura?",
  "code": "with open('d.txt', 'w') as f:\n    f.write('abcdefgh')\nwith open('d.txt') as f:\n    f.seek(3)\n    print(f.read())",
  "a": [
   "defgh",
   "abc",
   "abcdefgh",
   "abcde"
  ],
  "correct": 0,
  "note": "seek(3) deja el puntero en el indice 3, la cuarta posicion, y read() devuelve el resto del archivo: defgh."
 },
 {
  "q": "Por que conviene abrir el archivo con open(ruta, 'w', newline='') cuando se escribe con el modulo csv?",
  "a": [
   "para que Python no agregue saltos de linea ademas de los que ya escribe el modulo",
   "para que el archivo se abra en modo binario automaticamente",
   "para que los numeros se guarden convertidos en texto",
   "para no tener que cerrar el archivo despues de escribir"
  ],
  "correct": 0,
  "note": "En Windows el modo texto agrega un salto de linea extra a los que el propio modulo csv ya escribe; con newline='' el modulo escribe literalmente lo que debe ir al archivo."
 },
 {
  "q": "En este programa que escribe y despues lee un archivo de texto, que opciones son correctas?",
  "type": "multi",
  "code": "with open('k.txt', 'w', encoding='utf-8') as f:\n    f.write('rojo\\nverde\\nazul\\n')\nwith open('k.txt', encoding='utf-8') as f:\n    lineas = [l.strip() for l in f]\nprint(lineas)",
  "a": [
   "La salida del programa es ['rojo', 'verde', 'azul']",
   "Recorrer el archivo con for entrega una linea por vuelta y es lo que menos memoria usa",
   "strip() hace falta porque cada linea leida conserva su salto de linea",
   "readlines() devuelve una cadena con todo el contenido del archivo"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "note": "readlines() devuelve una lista de lineas, no una cadena; y cargar todo el archivo con read() puede agotar la memoria, por eso se prefiere iterarlo."
 },
 {
  "q": "Que devuelve este recorrido sobre el arbol representado como (valor, izquierda, derecha)?",
  "code": "def rec(a):\n    if a is None:\n        return []\n    return rec(a[2]) + [a[0]] + rec(a[1])\nt = (8, (3, (1, None, None), (6, None, None)), (10, None, None))\nprint(rec(t))",
  "a": [
   "[10, 8, 6, 3, 1]",
   "[1, 3, 6, 8, 10]",
   "[8, 3, 10, 1, 6]",
   "[1, 6, 3, 10, 8]"
  ],
  "correct": 0,
  "note": "El orden es derecha, raiz, izquierda: un inorden espejado, que sobre un arbol binario de busqueda devuelve las claves en orden descendente."
 },
 {
  "q": "Cual es el orden de visita de esta profundidad (DFS) con pila explicita desde el vertice 0?",
  "code": "g = {0: [1, 2], 1: [3], 2: [3], 3: []}\npila, visto, orden = [0], {0}, []\nwhile pila:\n    v = pila.pop(); orden.append(v)\n    for w in g[v]:\n        if w not in visto: visto.add(w); pila.append(w)\nprint(orden)",
  "a": [
   "[0, 2, 3, 1]",
   "[0, 1, 2, 3]",
   "[0, 1, 3, 2]",
   "[0, 3, 2, 1]"
  ],
  "correct": 0,
  "note": "La pila desapila el ultimo que entro: de los vecinos 1 y 2 se visita primero el 2 y de ahi se baja al 3. Con una cola FIFO (BFS) el orden seria [0, 1, 2, 3]."
 },
 {
  "q": "Cual es la altura de un arbol binario perfecto de 7 nodos, midiendo la altura como la cantidad de aristas hasta la hoja mas lejana?",
  "a": [
   "2",
   "3",
   "6",
   "7"
  ],
  "correct": 0,
  "note": "Un arbol perfecto de 3 niveles tiene 1 + 2 + 4 = 7 nodos; la hoja mas lejana esta a 2 aristas de la raiz, por eso la altura es 2 (contar niveles daria 3)."
 }
];
