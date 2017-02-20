//dependencies
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpassword",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
   connectionInfo = process.env.JAWSDB_URL;
}

//providing connection information for mysql
var connection = mysql.createConnection(connectionInfo);

//connection to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exporting database connection.
module.exports = connection;
