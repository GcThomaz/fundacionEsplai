/*13. Realiza un programa que solicite al usuario ingresar dos números y determine si son iguales
o diferentes.*/

let numero1 = parseInt(prompt("Ingrese el primero numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));

if (numero1 === numero2) {
    console.log("Los numeros son iguales!");
} else {
    console.log("Los numeros son diferentes!");
}