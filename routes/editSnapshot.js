var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull existing values for a snapshot (for editing purposes)
  app.get("/editsnapshot/:snapshotid", function(req, res) {
    console.log(req);
    res.send(
      "Hit route for pulling a patient's information for editing purposes."
    );
  });

  //Process changes to a specific snapshot
  app.put("/editsnapshot/:snapshotid", function(req, res) {
    console.log(req);
    res.send("Hit route for updating a snapshot.");
  });

  //Delete a snapshot
  app.delete("/editsnapshot/:snapshotid", function(req, res) {
    console.log(req);
    res.send("Hit route for deleting a snapshot.");
  });

  // // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
