var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchCharacter } from "./services/api.js";
function getCharacter(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchCharacter(id);
        // la promesa retorna dos posibles objetos dependiendo de su resultado
        // result -> si se resuelve éxitosamente
        // reject -> si se resuelve no éxitosamente
        if (response.success) {
            console.log("🧍 Nombre:", response.data.name);
            console.log("📍 Location:", response.data.location.name);
        }
        else {
            console.error("❌ Error al obtener personaje:", response.error.message);
        }
    });
}
getCharacter(1);
