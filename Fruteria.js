/*
Una frutería ofrece las manzanas a $4.200 el kilo, con un descuento de acuerdo a la siguiente tabla:
  
 de 0 a 2 cero % descuento,
 de 2,01 a 5 10% de descuento,
 de 5,o1 a 10 15% de descuento,
 de 10,01 en adelante 20% de descuento

Muestre los resultados así: 
La compra de N kilos tiene un valor de $, pero usted tiene un descuento por valor de $, por lo tanto el valor a pagar es: $ 
ndizaje 


*/

var CantidadKl;
var KiloM = 4200;
var Precio;
var Descuento;
var TPagar;

CantidadKl = parseInt(prompt('Ingrese la cantidad de kilos de manzanas', ''));

if (CantidadKl <= 2) {

    Precio = CantidadKl * KiloM
    Descuento = 0;

} else if ((CantidadKl > 2) && (CantidadKl <= 5)) {

    Precio = KiloM * CantidadKl
    Descuento = (Precio * 10) / 100

} else if ((CantidadKl > 5) && (CantidadKl <= 10)) {

    Precio = CantidadKl * KiloM
    Descuento = (Precio * 15) / 100

} else {

    Precio = CantidadKl * KiloM
    Descuento = (Precio * 20) / 100

}
TPagar = Precio - Descuento
console.log('La compra tiene un valor de:', " ", Precio, "", '$', " ", 'Usted tiene un descuento de:',
    " ", Descuento, "", '$', " ", 'El valor a pagar es:', " ", TPagar, "", '$');
document.write('La compra tiene un valor de:', " ", Precio, "", '$', " ", 'Usted tiene un descuento de:',
    " ", Descuento, "", '$', " ", 'El valor a pagar es:', " ", TPagar, "", '$');