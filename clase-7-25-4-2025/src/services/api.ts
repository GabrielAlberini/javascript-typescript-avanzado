import { Character, ApiResponse } from '../types/Character';

async function fetchCharacter(id: number): Promise<ApiResponse<Character> | ApiResponse<Error>> {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (res.status === 500) throw new Error(`El id debe ser un número: ${res.status}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data: Character = await res.json();
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err as Error };
  }
}

async function getCharacter(id: number) {
  const response = await fetchCharacter(id)

  // la promesa retorna dos posibles objetos dependiendo de su resultado
  // result -> si se resuelve éxitosamente
  // reject -> si se resuelve no éxitosamente

  if (response.success) {
    console.log("🧍 Nombre:", response.data.name)
    console.log("📍 Location:", response.data.location.name)
  } else {
    console.error("❌ Error al obtener personaje:", response.error.message)
  }
}

const arg = process.argv
const id = Number(arg[2])

getCharacter(id)