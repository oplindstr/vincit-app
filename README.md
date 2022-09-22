# Vincit Application

Test's purpose it to create a Backend service that returns sensor data from the database. 

* Completing this test should take 5 to 10 hours, but it is up to you how much time you want to use
* Use a language that you have a good proficiency in
    * Interviewers are selected based on your technology choice
* It is recommended not to use techniques and/or technologies that you are not familiar with
    * It won't look good in the interview if you use e.g. language features that you really aren't familiar with
* We can also decide not to continue to technical interview based on this test
    * But don't worry if that happens, we will give you some pointers and maybe you will apply again in some years
    * We just try not to waste anyones time as sometimes you can immediately notice that technical level is not at the level we require
    * TIP! Do not return basic CRUD app, we are expecting more from you
* There is no right answers for these tasks. We just want to see what kind of solutions you come up with  

#### To get started

1. Select technology you want to use
    * Node, Java, Scala, Python, C#, F#, Clojure
    * If you want use something that is not in the list, ask first
1. Reply to the email and tell us your technology choice
1. Execute `create_iot_db.py`
    * By default script creates 4 sensors with each 12,5M rows of data
    * Execution will take many minutes and database size is ~3GB  
    * If you have some good reason why you can't execute a python file, we can provide you a download link for the database      
1. Create your application

#### Functionality

Service should have these functionalities:

##### Sensor data summary

1. Get data from database table (_datas_)
1. Count amount of data per sensor and average temperature for each sensor
1. Return data in JSON format

```json
{ 
    "sensors" : [ 
        { "id" : "abba", "count" : 12500000, "avgTemp" : 21.43 },
        { "id" : "acdc", "count" : 12500000, "avgTemp" : 19.75 },
        { "id" : "iddqd", "count" : 12500000, "avgTemp" : 18.32 },
        { "id" : "idkfa", "count" : 12500000, "avgTemp" : 25.46 }
    ] 
}
```

**Note!** This has to work reasonably well with any table row count, be it 100k or 100M.

##### Internal new data service

1. Create an internal service, that fetches sensor data once per second from <http://dummy-sensors.azurewebsites.net/api/sensor/iddqd>
    * It is enough to get the data just for one sensor (e.g. iddqd)
1. Save data from this service to database's _datas_ table
1. Other components of the system should be able to access most recent datas it has requested
    * It's up to you to decide how to implement this particular functionality

##### Temperature difference

1. Get selected sensor's latest temperature
1. Get Helsinki's current temperature from <http://dummy-sensors.azurewebsites.net/api/weather>
1. Calculate the difference of these two values
1. Return data in JSON format

```json
{ 
    "differenceInCelsius" : 14.56  
}
```

**Note!** It is recommended to implement this in a way, that it works even if request to http://dummy-sensors.azurewebsites.net/api/weather would take a long time.

#### Architecture and design

> Important!
>
> Anyone can write (or copy/paste) basic small app, so remember to show your design/architecture skills

Imagine this application as a service which is part of a large-scale Enterprise™ Application that receives heavy load.

Other applications that would use this service

* JavaScript client
* Another application that uses this magnificent service's code base 
    * Maybe as a Node module, Maven dependency, Class library or whatever it is called in that technology you selected to use.
    * Maybe there could be a client library that handles the communication between client and backend (your service).

Things to do:

1. Design a good architecture that will support this enterprise application scenario
1. Implement the interface so that _vincit-htmlapp/index.html_ can get data from the service
1. Remember to imagine this is application is part of huuuuuuge amount of other applications in an Enterprise™ environment.

> Important part once more!
>
> Use your design skills to show that you can implement a scalable system with modular architecture.

#### Frontend (optional)

_vincit-htmlapp/index.html_ is just a (bad)example of other application. Now it's time to improve it. Remember that this task is optional.

1. Create a simple frontend app with some modern JS-framework
1. Functionality
    1. App will have 2 pages (and navigation)
        1. Page 1: User must be able to fetch the summary of all sensors ([data summary](#sensor-data-summary))
        1. Page 2: User must be able to fetch the calculated difference between selected sensor and outside temperature ([temp difference](#temperature-difference))
    1. (optional) implement a simple login functionality in the frontend and backend

### Tips

* Make sure that the application starts
    * Provide instructions how to run the app
* If you have a feeling that you are using too much time for this assignment, you can also omit some parts
    * Add comments about the missing pieces and why they are not implemented
    * Be ready to explain these things in the interview
* Testing / mocking etc. Treat this as if it would be production code
