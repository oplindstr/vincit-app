import { queryWrapper } from '../helpers/sqlite'
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

    const rows = await queryWrapper(this._db, sql)

    return { sensors: rows }
  }

  save = async (data: SensorData): Promise<any> => {
    const sql = 'Insert into datas (id, time, value) values (?, ?, ?)'
    const { id, time, value } = data

    this._db.run(sql, [id, time, value], (err) => {
      if (err != null) {
        console.log(err.message)
        return
      }
      console.log('A row has been inserted')
    })
  }
}

export default SensorRepository
