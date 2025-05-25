import mongoose from "mongoose"

process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectMongodb = async () => {
  try {
    await mongoose.connect(URI_DB)
    console.log("✅ Conexión con la base de datos éxitosa")
  } catch (error) {
    console.log("🛑 Conexión con la base de datos rechazada")
  }
}

export { connectMongodb }