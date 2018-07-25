import "jquery";
import "sweetalert";

console.log("Hola Mundo");

// Para descargar una definición.
// https://www.npmjs.com/package/@types/jquery
// npm install --save @types/jquery
// No se puede tener el tipo definido en la ruta de desarrollo.
$(document).ready(function() {
    console.log("Página lista!");
})

$("#botAlerta").on("click", function () {
    swal("Titulo","Mensaje", "success");
});
