// keyof = Obtener las llaves de un objeto.
// Index type = Obtener el tipo de una propiedad dentro de un objeto.
// Mapped type = Crear un nuevo tipo recorriendo propiedades existentes, como en una transformación.

type Mochila = {
  tipoDeTela: string
  peso: number
  colores: string[]
  marca?: string
  bolsillos: number
}

type PropsMochila = keyof Mochila
// tipoDeTela | peso | colores | marca?

type Colores = Mochila["colores"]
// string[]

type MochilaEvaluada = {
  [Validacion in keyof Mochila]: boolean
}

// type MochilaEvaluada = {
// tipoDeTela: boolean
// peso: boolean
// colores: boolean
// marca?: boolean
// }

const mochilaValidada: MochilaEvaluada = {
  tipoDeTela: true,
  peso: false,
  colores: true,
  marca: true,
  bolsillos: true
}

const mochila: Mochila = {
  tipoDeTela: "lona",
  peso: 2,
  colores: ["roja", "negra"],
  bolsillos: 4
}

const App = () => {
  return <h1>Tengo una mochila de {mochila.tipoDeTela}, pesa {mochila.peso} y es de color {
    mochila.colores.map(c => c + " ")
  }</h1>
}

export default App