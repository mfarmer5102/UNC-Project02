var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull all of a patient's snapshots
  app.get("/snapshots/all/:patientid", function(req, res) {
    console.log(req);
    res.send("Hit route for pulling all of a patient's snapshot.");
  });

  //Pull one of a patient's snapshots (for prefill during editing)
  app.get("/snapshots/one/:patientid", function(req, res) {
    console.log(req);
    res.send("Hit route for pulling a specific snapshot for editing purpose.");
  });

  //Pull all physicians' names
  app.get("/snapshots/physicianslist", function(req, res) {
    console.log(req);
    res.send("Hit route for grabbing a list of physicians.");
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
