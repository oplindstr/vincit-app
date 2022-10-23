import SensorData from '../models/sensor_data'

/**
 * Interface for service that saves and retrieves latest sensor data
 */
interface ILatestDataService {
  get: (id: string) => Promise<SensorData>
  put: (id: string, data: SensorData) => void
}

export default ILatestDataService
