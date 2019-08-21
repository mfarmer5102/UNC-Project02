var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Set the default route
  app.get("/", function(req, res) {
    console.log(req);
    res.redirect("/patientsearch/all");
  });

  //Find all patients
  app.get("/patientsearch/all", function(req, res) {
    console.log(req);
    res.send("Hit route for finding all patients.");
  });

  //Find one patient by SSN
  app.get("/patientsearch/:ssn", function(req, res) {
    console.log(req);
    res.send("Hit route for finding a specific patient by SSN.");
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
