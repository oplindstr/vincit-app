import IAppConfig from '../interfaces/app_dependency_config'
import { getSensorRepository } from './sensor_repository_config'
import { getSensorService } from './sensor_service_config'

/**
 * The application uses dependency injection to inject class implementation dependencies on startup. This way, when a totally new service implementation is needed,
   or a database is switched into another, it is enough to modify these configuration files, and not the controllers for example.
 * This function combines the application dependencies into a single object. Configure each dependency separately in the other config files.
 */
const getAppDependencyConfig = (): IAppConfig => {
  const sensorRepository = getSensorRepository()
  const sensorService = getSensorService()

  return {
    sensorRepository,
    sensorService
  }
}

export default getAppDependencyConfig
