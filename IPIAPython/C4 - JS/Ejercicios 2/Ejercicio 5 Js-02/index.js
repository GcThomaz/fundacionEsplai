/*5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6] */

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];
console.log(arrayOne);
console.log(arrayTwo);

function mergeArrays(array1, array2) {    
    let intercalated = [];

    while (array1.length > 0 && array2.length > 0) {
    intercalated.push(array1.shift());
    intercalated.push(array2.shift());
    }

    array1.length = 0;
    array2.length = 0;

    return intercalated;
}

//Call the function
let intercalated = mergeArrays(arrayOne, arrayTwo);

console.log(intercalated);
