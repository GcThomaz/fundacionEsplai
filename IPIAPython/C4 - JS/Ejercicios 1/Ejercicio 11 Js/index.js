/*11. Crea un programa que solicite al usuario ingresar un número y determine si es divisible
entre 3. */

let numero = parseInt (prompt("Ingrese un numero: "));

if (numero % 3 === 0) {
    console.log("El numero " + numero + " es divisible por 3.");
} else {
    console.log("El numero " + numero + " no es divisible por 3."); 
}