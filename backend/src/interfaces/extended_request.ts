import IAppConfig from './app_config'
import { Request } from 'express'

interface ExtendedRequest extends Request {
  config: IAppConfig
}

export default ExtendedRequest
