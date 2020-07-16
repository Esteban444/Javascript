/*
Hacer un algoritmo que lea tres números los cuales significan una fecha (día, mes, año). 
Comprobar que sea válida la fecha, si no es válida que imprima un mensaje de error, 
y si es válida imprimir el mes con su nombre.
*/

var Day;
var Month;
var Year;

Day = prompt('Ingrese un dia del mes.');
Month = prompt('Ingrese un mes del año en Numero.');
Year = prompt('Ingrese el year.');

if ((Day < 1) || (Day > 31) || (Month < 1) || (Month > 12) || (Year < 1)) {
    console.log('La fecha no es valida');
    document.write('La fecha no es valida');
} else
if ((Day > 0) && (Day <= 31) && (Month == 1)) {
    console.log('La fecha es:', " ", Day, '/Enero/', Year);
    document.write('La fecha es:', " ", Day, '/Enero/', Year);
} else
if ((Day > 0) && (Day <= 31) && (Month == 3)) {
    console.log('La fecha es:', " ", Day, '/Marzo/', Year);
    document.write('La fecha es:', " ", Day, '/Marzo/', Year);
} else
if ((Day > 0) && (Day <= 30) && (Month == 4)) {
    console.log('La fecha es:', " ", Day, '/Abril/', Year);
    document.write('La fecha es:', " ", Day, '/Abril/', Year);
} else
if ((Day > 0) && (Day <= 31) && (Month == 5)) {
    console.log('La fecha es:', " ", Day, '/Mayo/', Year);
    document.write('La fecha es:', " ", Day, '/Mayo/', Year);
} else
if ((Day > 0) && (Day <= 30) && (Month == 6)) {
    console.log('La fecha es:', " ", Day, '/Junio/', Year);
    document.write('La fecha es:', " ", Day, '/Junio/', Year);
} else
if ((Day > 0) && (Day <= 31) && (Month == 7)) {
    console.log('La fecha es:', " ", Day, '/Julio/', Year);
    document.write('La fecha es:', " ", Day, '/Julio/', Year);
} else
if ((Day > 0) && (Day <= 31) && (Month == 8)) {
    console.log('La fecha es:', " ", Day, '/Agosto/', Year);
    document.write('La fecha es:', " ", Day, '/Agosto/', Year);
} else
if ((Day > 0) && (Day <= 30) && (Month == 9)) {
    console.log('La fecha es:', " ", Day, '/Septiembre/', Year);
    document.write('La fecha es:', " ", Day, '/Septiembre/', Year);
} else
if ((Day > 0) && (Day <= 31) && (Month == 10)) {
    console.log('La fecha es:', " ", Day, '/Octubre/', Year);
    document.write('La fecha es:', " ", Day, '/Octubre/', Year);
} else
if ((Day > 0) && (Day <= 30) && (Month == 11)) {
    console.log('La fecha es:', " ", Day, '/Noviembre/', Year);
    document.write('La fecha es:', " ", Day, '/Noviembre/', Year);
} else
if ((Day > 0) && (Day <= 31) && (Month == 12)) {
    console.log('La fecha es:', " ", Day, '/Diciembre/', Year);
    document.write('La fecha es:', " ", Day, '/Diciembre/', Year);
} else
if ((Year % 4 == 0) && (Year % 100 != 0 || Year % 400 == 0)) {
    if ((Day > 0) && (Day <= 29) && (Month == 2)) {
        console.log('La fecha es:', " ", Day, '/Febrero/', Year, " ", 'Es un año biciesto');
        document.write('La fecha es:', " ", Day, '/Febrero/', Year, " ", 'Es un año biciesto');
    }
} else if ((Day > 0) && (Day > 28)) {
    console.log('La fecha no es valida no es un año biciesto');
    document.write('La fecha no es valida no es un año biciesto');
} else
if ((Day > 0) && (Day <= 28) && (Month == 2)) {
    console.log('La fecha es:', " ", Day, '/Febrero/', Year);
    document.write('La fecha es:', " ", Day, '/Febrero/', Year);
}