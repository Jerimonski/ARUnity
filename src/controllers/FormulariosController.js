import FormulariosService from "../services/FormulariosService.js"

class FormulariosController {
  async getAll(req, res) {
    const usuarios = await FormulariosService.getAll()
    res.json(usuarios)
  }

  async getChild(req, res) {
    const usuariosMenores = await FormulariosService.getChild()
    res.json(usuariosMenores)
  }

  async getYoungers(req, res) {
    const usuariosJovenes = await FormulariosService.getYoungers()
    res.json(usuariosJovenes)
  }

  async getAdults(req, res) {
    const usuariosAdultos = await FormulariosService.getAdults()
    res.json(usuariosAdultos)
  }

  async getOlds(req, res) {
    const usuariosViejos = await FormulariosService.getOlds()
    res.json(usuariosViejos)
  }

  async login(req, res) {
    const { correo, password } = req.body

    if (!correo || !password) {
      return res
        .status(400)
        .json({ mensaje: "Correo y contraseña son obligatorios" })
    }

    try {
      const result = await FormulariosService.login(correo, password)
      if (!result) {
        return res.status(401).json({ mensaje: "Credenciales Incorrectas" })
      }

      res.status(200).json(result)
    } catch (error) {
      console.log("Error en login:", error)
      res.status(500).json({ mensaje: "Error al intentar iniciar sesion" })
    }
  }

  async create(req, res) {
    try {
      const userDto = req.body
      const nuevoUsuario = await FormulariosService.create(userDto)
      res.status(201).json(nuevoUsuario)
    } catch (error) {
      console.error("Error creando usuario:", error)
      res.status(500).json({ mensaje: "Error al crear usuario" })
    }
  }
}

export default new FormulariosController()
