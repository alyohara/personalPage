# -*- coding: utf-8 -*-
# Desarrollar algoritmos que resuelvan los siguientes problemas planteados.
# a- Dado un número de 2n + 1 cifras decir si el mismo es palíndromo (capicúa).

nro = input("Ingrese un número: ")
nro_int, i = int(nro), 0

if type(nro_int) != int:
    print("Error, no es un número.")
elif len(nro) % 2 == 0:
    print("Error el número no tiene cantidad impar de cifras.")
else:
    while i > len(nro) + 1:
        print(i, len(nro) - i - 1)
        if nro[i] != nro[len(nro) - i - 1]:
            print("No es palíndromo.")
            i = len(nro) + 2
        else:
            i += 1
    if i <= len(nro):
        print("Es plalíndromo.")