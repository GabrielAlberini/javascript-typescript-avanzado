import express from "express"

/**
 * Middleware encargado de manejar los errores.
 * Si ocurre un error a nivel de servidor, responde con un mensaje de error.
 * 
 * @async
 * @function errorHandle
 * @module middleware/errorHandler
 * @param {Error} err - El error que se ha lanzado.
 * @param {express.Request} req - Objeto de solicitud de Express.
 * @param {express.Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Responde con un error 500 (Internal Server Error) y un mensaje genérico.
 */
export const errorHandle = (err, req, res) => {
  console.error(err)
  res.status(500).json({ message: "Server error" })
}
