import { Request, Response } from 'express'
import { getSensorRepository } from '../config/sensor_repository_injection'
import ISensorRepository from '../interfaces/sensor_repository'

const index = (req: Request, res: Response): void => {
  res.redirect('sensors/summary')
}

const summary = (req: Request, res: Response): void => {
  const sensorRepository: ISensorRepository = getSensorRepository()

  sensorRepository.getSummary()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

const diff = (req: Request, res: Response): void => {
  res.send('Not yet implemented')
}

export default { index, summary, diff }
