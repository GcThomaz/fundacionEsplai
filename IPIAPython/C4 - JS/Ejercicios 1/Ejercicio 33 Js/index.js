/*33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la
consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable
acumuladora. */

let word = prompt("Type a word: ");
let reverse = "";

for (let i = (word.length -1); i >= 0; i--) {
    reverse += (word).charAt(i);    
}
console.log(reverse);