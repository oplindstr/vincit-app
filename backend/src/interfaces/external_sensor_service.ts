import ExternalSensorData from '../models/external_sensor_data'
import ExternalWeatherData from '../models/external_weather_data'

interface IExternalSensorService {
  fetchData: (id: string) => Promise<ExternalSensorData>
  fetchCurrentWeatherData: () => Promise<ExternalWeatherData>
}

export default IExternalSensorService
