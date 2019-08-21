var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull all of a patient's snapshots
  app.get("/snapshots/all/:patientid", function(req, res) {
    db.Snapshot.findAll({
      where: {
        patientId: req.params.patientid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Pull one of a patient's snapshots (for prefill during editing)
  app.get("/snapshots/one/:snapshotid", function(req, res) {
    db.Snapshot.findOne({
      where: {
        snapshotId: req.params.snapshotid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
