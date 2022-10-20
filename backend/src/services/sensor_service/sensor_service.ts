import ISensorRepository from '../../interfaces/sensor_repository'
import ISensorService from '../../interfaces/sensor_service'
import SensorData from '../../models/sensor_data'
import ExternalSensorData from '../../models/external_sensor_data'
import IExternalSensorService from '../../interfaces/external_sensor_service'
import ILatestDataService from '../../interfaces/latest_data_service'

class SensorService implements ISensorService {
  readonly sensorRepository: ISensorRepository
  readonly externalSensorService: IExternalSensorService
  readonly latestDataService: ILatestDataService

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

  runService = (): void => {
    // Fetch only data for id = iddqd. This could be extended to fetch data for more ids.
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
}

export default SensorService
