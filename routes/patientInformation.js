var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Find one patient by their patientId
  app.get("/patientinformation/:patientid", function(req, res) {
    db.Patient.findOne({
      where: {
        patientId: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
