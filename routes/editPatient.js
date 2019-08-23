var db = require("../models");
console.log(db);

module.exports = function(app) {
  app.post("/api/editpatient", function(req, res) {
    console.log("Receiving a put request");
    db.Patients.update(req.body, {
      where: {
        id: req.body.patientId
      }
    }).then(function() {
      res.redirect("/page_patientsearch");
    });
  });

  /////////********************* */
  /////////********************* */
  /////////********************* */

  //Process changes to a patient's personal information
  app.put("/api/editpatient", function(req, res) {
    console.log("Receiving a put request");
    db.Patients.update(req.body, {
      where: {
        id: req.body.patientId
      }
    }).then(function() {
      res.redirect("/page_patientsearch");
    });
  });

  //Delete a patient
  app.delete("/api/editpatient/:patientid", function(req, res) {
    db.Patients.destroy({
      where: {
        id: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
