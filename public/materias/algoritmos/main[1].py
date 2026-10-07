x = int(input("Ingrese un numero:"))
y = int(input("Ingrese otro numero:"))
z = int(input("Ingrese otro numero:"))

if x < y and x < z:
    print(x)
elif y < x and y < z:
    print(y)
else:
    print(z)

