import ExternalSensorData from '../models/external_sensor_data'

interface IExternalSensorService {
  fetchData: (id: string) => Promise<ExternalSensorData>
}

export default IExternalSensorService
