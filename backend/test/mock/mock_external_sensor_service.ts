import IExternalSensorService from '../../src/interfaces/external_sensor_service'
import ExternalSensorData from '../../src/models/external_sensor_data'
import ExternalWeatherData from '../../src/models/external_weather_data'

class MockExternalSensorService implements IExternalSensorService {
  fetchData = async (id: string): Promise<ExternalSensorData> => {
    const data: ExternalSensorData = {
      id: 'iddqd',
      data: 24.290440081297366,
      timestamp: 1666192148137
    }
    return data
  }

  fetchCurrentWeatherData = async (): Promise<ExternalWeatherData> => {
    const data: ExternalWeatherData = {
      latitude: 60.192059,
      longitude: 24.945831,
      time: 1666293752,
      temperature: 4.84,
      units: 'si'
    }
    return data
  }
}

export default MockExternalSensorService
