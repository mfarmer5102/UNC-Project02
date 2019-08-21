var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Set the default route
  app.get("/", function(req, res) {
    res.sendFile("login.html");
  });
};
