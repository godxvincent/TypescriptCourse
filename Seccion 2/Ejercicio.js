// Tipos
// let batman:string = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
// let parejaHeroes:[string,string] = [batman,superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var FuerzaHeroes;
(function (FuerzaHeroes) {
    FuerzaHeroes[FuerzaHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    FuerzaHeroes[FuerzaHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
    FuerzaHeroes[FuerzaHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
    FuerzaHeroes[FuerzaHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
})(FuerzaHeroes || (FuerzaHeroes = {}));
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
