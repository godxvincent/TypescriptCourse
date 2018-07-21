
// Para que sea reconocible desde afuera se debe asignar la palabra export.
export const PI:number = 3.1416;

// La palabra default indica que este modulo se exportará por defecto cuando se llame este archivo
export default function restar(num1:number, num2:number) : number {
    return num1 - num2;
}
