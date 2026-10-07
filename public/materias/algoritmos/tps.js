/* Trabajos practicos: consignas, plantilla editable, solucion y tests (namespace limpio [solution]+[test]). */
const tps = [
 {
  "id": "tp1",
  "num": 1,
  "titulo": "TP 1 - Diagramas de flujo: del problema al algoritmo",
  "archivo": "Algoritmos y Estructuras de Datos - Teorias/Clase 1/Practica/Prog_I_TP1-R .pdf",
  "resumen": "Practica 1 de la catedra: problemas tipicos (ascensor, promedios, pila de tarjetas y naipes) resueltos con diagramas de flujo y luego pasados a funciones de Python.",
  "temas": [
   "diagramas de flujo",
   "entrada, proceso y salida",
   "acumuladores y contadores",
   "pilas de elementos",
   "condiciones anidadas"
  ],
  "consignas": [
   "Escribir la funcion promedio_tres(a, b, c) que devuelva el promedio aritmetico de tres numeros (Practica 1, ej. 2a). Ejemplo: promedio_tres(8, 6, 9) devuelve 7.666666666666667.",
   "Escribir la funcion mayor_tarjeta(tarjetas) que reciba una lista de tarjetas numeradas y devuelva la mayor de todas (Practica 1, ej. 3b). Ejemplo: mayor_tarjeta([3, 17, 5, 9]) devuelve 17.",
   "Escribir la funcion suma_naipes(naipes) que devuelva la suma de los valores de una pila de N naipes, usando un acumulador (Practica 1, ej. 4b). Ejemplo: suma_naipes([5, 10, 3]) devuelve 18.",
   "Escribir la funcion promedio_serie(numeros) que promedie los numeros de la lista hasta encontrar el 0, que marca el fin del ingreso de datos; lo que venga despues del 0 se ignora (Practica 1, ej. 6). Ejemplo: promedio_serie([4, 6, 0, 10]) devuelve 5.0."
  ],
  "plantilla": "def promedio_tres(a, b, c):\n    # TODO: devolver la suma de los tres numeros dividida en 3\n    pass\n\n\ndef mayor_tarjeta(tarjetas):\n    # TODO: recorrer la pila de tarjetas y quedarse con la mayor\n    pass\n\n\ndef suma_naipes(naipes):\n    # TODO: acumular el valor de cada naipe en una variable total\n    pass\n\n\ndef promedio_serie(numeros):\n    # TODO: sumar hasta encontrar el 0 que marca el fin y promediar lo acumulado\n    pass\n",
  "solution": "def promedio_tres(a, b, c):\n    return (a + b + c) / 3\n\n\ndef mayor_tarjeta(tarjetas):\n    if len(tarjetas) == 0:\n        return None\n    mayor = tarjetas[0]\n    for tarjeta in tarjetas:\n        if tarjeta > mayor:\n            mayor = tarjeta\n    return mayor\n\n\ndef suma_naipes(naipes):\n    total = 0\n    for naipe in naipes:\n        total = total + naipe\n    return total\n\n\ndef promedio_serie(numeros):\n    suma = 0\n    cantidad = 0\n    for n in numeros:\n        if n == 0:\n            break\n        suma = suma + n\n        cantidad = cantidad + 1\n    if cantidad == 0:\n        return 0\n    return suma / cantidad\n",
  "tests": [
   {
    "name": "promedio de tres numeros",
    "code": "assert abs(promedio_tres(8, 6, 9) - 23 / 3) < 1e-9"
   },
   {
    "name": "mayor de la pila de tarjetas",
    "code": "assert mayor_tarjeta([3, 17, 5, 9]) == 17"
   },
   {
    "name": "suma de la pila de naipes",
    "code": "assert suma_naipes([5, 10, 3]) == 18"
   },
   {
    "name": "promedio de la serie terminada en cero",
    "code": "assert promedio_serie([4, 6, 0, 10]) == 5.0"
   }
  ]
 },
 {
  "id": "tp2",
  "num": 2,
  "titulo": "TP 2 - Pseudocodigo: seleccion simple y multiple",
  "archivo": "Algoritmos y Estructuras de Datos - Teorias/Clase 1/Practica/Prog_I_TP2.pdf",
  "resumen": "Practica 2: pseudocodigo de algoritmos con formulas geometricas, sentencias condicionales y seleccion multiple, aplicados al cine, a los buzones de expedientes y a la conversion de temperaturas.",
  "temas": [
   "pseudocodigo",
   "seleccion simple y multiple",
   "expresiones condicionales",
   "operaciones aritmeticas",
   "traduccion a Python"
  ],
  "consignas": [
   "Escribir el pseudocodigo y la funcion area_rectangulo(b, h) que calcule el area de un rectangulo como b * h (Practica 2, ej. 3). Ejemplo: area_rectangulo(5, 3) devuelve 15.",
   "Escribir la funcion area_triangulo(b, h) que calcule el area de un triangulo como (b * h) / 2 (Practica 2, ej. 4). Ejemplo: area_triangulo(6, 4) devuelve 12.0.",
   "Escribir la funcion sala_de_cine(entrada) que reciba el numero de la entrada: si es 000 devuelve 'Administracion', si es par va a la 'Sala 1' y si es impar a la 'Sala 2' (Practica 2, ej. 7). Ejemplo: sala_de_cine(248) devuelve 'Sala 1' y sala_de_cine(0) devuelve 'Administracion'.",
   "Escribir la funcion buzon_expediente(digito) que indique en que buzon depositar el expediente: 0 en A, 1 en B y asi hasta el 9 en J (Practica 2, ej. 8). Ejemplo: buzon_expediente(0) devuelve 'A' y buzon_expediente(9) devuelve 'J'."
  ],
  "plantilla": "def area_rectangulo(b, h):\n    # TODO: area = base por altura\n    pass\n\n\ndef area_triangulo(b, h):\n    # TODO: area = base por altura dividido en 2\n    pass\n\n\ndef sala_de_cine(entrada):\n    # TODO: 000 -> Administracion, par -> Sala 1, impar -> Sala 2\n    pass\n\n\ndef buzon_expediente(digito):\n    # TODO: 0 -> A, 1 -> B, ... 9 -> J\n    pass\n",
  "solution": "BUZONES = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"]\n\n\ndef area_rectangulo(b, h):\n    return b * h\n\n\ndef area_triangulo(b, h):\n    return (b * h) / 2\n\n\ndef sala_de_cine(entrada):\n    numero = int(entrada)\n    if numero == 0:\n        return \"Administracion\"\n    if numero % 2 == 0:\n        return \"Sala 1\"\n    return \"Sala 2\"\n\n\ndef buzon_expediente(digito):\n    return BUZONES[digito]\n",
  "tests": [
   {
    "name": "area del rectangulo",
    "code": "assert area_rectangulo(5, 3) == 15"
   },
   {
    "name": "area del triangulo",
    "code": "assert area_triangulo(6, 4) == 12.0"
   },
   {
    "name": "sala que le corresponde a la entrada",
    "code": "assert sala_de_cine(0) == 'Administracion' and sala_de_cine(248) == 'Sala 1' and sala_de_cine(135) == 'Sala 2'"
   },
   {
    "name": "buzon del expediente",
    "code": "assert buzon_expediente(0) == 'A' and buzon_expediente(3) == 'D' and buzon_expediente(9) == 'J'"
   }
  ]
 },
 {
  "id": "tp3",
  "num": 3,
  "titulo": "TP 3 - Pilas y colas: clases, balanceo y postfija",
  "archivo": "practica-6-ejercicios-sobre-pilas-y-colas.pdf",
  "resumen": "Practica 6: se implementan las clases Pila y Cola y se aplican a invertir cadenas, comprobar que una cadena este balanceada, evaluar expresiones postfijas y sumar dos colas elemento a elemento.",
  "temas": [
   "pila (LIFO)",
   "cola (FIFO)",
   "clases y encapsulamiento",
   "notacion postfija",
   "balanceo de cadenas"
  ],
  "consignas": [
   "Implementar la clase Pila con los metodos push(elemento), pop(), isEmpty(), top() y size(), y con ella la funcion invertir_string(s) que devuelva el texto invertido. Ejemplo: invertir_string('hola') devuelve 'aloh'.",
   "Escribir la funcion balanceada(s) que devuelva True si la cadena de parentesis, corchetes y llaves esta balanceada y False en caso contrario, usando una Pila. Ejemplo: balanceada('{ [ ( ) ( ) ] { [ ] } }') es True y balanceada('([) ]') es False.",
   "Escribir la funcion evaluar_postfija(expr) que reciba una expresion en notacion postfija con operandos de un digito y los operadores +, -, * y / y devuelva su resultado. Ejemplo: evaluar_postfija('4 6 * 3 /') devuelve 8.",
   "Implementar la clase Cola con push, pop, isEmpty, top y size, y con ella la funcion sumar_colas(a, b) que devuelva una nueva cola con la suma de los elementos uno a uno (si una cola se termina antes, se deja de sumar). Ejemplo: con [3, 4, 2, 8, 12] y [6, 2, 9, 11, 3] el resultado es [9, 6, 11, 19, 15]."
  ],
  "plantilla": "class Pila:\n    def __init__(self):\n        self._elems = []\n\n    def push(self, elemento):\n        # TODO: agregar el elemento al tope de la pila\n        pass\n\n    def pop(self):\n        # TODO: extraer y devolver el tope de la pila\n        pass\n\n    def isEmpty(self):\n        # TODO: devolver True si la pila no tiene elementos\n        pass\n\n    def top(self):\n        # TODO: devolver el tope sin extraerlo\n        pass\n\n    def size(self):\n        # TODO: devolver la cantidad de elementos\n        pass\n\n\nclass Cola:\n    def __init__(self):\n        self._elems = []\n\n    def push(self, elemento):\n        # TODO: agregar el elemento al final de la cola\n        pass\n\n    def pop(self):\n        # TODO: extraer y devolver el primero de la cola (FIFO)\n        pass\n\n    def isEmpty(self):\n        # TODO: devolver True si la cola no tiene elementos\n        pass\n\n    def top(self):\n        # TODO: devolver el primero sin extraerlo\n        pass\n\n    def size(self):\n        # TODO: devolver la cantidad de elementos\n        pass\n\n\ndef invertir_string(s):\n    # TODO: cargar la pila letra por letra y vaciarla para invertir\n    pass\n\n\ndef balanceada(s):\n    # TODO: con una Pila verificar que cada cierre corresponda a la ultima apertura\n    pass\n\n\ndef evaluar_postfija(expr):\n    # TODO: pila de operandos; ante un operador, aplicarlos y volver a apilar\n    pass\n\n\ndef sumar_colas(a, b):\n    # TODO: cola resultado con la suma de los elementos uno a uno\n    pass\n",
  "solution": "class Pila:\n    def __init__(self):\n        self._elems = []\n\n    def push(self, elemento):\n        self._elems.append(elemento)\n\n    def pop(self):\n        if self.isEmpty():\n            raise IndexError(\"pila vacia\")\n        return self._elems.pop()\n\n    def isEmpty(self):\n        return len(self._elems) == 0\n\n    def top(self):\n        if self.isEmpty():\n            raise IndexError(\"pila vacia\")\n        return self._elems[-1]\n\n    def size(self):\n        return len(self._elems)\n\n\nclass Cola:\n    def __init__(self):\n        self._elems = []\n\n    def push(self, elemento):\n        self._elems.append(elemento)\n\n    def pop(self):\n        if self.isEmpty():\n            raise IndexError(\"cola vacia\")\n        return self._elems.pop(0)\n\n    def isEmpty(self):\n        return len(self._elems) == 0\n\n    def top(self):\n        if self.isEmpty():\n            raise IndexError(\"cola vacia\")\n        return self._elems[0]\n\n    def size(self):\n        return len(self._elems)\n\n\ndef invertir_string(s):\n    pila = Pila()\n    for c in s:\n        pila.push(c)\n    invertido = \"\"\n    while not pila.isEmpty():\n        invertido = invertido + pila.pop()\n    return invertido\n\n\ndef balanceada(s):\n    cierres = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    pila = Pila()\n    for c in s:\n        if c in \"([{\":\n            pila.push(c)\n        elif c in cierres:\n            if pila.isEmpty() or pila.pop() != cierres[c]:\n                return False\n    return pila.isEmpty()\n\n\ndef evaluar_postfija(expr):\n    pila = Pila()\n    for token in expr.split():\n        if token in \"+-*/\":\n            b = pila.pop()\n            a = pila.pop()\n            if token == \"+\":\n                pila.push(a + b)\n            elif token == \"-\":\n                pila.push(a - b)\n            elif token == \"*\":\n                pila.push(a * b)\n            else:\n                pila.push(a / b)\n        else:\n            pila.push(float(token))\n    return pila.pop()\n\n\ndef sumar_colas(a, b):\n    elems_a = list(a._elems) if isinstance(a, Cola) else list(a)\n    elems_b = list(b._elems) if isinstance(b, Cola) else list(b)\n    resultado = Cola()\n    for i in range(min(len(elems_a), len(elems_b))):\n        resultado.push(elems_a[i] + elems_b[i])\n    return resultado\n",
  "tests": [
   {
    "name": "string invertido con pila",
    "code": "assert invertir_string('hola') == 'aloh' and invertir_string('') == ''"
   },
   {
    "name": "cadena balanceada",
    "code": "assert balanceada('{ [ ( ) ( ) ] { [ ] } }') is True and balanceada('([) ]') is False"
   },
   {
    "name": "evaluacion de expresion postfija",
    "code": "assert evaluar_postfija('4 6 * 3 /') == 8 and evaluar_postfija('2 3 + 4 *') == 20"
   },
   {
    "name": "suma de dos colas elemento a elemento",
    "code": "a = Cola(); b = Cola(); [a.push(x) for x in [3, 4, 2, 8, 12]]; [b.push(x) for x in [6, 2, 9, 11, 3]]; r = sumar_colas(a, b); salida = []; [salida.append(r.pop()) for _ in range(r.size())]; assert salida == [9, 6, 11, 19, 15]"
   }
  ]
 },
 {
  "id": "tp4",
  "num": 4,
  "titulo": "TP 4 - Tipos de datos no lineales: fechas, clases y colas",
  "archivo": "Práctica Tipos de Datos No Lineales.pdf",
  "resumen": "Practica de tipos de datos no lineales: se explora el modulo datetime para calcular diferencias de fechas, se modelan las clases Persona y Mascota con la edad actualizada y se maneja una cola con el modulo queue.",
  "temas": [
   "modulo datetime",
   "clases y objetos",
   "atributos de instancia",
   "cola (FIFO)",
   "modulo queue"
  ],
  "consignas": [
   "Escribir la funcion diferencia_fechas(f1, f2) que reciba dos fechas datetime.date y devuelva en dias la diferencia entre ellas (f2 menos f1). Ejemplo: diferencia_fechas(date(2000, 2, 28), date(2001, 2, 28)) devuelve 366.",
   "Definir la clase Persona con atributos nombre, apellido, fechaNac, direccion, telefono y email, mas un atributo edad que se calcula al instanciar el objeto y el metodo age() que devuelve la edad respecto de la fecha actual (Practica, ej. 2).",
   "Crear la clase Mascota con el nombre del animal y un metodo que devuelva el saludo 'de pata', y agregar a Persona una lista propia de mascotas con el metodo agregar_mascota(mascota). Dos personas distintas no deben compartir la lista (Practica, ej. 3).",
   "Con el modulo queue, escribir la funcion cola_consecutivos() que arme una cola con los numeros 0, 1, 2 y 3 y devuelva la tupla (miembros, tamano) con los elementos en orden de salida y el tamanio de la cola (Practica, ej. 4). Ejemplo: devuelve ([0, 1, 2, 3], 4)."
  ],
  "plantilla": "import datetime\nimport queue\n\n\ndef diferencia_fechas(f1, f2):\n    # TODO: devolver en dias la diferencia (f2 - f1)\n    pass\n\n\nclass Mascota:\n    def __init__(self, nombre):\n        # TODO: guardar el nombre de la mascota\n        pass\n\n    def saludoDePata(self):\n        # TODO: devolver el saludo de pata de la mascota\n        pass\n\n\nclass Persona:\n    def __init__(self, nombre, apellido, fechaNac, direccion, telefono, email):\n        # TODO: guardar los atributos, crear la lista propia de mascotas y calcular self.edad\n        pass\n\n    def age(self):\n        # TODO: devolver la edad calculada con datetime.date.today()\n        pass\n\n    def agregar_mascota(self, mascota):\n        # TODO: agregar la mascota a la lista de esta persona\n        pass\n\n\ndef cola_consecutivos():\n    # TODO: arma la cola con 0, 1, 2 y 3 y devuelve (miembros, tamano)\n    pass\n",
  "solution": "import datetime\nimport queue\n\n\ndef diferencia_fechas(f1, f2):\n    return (f2 - f1).days\n\n\nclass Mascota:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\n    def saludoDePata(self):\n        return self.nombre + \" saluda con la pata\"\n\n\nclass Persona:\n    def __init__(self, nombre, apellido, fechaNac, direccion, telefono, email):\n        self.nombre = nombre\n        self.apellido = apellido\n        self.fechaNac = fechaNac\n        self.direccion = direccion\n        self.telefono = telefono\n        self.email = email\n        self.mascotas = []\n        self.edad = self.age()\n\n    def age(self):\n        hoy = datetime.date.today()\n        edad = hoy.year - self.fechaNac.year\n        try:\n            cumple = datetime.date(hoy.year, self.fechaNac.month, self.fechaNac.day)\n        except ValueError:\n            cumple = datetime.date(hoy.year, 3, 1)\n        if hoy < cumple:\n            edad = edad - 1\n        self.edad = edad\n        return edad\n\n    def agregar_mascota(self, mascota):\n        self.mascotas.append(mascota)\n\n\ndef cola_consecutivos():\n    q = queue.Queue()\n    for x in range(4):\n        q.put(x)\n    tamano = q.qsize()\n    miembros = []\n    while not q.empty():\n        miembros.append(q.get())\n    return (miembros, tamano)\n",
  "tests": [
   {
    "name": "diferencia entre dos fechas en dias",
    "code": "import datetime; assert diferencia_fechas(datetime.date(2000, 2, 28), datetime.date(2001, 2, 28)) == 366"
   },
   {
    "name": "edad de la persona calculada con datetime",
    "code": "import datetime; hoy = datetime.date.today(); esperada = hoy.year - 1992 - (1 if hoy < datetime.date(hoy.year, 3, 12) else 0); p = Persona('Jane', 'Doe', datetime.date(1992, 3, 12), 'Calle 12', '555 456 0987', 'jane@example.com'); assert p.edad == esperada and p.age() == esperada"
   },
   {
    "name": "lista de mascotas propia de cada persona",
    "code": "import datetime; lisa = Persona('Lisa', 'Simpson', datetime.date(2008, 5, 1), 'Av. Siempre Viva 742', '111', 'lisa@example.com'); bart = Persona('Bart', 'Simpson', datetime.date(2006, 6, 1), 'Av. Siempre Viva 742', '222', 'bart@example.com'); lisa.agregar_mascota(Mascota('Ayudante de Santa')); assert [m.nombre for m in lisa.mascotas] == ['Ayudante de Santa'] and bart.mascotas == []"
   },
   {
    "name": "cola de cuatro numeros consecutivos",
    "code": "miembros, tamano = cola_consecutivos(); assert miembros == [0, 1, 2, 3] and tamano == 4"
   }
  ]
 }
];
