/*31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una
condición `if` y una función auxiliar para verificar si un número es primo. */

let primes = "";

allPrimes();

//Function Alllllll

function allPrimes() {
  let number = parseInt(prompt("Type a number: "));

  for (let i = 1; i <= number; i++) {
    discoverPrimes(i);
  }
  primes = primes.substring(0, primes.length - 2);

  console.log(primes);
}

//FUNCTION PRIMES

function discoverPrimes(i) {
  if (i % 2 != 0) {
    primes += i + ", ";
  }
}
