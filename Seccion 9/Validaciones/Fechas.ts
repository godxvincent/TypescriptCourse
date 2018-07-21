namespace Validaciones {

    export function validarFecha( fecha : Date) {
        if (isNaN(fecha.valueOf())) {
            return true;
        }
        return false;
    }
}
