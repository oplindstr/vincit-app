import sqlite3, { Database } from 'sqlite3'

/**
 * This file is used to initialize an in-memory sqlite database for testing
 */
const initializeData = (db: Database): void => {
  // Create the datas table and insert data for testing

  let sql = `CREATE TABLE datas (
    "id" TEXT,
    "time" TIMESTAMP,
    "value" REAL
  )`

  db.exec(sql, (err) => {
    if (err != null) {
      console.log(err.message)
    }
  })

  // Insert data for testing
  sql = `Insert into datas (id, time, value) 
    values ("abba", null, 20), 
    ("baab", null, 18), 
    ("baab", null, 18.63)`

  db.run(sql, (err) => {
    if (err != null) {
      console.log(err.message)
    }
  })
}

const db = new sqlite3.Database(':memory:', (err) => {
  if (err != null) {
    return console.error(err.message)
  }
  initializeData(db)
})

export default db
