import { queryWrapper } from '../helpers/sqlite'
import { Database } from 'sqlite3'
import ISensorRepository from '../interfaces/sensor_repository'

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
}

export default SensorRepository
