import ISensorService from '../../interfaces/sensor_service'
import { getSensorService, intervalMilliseconds } from '../../config/sensor_service_config'
import shutdownHandler from '../../helpers/shutdown'

const sensorService: ISensorService = getSensorService()

const interval = setInterval(sensorService.runService, intervalMilliseconds)

shutdownHandler(() => clearInterval(interval))
