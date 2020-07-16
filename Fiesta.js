/*
Desarrollar un algoritmo que permita calcular los siguientes datos de
una fiesta:
¿Cuántas personas asistieron a la fiesta?
¿Cuántos hombres y cuantas mujeres?
-Promedio de edades por sexo
-La edad de la persona más joven que asistió
Consideraciones:
-No se permiten menores de edad a la fiesta
-Ingresar datos hasta que se ingrese una edad igual a cero

*/

var Edad = 999;
var Genero = '';
var Mujeres = 0;
var Hombres = 0;
var EdadM = 0;
var EdadH = 0;
var joven = 120;
var Promedio = 0;
var PromedioH = 0;
var Total = 0;


while (Edad > 0) {

    Edad = parseInt(prompt('Ingrese la edad de la persona.'));

    if ((Edad >= 1) && (Edad < 18)) {
        console.log('No se permiten el ingreso de menores edad a la fiesta.');
        break;
    }
    if (Edad == 0) {
        break;
    }
    if (Edad >= 18) {
        Genero = prompt('Ingrese el genero de la persona 1 para femenino o 2 para masculino.');
    }
    if (Genero == 1) {
        Mujeres++;
        EdadM = (EdadM + Edad);
        Promedio = EdadM / Mujeres;
    }
    if (Genero == 2) {
        Hombres++;
        EdadH = (EdadH + Edad);
        PromedioH = EdadH / Hombres;
    }

    if ((Edad > 0) && (Edad < joven)) {
        joven = Edad;
    }
    Total = (Mujeres + Hombres);
    console.log('Digite cero para terminar');

}
console.log('El total de personas que asistieron a la fiesta es:', Total);
console.log('El total de mujeres es: ', Mujeres);
console.log('El promedio de edad de las mujeres es: ', Promedio);
console.log('El total de hombres es: ', Hombres);
console.log('El promedio de edad de los hombres es: ', PromedioH);
console.log('La persona mas joven es: ', joven);