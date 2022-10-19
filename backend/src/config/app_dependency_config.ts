import IAppConfig from '../interfaces/app_dependency_config'
import { getSensorRepository } from './sensor_repository_config'

const getAppDependencyConfig = (): IAppConfig => {
  const sensorRepository = getSensorRepository()

  return {
    sensorRepository
  }
}

export default getAppDependencyConfig
