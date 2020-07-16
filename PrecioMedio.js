/*
  Crear un pseudocódigo que proporcione el precio medio de un producto, 
  calculado a partir del precio del mismo en tres establecimientos distintos.
*/

var Precio;
var Precio2;
var Precio3;
var PrecioM;

Precio = prompt('Ingrece el precio del producto en el primer establecimiento $', '');
Precio = parseInt(Precio);
Precio2 = prompt('Ingrece el precio del producto el segundo establecimiento $', '');
Precio2 = parseInt(Precio2);
Precio3 = prompt('Ingrese el precio del producto en el tercer establecimiento $', '');
Precio3 = parseInt(Precio3);

PrecioM = (Precio + Precio2 + Precio3) / 3

console.log('El precio medio del producto es:', PrecioM);
document.write('El precio medio del producto es:', PrecioM);