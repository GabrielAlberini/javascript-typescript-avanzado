// import { fetchCharacter } from "./services/api";

// async function getCharacter(id: number) {
//   const response = await fetchCharacter(id)

//   // la promesa retorna dos posibles objetos dependiendo de su resultado
//   // result -> si se resuelve éxitosamente
//   // reject -> si se resuelve no éxitosamente

//   if (response.success) {
//     console.log("🧍 Nombre:", response.data.name)
//     console.log("📍 Location:", response.data.location.name)
//   } else {
//     console.error("❌ Error al obtener personaje:", response.error.message)
//   }
// }

// getCharacter(1)