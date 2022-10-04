import dotenv from 'dotenv'

dotenv.config()

let port: number = Number(process.env.PORT)

if (isNaN(port)) {
  port = 8080
}

export default { port }
