var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull patient's existing personal information
  app.get("/editpatient/:patientid", function(req, res) {
    db.Patients.findOne({
      where: {
        patientId: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Process changes to a patient's personal information
  app.put("/editpatient/:patientid", function(req, res) {
    db.Patients.update({
      where: {
        patientId: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Delete a patient
  app.delete("/editpatient/:patientid", function(req, res) {
    db.Patients.destroy({
      where: {
        patientId: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
