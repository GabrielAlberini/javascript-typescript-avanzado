// inferencia de tipo -> no es necesario definir el tipo de la variable
// ya que lo infiere el compilador
let nombre = "Matias"

nombre = "Gabriel" // error, no se puede asignar un número a una variable de tipo string

const calcularCuadrado = (numero: number): undefined => {
  console.log(numero ** 2)
}

// const cuadrado = calcularCuadrado(123) // 25

interface PersonaInterface {
  nombre: string
  edad: number
  profesion: string
}

export class Persona {
  nombre: string
  edad: number
  profesion: string

  constructor(dataPersona: PersonaInterface) {
    this.nombre = dataPersona.nombre
    this.edad = dataPersona.edad
    this.profesion = dataPersona.profesion
  }
}

class FabricaDePersonas {
  private personas: Persona[] = []

  agregarPersona(persona: Persona) {
    if (!(persona instanceof Persona)) {
      console.log("El objeto no es de tipo Persona")
    } else {
      this.personas.push(persona)
    }
  }

  mostrarPersonas() {
    this.personas.forEach((persona) => {
      console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Profesión: ${persona.profesion}`)
    })
  }
}

const persona1 = new Persona({ nombre: "Matias", edad: 25, profesion: "Desarrollador" }) // error, el objeto no es de tipo Persona

const fabricaDePersonas = new FabricaDePersonas()

fabricaDePersonas.agregarPersona(persona1)

const persona2 = {
  nombre: "Gabriel",
  edad: 30,
  profesion: "Diseñador",
}

fabricaDePersonas.agregarPersona(persona2) // error, el objeto no es de tipo Persona
fabricaDePersonas.mostrarPersonas()

