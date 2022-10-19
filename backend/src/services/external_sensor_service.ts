import IExternalSensorService from '../interfaces/external_sensor_service'
import ExternalSensorData from '../models/external_sensor_data'
import axios from 'axios'

class ExternalSensorService implements IExternalSensorService {
  readonly dataUrl: string

  constructor (dataUrl: string) {
    this.dataUrl = dataUrl
  }

  fetchData = async (): Promise<ExternalSensorData> => {
    const result = await axios.get(this.dataUrl)
    const data: ExternalSensorData = result.data
    return data
  }
}

export default ExternalSensorService
