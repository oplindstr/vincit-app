/**
 * Data format of the datas table in the iot_db database
 */
interface SensorData {
  id: string
  time: number
  value: number
}

export default SensorData
