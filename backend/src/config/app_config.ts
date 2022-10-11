import IAppConfig from '../interfaces/app_config'
import { getSensorRepository } from './sensor_repository_config'

const getAppConfig = (): IAppConfig => {
  return {
    sensorRepository: getSensorRepository()
  }
}

export default getAppConfig
