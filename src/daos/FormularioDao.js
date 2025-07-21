import db from "../database/connection.js"

class FormulariosDao {
  async getAll() {
    const result = await db.query(`query`)
    return result.rows
  }

  async getChild(years) {
    // years < 13
    const result = await db.query(`another query`, [years])
    return result.rows[0]
  }

  async getYoungers(years) {
    // 13 < years < 30
    const result = await db.query(`another query`, [years])
    return result.rows[0]
  }

  async getAdults(years) {
    // 30 < years < 60
    const result = await db.query(`another query`, [years])
    return result.rows[0]
  }

  async getOlds(years) {
    // 60 < years
    const result = await db.query(`another query`, [years])
    return result.rows[0]
  }
}
