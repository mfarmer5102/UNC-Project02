var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Pull patient's existing personal information
  app.get("/editpatient/:patientid", function(req, res) {
    console.log(req);
    res.send("Hit route for pulling a patient's personal information.");
  });

  //Process changes to a patient's personal information
  app.put("/editpatient/:patientid", function(req, res) {
    console.log(req);
    res.send(
      "Hit route for processing changes to a patient's personal information."
    );
  });

  //Delete a patient
  app.delete("/editpatient/:patientid", function(req, res) {
    console.log(req);
    res.send("Hit route for deleting a patient.");
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
