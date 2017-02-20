//dependencies
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

//get route to show all the burgers on home page.
router.get("/", function (req, res) {
  burger.selectAll(function (results){
    var burgerObject = {
      burgers: results
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

//post route to allow user to add a new burger.
router.post("/", function (req, res) {
  burger.insertOne ([
    "burger_name", "devoured"
  ], [
    req.body.name, 0
  ], function () {
      res.redirect("/");
    });
});

//put route  for to update existing burgers
router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
