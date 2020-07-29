/*
Desarrollar un algoritmo que pida la edad y el sexo y dependiendo de si es hombre o 
mujer y si puede votar o no.

*/
var nombre;
var edad;
var genero;

nombre = prompt('Ingrese el nombre de la persona.', '');
edad = prompt('Ingrese la edad de la persona.', '');
genero = prompt('Ingrese el genero de la persona "femenino" o  "masculino" ', '');

if (edad < 18) {
    if (genero === "femenino") {
        console.log("Usted es menor de edad no puede votar eres: " + " " +
            " " + nombre + " " + "tienes" + " " + edad + " " + "Años" + " " + "Eres del genero" +
            " " + genero);

        alert("Usted es menor de edad no puede votar eres: " + " " +
            " " + nombre + " " + "tienes" + " " + edad + " " + "Años" + " " + "Eres del genero" +
            " " + genero);
    } else {
        console.log("Usted es menor de edad no puede votar eres: " + " " +
            " " + nombre + " " + "tienes" + " " + edad + " " + "Años" + " " + "Eres del genero" +
            " " + genero);

        alert("Usted es menor de edad no puede votar eres: " + " " +
            " " + nombre + " " + "tienes" + " " + edad + " " + "Años" + " " + "Eres del genero" +
            " " + genero);
    }
} else

if (edad >= 18) {
    if (genero === "femenino") {
        console.log("Usted es mayor de edad puede votar eres: " + " " +
            " " + nombre + " " + "tienes" + " " + edad + " " + "Años" + " " + "Eres del genero" +
            " " + genero);
        alert("Usted es mayor de edad puede votar eres: " + " " +
            " " + nombre + " " + "tienes" + " " + edad + " " + "Años" + " " + "Eres del genero" +
            " " + genero);
    } else {
        console.log("Usted es mayor de edad puede votar eres: " + " " +
            " " + nombre + " " + "tienes" + " " + edad + " " + "Años" + " " + "Eres del genero" +
            " " + genero);
        alert("Usted es mayor de edad puede votar eres: " + " " +
            " " + nombre + " " + "tienes" + " " + edad + " " + "Años" + " " + "Eres del genero" +
            " " + genero);
    }
}