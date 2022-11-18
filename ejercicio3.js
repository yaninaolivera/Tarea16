// Realizar un programa con una función. Esta función muestra en pantalla la suma de dos números introducidos por el usuario.

let suma = function(x, y) {
    return x + y
}

let num1 = +prompt("Ingrese el primer número")
let num2 = +prompt("Ingrese el segundo número")
let resultado = suma(num1, num2)

alert(`La suma de ${num1} + ${num2} es: ${resultado}`)
