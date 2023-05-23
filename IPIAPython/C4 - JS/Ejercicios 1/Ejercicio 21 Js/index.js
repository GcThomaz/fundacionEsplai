/*21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
multiplicación de todos los números enteros positivos menores o iguales a ese número
utilizando un bucle `do...while`.*/

let numero = parseInt(prompt("Type a number: "));
let contador = 0;
let resultado = 0;

do {
    resultado = numero * contador;
    console.log(numero + " x " + contador + " = " + resultado);
    contador ++;
} while (contador <= numero);
