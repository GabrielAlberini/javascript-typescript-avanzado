import { app } from "./app.js";
process.loadEnvFile()

const PORT = process.env.PORT

/**
 * Inicia el servidor Express y lo pone en escucha en el puerto definido en las variables de entorno.
 * Al arrancar, se muestra un mensaje en la consola indicando que el servidor está en funcionamiento.
 * 
 * @function
 * @module server
 * @returns {void}
 */
app.listen(PORT, () => {
  console.log("Server up on port http://localhost:" + PORT)
})
