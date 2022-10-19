import axios from 'axios'

let port: number = Number(process.env.TEST_PORT)

if (isNaN(port)) {
  port = 8081
}

const axiosInstance = axios.create({
  baseURL: `http://localhost:${port}/api/`
})

export { port, axiosInstance }
