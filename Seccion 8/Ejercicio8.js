"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
}
var batimovil2 = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log("...... run!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
// Cree una interfaz para la siguiente funcion
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var Persona2 = /** @class */ (function () {
    function Persona2() {
        this.nombre = "";
        this.edad = 0;
        this.sexo = "";
        this.estadoCivil = "";
    }
    Persona2.prototype.imprimirBio = function () {
        console.log(this.nombre);
    };
    return Persona2;
}());
// Las interfaces pueden ser heredadas entre ellas. 
