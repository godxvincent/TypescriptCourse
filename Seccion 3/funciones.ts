// Definición del tipo de datos del retorno.
let heroe2:string = "Flash";

function imprime_heroe():string {
    return heroe2;
}

console.log(imprime_heroe());


// Definición de parametros obligatorios.
function nombreCompleto (nombre:string, apellido:string): string {
    return `${nombre} ${apellido}`;
}

let nombreP1:string = nombreCompleto("Ricardo", "Vargas");
console.log(nombreP1);

// Parametros opcionales -> En javascript son opcionales
function nombreCompletoDos (nombre:string, apellido?:string): string {
    if (apellido) {
        return `${nombre} ${apellido}`;
    } else {
        return `${nombre}`;
    }
}
let nombreP2:string = nombreCompletoDos("Ricardo");
console.log(nombreP2);

// Parametros por defecto -> En javascript son opcionales, sin embargo no se puede hacer
// en conjunto con los parametros opcionales.
function nombreCompletoTres (nombre:string, apellido:string,
                            capitalizado?:boolean): string {
    if (capitalizado) {
        return `${capitalizar(nombre)} ${capitalizar(apellido)}`;
    } else {
        return `${nombre} ${apellido}`;
    }
}

function capitalizar( texto:string ):string {
    return texto.charAt(0).toUpperCase() + texto.substr(1).toLowerCase();
}

let nombreP3:string = nombreCompletoTres("paula","martinez");
console.log(nombreP3);

// PArametros rest, funcionan igual que los parametros en ECMAScript6
function nombreCompletosCuatro(nombre:string, ...otrosParametros:string[]) {
    return nombre + " " + otrosParametros.join(" ");
}
let nombreP4:string = nombreCompletosCuatro("Ricardo","Andres","Vargas","Martinez");
console.log(nombreP4);


// Tipo funcion, es una forma de declarar una variable de tipo funciónamespace
// indicando el tipo de datos de entrada y los retornos.
function suma(a:number, b:number): number {
    return a + b;
}
function saludar(nombre:string) : string {
    return "I'm " + nombre;
}
function imprimir() {
    console.log("Esto es un mensaje");
}

let miFuncion : (x:number, y:number) => number;
// miFuncion = 10;
// PAra controlar la priemra función se hace
// let miFuncion : (x:number, y:number) => number
miFuncion = suma;
console.log(miFuncion(5,5));
// let miFuncion : (x:string) => string
// miFuncion = saludar;
// console.log(miFuncion("Ricardo"));
// let miFuncion : () => void
// miFuncion = imprimir;
// miFuncion();
