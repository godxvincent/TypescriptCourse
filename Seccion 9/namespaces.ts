/// <reference path="Validaciones/Texto.ts"/>
/// <reference path="Validaciones/Fechas.ts"/>

let resultado:boolean = Validaciones.validarTexto("Barry Allen");
if (resultado){
    console.log("El texto es valido")
} else {
    console.log("El texto no es valido")
}
