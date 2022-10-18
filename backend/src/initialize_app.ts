import express, { Express, Response, NextFunction } from 'express'
import sensorRouter from './routes/sensors'
import indexRouter from './routes'
import IAppDependencyConfig from './interfaces/app_dependency_config'
import ExtendedRequest from './interfaces/extended_request'

const initializeApp = (appConfig: IAppDependencyConfig): Express => {
  const app: Express = express()

  const applyConfig = (req: ExtendedRequest, res: Response, next: NextFunction): void => {
    req.config = appConfig
    next()
  }

  app.use('', indexRouter)
  app.use('/api/', applyConfig, sensorRouter)

  return app
}

export default initializeApp