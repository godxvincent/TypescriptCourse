"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decoradores de Clases
// Los decoradores son funciones que se adjuntan a ciertos objetos, se adjuntan con el simbolo arroa @
// Los decoradores de clases reciben por defecto el constructor como parametro.
function consola(constructor) {
    console.log(constructor);
}
// Decoradores de fabrica reciben parametros y debe retornar algo que sirva como un decorador.
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return null;
    }
}
// El parametro (constructor) solo es pasado cuando se resuelve la fabrica.
var VillanoClass = /** @class */ (function () {
    function VillanoClass(nombre) {
        this.nombre = nombre;
    }
    VillanoClass = __decorate([
        imprimirConsola(false)
    ], VillanoClass);
    return VillanoClass;
}());
// Ejemplo de uso de un decorador de clases
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo");
    };
}
// Ejemplo de uso de un decorador de clases
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
// Decoradores anidados, es una forma de poner otro decorador a la clase.
var VillanoClass2 = /** @class */ (function () {
    function VillanoClass2(nombre) {
        this.nombre = nombre;
    }
    VillanoClass2 = __decorate([
        imprimible,
        planVillano
    ], VillanoClass2);
    return VillanoClass2;
}());
var villanoMalo1 = new VillanoClass2("Lex Luthor");
// Esto tira error porque la función imprimir plan fue adicionada dinamicamente.
// Para solucionarlo se puede castear al tipo any
// villanoMalo1.imprimirPlan();
villanoMalo1.imprimirPlan();
villanoMalo1.imprimir();
// Decoradores de metodos
// Los decoradores de metodos recben tres parametros
function editable(esEditable) {
    return function (target, nombre, descriptor) {
        // console.log(target); // La función en si misma
        // console.log(nombre); // El nombre de la función
        // console.log(descriptor); // propiedades de la función
        if (!esEditable) {
            console.warn("No me harán cambiar de opinion");
        }
        descriptor.writable = esEditable;
    };
}
// Decoradores de propiedades
function editablePropiedad(esEditable) {
    return function (target, nombre) {
        var descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
// Decoradores de parametros
function parametro(target, nombre, index) {
    console.log("=========");
    console.log(target); // Me da la función
    console.log(nombre); // Nombre función
    console.log(index); // I
    console.log("=========");
}
var VillanoClass3 = /** @class */ (function () {
    function VillanoClass3(nombre) {
        this.nombre = nombre;
    }
    VillanoClass3.prototype.plan = function () {
        console.log("Es dominar el mundo");
    };
    VillanoClass3.prototype.imprimirPlan = function (plan, mensaje) {
        if (plan) {
            console.log("El plan es " + mensaje);
        }
        else {
            console.log(mensaje);
        }
    };
    __decorate([
        editablePropiedad(true)
    ], VillanoClass3.prototype, "nombre", void 0);
    __decorate([
        editable(false)
    ], VillanoClass3.prototype, "plan", null);
    __decorate([
        __param(0, parametro), __param(1, parametro)
    ], VillanoClass3.prototype, "imprimirPlan", null);
    return VillanoClass3;
}());
var villanoMalo2 = new VillanoClass3("Lex Luthor");
// villanoMalo2.plan = function () {
//     console.log("Cortar flores");
// }
villanoMalo2.plan();
