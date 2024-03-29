var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull existing values for a snapshot (for editing purposes)
  app.get("/api/editsnapshot/:snapshotid", function(req, res) {
    db.Snapshots.findOne({
      where: {
        snapshotId: req.params.snapshotid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Process changes to a specific snapshot
  // app.put("/api/editsnapshot/:snapshotid", function(req, res) {
  //   db.Snapshots.update({
  //     where: {
  //       snapshotId: req.params.snapshotid
  //     }
  //   }).then(function(result) {
  //     res.json(result);
  //   });
  // });

  //******************* */
  //******************* */
  //******************* */

  //Process changes to a specific snapshot
  app.post("/api/editsnapshot", function(req, res) {
    console.log(req.body);
    db.Snapshots.update(req.body, {
      where: {
        id: req.body.snapshotId
      }
    }).then(function() {
      res.redirect("/page_patientsnapshots/" + req.body.patientId);
    });
  });

  //Delete a snapshot
  app.delete("/api/editsnapshot/:snapshotid", function(req, res) {
    db.Snapshots.destroy({
      where: {
        id: req.params.snapshotid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
