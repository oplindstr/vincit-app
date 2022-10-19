import ISensorService from '../../interfaces/sensor_service'
import { getSensorService, intervalMilliseconds } from '../../config/sensor_service_config'
import SensorData from '../../models/sensor_data'
import shutdownHandler from '../../helpers/shutdown'
import ExternalSensorData from '../../models/external_sensor_data'

const sensorService: ISensorService = getSensorService()

const serviceLoop = (): void => {
  sensorService.fetchData()
    .then(async (externalData: ExternalSensorData) => {
      const data: SensorData = sensorService.convertData(externalData)
      // sensorService.saveLocal(data)
      await sensorService.saveData(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

const interval = setInterval(serviceLoop, intervalMilliseconds)

shutdownHandler(() => clearInterval(interval))
