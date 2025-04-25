// Conditional types
// tipo dinamico -> validarlo -> decidir el output -> tipo de salida

type Letra = string

const a: Letra = "a"
const b: Letra = "b"

type IsString<Data> = Data extends string ? "Es un string" : "No es un string"

type Result1 = IsString<"Hola"> // "Es un string"
type Result2 = IsString<2> // "No es un string"

