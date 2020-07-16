/* 
Leer dos números; 
si son iguales que los multiplique, 
Si el primero es mayor al segundo que los sume 
Si el segundo es mayor al primero que los multiplique

*/

var Numero1;
var Numero2;
var Resultado;

var Numero1 = prompt("Digite un numero", '');

var Numero2 = prompt("Digite el numero 2", '');


if (Numero2 > Numero1) {
    Resultado = Numero1 * Numero2

} else if (Numero1 > Numero2) {
    Resultado = parseInt(Numero1) + parseInt(Numero2)

} else {
    Resultado = Numero1 * Numero2
}
console.log(Resultado);
document.write(Resultado);