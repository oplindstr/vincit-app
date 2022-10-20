import IExternalSensorService from '../interfaces/external_sensor_service'
import ExternalSensorData from '../models/external_sensor_data'
import axios from 'axios'

class ExternalSensorService implements IExternalSensorService {
  readonly apiUrl: string

  constructor (apiUrl: string) {
    this.apiUrl = apiUrl
  }

  fetchData = async (id: string): Promise<ExternalSensorData> => {
    const result = await axios.get(`${this.apiUrl}/sensor/${id}`)
    const data: ExternalSensorData = result.data
    return data
  }
}

export default ExternalSensorService
