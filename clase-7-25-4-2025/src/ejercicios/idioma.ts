type Saludo<Idioma> =
  Idioma extends "es" ? "Hola" :
  Idioma extends "en" ? "Hello" :
  Idioma extends "fr" ? "Bonjour" :
  "Idioma no soportado"

function obtenerSaludo<Idioma>(idioma: Idioma): Saludo<Idioma> {
  // let response

  // idioma === "es" ?
  //   response = "Hola" as Saludo<Idioma> :
  //   idioma === "en" ?
  //     response = "Hello" as Saludo<Idioma> :
  //     idioma === "fr" ?
  //       response = "Bonjour" as Saludo<Idioma> :
  //       response = "Idioma no soportado" as Saludo<Idioma>

  // return response

  if (idioma === "es") {
    return "Hola" as Saludo<Idioma>;
  } else if (idioma === "en") {
    return "Hello" as Saludo<Idioma>;
  } else if (idioma === "fr") {
    return "Bonjour" as Saludo<Idioma>;
  } else {
    return "Idioma no soportado" as Saludo<Idioma>;
  }
}

const saludoEspañol = obtenerSaludo(true) // Idioma no soportado
console.log(saludoEspañol)