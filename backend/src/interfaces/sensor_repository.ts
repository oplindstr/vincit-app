import SensorData from '../models/sensor_data'

interface ISensorRepository {
  getSummary: () => Promise<any[]>
  save: (data: SensorData) => Promise<any>
}

export default ISensorRepository
