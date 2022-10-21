import express, { Express, Response, NextFunction } from 'express'
import sensorRouter from './routes/sensors'
import indexRouter from './routes'
import IAppDependencyConfig from './interfaces/app_dependency_config'
import ExtendedRequest from './interfaces/extended_request'
import helmet from 'helmet'

const initializeApp = (appConfig: IAppDependencyConfig): Express => {
  const app: Express = express()

  const applyConfig = (req: ExtendedRequest, res: Response, next: NextFunction): void => {
    req.config = appConfig
    next()
  }

  /*
  Uncomment this when testing the vincit-htmlapp -file. Replace origin if running the html -file in a server, or keep it null when just opening the file in a browser
  const origin = 'null'

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', origin);
    next()
  })
  */

  app.use(helmet())

  app.use('', indexRouter)
  app.use('/api/', applyConfig, sensorRouter)

  return app
}

export default initializeApp
