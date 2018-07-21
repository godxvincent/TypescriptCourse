"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MENSAJES = ["El texto es muy largo", "El texto es muy corto"];
function obtenerError(numeroError) {
    if (numeroError > MENSAJES.length) {
        return "El código de error no existe";
    }
    return MENSAJES[numeroError];
}
exports.obtenerError = obtenerError;
