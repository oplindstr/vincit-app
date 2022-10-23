import ISensorRepository from '../../interfaces/sensor_repository'
import ISensorService from '../../interfaces/sensor_service'
import SensorData from '../../models/sensor_data'
import ExternalSensorData from '../../models/external_sensor_data'
import IExternalSensorService from '../../interfaces/external_sensor_service'
import ILatestDataService from '../../interfaces/latest_data_service'

/**
 * Sensor service that can:
 * - Fetch external sensor data
 * - Convert external data into the format accepted by the repository
 * - Save and retrieve latest sensor data
 * - Run all of the above at once for the continuously running service
 * - Calculate temperature difference
 */
class SensorService implements ISensorService {
  private readonly sensorRepository: ISensorRepository
  private readonly externalSensorService: IExternalSensorService
  private readonly latestDataService: ILatestDataService

  constructor (sensorRepo: ISensorRepository, externalSensorService: IExternalSensorService, latestDataService: ILatestDataService) {
    this.sensorRepository = sensorRepo
    this.externalSensorService = externalSensorService
    this.latestDataService = latestDataService
  }

  fetchData = async (id: string): Promise<ExternalSensorData> => {
    const data = await this.externalSensorService.fetchData(id)
    return data
  }

  convertData = (externalData: ExternalSensorData): SensorData => {
    const data = {
      id: externalData.id,
      time: externalData.timestamp,
      value: externalData.data
    }
    return data
  }

  saveLatestData = async (data: SensorData): Promise<void> => {
    this.latestDataService.put(data.id, data)
  }

  getLatestData = async (id: string): Promise<SensorData> => {
    const data: SensorData = await this.latestDataService.get(id)
    return data
  }

  saveData = async (data: SensorData): Promise<void> => {
    await this.sensorRepository.save(data)
  }

  runDataTransfer = (): void => {
    // Fetch only data for id = iddqd for now. This could be extended to fetch data for more ids for example.
    this.fetchData('iddqd')
      .then((externalData: ExternalSensorData) => {
        const data: SensorData = this.convertData(externalData)
        this.saveLatestData(data)
          .catch((err) => console.log(err))
        this.saveData(data)
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getTemperatureDifference = async (id: string): Promise<number> => {
    const [currentWeatherData, latestSensorData] = await Promise.all([
      this.externalSensorService.fetchCurrentWeatherData(),
      this.getLatestData(id)
    ])

    if (currentWeatherData == null || latestSensorData == null) {
      return -1
    }

    const difference = Math.abs(currentWeatherData.temperature - latestSensorData.value)

    // Round to 2 decimals
    return Math.round(difference * 100) / 100
  }
}

export default SensorService
