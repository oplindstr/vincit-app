/**
 * Data format of external data fetched from /api/sensor/{sensorId}
 */
interface ExternalSensorData {
  id: string
  data: number
  timestamp: number
}

export default ExternalSensorData
