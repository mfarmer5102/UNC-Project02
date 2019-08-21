var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Add a new patient
  app.post("/addpatient", function(req, res) {
    db.Patient.create(req.body).then(function(result) {
      res.json(result);
    });
  });
};
