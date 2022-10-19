import IExternalSensorService from '../../src/interfaces/external_sensor_service'
import ExternalSensorData from '../../src/models/external_sensor_data'

class MockExternalSensorService implements IExternalSensorService {
  fetchData = async (): Promise<ExternalSensorData> => {
    const data: ExternalSensorData = {
      id: 'iddqd',
      data: 24.290440081297366,
      timestamp: 1666192148137
    }
    return data
  }
}

export default MockExternalSensorService
