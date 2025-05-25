import { Router } from "express"
import FilmController from "../controllers/filmControllers"

const filmRouter = Router()

// http://localhost:1234/api/films

filmRouter.get("/", FilmController.getAllFilms)
filmRouter.get("/:id", FilmController.getFilm)
filmRouter.post("/", FilmController.createNewFilm)
filmRouter.patch("/:id", FilmController.updateFilm)
filmRouter.delete("/:id", FilmController.deleteFilm)

export { filmRouter }