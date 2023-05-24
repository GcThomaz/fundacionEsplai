/*10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
corresponde a "Lunes", 2 corresponde a "Martes", etc.).*/

console.log("Ingresse el dia de la semana con numerales.")

let numero = parseInt(prompt("Ingrese el numero del dia de la semana: "));

switch (numero) {
    case 1:
        console.log("El dia " + numero + " es Domingo.");
        break;
    case 2:
        console.log("El dia " + numero + " es Lunes.");
        break;
    case 3:
        console.log("El dia " + numero + " es Martes.");
        break;
    case 4:
        console.log("El dia " + numero + " es Miercoles.");
        break;
    case 5:
        console.log("El dia " + numero + " es Jueves.");
        break;
    case 6:
        console.log("El dia " + numero + " es Viernes.");
        break;
    case 7:
        console.log("El dia " + numero + " es Sabado.");
        break;

    default:
        console.log("El dia " + numero + " no es valido.");
        break;
}