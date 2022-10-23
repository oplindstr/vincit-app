import express from 'express'
import sensorController from '../controllers/sensor_controller'

const router = express.Router()

router.get('/sensors/summary', sensorController.summary)

// The whole URL path here would be 'api/sensors/diff/iddqd', but the example html file requires 'api/diff/iddqd'.
// For this reason we also omit the common URL prefix 'sensors' for this route file.
router.get('/diff/:sensorId', sensorController.diff)

export default router
