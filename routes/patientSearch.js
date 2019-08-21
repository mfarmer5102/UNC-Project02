var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Find all patients
  app.get("/patientsearch/all", function(req, res) {
    db.Patient.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  //Find one patient by SSN
  app.get("/patientsearch/:ssn", function(req, res) {
    db.Patient.findOne({
      where: {
        ssn: req.params.ssn
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
