/*
	Un grupo de 10 estudiantes presentan un examen de Física. Hacer un
algoritmo que lea por cada estudiante la calificación obtenida. Al
finalizar calcule e imprima:
• La cantidad de estudiantes que obtuvieron una calificación menor a 50.
• La cantidad de estudiantes que obtuvieron una calificación de 50 o
más pero menor que 70.
• 
• La cantidad de estudiantes que obtuvieron una calificación de 70 o más.
La calificación obtenida en el examen de física debe ser entre 1 y 100.

*/

var Nota;
var Nota50 = 0;
var Nota50a70 = 0;
var NotaMas = 0;

for (var nota = 1; nota <= 10; nota++) {

    Nota = prompt('Escriba la nota del Alumno entre 1 y 100.', '');

    if ((Nota < 1) && (Nota > 100)) {
        break;

    } else {
        console.log('La nota debe ser entre 1 a 100');
    }
    if ((Nota > 0) && (Nota < 50)) {
        Nota50++;

    } else
    if ((Nota >= 50) && (Nota < 70)) {
        Nota50a70++;

    } else if ((Nota > 70) && (Nota <= 100)) {
        NotaMas++;
    }

}
console.log('La cantidad que obtuvieron una calificacion menor a 50 es:', Nota50);
document.write('La cantidad que obtuvieron una calificacion menor a 50 es:', Nota50, '<br>');
console.log('La cantidad que obtuvieron una calificacion entre 50 y 70 es:', Nota50a70);
document.write('La cantidad que obtuvieron una calificacion entre 50 y 70 es:', Nota50a70, '<br>');
console.log('La cantidad que obtuvieron una calificacion de mas de 70 es:', NotaMas);
document.write('La cantidad que obtuvieron una calificacion mayor a 70 es:', NotaMas);