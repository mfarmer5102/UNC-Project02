var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull all of snapshots in the database (for development purposes only)
  app.get("/api/snapshots/all", function(req, res) {
    db.Snapshots.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // //Pull all of a patient's snapshots
  app.get("/api/snapshots/all/:patientid", function(req, res) {
    db.Snapshots.findAll({
      where: {
        patientId: req.params.patientid
      },
      order: [["snapshotDate", "ASC"]]
    }).then(function(result) {
      res.json(result);
    });
  });

  //Pull one of a patient's snapshots (for prefill during editing)
  app.get("/api/snapshots/one/:snapshotid", function(req, res) {
    db.Snapshots.findOne({
      where: {
        snapshotId: req.params.snapshotid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
