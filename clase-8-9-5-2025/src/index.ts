import express from "express"
import { connectMongodb } from "./config/mongo"
import { filmRouter } from "./routes/filmrouter"
import { authRouter } from "./routes/authRouter"
import { authMiddleware } from "./middlewares/authMiddleware"

process.loadEnvFile()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use("/api/auth", authRouter)

app.use("/api/films", authMiddleware, filmRouter)

app.listen(PORT, () => {
  console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`)
  connectMongodb()
})
