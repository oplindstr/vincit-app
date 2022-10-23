import axios from 'axios'
import MockExternalSensorService from './mock/mock_external_sensor_service'
import SensorRepository from '../src/repositories/sensor_repository'
import SensorService from '../src/services/sensor_service/sensor_service'
import LatestDataService from '../src/services/latest_data_service'
import db from './db/iot_db_test'

/**
 * Configure constants and application dependencies for tests
 */

let port: number = Number(process.env.TEST_PORT)

if (isNaN(port)) {
  port = 8081
}

const axiosInstance = axios.create({
  baseURL: `http://localhost:${port}/api/`
})

const sensorRepository = new SensorRepository(db)

const externalSensorService = new MockExternalSensorService()

// Initialize latest data service with an in-memory cache (persist = false)
const latestDataService = new LatestDataService('', false)

const sensorService = new SensorService(sensorRepository, externalSensorService, latestDataService)

const sensorId = 'iddqd'

export { port, axiosInstance, sensorRepository, sensorService, sensorId }
