import dotenv from "dotenv"
import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())

/*
carga las rutas
 */

app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
)

/*
añade un prefijo a la ruta
 */

app.use("/formularios", formularioRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Servidor ao vivo en porto ${PORT}`)
})
