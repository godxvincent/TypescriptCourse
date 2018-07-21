"use strict";
/// <reference path="Validaciones/Texto.ts"/>
/// <reference path="Validaciones/Fechas.ts"/>
var resultado = Validaciones.validarTexto("Barry Allen");
if (resultado) {
    console.log("El texto es valido");
}
else {
    console.log("El texto no es valido");
}
