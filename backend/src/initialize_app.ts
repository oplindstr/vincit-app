import express, { Express, Response, NextFunction } from 'express'
import sensorRouter from './routes/sensors'
import IAppDependencyConfig from './interfaces/app_dependency_config'
import ExtendedRequest from './interfaces/extended_request'
import helmet from 'helmet'

/**
 * Function for initializing the Express server
 */
const initializeApp = (appConfig: IAppDependencyConfig): Express => {
  const app: Express = express()

  // Middleware to pass app dependencies with each request for controllers to use
  const applyConfig = (req: ExtendedRequest, res: Response, next: NextFunction): void => {
    req.config = appConfig
    next()
  }

  /*
  // Uncomment this when testing the vincit-htmlapp -file. Replace origin if running the html -file in a server, or keep it null when just opening the file in a browser
  const origin = 'null'

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', origin);
    next()
  })
  */

  app.use(helmet())

  app.use('/api/', applyConfig, sensorRouter)

  return app
}

export default initializeApp
