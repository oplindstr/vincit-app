import SensorData from '../models/sensor_data'
import ExternalSensorData from '../models/external_sensor_data'

/**
 * Interface for sensor service that can:
 * - Fetch external sensor data
 * - Convert external data into the format accepted by the repository
 * - Save and retrieve latest sensor data
 * - Run all of the above at once for the continuously running service
 * - Calculate temperature difference
 */
interface ISensorService {
  fetchData: (id: string) => Promise<ExternalSensorData>
  convertData: (externalData: ExternalSensorData) => SensorData
  saveLatestData: (data: SensorData) => void
  getLatestData: (id: string) => Promise<SensorData>
  saveData: (data: SensorData) => Promise<void>
  runDataTransfer: () => void
  getTemperatureDifference: (id: string) => Promise<number>
}

export default ISensorService
