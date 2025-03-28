// Un literal numérico es un valor numérico escrito en formato de string
// y se puede utilizar para representar números enteros, decimales, hexadecimales, octales y binarios.

const entero: number = 10; // Entero decimal
const negativo: number = -5; // Entero negativo
const decimal: number = 3.14; // Decimal

// Notación Científica (Exponencial)
// Se usa para representar números muy grandes o pequeños con la notación exponencial.

const cientifico: number = 1.23e5; // 1.23 * 10^5 = 123000
const cientifico2: number = 2e2 // 2 * 10^2 = 200

// Números Binarios
// Se representan con 0b (o 0B) al inicio y solo pueden contener 0 y 1.

const binario: number = 0b1010000101010001010100101010101010101010101010001001; // 10 en decimal
// console.log(binario); // 10

// Números Octales
// Se representan con 0o (o 0O) al inicio y pueden contener dígitos del 0 al 7.

const octal: number = 0o1276; // 10 en decimal
console.log(octal)

// Números Hexadecimales
// Se representan con 0x (o 0X) al inicio y pueden contener dígitos del 0 al 9 y letras de la A a la F.

const hexadecimal: number = 0xA3F36263abc; // 10 en decimal
console.log(hexadecimal)

// Crea una función que reciba un número en decimal y lo convierta a binario, octal y hexadecimal.

const convertirBase = (num: number): string => {
  return `
    Decimal: ${num}
    Binario: ${num.toString(2)}
    Octal: ${num.toString(8)}
    Hexadecimal: ${num.toString(16)}
  `
}

console.log(convertirBase(22))




