/*!
Objetos básicos
asdas
asdasd
*/
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar en el tiempo"]
};
// Typescript crea un tipo de objeto anonimo para manejar la coherencia sobre los atributos.
// heroe3.planetaOrigen = "tierra"; // Marca error, porque ese atributo no esta dentro de la definición.
// En este caso marca error si le quiero adicionar otro atributo.
flash = {
    // apodo: "superman", // Esto marca error
    nombre: "Clark Kent",
    edad: 31,
    poderes: ["Volar"]
};
// Para adicionar la definición de un objeto se adiciona adelante de la variable con corchetes {}
var batman4 = {
    nombre: "Bruce Wayne",
    edad: 24,
    poderes: ["Tener dinero"]
};
// Métodos o funciones dentro de objetos.
var batman5 = {
    nombre: "Bruce Wayne",
    edad: 24,
    poderes: ["Tener dinero"],
    getNombre: function () {
        return this.nombre;
    }
};
var mujerMaravilla = {
    nombre: "Diana",
    edad: 500,
    poderes: ["Volar", "Super Fuerza"],
    getNombre: function () { return this.nombre; }
};
var mujerMaravilla2 = {
    nombre: "Diana",
    edad: 500,
    poderes: ["Volar", "Super Fuerza"],
    getNombre: function () { return this.nombre; }
};
// Multiples tipos permitidos.
var cualquierCosa = "Ricardo";
cualquierCosa = 10;
// Si uno de los tipos es personalizado tira error al definir el metodo.
// cualquierCosa = {
//     nombre : "Flash",
//     edad : 10,
//     poderes : [""],
//     getNombre() { return this.nombre }
// }
// Determinar tipo de una variable.
var cosa = 123;
console.log(typeof cosa);
if (typeof cosa === "number") {
    console.log("Cosa es de tipo number");
}
var mutable;
mutable = [["Hola", "Mundo"]];
mutable = ["hola"];
