import { queryWrapper } from '../helpers/sqlite'

export const getSummary = async (): Promise<any> => {
  const sql = `Select id, count(*) as count, round(avg(value),2) as avgTemp 
               from datas 
               group by id`

  const rows = await queryWrapper(sql)

  return { sensors: rows }
}
