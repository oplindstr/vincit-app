import ISensorService from '../../interfaces/sensor_service'
import { getSensorService } from '../../config/sensor_service_config'
import shutdownHandler from '../../helpers/shutdown'
import { sensorServiceInterval } from '../../config/constants'

/**
 * Run this file to start the continuosly running internal sensor data service
 */

const sensorService: ISensorService = getSensorService()

const interval = setInterval(sensorService.runDataTransfer, sensorServiceInterval)

shutdownHandler(() => clearInterval(interval))
