import ISensorService from '../interfaces/sensor_service'
import SensorService from '../services/sensor_service/sensor_service'
import ExternalSensorService from '../services/external_sensor_service'
import LatestDataService from '../services/latest_data_service'
import ISensorRepository from '../interfaces/sensor_repository'
import { getSensorRepository } from './sensor_repository_config'
import { externalSensorDataUrl } from './constants'

/**
 * This file is used to select the sensor service implementation that the application uses.
 * The sensor service object itself is given three separate dependencies:
 * - Sensor Repository, interface to the database.
 * - Service that fetches the external sensor data.
 * - Service that is used to store and retrieve the latest data for each sensor
 */

const sensorRepository: ISensorRepository = getSensorRepository()

const externalSensorService = new ExternalSensorService(externalSensorDataUrl)

const latestDataService = new LatestDataService()

const sensorService = new SensorService(sensorRepository, externalSensorService, latestDataService)

const getSensorService = (): ISensorService => {
  return sensorService
}

export { getSensorService }
