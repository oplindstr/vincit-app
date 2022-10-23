import dotenv from 'dotenv'

/**
 * This file collects the environment variables and exports them for other components to use
 * PORT: The port that the Express server listens to. Default = 8080
 * SQLITE_DATABASE_PATH: Path of the sqlite database file relative to the backend folder.
 * SENSOR_SERVICE_INTERVAL: Interval in milliseconds with which the continuously running sensor service performs its operation. Default = 1000
 * EXTERNAL_SENSOR_DATA_URL: URL from where external sensor data is fetched. Use format "http(s)://domain/api", ending with path prefix "/api"
 */

dotenv.config()

let port: number = Number(process.env.PORT)

if (isNaN(port)) {
  port = 8080
}

const sqliteDatabasePath: string = String(process.env.SQLITE_DATABASE_PATH)

let sensorServiceInterval: number = Number(process.env.SENSOR_SERVICE_INTERVAL)

if (isNaN(sensorServiceInterval)) {
  sensorServiceInterval = 1000
}

const externalSensorDataUrl: string = String(process.env.EXTERNAL_SENSOR_DATA_URL)

export { port, sqliteDatabasePath, sensorServiceInterval, externalSensorDataUrl }
