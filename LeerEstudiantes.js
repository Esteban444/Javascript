/*
Se requiere una aplicación que lea constantemente el nombre de los estudiantes de un
salón de clase, las 2 notas parciales de cada uno y presente un mensaje con sus nombres
y notas ﬁnales. 
 Si la nota final es inferior a 3, presentarel mensaje “REPROBADO”, 
 si su nota final es superior o igual a 3 y menor a 4, presentar el mensaje “APROBADO”, 
 y si su nota final es 4 o superior, presentar el mensaje
“EXCELENTEMENTE APROBADO”. 


*/
var Nombre;
var Nota;
var Nota2;
var NotaFinal = 999;

while (NotaFinal >= 2) {

    Nombre = prompt('Escriba el nombre del estudiante: ', '');
    Nota = prompt('Digite la nota del estudiante: ', '');
    Nota = parseInt(Nota);
    Nota2 = prompt('Escriba la segunda nota del estudiante: ', '');
    Nota2 = parseInt(Nota2);

    NotaFinal = (Nota + Nota2) / 2

    if (NotaFinal < 3) {

        console.log('El estudiante es: ', " ", Nombre, " ", 'La nota es: ', " ", NotaFinal, " ", 'REPROBADO');
        document.write('El estudiante es: ', " ", Nombre, " ", 'La nota es:', " ", NotaFinal, " ", 'REPROBADO' + '<br>');

    } else if ((NotaFinal >= 3) && (NotaFinal < 4)) {

        console.log('El estudiante es: ', " ", Nombre, " ", 'La nota es: ', " ", NotaFinal, " ", 'APROBADO');
        document.write('El estudiante es: ', " ", Nombre, " ", 'La nota es:', " ", NotaFinal, " ", 'APROBADO' + '<br>');

    } else {

        console.log('El estudiante es: ', " ", Nombre, " ", 'La nota es: ', " ", NotaFinal, " ", 'APROBADO EXCELENTE');
        document.write('El estudiante es: ', " ", Nombre, " ", 'La nota es:', " ", NotaFinal, " ", 'APROBADO EXCELENTE' + '<br>');
    }
    console.log('Para terminar ingrese dos notas que promedien menos de dos.')
}