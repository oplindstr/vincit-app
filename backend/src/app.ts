import appConstants from './config/constants'
import getAppDependencyConfig from './config/app_dependency_config'
import initializeApp from './initialize_app'

const appDependencyConfig = getAppDependencyConfig()

const app = initializeApp(appDependencyConfig)
const port: number = appConstants.port

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
