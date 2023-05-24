/*25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada
palabra de la frase en una línea diferente utilizando un bucle `for...of`.*/

let phrase = prompt("Write a phrase: ");

for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
}