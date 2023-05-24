/*24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
suma de todos los dígitos del número utilizando un bucle `while`.*/

let number = parseInt(prompt("Type a number: "));
let sum = 0;

while (number != 0) {
    sum = number + sum;
    number --;
}
console.log(sum);