/*5. Declarar una variable llamada "precioProducto" y asignarle un valor numérico que
represente el precio de un producto. Luego, declarar una variable llamada
"porcentajeDescuento" y asignarle un valor numérico que represente el porcentaje de
descuento aplicado al producto. Calcular el precio final después del descuento (usando la
fórmula precioProducto - (precioProducto * porcentajeDescuento / 100)) y mostrar el
resultado en la consola.*/

let precioProducto = 10;
let porcentajeDescuento = 20;

let precioFinal = precioProducto - (precioProducto * porcentajeDescuento / 100);

console.log('El precio final es: ' + precioFinal);