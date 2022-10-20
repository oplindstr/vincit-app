import SensorData from '../models/sensor_data'

interface ILatestDataService {
  get: (id: string) => Promise<SensorData>
  put: (id: string, data: SensorData) => void
}

export default ILatestDataService
