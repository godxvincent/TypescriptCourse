var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// definición de una clase
var Avenger = /** @class */ (function () {
    // Constructor
    function Avenger(nombre, equipo, nombreReal) {
        // Por defecto los atributos son publicos.
        this.nombre = "";
        // protected el alcance es dentro de la clase y sus subclases
        this.equipo = "";
        // private el alcance es dentro de la clase unicamente.
        this.nombreReal = "";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.bio = function () {
        console.log(this.nombre + " - " + this.nombreReal + " - " + this.equipo);
    };
    Avenger.prototype.cambiarEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    Avenger.prototype.getNombreReal = function () {
        return this.nombreReal;
    };
    Object.defineProperty(Avenger.prototype, "getNombre", {
        // Definicion de un getter.
        get: function () {
            return this.nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avenger.prototype, "setNombre", {
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.error("Error en longitud del nombre");
                return;
            }
            this.nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var antman = new Avenger("antman", "Cap", "Scott Lang");
antman.bio();
// Herencia.
var Xmen2 = /** @class */ (function (_super) {
    __extends(Xmen2, _super);
    function Xmen2(nombre, equipo, nombreReal) {
        return _super.call(this, nombre, equipo, nombreReal) || this;
    }
    Xmen2.prototype.getNombreReal = function () {
        return _super.prototype.getNombreReal.call(this);
    };
    Xmen2.crearXmen = function (nombre, equipo, nombreReal) {
        console.log("Creado con un metodo estatico");
        return new Xmen2(nombre, equipo, nombreReal);
    };
    return Xmen2;
}(Avenger));
var scott = Xmen2.crearXmen("Scott", "N/A", "Ciclope");
console.log(scott.getNombreReal());
console.log(scott.getNombre);
scott.setNombre = "Lee";
console.log(scott.getNombre);
// Clases abstractas
var Mutante = /** @class */ (function () {
    function Mutante(nombre, nombreReal) {
        this.nombre = "";
        this.nombreReal = "";
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutante;
}());
// Una clase abstracta no puede ser instanciada
// let mutante = new Mutante("Wolverine","logan");
var Xmen3 = /** @class */ (function (_super) {
    __extends(Xmen3, _super);
    function Xmen3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen3;
}(Mutante));
var mutante = new Xmen3("Wolverine", "logan");
console.log(mutante);
// Constructor privado patron singleton.
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            console.log("Crea la primer instancia");
            this.instancia = new Apocalipsis("Soy Apocalipsis el unico!!!");
        }
        return this.instancia;
    };
    return Apocalipsis;
}());
var unicoMutante = Apocalipsis.llamarApocalipsis();
console.log(unicoMutante);
var otroMutante = Apocalipsis.llamarApocalipsis();
console.log(otroMutante);
