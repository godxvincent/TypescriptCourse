type Vehiculo = {
    carroceria : string,
    modelo : string,
    antibalas : boolean,
    pasajeros : number,
    disparar?: () => void
}
// Objetos
let batimovil:Vehiculo = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee:Vehiculo = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


type Enemigos = {
    nombre : string,
    edad : number | undefined,
    mutante : boolean
}
// Villanos debe de ser un arreglo de objetos personalizados
let villanos2:Enemigos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Xmen = {
    poder : string,
    estatura : number
}
let charles:Xmen = {
  poder:"psiquico",
  estatura: 1.78
};

type Villano = {
    lider : boolean,
    miembros : string[]
}
let apocalipsis:Villano = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:Xmen|Villano;

mystique = charles;
mystique = apocalipsis;
