import ExternalSensorData from '../models/external_sensor_data'

interface IExternalSensorService {
  fetchData: () => Promise<ExternalSensorData>
}

export default IExternalSensorService
