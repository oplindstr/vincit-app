# Vincit sensor application

This is an application that uses a local database and an external data source to show sensor data. It offers an interface for fetching sensor data summary and a comparison between current city temperature and a given sensor using it's latest data. A continuously looping service, that fetches data from the external source and saves it to a local storage for quick access for the temperature comparison, as well as to the local database, can also be run.

The application was developed with NodeJS and TypeScript, and the web framework Express.

### Installation

This section explains how to run the application in your environment

* Clone the repository (and switch to the Development branch for now)
* Run the create_iot_db.py -file, which generates the local database. It is a Python file, so make sure you have it installed. Place the file in the backend folder.
* Go to the backend folder and install the application dependencies with "npm install". Make sure you have NodeJS and npm installed
* Set the application's environment variables. Create a file in the backend folder called ".env" and set the following variables:

* These you have to set yourself, there are no default values:
* * SQLITE_DATABASE_PATH: Path of the sqlite database file relative to the backend folder. If you placed the database file in the backend folder, the value "iot_db.sqlite" works
* * EXTERNAL_SENSOR_DATA_URL: URL for fetching sensor data from an external service. We use "http://dummy-sensors.azurewebsites.net/api/" here. Note that the value ends with "api/" here with the slash (/) as the final character
<br/>

*  These are optional if you are fine with the default values:
* *  SENSOR_SERVICE_INTERVAL: The interval in milliseconds with which the continuously running data service runs its operation. Default = 1000
* *  PORT: The port that the Express server listens to. Default = 8080
* *  TEST_PORT: The port that the Express server run with tests listens to. Default = 8081

```
SQLITE_DATABASE_PATH=iot_db.sqlite
EXTERNAL_SENSOR_DATA_URL=http://dummy-sensors.azurewebsites.net/api/
SENSOR_SERVICE_INTERVAL=1000
PORT=8080
TEST_PORT=8081
```

* Now you should be ready to run the application. The Express server is run with the command "npm start"
* The continuously running data service is designed to be run separately. Open another terminal and run it with the command "npm run sensor_service". The service fetches data for sensorId = "iddqd" only for now

* Here are some other npm commands:
* * npm run lint: Perform a linter check on the source code
* * npm run test: Run the application's tests. It produces a coverage report in the coverage folder
* * npm run dev: Run the application in development mode, which watches for code changes in real time.
<br/>

* Once the Express server is running, these are the available requests to the service for now:

```
http://localhost:8080/api/sensors/summary
http://localhost:8080/api/diff/{sensorId} (Only sensorId = "iddqd" will return anything for now)
```

### Testing the vincit-htmlapp -file

* Uncomment the following section in the backend/src/initialize_app.ts -file:

```
  const origin = 'null'

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', origin);
    next()
  })
```

* Without this, the application blocks the request with the following error message:

```
Access to XMLHttpRequest at 'http://localhost:8080/api/diff/iddqd' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

* If you are opening the vincit-htmlapp -file straight in a browser, keep origin = 'null'. If you are serving it in a server, set origin as the server's address (for example http://localhost:8081)

### Missing or incomplete features

* The application would benefit from more thorough response handling, for example, setting proper http statuses in various situations and clearer error or other kinds of messages
* In a production environment, api keys would most likely be used
