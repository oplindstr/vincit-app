import ISensorRepository from '../interfaces/sensor_repository'
import SensorRepository from '../repositories/sensor_repository'
import db from '../db/sqlite/iot_db'

/**
 * This file is used to select the sensor repository implementation that the application uses. Currently, a sensor repository class with an injected database dependency is used.
 */
const sensorRepository = new SensorRepository(db)

const getSensorRepository = (): ISensorRepository => {
  return sensorRepository
}

export { getSensorRepository }
