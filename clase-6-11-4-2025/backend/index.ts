import { suma } from "./calculadora"

const resultado = suma(199, 3)

console.log(resultado, "<- resultado")

console.log("Hola desde ts!")

// existen dos formas de ejecutar código ts
// dependerá del proceso en el que estemos

// desarrollo -> ts-node-dev
// ts es solo un lenguaje de desarrollo
// producción -> tsc -> index.ts -> index.js
// necesitamos los estaticos js para ejecutar el sistema