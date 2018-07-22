// Decoradores de Clases
// Los decoradores son funciones que se adjuntan a ciertos objetos, se adjuntan con el simbolo arroa @
// Los decoradores de clases reciben por defecto el constructor como parametro.
function consola ( constructor : Function ) {
    console.log( constructor );
}

// Decoradores de fabrica reciben parametros y debe retornar algo que sirva como un decorador.
function imprimirConsola ( imprimir : boolean ): Function {
    if ( imprimir ) {
        return consola;
    } else {
        return null;
    }
}
// El parametro (constructor) solo es pasado cuando se resuelve la fabrica.
@imprimirConsola(false)
class VillanoClass {
    constructor ( public nombre:string ) {

    }
}


// Ejemplo de uso de un decorador de clases
function planVillano( constructor : Function ) {
    constructor.prototype.imprimirPlan = function() {
        console.log(`El plan de ${this.nombre} es dominar el mundo`);
    }
}

// Ejemplo de uso de un decorador de clases
function imprimible( constructor : Function ) {
    constructor.prototype.imprimir = function() {
        console.log( this );
    }
}


// Decoradores anidados, es una forma de poner otro decorador a la clase.
@imprimible
@planVillano
class VillanoClass2 {
    constructor ( public nombre:string ) {

    }
}

let villanoMalo1 = new VillanoClass2("Lex Luthor");
// Esto tira error porque la función imprimir plan fue adicionada dinamicamente.
// Para solucionarlo se puede castear al tipo any
// villanoMalo1.imprimirPlan();
(<any>villanoMalo1).imprimirPlan();
(<any>villanoMalo1).imprimir();

// Decoradores de metodos
// Los decoradores de metodos recben tres parametros
function editable(esEditable:boolean) {
    return function( target: any, nombre:string, descriptor : PropertyDescriptor ) {
        // console.log(target); // La función en si misma
        // console.log(nombre); // El nombre de la función
        // console.log(descriptor); // propiedades de la función
        if (!esEditable) {
            console.warn("No me harán cambiar de opinion");
        }
        descriptor.writable = esEditable;
    }
}
// Decoradores de propiedades
function editablePropiedad(esEditable:boolean) {
    return function( target: any, nombre:string ) :any {
        let descriptor:PropertyDescriptor = {
            writable : esEditable
        }
        return descriptor;
    }
}

// Decoradores de parametros
function parametro(target:any, nombre:string, index:number) {
    console.log("=========");
    console.log(target); // Me da la función
    console.log(nombre); // Nombre función
    console.log(index); // I
    console.log("=========");
}
class VillanoClass3 {

    @editablePropiedad(true)
    public nombre:string;

    constructor ( nombre:string ) {
        this.nombre = nombre;
    }

    @editable(false)
    plan()  {
        console.log("Es dominar el mundo");
    }

    imprimirPlan( @parametro plan:boolean, @parametro mensaje:string ){
        if ( plan ) {
            console.log("El plan es "+mensaje);
        } else {
            console.log(mensaje);
        }
    }
}

let villanoMalo2 = new VillanoClass3("Lex Luthor");
// villanoMalo2.plan = function () {
//     console.log("Cortar flores");
// }

villanoMalo2.plan();
