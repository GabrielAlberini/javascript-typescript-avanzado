import express, { Router } from "express"
import { createNote, deleteNote, getNotes, getNotesById, updateNote } from "../controllers/notesController.js"

/**
 * @file Define las rutas para las notas.
 * @module routes/notesRoutes
 */

const notesRouter = Router()

/**
 * Obtiene todas las notas.
 * @name GET /api/notes
 * @function
 * @memberof module:routes/notesRoutes
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 */
notesRouter.get("/", getNotes)

/**
 * Obtiene una nota por su ID.
 * @name GET /api/notes/:id
 * @function
 * @memberof module:routes/notesRoutes
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 */
notesRouter.get("/:id", getNotesById)

/**
 * Actualiza parcialmente una nota por su ID.
 * @name PATCH /api/notes/:id
 * @function
 * @memberof module:routes/notesRoutes
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 * @description Utiliza `PATCH` para modificar parcialmente una nota.  
 * Si se desea actualizar toda la nota, se recomienda `PUT`.
 */
notesRouter.patch("/:id", updateNote)

/**
 * Elimina una nota por su ID.
 * @name DELETE /api/notes/:id
 * @function
 * @memberof module:routes/notesRoutes
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 */
notesRouter.delete("/:id", deleteNote)

/**
 * Crea una nueva nota.
 * @name POST /api/notes
 * @function
 * @memberof module:routes/notesRoutes
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 */
notesRouter.post("/", createNote)

export { notesRouter }
