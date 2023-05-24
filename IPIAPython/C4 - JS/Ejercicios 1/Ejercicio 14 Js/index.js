/*14. Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la
consola el nombre del mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2
corresponde a "Febrero", etc.).*/

let numero = parseInt(prompt("Ingrese en numero de 1 a 12: "));

switch (numero) {
    case 1:
        console.log("Enero")
        break;
    case 2:
        console.log("Febrero")
        break;
    case 3:
        console.log("Marzo")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Mayo")
        break;
    case 6:
        console.log("Junio")
        break;
    case 7:
        console.log("Julio")
        break;
    case 8:
        console.log("Agosto")
        break;
    case 9:
        console.log("Septiembre")
        break;
    case 10:
        console.log("Octubre")
        break;
    case 11:
        console.log("Noviembre")
        break;
    case 12:
        console.log("Deciembre")
        break;

    default:
        console.log("Numero invalido!")
        break;
}