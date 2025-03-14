// La declaración del esquema o modelo de una nota para MongoDB
import mongoose from "mongoose";

/**
 * Esquema para la colección de notas en MongoDB.
 * Define la estructura de los documentos de una nota.
 * 
 * @typedef {Object} Note
 * @property {string} text - El contenido de la nota.
 * @property {boolean} done - El estado de la nota (si está completada o no).
 * @property {Date} createdAt - Fecha y hora de creación de la nota (generada automáticamente por MongoDB).
 * @property {Date} updatedAt - Fecha y hora de la última actualización de la nota (generada automáticamente por MongoDB).
 */

/**
 * Esquema de Mongoose para una nota.
 * @type {mongoose.Schema}
 */
const noteSchema = mongoose.Schema({
  text: { type: String, required: true }, // Contenido de la nota, obligatorio.
  done: { type: Boolean, default: false } // Estado de la nota, falso por defecto.
},
  { timestamps: true, versionKey: false } // Añadir timestamps automáticamente y desactivar versionKey.
);

/**
 * Modelo de Mongoose para la colección de notas.
 * Representa el modelo que se utilizará para interactuar con la colección "notes" en MongoDB.
 * 
 * @type {mongoose.Model<Note>}
 */
const Note = mongoose.model("Note", noteSchema);

export { Note };
