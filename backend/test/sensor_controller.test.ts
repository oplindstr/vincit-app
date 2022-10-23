import initializeApp from '../src/initialize_app'
import db from './db/iot_db_test'
import { port, axiosInstance, sensorRepository, sensorService, sensorId } from './test_config'

/**
 * Test for sensor controller. The Express server is run normally, but with different dependencies
 */
let server

beforeAll(() => {
  const appDependencyConfig = {
    sensorRepository,
    sensorService
  }

  const app = initializeApp(appDependencyConfig)

  server = app.listen(port)
})

afterAll(() => {
  db.close()
  server.close()
})

describe('Testing sensor controller', () => {
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
      expect(Object.keys(firstObject).length).toEqual(3)
    })

    test('the amount of data per sensor is correct', () => {
      expect(secondObject.count).toEqual(2)
    })

    test('the average temperature is calculated and rounded correctly', () => {
      expect(secondObject.avgTemp).toEqual(18.32)
    })
  })

  describe('Testing temperature difference', () => {
    let result, resultJson

    beforeAll(async () => {
      const externalData = await sensorService.fetchData(sensorId)
      const data = sensorService.convertData(externalData)
      await sensorService.saveLatestData(data)
      result = await axiosInstance.get(`diff/${sensorId}`)
      resultJson = result.data
    })

    test('The temperature difference returns data in the correct format', () => {
      expect(resultJson.differenceInCelsius).toBeDefined()
      expect(Object.keys(resultJson).length).toEqual(1)
    })

    test('The temperature difference returns the correct difference', () => {
      expect(resultJson.differenceInCelsius).toEqual(19.45)
    })

    test('Difference returns "Not found" when data is not found on given sensor', async () => {
      result = await axiosInstance.get('diff/iddq')
      expect(result.data).toEqual('Not Found')
    })
  })
})
