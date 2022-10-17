import IAppConfig from '../interfaces/app_dependency_config'
import SensorService from '../services/sensor_service'
import { getSensorRepository } from './sensor_repository_config'

const getAppDependencyConfig = (): IAppConfig => {
  const sensorRepository = getSensorRepository()
  const sensorService = new SensorService(sensorRepository)

  return {
    sensorRepository: sensorRepository,
    sensorService: sensorService
  }
}

export default getAppDependencyConfig
