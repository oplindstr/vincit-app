import ISensorRepository from './sensor_repository'
import ISensorService from '../interfaces/sensor_service'

interface IAppDependencyConfig {
  sensorRepository: ISensorRepository
  sensorService: ISensorService
}

export default IAppDependencyConfig
