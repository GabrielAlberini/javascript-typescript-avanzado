"use strict";
function obtenerSaludo(idioma) {
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
        return "Hola";
    }
    else if (idioma === "en") {
        return "Hello";
    }
    else if (idioma === "fr") {
        return "Bonjour";
    }
    else {
        return "Idioma no soportado";
    }
}
const saludoEspañol = obtenerSaludo(true); // Idioma no soportado
console.log(saludoEspañol);
