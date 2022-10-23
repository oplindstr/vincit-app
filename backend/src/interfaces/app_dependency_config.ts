import ISensorRepository from './sensor_repository'
import ISensorService from '../interfaces/sensor_service'

/**
 * Interface for the object that is used for the application's dependency injection
 */
interface IAppDependencyConfig {
  sensorRepository: ISensorRepository
  sensorService: ISensorService
}

export default IAppDependencyConfig
