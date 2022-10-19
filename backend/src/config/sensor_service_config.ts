import ISensorService from '../interfaces/sensor_service'
import SensorRepository from '../repositories/sensor_repository'
import SensorService from '../services/sensor_service/sensor_service'
import db from '../db/sqlite/iot_db'
import ExternalSensorService from '../services/external_sensor_service'

const intervalMilliseconds = 1000

const sensorRepository = new SensorRepository(db)

const dataUrl = 'http://dummy-sensors.azurewebsites.net/api/sensor/iddqd'
const externalSensorService = new ExternalSensorService(dataUrl)

const sensorService = new SensorService(sensorRepository, externalSensorService)

const getSensorService = (): ISensorService => {
  return sensorService
}

export { getSensorService, intervalMilliseconds }
