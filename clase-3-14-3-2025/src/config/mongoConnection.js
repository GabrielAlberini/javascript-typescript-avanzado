// Conexión a la base de datos
import mongoose from "mongoose";
process.loadEnvFile()

const URI_DB = process.env.URI_DB

/**
 * Establece la conexión con la base de datos MongoDB utilizando Mongoose.
 * La función asíncrona intenta conectar con la URI proporcionada en las variables de entorno.
 * Si la conexión es exitosa, muestra un mensaje en consola; si falla, muestra un mensaje de error.
 * 
 * @async
 * @function connectDB
 * @module config/mongoConnection
 * @returns {Promise<void>} Responde con un mensaje de éxito o error en la consola.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB)
    console.log("Connection to mongodb successful")
  } catch (error) {
    console.log("Connection to mongodb was unsuccessful")
  }
}

export { connectDB }
