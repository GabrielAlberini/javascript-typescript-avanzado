type Usuario = {
  nombre: string
  edad: number
  email: string
}

type UsuarioValidado = {
  [K in keyof Usuario]: boolean
}

export type { Usuario, UsuarioValidado }