export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string,
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export type ApiResponse<Result> =
  Result extends Error ?
  { success: false, error: Result } :
  { success: true, data: Result }
