import { PI } from "./Validaciones/Numeros";
// textos es un alias para identificar todos los elementos exportados.
import * as Textos from "./Validaciones/Textos";
// Al tener una funcionalidad como default uno puede cargar ese objeto
// directamente a una variable en el archivo modulos.
import funcionResta from "./Validaciones/Numeros";
// Esto genera un require en el archivo js, por lo que se debe instalar un servidor de aplicaciones
// para el curso se esta usando serverlite y node.js
console.log( PI );
console.log( funcionResta(21, 7) );
console.log( Textos.obtenerError(0) );

// Como hemos traido cosas en la carpeta de node_modules se debe hacer en el archivo de tsconfig.json
// una configuración para que excluya los fuentes que esten allí y que no hacen parte de
// nuestro desarrollo.
