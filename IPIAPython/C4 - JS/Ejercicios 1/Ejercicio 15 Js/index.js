/*15. Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un
año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible
entre 400).*/

let ano = parseInt(prompt("Ingrese un ano: "));

if (ano % 400 === 0) {
    console.log("El ano " + ano + " es bisiesto!")
} else if (ano % 4 === 0 && ano % 100 != 0) {
    console.log("El ano " + ano + " es bisiesto!")
} else {
    console.log("El ano " + ano + " no es bisiesto!")
}