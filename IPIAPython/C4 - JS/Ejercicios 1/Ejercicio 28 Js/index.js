/*28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
contador de divisores.*/

let number = parseInt(prompt("Type a number: "));

if (number % 2 != 0) {
    console.log("The number %d is prime.", number);
} else {
    console.log("The number %d isn't prime.", number);
}
