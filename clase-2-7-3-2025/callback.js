// Ejercicio:
// Crea una función llamada procesarArray que reciba un array de números y una función como parámetros. La función debe aplicar la función proporcionada a cada elemento del array y devolver un nuevo array con los resultados. Luego, utiliza procesarArray para realizar las siguientes transformaciones sobre un array de números:

// Multiplicar cada número por 2.
// Sumar 10 a cada número.

let numeros = [1, 2, 3, 4, 5];

const multiplicarPorDos = num => num * 2

const sumarDiez = num => num + 10

const procesarArray = (array, callback) => {
  let resultado = []

  for (let index = 0; index < array.length; index++) {
    resultado.push(callback(array[index]))
  }

  return resultado
}

const numerosMultiplicados = procesarArray(numeros, multiplicarPorDos)
const numerosSumados = procesarArray(numeros, sumarDiez)

console.log("Números multiplicados: ", numerosMultiplicados)
console.log("Números sumados: ", numerosSumados)