import IAppConfig from '../interfaces/app_dependency_config'
import { getSensorRepository } from './sensor_repository_config'
import { getSensorService } from './sensor_service_config'

const getAppDependencyConfig = (): IAppConfig => {
  const sensorRepository = getSensorRepository()
  const sensorService = getSensorService()

  return {
    sensorRepository,
    sensorService
  }
}

export default getAppDependencyConfig
