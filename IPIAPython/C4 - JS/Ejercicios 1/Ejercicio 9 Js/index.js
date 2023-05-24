/*9. Escribe un programa que solicite al usuario ingresar un número y determine si es positivo,
negativo o cero.*/

let numero = parseInt (prompt("Ingresa un numero: "));

if (numero > 0) {
    console.log("El numero " + numero + " es mayor que 0.");
} else if (numero < 0) {
    console.log("El numero " + numero + " es menor que 0.");
} else {
    console.log("El numero " + numero + " es igual que 0.");
}