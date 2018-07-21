"use strict";
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar en el tiempo"]
};
flash = {
    nombre: "Clark Kent",
    edad: 31,
    poderes: ["Volar"]
};
var batman4 = {
    nombre: "Bruce Wayne",
    edad: 24,
    poderes: ["Tener dinero"]
};
var batman5 = {
    nombre: "Bruce Wayne",
    edad: 24,
    poderes: ["Tener dinero"],
    getNombre: function () {
        return this.nombre;
    }
};
var mujerMaravilla = {
    nombre: "Diana",
    edad: 500,
    poderes: ["Volar", "Super Fuerza"],
    getNombre: function () { return this.nombre; }
};
var mujerMaravilla2 = {
    nombre: "Diana",
    edad: 500,
    poderes: ["Volar", "Super Fuerza"],
    getNombre: function () { return this.nombre; }
};
var cualquierCosa = "Ricardo";
cualquierCosa = 10;
var cosa = 123;
console.log(typeof cosa);
if (typeof cosa === "number") {
    console.log("Cosa es de tipo number");
}
var mutable;
mutable = [["Hola", "Mundo"]];
mutable = ["hola"];
