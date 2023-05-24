/*17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
los números pares desde 2 hasta ese número utilizando un bucle `while`.*/

let numero = parseInt(prompt("Ingrese un numero: "));

let contador = 2;

while (contador < numero) {
if (contador % 2 === 0) {
    console.log(contador);
}
contador ++;
}