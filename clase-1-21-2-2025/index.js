// nodemon -> refrescar la terminal al cambiar el archivo
// --watch -> solución nativa para refrescar la lectura del archivo

// Programación Orientada a Objetos (POO) en JavaScript

const celular = {
  marca: "Xiaomi",
  color: "negro",
  cantDeCamaras: 3,
  tieneCarcaza: true,
  sacarFoto: function () {
    console.log("Sonríe!")
  }
}

// Clases → Plantillas para crear objetos.
// Objetos → Instancias de clases.
// Propiedades → Variables dentro de un objeto.
// Métodos → Funciones dentro de un objeto.
// Encapsulamiento → Controla el acceso a datos.
// Herencia → Una clase puede heredar de otra.
// Polimorfismo → Métodos con el mismo nombre, pero comportamiento diferente en cada clase.

let nombre = "Pepe"

// objeto literal
const persona = {
  nombre: "Gabriel",
  edad: 30,
  saludar: function () {
    // interpolación -> inyección de js en un string
    console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años.`)
  }
}

// clase -> molde (como y que necesita contener una 'persona')
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años.`)
  }
}

const persona1 = new Persona("Luis", 25)
// persona1.saludar()

const persona2 = new Persona("Edgardo", 45)
// persona2.saludar()

class CuentaBancaria {
  #saldo = 0;

  constructor(titular, saldoInicial) {
    this.titular = titular
    this.saldoInicial = saldoInicial
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto
      console.log(`Depósito exitoso. Nuevo saldo: $${this.#saldo}`)
    } else {
      console.log("El monto debe ser mayor a 0...")
    }
  }

  mostrarSaldo() {
    console.log(`El saldo actual es: $${this.#saldo}`)
  }
}

const cuenta1 = new CuentaBancaria("Matias", 981278)
console.log("Matias tiene:", cuenta1.saldoInicial)

cuenta1.depositar(100)
cuenta1.depositar(200)
cuenta1.depositar(500)
cuenta1.depositar(600)

cuenta1.mostrarSaldo()