import sqlite3 from 'sqlite3'
import config from '../../config/constants'

const db = new sqlite3.Database(config.sqliteDatabasePath, sqlite3.OPEN_READWRITE, (err) => {
  if (err != null) {
    console.error(`${err.message}, filename: ${config.sqliteDatabasePath}`)
  } else {
    console.log('Connected to the sensor sqlite database.')
  }
})

export default db
