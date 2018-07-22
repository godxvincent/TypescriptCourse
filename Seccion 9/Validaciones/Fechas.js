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
