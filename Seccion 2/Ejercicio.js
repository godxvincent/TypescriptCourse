"use strict";
var batman = "Bruce";
var superman = "Clark";
var existe = false;
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
var FuerzaHeroes;
(function (FuerzaHeroes) {
    FuerzaHeroes[FuerzaHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    FuerzaHeroes[FuerzaHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
    FuerzaHeroes[FuerzaHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
    FuerzaHeroes[FuerzaHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
})(FuerzaHeroes || (FuerzaHeroes = {}));
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
