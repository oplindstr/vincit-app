import { Request, Response } from 'express'

const index = (req: Request, res: Response): void => {
  res.redirect('sensors/summary')
}

const summary = (req: Request, res: Response): void => {
  res.send('Not yet implemented')
}

const diff = (req: Request, res: Response): void => {
  res.send('Not yet implemented')
}

export default { index, summary, diff }
