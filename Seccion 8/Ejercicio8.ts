// Crear interfaces
interface Auto {
    encender:boolean,
    velocidadMaxima:number,
    acelear():void
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:Auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil2:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface InterfaceVillano {
    reir:boolean;
    comer?:boolean;
    llorar?:boolean;
}

let guason:InterfaceVillano = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:InterfaceVillano ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

interface funcionEjercicio {
    (arreglo:string[]) : number;
}

// Cree una interfaz para la siguiente funcion
let ciudadGotica:funcionEjercicio =
function ( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface Persona {
    nombre:string;
    edad:number;
    sexo:string;
    estadoCivil:string;
    imprimirBio() : void;
}

class Persona2 implements Persona {
    nombre:string = "";
    edad:number = 0;
    sexo:string = "";
    estadoCivil:string = "";
    public imprimirBio():void {
        console.log(this.nombre);
    }
}
// Las interfaces pueden ser heredadas entre ellas. 
