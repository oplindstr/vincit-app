import sqlite3 from 'sqlite3'
import { sqliteDatabasePath } from '../../config/constants'

/**
 * This file initializes the sqlite database connection.
 */

// Make sure that the environment variable is configured correctly
// SQLITE_DATABASE_PATH: Path of the sqlite database file relative to the backend folder.
const db = new sqlite3.Database(sqliteDatabasePath, sqlite3.OPEN_READWRITE, (err) => {
  if (err != null) {
    console.error(`${err.message}, filename: ${sqliteDatabasePath}`)
  } else {
    console.log('Connected to the sensor sqlite database.')
  }
})

export default db
