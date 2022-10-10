import { Database } from 'sqlite3'

const queryWrapper = async (db: Database, sql: string): Promise<any[]> => {
  return await new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err != null) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

export { queryWrapper }
