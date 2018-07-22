"use strict";
// Funciones genericas
function regresar(arg) {
    return arg;
}
console.log(regresar(12.34545).toFixed(2));
console.log(regresar("Ricardo Tapia").charAt(0));
console.log(regresar(new Date()).getDate());
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneración"
};
console.log(regresar(deadpool));
// arreglos genericos
var heroes = ["Flash", "Batman", "Superman"];
var villanoz = ["Lex", "Pinguino"];
// Clases genericas
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        // El más (+) actua como un casteo.
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = 5;
cuadrado.altura = 10;
console.log(cuadrado.area());
