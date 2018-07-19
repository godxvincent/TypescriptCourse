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
let batman:string = "Batman";
let concat = `${batman.toUpperCase()} es el mejor superhéroe`;
console.log(concat);

// Tipo arreglos con algun tipo de dato.
let arreglo:number[] = [1,2,3];
arreglo.push(123);

// Esto es una tupla
let heroe:[string,number,boolean] = ["Dr. Strange", 31,true];
// Esto daría error
// heroe[0] = 123;
// Sin embargo esto no marca error.
heroe.push(10);

// Enumeraciones esto es una prueba
