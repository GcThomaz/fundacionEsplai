/*18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.*/

let numero = parseInt(prompt("Ingrese un numero: "));
let soma = 0;

do {
    soma = numero + soma;
    numero --;
} while (numero != 0 );

console.log(soma);