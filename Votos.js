/*
Desarrollar un algoritmo que pida la edad y el sexo y dependiendo de si es hombre o 
mujer y si puede votar o no.

*/

var Nombre;
var Edad;
var Genero;

Nombre = prompt('Ingrese el nombre de la persona.', '');
Edad = prompt('Ingrese la edad de la persona.', '');
Genero = prompt('Ingrese el genero de la persona "F" para femenino y "M" para masculino.', '');

if (Edad < 18) {
    if ((Edad < 18) && (Genero = "F")) {
        console.log('Usted es menor de edad su nombre es:', " ", Nombre, " ", Edad, " ", 'Años', " ", 'No puede votar.');
        document.write('Usted es menor de edad su nombre es:', " ", Nombre, " ", Edad, " ", 'Años', " ", 'No puede votar.');
    } else {
        console.log('Usted es menor de edad su nombre es:', " ", Nombre, " ", Edad, " ", 'Años', " ", 'No puede votar.');
        document.write('Usted es menor de edad su nombre es:', " ", Nombre, " ", Edad, " ", 'Años', " ", 'No puede votar.');
    }
} else if (Edad >= 18) {
    if ((Edad >= 18) && (Genero = "F")) {
        console.log('Usted es mayor de edad su nombre es:', " ", Nombre, " ", Edad, " ", 'Años', " ", 'Puede votar.');
        document.write('Usted es mayor de edad su nombre es:', " ", Nombre, " ", Edad, " ", 'Años', " ", 'Puede votar.');
    } else {
        console.log('Usted es mayor de edad su nombre es:', " ", Nombre, " ", Edad, " ", 'Años', " ", 'Puede votar.');
        document.write('Usted es mayor de edad su nombre es:', " ", Nombre, " ", Edad, " ", 'Años', " ", 'Puede votar.');
    }
}