import ISensorRepository from '../../interfaces/sensor_repository'
import ISensorService from '../../interfaces/sensor_service'
import SensorData from '../../models/sensor_data'
import ExternalSensorData from '../../models/external_sensor_data'
import IExternalSensorService from '../../interfaces/external_sensor_service'

class SensorService implements ISensorService {
  readonly sensorRepository: ISensorRepository
  readonly externalSensorService: IExternalSensorService

  constructor (sensorRepo: ISensorRepository, externalSensorService: IExternalSensorService) {
    this.sensorRepository = sensorRepo
    this.externalSensorService = externalSensorService
  }

  fetchData = async (): Promise<ExternalSensorData> => {
    const data = await this.externalSensorService.fetchData()
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

  saveData = async (data: SensorData): Promise<void> => {
    console.log(data)
    await this.sensorRepository.save(data)
    console.log('saved')
  }
}

export default SensorService
