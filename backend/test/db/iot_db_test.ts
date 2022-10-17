import sqlite3 from 'sqlite3'

/*
  The test database has the following data:
  (id, time, value)
  (abba, null, 20)
  (iddqd, null, 18)
  (iddqd, null, 18.63)
*/
const db = new sqlite3.Database(`${__dirname}/iot_db_test.sqlite`, sqlite3.OPEN_READONLY)

export default db