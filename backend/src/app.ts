import express, { Express } from 'express'
import config from './config'
import sensorRouter from './routes/sensors'
import indexRouter from './routes'

const app: Express = express()
const port: number = config.port

app.use('', indexRouter)
app.use('/api/', sensorRouter)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
