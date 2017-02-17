//dependencies
var mysql = require("mysql");

//providing connection information for mysql
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpassword",
  database: "burgers_db"
});

//connection to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exporting database connection 
module.exports = connection;
