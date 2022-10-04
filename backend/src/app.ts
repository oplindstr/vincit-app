import express, { Express, Request, Response } from 'express'
import config from './config'

const app: Express = express()
const port: number = config.port

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
