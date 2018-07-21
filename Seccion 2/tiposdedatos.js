"use strict";
// Tipo de dato boolean
var esSuperman = true;
// Tipo de dato numerico
var avenger = 5;
var villanos = 5;
// En typescript si no se asigna valor a una variable
// y se hace el if arroja error, mientras en javascript.
if (avenger > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("ups!!!");
}
// Tipo string.
// let batman:string = "Batman";
// let concat = `${batman.toUpperCase()} es el mejor superhéroe`;
// console.log(concat);
// Tipo arreglos con algun tipo de dato.
var arreglo = [1, 2, 3];
arreglo.push(123);
// Esto es una tupla
var heroe = ["Dr. Strange", 31, true];
// Esto daría error
// heroe[0] = 123;
// Sin embargo esto no marca error.
heroe.push(10);
// Enumeraciones
var Volumen;
(function (Volumen) {
    // Inician en 0 y el siguiente elemnto es uno más.
    Volumen[Volumen["min"] = 0] = "min";
    // Se puede asignar un valor a alguno de los valores.
    Volumen[Volumen["medio"] = 4] = "medio";
    Volumen[Volumen["max"] = 5] = "max";
})(Volumen || (Volumen = {}));
// Tipo Void
function llamarABatman() {
    console.log("Mostrar la batiseñal");
}
// Si es void debe dar error, pero por configuraciones aun no lo muestra.
var funcion = llamarABatman();
// Tipo de dato never, es un valor que nunca debe suceder.
// Si una funcion retorna un never la aplicación debe finalizar allí.
// function error(mensaje):never {
//     throw new Error(mensaje);
// }
// error("Error critico linea 51 alcanzada!!");
// asersiones de tipo o castear una variable.
var cualquierValor = "Esto es un texto";
var largoString = cualquierValor.length;
console.log(largoString);
// Tipo undefined y null;
var nada = undefined;
// no es posible asignar un valor a una variable undefined, execto null
// nada = "Texto";
// nada = null;
// Con el parametro strictNullChecks se obliga a que el uso de null y undefined
// no sea permitido o no en las variables
// largoString = undefined;
var enumeracion;
(function (enumeracion) {
    enumeracion[enumeracion["a"] = 10] = "a";
    enumeracion[enumeracion["b"] = 11] = "b";
    enumeracion[enumeracion["c"] = 9] = "c";
    enumeracion[enumeracion["d"] = 10] = "d";
})(enumeracion || (enumeracion = {}));
console.log(enumeracion.d);
