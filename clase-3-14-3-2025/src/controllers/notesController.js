// Recibir y responder al cliente
import express from "express"
import mongoose from "mongoose"
import { Note } from "../models/notesModel.js"

/**
 * Crea una nueva nota y la guarda en la base de datos.
 * @async
 * @function createNote
 * @module controllers/notesController
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 * @param {express.NextFunction} next - Función para pasar al siguiente middleware en caso de error.
 * @returns {Promise<void>} Responde con la nota creada en formato JSON.
 */
export const createNote = async (req, res, next) => {
  try {
    const { text } = req.body
    const newNote = new Note({ text })
    const savedNote = await newNote.save()
    res.status(201).json(savedNote)
  } catch (error) {
    next(error)
  }
}

/**
 * Obtiene todas las notas desde la base de datos.
 * @async
 * @function getNotes
 * @module controllers/notesController
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 * @param {express.NextFunction} next - Función para pasar al siguiente middleware en caso de error.
 * @returns {Promise<void>} Responde con una lista de todas las notas en formato JSON.
 */
export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find()
    res.json(notes)
  } catch (error) {
    next(error)
  }
}

/**
 * Obtiene una nota específica por su ID.
 * @async
 * @function getNotesById
 * @module controllers/notesController
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 * @param {express.NextFunction} next - Función para pasar al siguiente middleware en caso de error.
 * @returns {Promise<void>} Responde con la nota correspondiente al ID dado en formato JSON.
 * @throws {express.Response} 400 si el formato del ID es inválido, 404 si la nota no es encontrada.
 */
export const getNotesById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validar si el ID es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    next(error);
  }
};

/**
 * Actualiza una nota específica por su ID.
 * @async
 * @function updateNote
 * @module controllers/notesController
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 * @param {express.NextFunction} next - Función para pasar al siguiente middleware en caso de error.
 * @returns {Promise<void>} Responde con la nota actualizada en formato JSON.
 * @throws {express.Response} 400 si el formato del ID es inválido, 404 si la nota no es encontrada.
 */
export const updateNote = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    // Investigar cómo validar el cuerpo de la petición con Zod o express-validator

    const updatedNote = await Note.findByIdAndUpdate(id, body, { new: true })
    if (!updatedNote) res.status(404).json({ message: "Note not found" })

    res.json(updatedNote)
  } catch (error) {
    next(error)
  }
}

/**
 * Elimina una nota específica por su ID.
 * @async
 * @function deleteNote
 * @module controllers/notesController
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 * @param {express.NextFunction} next - Función para pasar al siguiente middleware en caso de error.
 * @returns {Promise<void>} Responde con la nota eliminada en formato JSON.
 * @throws {express.Response} 400 si el formato del ID es inválido, 404 si la nota no es encontrada.
 */
export const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    const deletedNote = await Note.findByIdAndDelete(id)
    if (!deletedNote) res.status(404).json({ message: "Note not found" })
    res.json(deletedNote)
  } catch (error) {
    next(error)
  }
}
