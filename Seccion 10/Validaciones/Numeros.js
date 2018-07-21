"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Para que sea reconocible desde afuera se debe asignar la palabra export.
exports.PI = 3.1416;
// La palabra default indica que este modulo se exportará por defecto cuando se llame este archivo
function restar(num1, num2) {
    return num1 - num2;
}
exports.default = restar;
