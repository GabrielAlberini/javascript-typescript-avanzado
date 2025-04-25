import { useState } from "react"
import type { Usuario, UsuarioValidado } from "../types/formTypes"
import "./Form.css"

const validadores: { [K in keyof Usuario]: (valor: string) => boolean } = {
  nombre: (v) => v.trim().length > 0,
  edad: (v) => Number(v) > 0,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

const Form = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    edad: 0,
    email: ""
  })

  const [validacion, setValidacion] = useState<UsuarioValidado>({
    nombre: false,
    edad: false,
    email: false
  })

  const handleChange = (campo: keyof Usuario, valor: string) => {
    const nuevoUsusario = {
      ...usuario,
      [campo]: campo === "edad" ? Number(valor) : valor
    }

    setUsuario(nuevoUsusario)

    const esValidado = validadores[campo](valor)

    setValidacion({
      ...validacion,
      [campo]: esValidado
    })
  }


  console.log(usuario)

  return (
    <form>
      <label>Nombre: </label>
      <input
        type="text"
        value={usuario.nombre}
        onChange={(e) => handleChange("nombre", e.target.value)}
        style={{ borderColor: validacion.nombre === false ? "red" : "green" }}
      />
      <label>Edad: </label>
      <input
        type="number"
        value={usuario.edad}
        onChange={(e) => handleChange("edad", e.target.value)}
        style={{ borderColor: validacion.edad === false ? "red" : "green" }}
      />
      <label>Email: </label>
      <input
        type="text"
        value={usuario.email}
        onChange={(e) => handleChange("email", e.target.value)}
        style={{ borderColor: validacion.email === false ? "red" : "green" }}
      />
    </form>
  )
}

export { Form }