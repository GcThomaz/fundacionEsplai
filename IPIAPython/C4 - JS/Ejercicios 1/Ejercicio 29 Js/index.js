/*29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
condición `if` y una variable contador. */

let word = prompt("Enter a word: ");
let quantity = 0;
let vowels = "";

word = word.toLowerCase();

for (let i = 0; i < word.length; i++) {
    
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
        vowels += word[i];
        quantity ++;
    }    
}
console.log("The word %s have %d vowels. (%s)", word, quantity, vowels);