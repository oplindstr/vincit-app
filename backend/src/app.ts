import getAppDependencyConfig from './config/app_dependency_config'
import initializeApp from './initialize_app'
import shutdownHandler from './helpers/shutdown'
import { port } from './config/constants'

/**
 * Run this file to start the Express server
 */

const appDependencyConfig = getAppDependencyConfig()

// Initialize the Express server and inject dependencies
const app = initializeApp(appDependencyConfig)

const server = app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})

// Watch for process exit signals and shut the server down gracefully
shutdownHandler(() => server.close(() => {
  console.log('Server closed')
}))
