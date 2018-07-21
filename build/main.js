var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return true;
        }
        return false;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
/// <reference path="Validaciones/Texto.ts"/>
/// <reference path="Validaciones/Fechas.ts"/>
var resultado = Validaciones.validarTexto("Barry Allen");
if (resultado) {
    console.log("El texto es valido");
}
else {
    console.log("El texto no es valido");
}
