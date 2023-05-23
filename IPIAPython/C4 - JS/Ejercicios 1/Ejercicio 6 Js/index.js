/*6. Realiza un programa que solicite al usuario ingresar un número y determine si es par o impar.*/

let numero = parseInt (prompt("Ingresa un numero: "));

if (numero % 2 === 0) {
    console.log("El numero es PAR!");
} else {
    console.log("El numero es IMPAR!");
}