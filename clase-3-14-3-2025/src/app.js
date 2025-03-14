import express from "express"
import cors from "cors"
import { connectDB } from "./config/mongoConnection.js"
import { notesRouter } from "./routes/notesRoutes.js"
import { errorHandle } from "./middleware/errorHandler.js"

/**
 * @file Servidor Express principal de la aplicación.
 * @module server
 */

/**
 * Inicializa la aplicación Express.
 * @constant {express.Application} app - Instancia de la aplicación Express.
 */
const app = express()

/**
 * Middleware para permitir solicitudes CORS.
 */
app.use(cors())

/**
 * Middleware para parsear JSON en las solicitudes entrantes.
 */
app.use(express.json())

/**
 * Conecta la aplicación a la base de datos MongoDB.
 */
connectDB()

/**
 * Rutas principales de la API.
 * @name /api/notes
 * @function
 */
app.use("/api/notes", notesRouter)

/**
 * Middleware de manejo de errores centralizado.
 */
app.use(errorHandle)

export { app }
