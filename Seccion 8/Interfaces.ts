// Interface basica

interface Xmen4 {
    nombre:string,
    poder?:string // Ätributos opcionales
    regenerar(nombreReal : string) : void;
    llamar?(nombreReal:string) : string;
}

function enviarMision(xmen : Xmen4){
    console.log("Enviando a misión: "+ xmen.nombre);
    xmen.regenerar("logan");
}

function  enviarCuartel (xmen : Xmen4) {
    console.log("Enviando a cuartel: "+ xmen.nombre);
}

let wolverine:Xmen4 = {
    nombre: "wolverine",
    poder : "regeneracion",
    regenerar(nombreReal:string) {
        console.log("Se ha regenerado " + nombreReal);
    }
};

enviarMision(wolverine);

enviarCuartel(wolverine);

// Implementación de interfaces por una clases
class Mutante2 implements Xmen4 {
    nombre:string="";
    // poder:string=""; es opcional en la interface
    public regenerar( nombre : string) {
        console.log("Hola" + nombre);
    }
}

// Interfaces para definir la estructura de una funcion
interface interfaceFuncionDosNumeros {
    (numero1:number, numero2:number) : number;
}

let sumaFuncion:interfaceFuncionDosNumeros;

sumaFuncion = function(a:number, b:number) {
    return a + b;
}
