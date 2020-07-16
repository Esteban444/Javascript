/*
  Se requiere una aplicación que lea el nombre de 3 estudiantes de un salón de clase, las
2 notas parciales de cada uno y presente un mensaje con sus nombres y notas ﬁnales.
Si la nota ﬁnal es inferior a 3, presentar el mensaje “REPROBADO”, en caso contrario
presentar el mensaje “APROBADO” a cada estudiante.

*/

var Nombre;
var Nota1;
var Nota2;
var NotaFinal;

for (var est = 1; est <= 3; est++) {

    Nombre = prompt('Digite el nombre del estudiante', '');
    Nota1 = prompt('Digite la nota', '');
    Nota1 = parseInt(Nota1);
    Nota2 = prompt('Digite la nota dos', '');
    Nota2 = parseInt(Nota2);

    NotaFinal = (Nota1 + Nota2) / 2

    if (NotaFinal < 3) {
        console.log('El estudiante es: ', " ", Nombre, " ", 'La nota es:', " ", NotaFinal, " ", 'REPROBADO', );
        document.write('El estudiante es: ', " ", Nombre, " ", 'La nota es:', " ", NotaFinal, " ", 'REPROBADO' + '<br>');
    } else {
        console.log('El estudiante es: ', " ", Nombre, " ", 'La nota es:', " ", NotaFinal, " ", 'APROBADO', );

        document.write('El estudiante es: ', " ", Nombre, " ", 'La nota es:', " ", NotaFinal, " ", 'APROBADO' + '<br>');
    }

}