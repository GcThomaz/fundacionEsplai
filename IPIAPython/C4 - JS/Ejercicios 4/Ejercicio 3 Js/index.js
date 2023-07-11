/*3. Crear una función que tome como parámetro un array y un número,
retornar un nuevo array con todos los elementos y el número
agregado al final del array */

let numbers = [1, 2, 3, 4];
let number = 5;

function newArray(array, number) {
   return array.push(number);
}

console.log(newArray(numbers, number));