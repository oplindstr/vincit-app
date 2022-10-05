import db from '../db/sqlite/iot_db'

export const queryWrapper = async (sql: string): Promise<any[]> => {
  return await new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err != null) {
        reject(err)
      }
      resolve(rows)
    })
  })
}
