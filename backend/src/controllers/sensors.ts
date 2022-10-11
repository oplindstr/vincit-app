import { Response } from 'express'
import ExtendedRequest from '../interfaces/extended_request'
import ISensorRepository from '../interfaces/sensor_repository'

const index = (req: ExtendedRequest, res: Response): void => {
  res.redirect('sensors/summary')
}

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
  res.send('Not yet implemented')
}

export default { index, summary, diff }
