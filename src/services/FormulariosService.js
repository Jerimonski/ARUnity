import FormulariosDao from "../daos/FormulariosDao.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class FormulariosService {
  getAll() {
    return FormulariosDao.getAll()
  }

  getChild() {
    return FormulariosDao.getChild()
  }

  getYoungers() {
    return FormulariosDao.getYoungers()
  }

  getAdults() {
    return FormulariosDao.getAdults()
  }

  getOlds() {
    return FormulariosDao.getOlds()
  }

  async create(userDto) {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(userDto.password, saltRounds)

    userDto.password = hashedPassword

    return FormulariosDao.create(userDto)
  }

  async login(correo, password) {
    const usuario = await FormulariosDao.findByCorreo(correo)

    if (!usuario) {
      return null
    }

    const isMatch = await bcrypt.compare(password, usuario.password)
    if (!isMatch) {
      return null
    }

    const payload = {
      id: usuario.id,
      correo: usuario.correo,
      nombre: usuario.nombre,
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    })

    return { token, usuario: payload }
  }
}

export default new FormulariosService()
