import { insertWrapper, selectWrapper } from '../helpers/sqlite'
import { Database } from 'sqlite3'
import ISensorRepository from '../interfaces/sensor_repository'
import SensorData from '../models/sensor_data'

class SensorRepository implements ISensorRepository {
  readonly _db: Database

  constructor (db: Database) {
    this._db = db
  }

  getSummary = async (): Promise<any> => {
    const sql = `Select id, count(*) as count, round(avg(value),2) as avgTemp
                  from datas
                  group by id`

    const rows = await selectWrapper(this._db, sql)

    return { sensors: rows }
  }

  save = async (data: SensorData): Promise<any> => {
    const sql = 'Insert into datas (id, time, value) values (?, ?, ?)'
    const { id, time, value } = data
    const insertData = [id, time, value]

    await insertWrapper(this._db, sql, insertData)
  }
}

export default SensorRepository
