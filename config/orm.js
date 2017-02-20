//requiring connection.js for orm.js
var mysql = require("mysql");

//orm object with sql query
var orm = {
  selectAll: function(res) {
    connection.query("SELECT * FROM burgers", function(err, results) {
      if (err){
        throw err;
      }
      res.render("index", { burgersAvail: results });
    });
  };

  insertOne: function (res, newBurger) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurger], function(err, results){
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  };

  //updating burgers only if they are
  updateOne = function (res, updateBurger) {
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [false, updateBurger], function(err, result) {
      if (err) {
        throw err;
      }
      res.redirecct("/");
    }
  }
};

//exporting orm object
module.exports = orm;
