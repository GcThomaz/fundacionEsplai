/*8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
de ellos.*/

let numero1 = parseInt (prompt ("Ingresa el primero numero: "));
let numero2 = parseInt (prompt ("Ingresa el segundo numero: "));
let numero3 = parseInt (prompt ("Ingresa el tercero numero: "));

if (numero1 > 2 && numero2 > numero3) {
    console.log("El primero numero es el mayor: " + numero1);
} else if (numero2 > numero3 && numero3 > numero1) {
    console.log("El segundo numero es mayor: " + numero2);
} else {
    console.log("El tercero numero es el mayor: " + numero3);
}