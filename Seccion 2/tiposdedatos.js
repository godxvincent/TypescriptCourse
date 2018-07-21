"use strict";
var esSuperman = true;
var avenger = 5;
var villanos = 5;
if (avenger > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("ups!!!");
}
var batman = "Batman";
var concat = batman.toUpperCase() + " es el mejor superh\u00E9roe";
console.log(concat);
var arreglo = [1, 2, 3];
arreglo.push(123);
var heroe = ["Dr. Strange", 31, true];
heroe.push(10);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 0] = "min";
    Volumen[Volumen["medio"] = 4] = "medio";
    Volumen[Volumen["max"] = 5] = "max";
})(Volumen || (Volumen = {}));
function llamarABatman() {
    console.log("Mostrar la batiseñal");
}
var funcion = llamarABatman();
var cualquierValor = "Esto es un texto";
var largoString = cualquierValor.length;
console.log(largoString);
var nada = undefined;
var enumeracion;
(function (enumeracion) {
    enumeracion[enumeracion["a"] = 10] = "a";
    enumeracion[enumeracion["b"] = 11] = "b";
    enumeracion[enumeracion["c"] = 9] = "c";
    enumeracion[enumeracion["d"] = 10] = "d";
})(enumeracion || (enumeracion = {}));
console.log(enumeracion.d);
