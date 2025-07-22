import db from "../database/connection.js"

class FormulariosDao {
  async getAll() {
    const result = await db.query(`SELECT * FROM usuarios`)
    return result.rows
  }

  async getChild() {
    // years <= 12
    const result = await db.query(`SELECT * FROM usuarios WHERE edad <= 12`)
    return result.rows
  }

  async getYoungers() {
    // 13 <= years <= 29
    const result = await db.query(
      `SELECT * FROM usuarios WHERE edad BETWEEN 13 AND 29`
    )
    return result.rows
  }

  async getAdults() {
    // 30 <= years <= 59
    const result = await db.query(
      `SELECT * FROM usuarios WHERE edad BETWEEN 30 AND 59`
    )
    return result.rows
  }

  async getOlds() {
    // 60 < years
    const result = await db.query(`SELECT * FROM usuarios WHERE edad >= 60`)
    return result.rows
  }

  async create(userDto) {
    const result = await db.query(
      `INSERT INTO usuarios (nombre, password, edad, correo, pais, genero, fecha_registro)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        userDto.nombre,
        userDto.password,
        userDto.edad,
        userDto.correo,
        userDto.pais,
        userDto.genero,
        userDto.fecha_registro,
      ]
    )
    return result.rows[0]
  }

  async findByCorreo(correo) {
    const result = await db.query(`SELECT * FROM usuarios WHERE correo = $1`, [
      correo,
    ])
    return result.rows[0]
  }

  async create(userDto) {
    const result = await db.query(
      `INSERT INTO usuarios (nombre, password, edad, correo, pais, genero, fecha_registro)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        userDto.nombre,
        userDto.password,
        userDto.edad,
        userDto.correo,
        userDto.pais,
        userDto.genero,
        userDto.fecha_registro,
      ]
    )
    return result.rows[0]
  }
}

export default new FormulariosDao()
