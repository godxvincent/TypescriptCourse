"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Numeros_1 = require("./Validaciones/Numeros");
// textos es un alias para identificar todos los elementos exportados.
var Textos = __importStar(require("./Validaciones/Textos"));
// Al tener una funcionalidad como default uno puede cargar ese objeto
// directamente a una variable en el archivo modulos.
var Numeros_2 = __importDefault(require("./Validaciones/Numeros"));
// Esto genera un require en el archivo js, por lo que se debe instalar un servidor de aplicaciones
// para el curso se esta usando serverlite y node.js
console.log(Numeros_1.PI);
console.log(Numeros_2.default(21, 7));
console.log(Textos.obtenerError(0));
// Como hemos traido cosas en la carpeta de node_modules se debe hacer en el archivo de tsconfig.json
// una configuración para que excluya los fuentes que esten allí y que no hacen parte de
// nuestro desarrollo.
