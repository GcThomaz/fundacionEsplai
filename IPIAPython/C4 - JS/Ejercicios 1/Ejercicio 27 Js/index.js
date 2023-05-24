/*27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de
todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una
condición `if`.*/

let number = parseInt(prompt("Type a number: "));
let contador = 1;
let sum = 0;

while (contador <= number) {
    if (contador % 2 != 0) {
        sum = contador + sum;
        
    }
    contador ++;
}

console.log(sum);