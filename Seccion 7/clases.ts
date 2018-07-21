// definición de una clase
class Avenger {

    // Por defecto los atributos son publicos.
    public nombre:string = "";
    // protected el alcance es dentro de la clase y sus subclases
    protected equipo:string = "";
    // private el alcance es dentro de la clase unicamente.
    private nombreReal:string = "";

    private puedePelear:boolean = false;
    private peleasGanadas:number = 0;

    // Constructor
    constructor(nombre:string, equipo:string, nombreReal:string) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

    public bio():void {
        console.log(`${this.nombre} - ${this.nombreReal} - ${this.equipo}`)
    }

    public cambiarEquipoPublico (nuevoEquipo:string):boolean {
        return this.cambiarEquipo(nuevoEquipo);
    }

    private cambiarEquipo(nuevoEquipo:string):boolean {
        if (nuevoEquipo===this.equipo) {
            return false;
        } else {
            return true;
        }
    }

    protected getNombreReal():string {
        return this.nombreReal;
    }
    // Definicion de un getter.
    public get getNombre(): string {
        return this.nombre;
    }
    public set setNombre(nombre:string) {
        if (nombre.length <= 3) {
            console.error("Error en longitud del nombre");
            return
        }
        this.nombre = nombre;
    }
}

let antman:Avenger = new Avenger("antman","Cap","Scott Lang");

antman.bio();

// Herencia.
class Xmen2 extends Avenger {
    private constructor(nombre:string, equipo:string, nombreReal:string) {
        super(nombre, equipo, nombreReal);
    }

    public getNombreReal():string{
        return super.getNombreReal();
    }

    public static crearXmen(nombre:string, equipo:string, nombreReal:string) {
        console.log("Creado con un metodo estatico")
        return new Xmen2(nombre, equipo, nombreReal);
    }

}

let scott = Xmen2.crearXmen("Scott", "N/A", "Ciclope");
console.log(scott.getNombreReal());
console.log(scott.getNombre);
scott.setNombre = "Lee";
console.log(scott.getNombre);

// Clases abstractas
abstract class Mutante {
    nombre:string= "";
    nombreReal:string = "";

    constructor(nombre:string, nombreReal:string) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
}
// Una clase abstracta no puede ser instanciada
// let mutante = new Mutante("Wolverine","logan");

class Xmen3 extends Mutante {

}

let mutante = new Xmen3("Wolverine","logan");
console.log(mutante);

// Constructor privado patron singleton.
class Apocalipsis {

    static instancia:Apocalipsis;
    private nombre:string;

    private constructor(nombre:string){
        this.nombre = nombre;
    }

    static llamarApocalipsis() {
        if ( !Apocalipsis.instancia ) {
            console.log("Crea la primer instancia")
            this.instancia = new Apocalipsis("Soy Apocalipsis el unico!!!");
        }
        return this.instancia;
    }
}

let unicoMutante = Apocalipsis.llamarApocalipsis();
console.log(unicoMutante);

let otroMutante = Apocalipsis.llamarApocalipsis();
console.log(otroMutante);
