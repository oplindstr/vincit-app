import ISensorRepository from '../interfaces/sensor_repository'
import SensorRepository from '../services/sensor_repository'
import db from '../db/sqlite/iot_db'

const sensorRepository = new SensorRepository(db)

const getSensorRepository = (): ISensorRepository => {
  return sensorRepository
}

export { getSensorRepository }
