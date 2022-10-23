
### Configuration

* Configuration of the application is handled in the src/config folder

* The constants -file collects environment variables
* PORT: The port that the Express server listens to. Default = 8080
* SQLITE_DATABASE_PATH: Path of the sqlite database file relative to the backend folder.
### Testing the vincit-htmlapp -file

* Uncomment the following section in the src/initialize_app.ts -file:

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