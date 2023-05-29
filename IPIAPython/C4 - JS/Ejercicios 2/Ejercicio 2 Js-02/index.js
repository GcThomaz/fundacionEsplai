/*2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
los liste y los saque por consola. */

//Declaration and assignment of the array planets
const planets = ["Mercurio", "Venus", "Terra", "Marte", "Jupiter", "Saturno", "Urano", "Netuno"];

function printPlanets() {
    console.log("The planets of the solar system are:");
    planets.map(planet => console.log(planet));
}

//Call function
printPlanets();