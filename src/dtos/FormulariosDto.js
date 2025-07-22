class FormulariosDto {
  constructor({
    nombre,
    password,
    edad,
    correo,
    pais,
    genero,
    fecha_registro,
  }) {
    this.nombre = nombre
    this.password = password
    this.edad = edad
    this.correo = correo
    this.pais = pais
    this.genero = genero
    this.fecha_registro = fecha_registro
  }
}

export default FormulariosDto
