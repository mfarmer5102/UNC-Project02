var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Add a new snapshot
  app.post("/api/addsnapshot", function(req, res) {
    db.Snapshots.create(req.body).then(function() {
      res.redirect("/page_patientsnapshots/" + req.body.patientId);
    });
  });
};
