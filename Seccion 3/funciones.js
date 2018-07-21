"use strict";
var heroe2 = "Flash";
function imprime_heroe() {
    return heroe2;
}
console.log(imprime_heroe());
function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var nombreP1 = nombreCompleto("Ricardo", "Vargas");
console.log(nombreP1);
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
function nombreCompletosCuatro(nombre) {
    var otrosParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otrosParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + otrosParametros.join(" ");
}
var nombreP4 = nombreCompletosCuatro("Ricardo", "Andres", "Vargas", "Martinez");
console.log(nombreP4);
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
miFuncion = suma;
console.log(miFuncion(5, 5));
miFuncion = saludar;
console.log(miFuncion("Ricardo"));
miFuncion = imprimir;
miFuncion();
