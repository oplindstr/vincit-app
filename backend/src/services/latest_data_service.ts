import cache from 'persistent-cache'
import ILatestDataService from '../interfaces/latest_data_service'
import SensorData from '../models/sensor_data'

class LatestDataService implements ILatestDataService {
  readonly storage

  constructor (path: string = './latest_data', persist: boolean = true) {
    this.storage = cache({
      base: path,
      name: 'latest_data_cache',
      persist
    })
  }

  get = async (id: string): Promise<SensorData> => {
    return await new Promise((resolve, reject) => {
      this.storage.get(id, (err, data: SensorData) => {
        if (err != null) {
          reject(err)
        }
        resolve(data)
      })
    })
  }

  put = async (id: string, data: SensorData): Promise<void> => {
    await this.storage.put(id, data, (err) => {
      if (err != null) {
        console.log(err)
      }
      console.log('Data saved successfully')
    })
  }
}

export default LatestDataService
