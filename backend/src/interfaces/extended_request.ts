import IAppDependencyConfig from './app_dependency_config'
import { Request } from 'express'

interface ExtendedRequest extends Request {
  config: IAppDependencyConfig
}

export default ExtendedRequest
