// 📝 Ejercicio: Guardar y Recuperar Preferencias del Usuario con Closures y LocalStorage
// Objetivo:
// Crear una función crearGestorDePreferencias que permita gestionar preferencias de usuario almacenadas en localStorage usando closures.

// 🔹 Requisitos:
// La función crearGestorDePreferencias debe devolver un objeto con tres métodos:

// guardarPreferencia(clave, valor): Guarda una preferencia en localStorage.
// obtenerPreferencia(clave): Devuelve el valor de la preferencia almacenada.
// eliminarPreferencia(clave): Elimina una preferencia específica del localStorage.
// La variable interna storage debe mantenerse privada dentro del closure.

const crearGestorDePreferencias = () => {
  const storage = {}

  Object.keys(localStorage).forEach((key) => {
    storage[key] = JSON.parse(localStorage.getItem(key))
  })

  return {
    guardarPreferencia: (clave, valor) => {
      storage[clave] = valor
      localStorage.setItem(clave, JSON.stringify(valor))
    },
    obtenenerPreferencia: (clave) => {
      return storage.hasOwnProperty(clave) ? storage[clave] : null
    },
    eliminarPreferencia: (clave) => {
      if (storage.hasOwnProperty(clave)) {
        delete storage[clave]
        localStorage.removeItem(clave)
        return "Borrado con éxito..."
      } else {
        return null
      }
    }
  }
}

const gestor = crearGestorDePreferencias()

gestor.guardarPreferencia("tema", "oscuro")

console.log(gestor.obtenenerPreferencia("tasks"))

console.log(gestor.eliminarPreferencia("pepe"))

console.log(gestor)