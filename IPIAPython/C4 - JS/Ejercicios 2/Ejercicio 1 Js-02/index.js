/*1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
array y lo saque por consola. */

//Declaration and assignment of the Array letters
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

//Function to get the dimension of array letters
function quantityLetters() {    
    console.log(letters.length);
}

//Function to get and print a random caractere
function aleatory() {
    let random = Math.floor(Math.random() * letters.length);
    let randomElement = letters[random];
    console.log(randomElement);
}

//Call the functions
quantityLetters();
aleatory();