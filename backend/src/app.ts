import express, { Express, Request, Response } from 'express'
import config from './config'
import { getSummary } from './services/sensor_service'

const app: Express = express()
const port: number = config.port

app.get('/api/sensors/summary', (req: Request, res: Response) => {
  getSummary()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
