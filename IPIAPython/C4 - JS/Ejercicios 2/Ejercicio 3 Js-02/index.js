/*3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en
su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los
últimos dos elementos. Obtén el índice del elemento "Funciones". */

//Declaration and assignment of array javascript1
const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
console.log("Original javascript1: ");
console.log(javascript1);

//Remove in a index position
javascript1.splice(3);
console.log("javascript1 without the element in index 3: ");
console.log(javascript1);

//Add a string in the end of the array
javascript1.push("ArraysDificiles");
console.log("javascript1 with the new element in index 3: ");
console.log(javascript1);

//Copy the last two elements of array javascript1
const lastTwoElements = javascript1.slice(-2);
console.log("Copy of javascript1 with the last two elements: ");
console.log(lastTwoElements);

//Get the index of an espefic element of the array
console.log("The index of the element 'Funciones' is: ");
console.log(javascript1.indexOf("Funciones"));
