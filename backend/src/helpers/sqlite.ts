import { Database } from 'sqlite3'

/**
 * Helper functions to make it easier to perform sqlite queries elsewhere, since they have to be wrapped inside Promises to be run asynchronously
 */

const selectWrapper = async (db: Database, sql: string): Promise<any[]> => {
  return await new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err != null) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

const insertWrapper = async (db: Database, sql: string, data: any[]): Promise<void> => {
  return await new Promise((resolve, reject) => {
    db.run(sql, data, (err) => {
      if (err != null) {
        reject(err)
      }
      resolve()
    })
  })
}

export { selectWrapper, insertWrapper }
