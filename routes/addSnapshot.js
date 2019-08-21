var db = require("../models");
console.log(db);

module.exports = function(app) {
  app.post("/addsnapshot", function(req, res) {
    db.Snapshot.create(req.body).then(function(result) {
      res.json(result);
    });
  });
};
