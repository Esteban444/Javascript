/*
Diseñe un algoritmo que determine el porcentaje de varones y de mujeres que hay en un salón de clases. 
Debe ingresar el valor total de varones y de mujeres
*/

var Mujeres;
var Hombres;
var PorcentajeM;
var PorcentajeH;
var Total;

Mujeres = parseInt(prompt('Ingrese la cantidad de mujeres.'));
Hombres = parseInt(prompt('Ingrese la cantidad de hombres.'));

Total = (Mujeres + Hombres);
PorcentajeM = (100 * Mujeres) / Total
PorcentajeH = (100 * Hombres) / Total

console.log('El porcentaje de mujeres es: ', PorcentajeM, " ", '%');
document.write('El porcentaje de mujeres es: ', PorcentajeM, " ", '%', '<br>');
console.log('El porcentaje de hombres es: ', PorcentajeH, " ", '%');
document.write('El porcentaje de Hombres es: ', PorcentajeH, " ", '%');