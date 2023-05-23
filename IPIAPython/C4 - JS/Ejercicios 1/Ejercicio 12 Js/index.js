/*12. Escribe un programa que solicite al usuario ingresar su calificación en un examen y muestre
en la consola si ha aprobado (calificación mayor o igual a 70) o no. */

let calificacion = parseInt(prompt("Ingrese tu calificacion: "));

if (calificacion >= 70) {
    console.log("Felicidades! Ha sido Aprovado!");
} else {
    console.log("Que pena! Has Reprovado!");
}