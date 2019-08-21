var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull existing values for a snapshot (for editing purposes)
  db.Snapshots.findOne({
    where: {
      snapshotId: req.params.snapshotid
    }
  }).then(function(result) {
    res.json(result);
  });

  //Process changes to a specific snapshot
  app.put("/editsnapshot/:snapshotid", function(req, res) {
    db.Snapshots.update({
      where: {
        snapshotId: req.params.snapshotid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Delete a snapshot
  app.delete("/editsnapshot/:snapshotid", function(req, res) {
    db.Snapshots.destroy({
      where: {
        snapshotId: req.params.snapshotid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
