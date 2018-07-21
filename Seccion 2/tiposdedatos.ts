// Tipo de dato boolean
let esSuperman:boolean = true;
// Tipo de dato numerico
let avenger:number = 5;
let villanos:number = 5;

// En typescript si no se asigna valor a una variable
// y se hace el if arroja error, mientras en javascript.
if (avenger > villanos) {
    console.log("Estamos salvados");
} else {
    console.log("ups!!!");
}

// Tipo string.
// let batman:string = "Batman";
// let concat = `${batman.toUpperCase()} es el mejor superhéroe`;
// console.log(concat);

// Tipo arreglos con algun tipo de dato.
let arreglo:number[] = [1,2,3];
arreglo.push(123);

// Esto es una tupla
let heroe:[string,number,boolean] = ["Dr. Strange", 31,true];
// Esto daría error
// heroe[0] = 123;
// Sin embargo esto no marca error.
heroe.push(10);

// Enumeraciones
enum Volumen {
    // Inician en 0 y el siguiente elemnto es uno más.
    min,
    // Se puede asignar un valor a alguno de los valores.
    medio = 4,
    max
}
// Tipo Void
function llamarABatman():void {
    console.log("Mostrar la batiseñal");
}
// Si es void debe dar error, pero por configuraciones aun no lo muestra.
let funcion = llamarABatman();

// Tipo de dato never, es un valor que nunca debe suceder.
// Si una funcion retorna un never la aplicación debe finalizar allí.
// function error(mensaje):never {
//     throw new Error(mensaje);
// }
// error("Error critico linea 51 alcanzada!!");

// asersiones de tipo o castear una variable.
let cualquierValor:any = "Esto es un texto";
let largoString:number = (<string>cualquierValor).length;
console.log(largoString);

// Tipo undefined y null;
let nada:undefined = undefined;
// no es posible asignar un valor a una variable undefined, execto null
// nada = "Texto";
// nada = null;
// Con el parametro strictNullChecks se obliga a que el uso de null y undefined
// no sea permitido o no en las variables
// largoString = undefined;


enum enumeracion {
  a=10,
  b,
  c=9,
  d
}

console.log(enumeracion.d);
