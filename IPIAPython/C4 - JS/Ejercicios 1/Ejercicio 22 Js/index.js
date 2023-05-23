/*22. Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola
cada letra de la palabra en una línea diferente utilizando un bucle `for`.*/

let word = prompt("Type a word: ");

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);    
}