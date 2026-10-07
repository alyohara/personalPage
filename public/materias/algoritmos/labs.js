/* Laboratorios por unidad: starter editable y tests que corren en Pyodide.
   Cada test corre en un namespace limpio: [prelude] + [codigo del usuario] + [test].
   solution: referencia verificada (los tests pasan contra ella). */
const labs = {
  "1": {
    "prelude": "import sys\nfrom io import StringIO\n\nsys.stdin = StringIO(\"25\\n\")\n\n_lab_buf = StringIO()\n_lab_real = sys.stdout\n\n\nclass _LabTee:\n    def __init__(self, buf, real):\n        self.buf = buf\n        self.real = real\n\n    def write(self, data):\n        self.buf.write(data)\n        self.real.write(data)\n        return len(data)\n\n    def flush(self):\n        self.buf.flush()\n        self.real.flush()\n\n\nsys.stdout = _LabTee(_lab_buf, _lab_real)\n",
    "starter": "\"\"\"Clasificador de temperatura: bajo cero, templado o caluroso.\"\"\"\ntemperatura = float(input('Temperatura: '))\n\n# TODO: informar 'Bajo cero' si la temperatura es menor que 0.\nif temperatura < 0:\n    pass\n# TODO: informar 'Templado' si la temperatura esta entre 0 y 25.\nelif temperatura <= 25:\n    pass\n# TODO: informar 'Caluroso' si la temperatura supera 25.\nelse:\n    pass\n",
    "tests": [
      {
        "name": "informa la clasificacion correcta",
        "code": "esperado = 'Bajo cero' if temperatura < 0 else ('Templado' if temperatura <= 25 else 'Caluroso')\nassert esperado in _lab_buf.getvalue()"
      },
      {
        "name": "imprime una sola linea",
        "code": "assert _lab_buf.getvalue().count('\\n') == 1"
      },
      {
        "name": "no informa clasificaciones incorrectas",
        "code": "esperado = 'Bajo cero' if temperatura < 0 else ('Templado' if temperatura <= 25 else 'Caluroso')\nmensajes = [m for m in ('Bajo cero', 'Templado', 'Caluroso') if m in _lab_buf.getvalue()]\nassert mensajes == [esperado]"
      },
      {
        "name": "lee la temperatura como numero",
        "code": "assert isinstance(temperatura, (int, float))"
      }
    ],
    "solution": "temperatura = float(input('Temperatura: '))\n\nif temperatura < 0:\n    print('Bajo cero')\nelif temperatura <= 25:\n    print('Templado')\nelse:\n    print('Caluroso')"
  },
  "2": {
    "prelude": "import sys\nfrom io import StringIO\n\nsys.stdin = StringIO(\"12\\n7\\n25\\n\")\n\n_lab_buf = StringIO()\n_lab_real = sys.stdout\n\n\nclass _LabTee:\n    def __init__(self, buf, real):\n        self.buf = buf\n        self.real = real\n\n    def write(self, data):\n        self.buf.write(data)\n        self.real.write(data)\n        return len(data)\n\n    def flush(self):\n        self.buf.flush()\n        self.real.flush()\n\n\nsys.stdout = _LabTee(_lab_buf, _lab_real)\n",
    "starter": "\"\"\"Mayor de tres numeros: compara a, b y c e informa el mayor.\"\"\"\na, b, c = 12, 7, 25\n\n# TODO: comparar los tres numeros e informar el mayor con print.\nif a >= b and a >= c:\n    pass\nelif b >= c:\n    pass\nelse:\n    pass\n",
    "tests": [
      {
        "name": "informa el mayor de los tres",
        "code": "assert _lab_buf.getvalue().strip() == 'Mayor: ' + str(max(a, b, c))"
      },
      {
        "name": "muestra el valor maximo",
        "code": "assert str(max(a, b, c)) in _lab_buf.getvalue()"
      },
      {
        "name": "imprime una sola linea",
        "code": "assert _lab_buf.getvalue().count('\\n') == 1"
      },
      {
        "name": "etiqueta la salida como Mayor",
        "code": "assert _lab_buf.getvalue().strip().startswith('Mayor:')"
      }
    ],
    "solution": "a, b, c = 12, 7, 25\n\nif a >= b and a >= c:\n    print('Mayor:', a)\nelif b >= c:\n    print('Mayor:', b)\nelse:\n    print('Mayor:', c)"
  },
  "3": {
    "prelude": "import sys\nfrom io import StringIO\n\nsys.stdin = StringIO(\"7\\n5\\n6\\n\")\n\n_lab_buf = StringIO()\n_lab_real = sys.stdout\n\n\nclass _LabTee:\n    def __init__(self, buf, real):\n        self.buf = buf\n        self.real = real\n\n    def write(self, data):\n        self.buf.write(data)\n        self.real.write(data)\n        return len(data)\n\n    def flush(self):\n        self.buf.flush()\n        self.real.flush()\n\n\nsys.stdout = _LabTee(_lab_buf, _lab_real)\n",
    "starter": "\"\"\"Calculadora de promedio: tres notas y estado final.\"\"\"\nnota1 = 7\nnota2 = 5\nnota3 = 6\n\n# TODO: calcular el promedio con (nota1 + nota2 + nota3) / 3.\npromedio = 0\n\n# TODO: informar el promedio y despues 'Aprobado' o 'Desaprobado'.\nif promedio >= 4:\n    pass\nelse:\n    pass\n",
    "tests": [
      {
        "name": "informa el promedio",
        "code": "assert ('Promedio: ' + str((nota1 + nota2 + nota3) / 3)) in _lab_buf.getvalue()"
      },
      {
        "name": "informa si aprobo o desaprobo",
        "code": "esperado = 'Aprobado' if (nota1 + nota2 + nota3) / 3 >= 4 else 'Desaprobado'\nassert esperado in _lab_buf.getvalue()"
      },
      {
        "name": "imprime dos lineas",
        "code": "assert _lab_buf.getvalue().count('\\n') == 2"
      },
      {
        "name": "no informa el estado contrario",
        "code": "esperado = 'Aprobado' if (nota1 + nota2 + nota3) / 3 >= 4 else 'Desaprobado'\notro = 'Desaprobado' if esperado == 'Aprobado' else 'Aprobado'\nassert otro not in _lab_buf.getvalue()"
      }
    ],
    "solution": "nota1 = 7\nnota2 = 5\nnota3 = 6\n\npromedio = (nota1 + nota2 + nota3) / 3\nprint('Promedio:', promedio)\n\nif promedio >= 4:\n    print('Aprobado')\nelse:\n    print('Desaprobado')"
  },
  "4": {
    "prelude": "import sys\nfrom io import StringIO\n\n_lab_buf = StringIO()\n_lab_real = sys.stdout\n\n\nclass _LabTee:\n    def __init__(self, buf, real):\n        self.buf = buf\n        self.real = real\n\n    def write(self, data):\n        self.buf.write(data)\n        self.real.write(data)\n        return len(data)\n\n    def flush(self):\n        self.buf.flush()\n        self.real.flush()\n\n\nsys.stdout = _LabTee(_lab_buf, _lab_real)\n",
    "starter": "\"\"\"Inventario sin repetidos: conjunto de productos distintos.\"\"\"\nproductos = ['lapiz', 'regla', 'lapiz', 'cuaderno', 'regla']\n\n# TODO: obtener el conjunto de productos distintos con set(productos).\ndistintos = None\n\n# TODO: informar los distintos, cuantos hay y si 'lapiz' esta en el inventario.\n",
    "tests": [
      {
        "name": "informa la cantidad de distintos",
        "code": "assert ('Cantidad: ' + str(len(set(productos)))) in _lab_buf.getvalue()"
      },
      {
        "name": "informa si tiene lapiz",
        "code": "assert ('Tiene lapiz? ' + str('lapiz' in productos)) in _lab_buf.getvalue()"
      },
      {
        "name": "imprime tres lineas",
        "code": "assert _lab_buf.getvalue().count('\\n') == 3"
      },
      {
        "name": "muestra todos los productos distintos",
        "code": "assert all(p in _lab_buf.getvalue() for p in set(productos))"
      }
    ],
    "solution": "productos = ['lapiz', 'regla', 'lapiz', 'cuaderno', 'regla']\ndistintos = set(productos)\n\nprint('Distintos:', distintos)\nprint('Cantidad:', len(distintos))\nprint('Tiene lapiz?', 'lapiz' in distintos)"
  },
  "5": {
    "starter": "\"\"\"Division segura: valida el divisor antes de dividir.\"\"\"\n\n\ndef dividir(a, b):\n    \"\"\"Devuelve a dividido b y lanza ValueError cuando b vale cero.\"\"\"\n    # TODO: si b vale cero, lanzar ValueError con un mensaje claro.\n    pass\n\n\n# TODO: llamar a dividir(10, 0) dentro de un bloque try/except ValueError.\ntry:\n    dividir(10, 0)\nexcept ValueError:\n    pass\n",
    "tests": [
      {
        "name": "devuelve la division",
        "code": "assert dividir(10, 4) == 2.5"
      },
      {
        "name": "acepta cero y negativos",
        "code": "assert dividir(0, 5) == 0.0 and dividir(-6, 3) == -2.0"
      },
      {
        "name": "lanza ValueError con divisor cero",
        "code": "raised = False\ntry: dividir(10, 0)\nexcept ValueError: raised = True\nassert raised"
      },
      {
        "name": "el mensaje menciona el cero",
        "code": "msg = None\ntry: dividir(1, 0)\nexcept ValueError as e: msg = str(e)\nassert msg is not None and 'cero' in msg.lower()"
      }
    ],
    "solution": "def dividir(a, b):\n    if b == 0:\n        raise ValueError('No se puede dividir por cero')\n    return a / b\n\ntry:\n    print(dividir(10, 0))\nexcept ValueError as error:\n    print(error)"
  },
  "6": {
    "starter": "\"\"\"Suma de digitos con recursion.\"\"\"\n\n\ndef suma_digitos(n):\n    \"\"\"Devuelve la suma de los digitos de n (entero positivo).\"\"\"\n    # TODO: caso base, si n tiene un solo digito devolver n.\n    # TODO: caso recursivo, (n % 10) + suma_digitos(n // 10).\n    pass\n\n\nprint(suma_digitos(12345))\n",
    "tests": [
      {
        "name": "suma los digitos de 12345",
        "code": "assert suma_digitos(12345) == 15"
      },
      {
        "name": "casos base de un digito",
        "code": "assert suma_digitos(0) == 0 and suma_digitos(7) == 7"
      },
      {
        "name": "suma digitos con ceros intermedios",
        "code": "assert suma_digitos(100) == 1 and suma_digitos(999) == 27"
      },
      {
        "name": "devuelve un entero",
        "code": "assert isinstance(suma_digitos(123456789), int) and suma_digitos(123456789) == 45"
      }
    ],
    "solution": "def suma_digitos(n):\n    if n < 10:\n        return n\n    return (n % 10) + suma_digitos(n // 10)\n\nprint(suma_digitos(12345))"
  },
  "7": {
    "prelude": "def lanza_error(func, *args):\n    \"\"\"Devuelve True si func(*args) lanza ValueError.\"\"\"\n    try:\n        func(*args)\n    except ValueError:\n        return True\n    return False",
    "starter": "class Cuenta:\n    \"\"\"Cuenta bancaria con saldo inicial, depositos y extracciones.\"\"\"\n\n    def __init__(self, saldo=0):\n        # TODO: guardar el saldo inicial en el atributo self.saldo\n        self.saldo = saldo\n\n    def depositar(self, monto):\n        \"\"\"Suma monto al saldo. Rechaza montos no positivos.\"\"\"\n        # TODO: si monto <= 0 lanzar ValueError('El monto debe ser positivo')\n        # TODO: sumar monto al saldo\n        pass\n\n    def extraer(self, monto):\n        \"\"\"Resta monto al saldo. No puede dejar el saldo en negativo.\"\"\"\n        # TODO: si monto > self.saldo lanzar ValueError('Saldo insuficiente')\n        # TODO: restar monto al saldo\n        pass",
    "tests": [
      {
        "name": "saldo inicial por defecto y saldo pasado por parametro",
        "code": "c = Cuenta(150)\nassert c.saldo == 150\nassert Cuenta().saldo == 0"
      },
      {
        "name": "depositar suma el monto al saldo",
        "code": "c = Cuenta(0)\nc.depositar(500)\nc.depositar(250)\nassert c.saldo == 750"
      },
      {
        "name": "depositar rechaza montos no positivos",
        "code": "c = Cuenta(10)\nassert lanza_error(c.depositar, 0)\nassert lanza_error(c.depositar, -4)\nassert c.saldo == 10"
      },
      {
        "name": "extraer no deja el saldo en negativo",
        "code": "c = Cuenta(100)\nassert lanza_error(c.extraer, 500)\nc.extraer(100)\nassert c.saldo == 0"
      }
    ],
    "solution": "class Cuenta:\n    def __init__(self, saldo=0):\n        self.saldo = saldo\n\n    def depositar(self, monto):\n        if monto <= 0:\n            raise ValueError('El monto debe ser positivo')\n        self.saldo += monto\n\n    def extraer(self, monto):\n        if monto > self.saldo:\n            raise ValueError('Saldo insuficiente')\n        self.saldo -= monto\n\ncuenta = Cuenta()\ncuenta.depositar(500)\ncuenta.extraer(200)\nprint('Saldo:', cuenta.saldo)"
  },
  "8": {
    "starter": "def balanceados(expresion):\n    \"\"\"Devuelve True si los parentesis (), [] y {} de la expresion estan balanceados.\"\"\"\n    pares = {')': '(', ']': '[', '}': '{'}\n    pila = []\n    for caracter in expresion:\n        if caracter in '([{':\n            pila.append(caracter)\n        elif caracter in pares:\n            # TODO: si la pila esta vacia o el tope no coincide con pares[caracter], devolver False\n            pass\n    # TODO: devolver True unicamente si la pila quedo vacia\n    return not pila",
    "tests": [
      {
        "name": "expresiones simples balanceadas",
        "code": "assert balanceados('(a + b) * (c - d)')\nassert balanceados('')"
      },
      {
        "name": "cierres del tipo correcto",
        "code": "assert balanceados('([]){}')\nassert not balanceados('([)]')"
      },
      {
        "name": "expresiones con errores de balance",
        "code": "assert not balanceados('(a + b]')\nassert not balanceados('(((')"
      },
      {
        "name": "grupos anidados y texto entre parentesis",
        "code": "assert balanceados('[](){}')\nassert balanceados('a(b)c[d]e{f}g')"
      }
    ],
    "solution": "def balanceados(expresion):\n    pares = {')': '(', ']': '[', '}': '{'}\n    pila = []\n    for caracter in expresion:\n        if caracter in '([{':\n            pila.append(caracter)\n        elif caracter in pares:\n            if not pila or pila.pop() != pares[caracter]:\n                return False\n    return not pila\n\nprint(balanceados('(a + b) * (c - d)'))\nprint(balanceados('(a + b]'))"
  },
  "9": {
    "starter": "def seleccion(datos):\n    \"\"\"Devuelve una nueva lista con los elementos ordenados de menor a mayor.\"\"\"\n    datos = list(datos)\n    for i in range(len(datos)):\n        # TODO: suponer que el minimo de la parte sin ordenar esta en la posicion i\n        minimo = i\n        for j in range(i + 1, len(datos)):\n            # TODO: si datos[j] es menor que datos[minimo], actualizar minimo\n            pass\n        # TODO: intercambiar datos[i] y datos[minimo]\n    return datos",
    "tests": [
      {
        "name": "ordena una lista desordenada",
        "code": "assert seleccion([29, 10, 14, 37, 13]) == [10, 13, 14, 29, 37]"
      },
      {
        "name": "listas vacias y de un solo elemento",
        "code": "assert seleccion([]) == []\nassert seleccion([7]) == [7]"
      },
      {
        "name": "conserva los valores repetidos",
        "code": "assert seleccion([3, 3, 1, 2]) == [1, 2, 3, 3]"
      },
      {
        "name": "negativos y lista ya ordenada",
        "code": "assert seleccion([-5, 0, -2, 8]) == [-5, -2, 0, 8]\nassert seleccion([1, 2, 3]) == [1, 2, 3]"
      }
    ],
    "solution": "def seleccion(datos):\n    datos = list(datos)\n    for i in range(len(datos)):\n        minimo = i\n        for j in range(i + 1, len(datos)):\n            if datos[j] < datos[minimo]:\n                minimo = j\n        datos[i], datos[minimo] = datos[minimo], datos[i]\n    return datos\n\nprint(seleccion([29, 10, 14, 37, 13]))"
  },
  "10": {
    "starter": "def prefix_average3(S):\n    \"\"\"Devuelve una lista A donde A[j] es el promedio de S[0..j], con costo lineal.\"\"\"\n    A = [0] * len(S)\n    total = 0\n    for j in range(len(S)):\n        # TODO: sumar S[j] al acumulado total\n        # TODO: guardar en A[j] el promedio total / (j + 1)\n        pass\n    return A",
    "tests": [
      {
        "name": "promedios de una lista pareja",
        "code": "assert prefix_average3([2, 4, 6, 8]) == [2.0, 3.0, 4.0, 5.0]"
      },
      {
        "name": "lista vacia devuelve lista vacia",
        "code": "assert prefix_average3([]) == []"
      },
      {
        "name": "promedios con decimales",
        "code": "r = prefix_average3([1, 2, 3, 4])\nassert len(r) == 4\nassert r == [1.0, 1.5, 2.0, 2.5]"
      },
      {
        "name": "un valor y valores repetidos",
        "code": "assert prefix_average3([5]) == [5.0]\nassert prefix_average3([3, 3, 3]) == [3.0, 3.0, 3.0]"
      }
    ],
    "solution": "def prefix_average3(S):\n    A = [0] * len(S)\n    total = 0\n    for j in range(len(S)):\n        total += S[j]\n        A[j] = total / (j + 1)\n    return A\n\nprint(prefix_average3([2, 4, 6, 8]))"
  },
  "11": {
    "prelude": "import os\n\ndef crear_archivo(ruta, contenido):\n    \"\"\"Crea el archivo de texto en ruta con el contenido y devuelve la ruta.\"\"\"\n    with open(ruta, 'w', encoding='utf-8') as archivo:\n        archivo.write(contenido)\n    return ruta\n\ndef borrar_archivo(ruta):\n    \"\"\"Borra el archivo si existe.\"\"\"\n    if os.path.exists(ruta):\n        os.remove(ruta)",
    "starter": "def contar(ruta):\n    \"\"\"Abre el archivo en ruta y devuelve (cantidad de lineas, cantidad de palabras).\"\"\"\n    # TODO: leer todo el texto del archivo con open(ruta, encoding='utf-8')\n    texto = ''\n    lineas = texto.splitlines()\n    palabras = texto.split()\n    return len(lineas), len(palabras)",
    "tests": [
      {
        "name": "cuenta lineas y palabras del archivo de ejemplo",
        "code": "ruta = crear_archivo('lab_u11_a.txt', 'hola mundo de archivos\\nsegunda linea aqui\\n')\ntry:\n    assert contar(ruta) == (2, 7)\nfinally: borrar_archivo(ruta)"
      },
      {
        "name": "una sola linea sin salto final",
        "code": "ruta = crear_archivo('lab_u11_b.txt', 'python es genial')\ntry:\n    assert contar(ruta) == (1, 3)\nfinally: borrar_archivo(ruta)"
      },
      {
        "name": "archivo vacio",
        "code": "ruta = crear_archivo('lab_u11_c.txt', '')\ntry:\n    assert contar(ruta) == (0, 0)\nfinally: borrar_archivo(ruta)"
      },
      {
        "name": "varias lineas sin salto final",
        "code": "ruta = crear_archivo('lab_u11_d.txt', 'uno\\ndos y tres\\ncuatro')\ntry:\n    assert contar(ruta) == (3, 5)\nfinally: borrar_archivo(ruta)"
      }
    ],
    "solution": "def contar(ruta):\n    with open(ruta, encoding='utf-8') as archivo:\n        texto = archivo.read()\n    lineas = texto.splitlines()\n    palabras = texto.split()\n    return len(lineas), len(palabras)\n\nwith open('prueba.txt', 'w', encoding='utf-8') as archivo:\n    archivo.write('hola mundo de archivos\\nsegunda linea aqui\\n')\n\nprint(contar('prueba.txt'))"
  },
  "12": {
    "prelude": "class Nodo:\n    \"\"\"Nodo de un arbol binario: valor, hijo izquierdo y hijo derecho.\"\"\"\n    def __init__(self, valor, izq=None, der=None):\n        self.valor = valor\n        self.izq = izq\n        self.der = der",
    "starter": "def contar_hojas(nodo):\n    \"\"\"Devuelve cuantos nodos hoja (sin hijos) tiene el subarbol de nodo.\"\"\"\n    if nodo is None:\n        return 0\n    # TODO: si nodo.izq y nodo.der son None el nodo es hoja: devolver 1\n    # TODO: si no, devolver contar_hojas(nodo.izq) + contar_hojas(nodo.der)\n    return 0",
    "tests": [
      {
        "name": "el arbol del ejemplo tiene cuatro hojas",
        "code": "raiz = Nodo(50, Nodo(30, Nodo(20), Nodo(40)), Nodo(70, Nodo(60), Nodo(80)))\nassert contar_hojas(raiz) == 4"
      },
      {
        "name": "sin nodo no hay hojas",
        "code": "assert contar_hojas(None) == 0"
      },
      {
        "name": "un solo nodo es una hoja",
        "code": "assert contar_hojas(Nodo(7)) == 1"
      },
      {
        "name": "arbol desbalanceado",
        "code": "raiz = Nodo(1, Nodo(2), Nodo(3, Nodo(4), None))\nassert contar_hojas(raiz) == 2\nassert contar_hojas(Nodo(0, Nodo(1), None)) == 1"
      }
    ],
    "solution": "def contar_hojas(nodo):\n    if nodo is None:\n        return 0\n    if nodo.izq is None and nodo.der is None:\n        return 1\n    return contar_hojas(nodo.izq) + contar_hojas(nodo.der)\n\n# con el arbol del ejemplo: raiz = 50 con hojas 20, 40, 60, 80\n# print(contar_hojas(raiz))"
  }
};
