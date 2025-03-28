import { sumar, restar, multiplicar, dividir } from "./calculadora/operaciones";
import { Persona } from "./typescript/conceptos";

const a: number = 10;
const b: number = 5;

const suma: number = sumar(a, b);
const resta: number = restar(a, b);
const multiplicacion: number = multiplicar(a, b);
const division: number = dividir(a, b);

console.log(`La suma de ${a} y ${b} es ${suma}`);
console.log(`La resta de ${a} y ${b} es ${resta}`);
console.log(`La multiplicación de ${a} y ${b} es ${multiplicacion}`);
console.log(`La división de ${a} y ${b} es ${division}`);

console.log(new Persona({ nombre: "Pepe", edad: 30, profesion: "Desarrollador" }));