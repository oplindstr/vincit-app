import express, { Express, Response, NextFunction } from 'express'
import appConstants from './config/constants'
import getAppConfig from './config/app_config'
import sensorRouter from './routes/sensors'
import indexRouter from './routes'
import IAppConfig from './interfaces/app_config'
import ExtendedRequest from './interfaces/extended_request'

const startApp = (appConfig: IAppConfig): void => {
  const app: Express = express()
  const port: number = appConstants.port

  const applyConfig = (req: ExtendedRequest, res: Response, next: NextFunction): void => {
    req.config = appConfig
    next()
  }

  app.use('', indexRouter)
  app.use('/api/', applyConfig, sensorRouter)

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
  })
}

const appConfig = getAppConfig()

startApp(appConfig)
