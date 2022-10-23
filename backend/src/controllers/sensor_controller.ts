import { Response } from 'express'
import ExtendedRequest from '../interfaces/extended_request'
import ISensorRepository from '../interfaces/sensor_repository'
import ISensorService from '../interfaces/sensor_service'

const summary = (req: ExtendedRequest, res: Response): void => {
  const sensorRepository: ISensorRepository = req.config.sensorRepository

  sensorRepository.getSummary()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

const diff = (req: ExtendedRequest, res: Response): void => {
  const sensorService: ISensorService = req.config.sensorService

  sensorService.getTemperatureDifference(req.params.sensorId)
    .then((difference: number) => {
      if (difference < 0) {
        res.send('Not Found')
      } else {
        const resJson = { differenceInCelsius: difference }
        res.send(resJson)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export default { summary, diff }
