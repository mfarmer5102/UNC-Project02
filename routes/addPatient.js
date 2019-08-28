var db = require("../models");
var uuid = require("uuid/v4");
console.log(db);

module.exports = function(app) {
  //Add a new patient
  app.post("/api/addpatient", function(req, res) {
    req.body.uuid = uuid(); //Assign a UUID
    db.Patients.create(req.body).then(function(result) {
      console.log(result);
      res.redirect("/page_patientsearch/");
    });
  });
};
