import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: string | undefined = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  if (port != null) {
    return console.log(`Express is listening at http://localhost:${port}`)
  } else {
    return console.log('Port missing')
  }
})
