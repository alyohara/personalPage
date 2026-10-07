#Escribir una función que permita ordenar una Lista. Dicha función recibe dos argumentos (lista, copy), en donde, lista es la lista a ordenar, y copy es Verdadero la función retornara una lista nueva, en otro caso ordenara sobre la lista que se pasa como argumento. Por defecto, si la función es llamada sin valor para copy (solo la lista) ordenaremos  sobre la lista que se pasa como argumento.

def ordenar_Lista(lista, copy=False):
    if copy: 
        lista_nueva = lista.copy()
        lista_nueva.sort()
        return lista_nueva
    else:
        lista.sort()
 

L = [1,2,3,2,4,6,3,2,9]
print("Lista de la funcion \n",ordenar_Lista(L, copy=True))
print(type(ordenar_Lista(L, copy=True)))
print("Lista original \n", L)