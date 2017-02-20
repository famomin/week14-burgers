//requiring orm.js for models
var ORM = require("../config/orm.js");

var burger = {
  //show all available burgers
  selectAll: function(cb) {
    ORM.selectAll("burgers", function (results) {
      cb(results);
    });
  },

  //insert new burger
  insertOne: function(cols, cals, cb) {
    ORM.insertOne("burgers", cols, vals, function(results) {
      cb(results);
    });
  },

  //to update existing burger
  updateOne: function(objColVals, conditions, cb) {
    ORM.updateOne("burgers", objColVals, condition, function(results) {
      cb(results);
    });
  }
}

//exporting burger modal to controller
module.exports = burger;
