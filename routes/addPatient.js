var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Add a new patient
  app.post("/api/addpatient", function(req, res) {
    db.Patients.create(req.body).then(function(result) {
      console.log(result);
      res.redirect("/page_patientsearch/");
    });
  });
};
