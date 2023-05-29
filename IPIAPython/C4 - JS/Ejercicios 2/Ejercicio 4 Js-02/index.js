/*4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH" */

//Using FOR
/*let word = prompt("Enter a word: ");
const arrayWord = [word];

let reverse = [];
for (let i = (word.length -1); i >= 0; i--) {
    reverse.push(word[i]);
}

console.log(word + " -> " + arrayWord + " -> " + reverse + " -> " + reverse.join(''));*/

//Using functions

let mainString = prompt("Enter a string: ");
let mainArray = Array.from(mainString);
let reversedArray = mainArray.reverse();
let reversedString = reversedArray.join('');

console.log(reversedString);


