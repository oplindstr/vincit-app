import initializeApp from '../src/initialize_app'
import SensorRepository from '../src/repositories/sensor_repository'
import db from './db/iot_db_test'
import { port, axiosInstance } from './test_config'

let server

beforeAll(() => {
  const appDependencyConfig = {
    sensorRepository: new SensorRepository(db)
  }
  
  const app = initializeApp(appDependencyConfig)

  server = app.listen(port)
});

afterAll(() => {
  server.close()
})

describe('Testing sensor data', () => {

  describe('Testing sensor summary', () => {
    let result, firstObject, secondObject

    beforeAll(async () => {
      result = await axiosInstance.get('sensors/summary')
      firstObject = result.data.sensors[0]
      secondObject = result.data.sensors[1]
    })

    test('data in the correct format is returned', () => {
      expect(firstObject.id).toBeDefined()
      expect(firstObject.count).toBeDefined()
      expect(firstObject.avgTemp).toBeDefined()
    })

    test('the amount of data per sensor is correct', () => {
      expect(secondObject.count).toEqual(2)
    })

    test('the average temperature is calculated and rounded correctly', () => {
      expect(secondObject.avgTemp).toEqual(18.32)
    })
  })

})