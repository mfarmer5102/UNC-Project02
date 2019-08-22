var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull patient's existing personal information
  app.get("/api/editpatient/:patientid", function(req, res) {
    db.Patients.findOne({
      where: {
        patientId: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Process changes to a patient's personal information
  app.put("/api/editpatient/:patientid", function(req, res) {
    db.Patients.update({
      where: {
        patientId: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Delete a patient
  app.delete("/api/editpatient/:patientid", function(req, res) {
    db.Patients.destroy({
      where: {
        patientId: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
