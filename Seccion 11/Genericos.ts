
// Funciones genericas
function regresar<T> ( arg:T )  {
    return arg;
}

console.log( regresar( 12.34545 ).toFixed(2));
console.log( regresar( "Ricardo Tapia" ).charAt(0));
console.log( regresar( new Date() ).getDate());

// Ejemplo con tipos de datos propios
type Heroe = {
    nombre:string,
    nombreReal:string
}

type Villano3 = {
    nombre:string,
    poder:string
}

let deadpool = {
    nombre:"Deadpool",
    nombreReal:"Wade Winston Wilson",
    poder:"Regeneración"
}

console.log( regresar<Heroe>( deadpool ) );

// arreglos genericos
let heroes:Array<string> = ["Flash", "Batman", "Superman"];
let villanoz:string[] = ["Lex","Pinguino"];

// Clases genericas
class Cuadrado <T extends number|string> {

    base:T;
    altura:T;

    area():number {
        // El más (+) actua como un casteo.
        return +this.base * +this.altura;
    }
}

let cuadrado = new Cuadrado<number>();
cuadrado.base = 5;
cuadrado.altura = 10;
console.log(cuadrado.area());
