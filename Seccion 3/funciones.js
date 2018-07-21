"use strict";
// Definición del tipo de datos del retorno.
var heroe2 = "Flash";
function imprime_heroe() {
    return heroe2;
}
console.log(imprime_heroe());
// Definición de parametros obligatorios.
function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var nombreP1 = nombreCompleto("Ricardo", "Vargas");
console.log(nombreP1);
// Parametros opcionales -> En javascript son opcionales
function nombreCompletoDos(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return "" + nombre;
    }
}
var nombreP2 = nombreCompletoDos("Ricardo");
console.log(nombreP2);
// Parametros por defecto -> En javascript son opcionales, sin embargo no se puede hacer
// en conjunto con los parametros opcionales.
function nombreCompletoTres(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.substr(1).toLowerCase();
}
var nombreP3 = nombreCompletoTres("paula", "martinez");
console.log(nombreP3);
// PArametros rest, funcionan igual que los parametros en ECMAScript6
function nombreCompletosCuatro(nombre) {
    var otrosParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otrosParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + otrosParametros.join(" ");
}
var nombreP4 = nombreCompletosCuatro("Ricardo", "Andres", "Vargas", "Martinez");
console.log(nombreP4);
// Tipo funcion, es una forma de declarar una variable de tipo funciónamespace
// indicando el tipo de datos de entrada y los retornos.
function suma(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function imprimir() {
    console.log("Esto es un mensaje");
}
var miFuncion;
miFuncion = 10;
// PAra controlar la priemra función se hace
// let miFuncion : (x:number, y:number) => number
miFuncion = suma;
console.log(miFuncion(5, 5));
// let miFuncion : (x:string) => string
miFuncion = saludar;
console.log(miFuncion("Ricardo"));
// let miFuncion : () => void
miFuncion = imprimir;
miFuncion();
