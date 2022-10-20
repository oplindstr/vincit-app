import SensorData from '../models/sensor_data'
import ExternalSensorData from '../models/external_sensor_data'

interface ISensorService {
  fetchData: (id: string) => Promise<ExternalSensorData>
  convertData: (externalData: ExternalSensorData) => SensorData
  saveLatestData: (data: SensorData) => void
  saveData: (data: SensorData) => Promise<void>
  runService: () => void
}

export default ISensorService
