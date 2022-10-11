import dotenv from 'dotenv'

dotenv.config()

let port: number = Number(process.env.PORT)

if (isNaN(port)) {
  port = 8080
}

const sqliteDatabasePath: string = String(process.env.SQLITE_DATABASE_PATH)

export default { port, sqliteDatabasePath }
