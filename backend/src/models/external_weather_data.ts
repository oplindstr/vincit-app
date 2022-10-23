/**
 * Data format of weather data fetched from /api/weather
 */
interface ExternalWeatherData {
  latitude: number
  longitude: number
  temperature: number
  time: number
  units: string
}

export default ExternalWeatherData
