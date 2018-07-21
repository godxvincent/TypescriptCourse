// Objetos básicos
let flash = {
    nombre:"Barry Allen",
    edad:24,
    poderes:["Puede correr muy rápido","Viajar en el tiempo"]
}

// Typescript crea un tipo de objeto anonimo para manejar la coherencia sobre los atributos.
// heroe3.planetaOrigen = "tierra"; // Marca error, porque ese atributo no esta dentro de la definición.

// En este caso marca error si le quiero adicionar otro atributo.
flash = {
    // apodo: "superman", // Esto marca error
    nombre: "Clark Kent",
    edad : 31,
    poderes : ["Volar"]
}

// Para adicionar la definición de un objeto se adiciona adelante de la variable con corchetes {}
let batman4:{nombre:string, edad:number, poderes:string[]} = {
    nombre : "Bruce Wayne",
    edad : 24,
    poderes : ["Tener dinero"]
}

// Métodos o funciones dentro de objetos.
let batman5:{nombre:string, edad:number, poderes:string[], getNombre:()=>string} = {
    nombre : "Bruce Wayne",
    edad : 24,
    poderes : ["Tener dinero"],
    getNombre() {
        return this.nombre;
    }
}

// Tipos de objetos personaliados.
// Se usa la palabra reservada type.
type Heroe2 = {
    nombre:string,
    edad:number,
    poderes:string[],
    getNombre:()=>string
}

let mujerMaravilla:Heroe2 = {
    nombre:"Diana",
    edad:500,
    poderes:["Volar","Super Fuerza"],
    getNombre() { return this.nombre }
}
// Intefaces vs tipos, los tipos y las interfaces son parecidas, sin embargo las
// interfaces pueden extende de otra interface, una
// https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3.10
// https://stackoverflow.com/questions/36782896/in-typescript-what-is-the-difference-between-type-and-interface
// https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types
interface Heroe3  {
    nombre:string,
    edad:number,
    poderes:string[]
}
interface Heroe4 extends Heroe3 {
    getNombre:()=>string
}
let mujerMaravilla2:Heroe4 = {
    nombre:"Diana",
    edad:500,
    poderes:["Volar","Super Fuerza"],
    getNombre() { return this.nombre }
}


// Multiples tipos permitidos.
let cualquierCosa : string | number | Heroe2 = "Ricardo";
cualquierCosa = 10;
// Si uno de los tipos es personalizado tira error al definir el metodo.
// cualquierCosa = {
//     nombre : "Flash",
//     edad : 10,
//     poderes : [""],
//     getNombre() { return this.nombre }
// }

// Determinar tipo de una variable.
let cosa : any = 123;
console.log(typeof cosa)
if (typeof cosa === "number") {
    console.log("Cosa es de tipo number");
}

let mutable: [string | string[] ];
mutable = [["Hola","Mundo"]];
mutable = ["hola"];
