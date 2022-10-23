import IAppDependencyConfig from './app_dependency_config'
import { Request } from 'express'

/**
 * Extension of Express' Request type for passing the application's dependencies to the controllers with each request
 */
interface ExtendedRequest extends Request {
  config: IAppDependencyConfig
}

export default ExtendedRequest
