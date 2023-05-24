/*30. Crea un programa que solicite al usuario ingresar un número y luego determine si es un
número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle
`while`, una condición `if` y una variable acumuladora. */

let number = parseInt(prompt("Type a number: "));
let perfect = "";
let counter = 1;
let accumulator = 0;

while (counter < number) {
    if (number % counter === 0) {
        accumulator += counter;

        perfect += counter + " + ";
    }
    counter ++;
}

perfect = perfect.substring(0, perfect.length -3);//Quitar los caracteres finales

if (number === accumulator) {
    console.log("The number %d is a perfect number! (%s = %d)", number, perfect, accumulator);
} else {
    console.log("The number %d is not a perfect number!", number); 
}
console.log(accumulator);

