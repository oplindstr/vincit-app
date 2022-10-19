import db from './db/iot_db_test'
import MockExternalSensorService from './mock/mock_external_sensor_service'
import SensorRepository from '../src/repositories/sensor_repository'
import SensorService from '../src/services/sensor_service/sensor_service'

let sensorService

beforeAll(() => {
  const sensorRepository = new SensorRepository(db)

  const externalSensorService = new MockExternalSensorService()

  sensorService = new SensorService(sensorRepository, externalSensorService)
})

afterAll(() => {
  db.close()
})

describe('Testing sensor service', () => {
  let externalData, data

  beforeAll(async () => {
    externalData = await sensorService.fetchData()
    data = sensorService.convertData(externalData)
  })

  test('external sensor service returns data in the correct format', () => {
    expect(externalData.id).toBeDefined()
    expect(externalData.data).toBeDefined()
    expect(externalData.timestamp).toBeDefined()
    expect(Object.keys(externalData).length).toEqual(3)
  })

  test('sensor data is converted correctly', () => {
    expect(data.id).toBeDefined()
    expect(data.time).toBeDefined()
    expect(data.value).toBeDefined()
    expect(Object.keys(data).length).toEqual(3)
  })

  test('sensor data is saved successfully', async () => {
    await sensorService.saveData(data)

    const sql = `SELECT *
      FROM datas
      WHERE id  = "iddqd"`

    await new Promise((resolve, reject) => {
      db.get(sql, (err, row) => {
        if (err != null) {
          console.log(err.message)
          reject(err)
        }
        expect(row.id).toEqual('iddqd')
        expect(row.time).toEqual(1666192148137)
        expect(row.value).toEqual(24.290440081297366)
        resolve(row)
      })
    })
  })
})
