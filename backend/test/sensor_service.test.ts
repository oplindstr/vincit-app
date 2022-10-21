import db from './db/iot_db_test'
import { sensorService, sensorId } from './test_config'

afterAll(() => {
  db.close()
})

describe('Testing sensor service', () => {
  let externalData, data

  beforeAll(async () => {
    externalData = await sensorService.fetchData(sensorId)
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

  test('latest sensor data is saved correctly with the latest data service', async () => {
    await sensorService.saveLatestData(data)
    const latestData = await sensorService.getLatestData(data.id)
    expect(latestData.id).toEqual('iddqd')
    expect(latestData.time).toEqual(1666192148137)
    expect(latestData.value).toEqual(24.290440081297366)
  })

  test('sensor data is saved successfully', async () => {
    await sensorService.saveData(data)

    const sql = `SELECT *
      FROM datas
      WHERE id  = "${sensorId}"`

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

  test('whole service run is successful', async () => {
    sensorService.runService()
  })
})
