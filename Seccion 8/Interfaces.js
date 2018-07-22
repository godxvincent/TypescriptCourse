// Interface basica
function enviarMision(xmen) {
    console.log("Enviando a misión: " + xmen.nombre);
    xmen.regenerar("logan");
}
function enviarCuartel(xmen) {
    console.log("Enviando a cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "wolverine",
    poder: "regeneracion",
    regenerar: function (nombreReal) {
        console.log("Se ha regenerado " + nombreReal);
    }
};
enviarMision(wolverine);
enviarCuartel(wolverine);
// Implementación de interfaces por una clases
var Mutante2 = /** @class */ (function () {
    function Mutante2() {
        this.nombre = "";
    }
    // poder:string=""; es opcional en la interface
    Mutante2.prototype.regenerar = function (nombre) {
        console.log("Hola" + nombre);
    };
    return Mutante2;
}());
var sumaFuncion;
sumaFuncion = function (a, b) {
    return a + b;
};
