/*1. Crear una función que tome como parámetro un array, retornar el
último elemento del array */

let numbers = [1, 2, 3, 4, 5];
let counter = 0;

function returnLastIndex(numbers){
    
    for (let i = 0; i < numbers.length; i++) {
        counter = i;
    }
    return counter;
}

console.log(returnLastIndex(numbers));