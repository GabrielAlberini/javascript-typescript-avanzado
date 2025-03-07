// Una función es un bloque de código reutilizable que se ejecuta cuando se le llama.

// DEFINICIÓN
// function saludar() {
//   const saludo = "Hola, cómo estás?"
//   return saludo
// }

// const saludoRealizado = saludar()
// console.log(saludoRealizado)

// PARÁMETROS
// function saludar(nombre = "Anónimo", apellido = '"sin apellido"') {
//   setTimeout(() => {
//     document.querySelector("h1").textContent = `Hola, ${nombre} ${apellido}`
//   }, 5000)
// }

// saludar("Román")

//FUNCION DECLARATÍVA: Este tipo de función se define con la palabra clave function y se puede llamar antes de su declaración.


// hoisting
// console.log(sumar(1, 2))

// function sumar(n1 = 0, n2 = 0) {
//   return n1 + n2
// }

// Función Expresiva (Function Expression)
// Es una función almacenada en una variable. No se puede llamar antes de su declaración.

// console.log(sumar(1, 2))

// const sumar = function (n1 = 0, n2 = 0) {
//   return n1 + n2
// }

// console.log(sumar(1, 2))

// FUNCIONES FLECHA
// const sumar = (n1, n2) => n1 + n2
// const cuadrado = n => n ** 2

// console.log(sumar(1, 100))
// console.log(cuadrado(4))

// FUNCIONES DE ORDEN SUPERIOR
// Son funciones que reciben otras funciones como parámetros o devuelven funciones.

// const numeros = [1, 2, 3, 66, 5]
// numeros.forEach((num, index) => {
//   console.log(`En la posición ${index + 1} tenemos el número ${num}.`)
// })

// CLOUSURE
// Un closure es una función que recuerda el ámbito en el que fue creada.

const contador = () => {
  let numero = 0

  return function () {
    numero++
    console.log(numero)
  }
}

const incrementar = contador()

incrementar()
incrementar()
incrementar()