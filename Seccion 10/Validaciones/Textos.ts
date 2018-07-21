
const MENSAJES:string[] = ["El texto es muy largo","El texto es muy corto"];

export function obtenerError(numeroError:number) : string {
    if (numeroError > MENSAJES.length) {
        return "El código de error no existe";
    }
    return MENSAJES[numeroError];
}
