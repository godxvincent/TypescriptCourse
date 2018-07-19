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
var batman = "Batman";
var concat = batman.toUpperCase() + " es el mejor superh\u00E9roe";
console.log(concat);
// Tipo arreglos con algun tipo de dato.
var arreglo = [1, 2, 3];
arreglo.push(123);
// Esto es una tupla
var heroe = ["Dr. Strange", 31, true];
// Esto daría error
// heroe[0] = 123;
// Sin embargo esto no marca error.
heroe.push(10);
// Enumeraciones esto es una prueba
