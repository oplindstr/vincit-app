import ExternalSensorData from '../models/external_sensor_data'
import ExternalWeatherData from '../models/external_weather_data'

/**
 * Interface for the Service that fetches external sensor data
 */
interface IExternalSensorService {
  fetchData: (id: string) => Promise<ExternalSensorData>
  fetchCurrentWeatherData: () => Promise<ExternalWeatherData>
}

export default IExternalSensorService
