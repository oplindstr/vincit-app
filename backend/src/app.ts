import appConstants from './config/constants'
import getAppDependencyConfig from './config/app_dependency_config'
import initializeApp from './initialize_app'
import shutdownHandler from './helpers/shutdown'

const appDependencyConfig = getAppDependencyConfig()

const app = initializeApp(appDependencyConfig)
const port: number = appConstants.port

const server = app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})

server.on('connection', function (socket) {
  socket.setTimeout(20 * 1000)
})

shutdownHandler(() => server.close(() => {
  console.log('Server closed')
  process.exit(0)
}))
