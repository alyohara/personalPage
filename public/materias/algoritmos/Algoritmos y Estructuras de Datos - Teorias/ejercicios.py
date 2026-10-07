##Archivos:
##Ejercicios prácticos


## Archivo de ejemplo: text.txt
## What is Python language?                                                
## Python is a widely used high-level, general-purpose, interpreted, dynamic programming language.Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in 
## languages such as C++ or Java. 
## Python supports multiple programming paradigms, including object-oriented, imperative and functional programming or procedural styles. It features a dynamic type system and automatic memory management and has a large and comprehensive standard library.The best way we learn anything is by practice and exercise questions. We  have started this section for those (beginner to intermediate) who are familiar with Python.


## 1- Escriba un programa que lea un archivo de texto por completo


def file_read(fname):
        txt = open(fname)
        print(txt.read())

file_read('test.txt')


## 2- Escriba un programa, que dado un N, lea esa N cantidad primeras líneas de un archivo.

def file_read_from_head(fname, nlines):
        from itertools import islice
        with open(fname) as f:
                for line in islice(f, nlines):
                        print(line)

file_read_from_head('test.txt',2)

## 3- Escriba un programa que agregue un texto al final del archivo y luego lo muestre

def file_read(fname):
        from itertools import islice
        with open(fname, "w") as myfile:
                myfile.write("Python Exercises\n")
                myfile.write("Java Exercises")
        txt = open(fname)
        print(txt.read())
file_read('abc.txt')


## 4- Escriba un programa que lea línea a línea de un archivo y qaue la guarde en una lista

def file_read(fname):
        with open(fname) as f:
                #Content_list is the list that contains the read lines.     
                content_list = f.readlines()
                print(content_list)

file_read(\'test.txt\')

## 5- Escriba un programa que encuentre la palabra más larga en un archivo de texto

def longest_word(filename):
    with open(filename, 'r') as infile:
              words = infile.read().split()
    max_len = len(max(words, key=len))
    return [word for word in words if len(word) == max_len]

print(longest_word('test.txt'))

## 6- Escriba un programa que cuente la ocurrencia de una palabra (importen Counter de collections para poder hacerlo más fácil)

from collections import Counter
def word_count(fname):
        with open(fname) as f:
                return Counter(f.read().split())

print("Number of words in the file :",word_count("test.txt"))


## 7- Escriba un programa que guarde una lista en un archivo

color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
with open('abc.txt', "w") as myfile:
        for c in color:
                myfile.write("%s\n" % c)

content = open('abc.txt')
print(content.read())

## 8- Escriba un programa que verifique si un archivo está abierto o cerrado

 f = open('abc.txt','r')
print(f.closed)
f.close()
print(f.closed)


## 9- Escriba un programa que genere 26 archivos, nombrados A.txt, B.txt ... Z.txt

import string, os
if not os.path.exists("letters"):
   os.makedirs("letters")
for letter in string.ascii_uppercase:
   with open(letter + ".txt", "w") as f:
       f.writelines(letter)

## 10- Escriba un programa 	que use un archivo "Book.dat", el cual tiene una estructura [BookNo, Book_Name, Author, Price]
##		. Para ello escriba una función "createFile()" para ingresar datos para cada registro y agregarlo al Book.dat
##		. Luego, escriba una función "countRec(Author)" que y cuente y retore la cantidad de libros de ese autor que existen listados en el archivo

import pickle

def createFile():
    file = open("book.dat","ab")
    BookNo = int(input("Ingrese cód de libro: "))
    Book_Name = input("Ingrese nombre del libro: ")
    Author =input("Ingrese el autor: ")
    Price = int(input("Ingrese el precio: "))
    record = [BookNo, Book_Name, Author, Price]
    pickle.dump(record, file)
    file.close()
    
def countRec(Author):
    file = open("book.dat","rb")
    count = 0
    try:
        while True:
            record = pickle.load(file)
            if record[2]==Author:
                count+=1
    except EOFError:
        pass
    return count
    file.close()

#Para probar las funciones
def testProgram():
    while True:
        createFile()
        choice = input("Agregar más registros (y/n)? ")
        if choice in 'Nn':
            break
    Author = input('Ingrese el apellido del autor para buscar: ')
    n = countRec(Author)
    print("La cantidad de libros en la que aparece es: ",n)

testProgram()

## 11- Escriba un programa que maneje un archivo llamado employee.dat, que contiene registros del tipo [empcode, nombre, salario]:
##		El programa debe permitir agregar registros al archivos y contener una función que permita devolver del mismo los empleados cuyos salarios sean mayores a 30000

import pickle

def add_record():
    file = open("employee.dat","ab")
    emp = {}
    emp['empcode'] = int(input("Ingrese el código del empleado: "))
    emp['name'] = input("Ingrese el nombre del empleado: ")
    emp['salary'] = int(input("Ingrese el salario: "))
    pickle.dump(emp, file)
    file.close()
    
def search():
    file = open("employee.dat","rb")
    try:
        while True:
            emp = pickle.load(file)
            if emp['salary']>30000:
                print(emp)
    except EOFError:
        pass
    file.close()

#To test working of functions
def testProgram():
    while True:
        add_record()
        choice = input("Agregar más empleados(y/n)? ")
        if choice in 'Nn':
            break
    print('Detalles de los empleados que cobran más de 30000')
    search()

testProgram()    

## 12- Escriba un programa que dado un path, imprima los aerchivos y directorios incluídos (importen el módulo os)

import os
path = 'g:\\testpath\\'  ## <- pongan algun  path conocido de su pc
print("Solo directorios:")
print([ name for name in os.listdir(path) if os.path.isdir(os.path.join(path, name)) ])
print("\nSolo Archivos:")
print([ name for name in os.listdir(path) if not os.path.isdir(os.path.join(path, name)) ])
print("\nTodos los directorios y archivos :")
print([ name for name in os.listdir(path)])

## Otra Forma:
import os
root = 'g:\\testpath\\'
for entry in os.scandir(root):
   if entry.is_dir():
       typ = 'dir'
   elif entry.is_file():
       typ = 'file'
   elif entry.is_symlink():
       typ = 'link'
   else:
       typ = 'unknown'
   print('{name} {typ}'.format(
       name=entry.name,
       typ=typ,
   ))

## 13- Escriba un programa que dado u path, revise su existencia, si se puede leer, si se puede escribir y si se puede ejecutar

import os
print('Existencia:', os.access('c:\\Users\\Public\\C programming library.docx', os.F_OK))
print('Lectura:', os.access('c:\\Users\\Public\\C programming library.docx', os.R_OK))
print('Escritura:', os.access('c:\\Users\\Public\\C programming library.docx', os.W_OK))
print('Ejecución:', os.access('c:\\Users\\Public\\C programming library.docx', os.X_OK))


## 14- Escriba un programa que verifique en que directorio estamos y suba uno (si puede)
import os
print('Directorio Actual:', os.getcwd())
print('\nCambiando el directorio:', os.pardir)
os.chdir(os.pardir)
print('Directorio Actual:', os.getcwd())
print('\nCambiando el directorio:', os.pardir)
os.chdir(os.pardir)
print('Directorio Actual:', os.getcwd())


