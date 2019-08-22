var db = require("../models");
console.log(db);

module.exports = function(app) {
  //Send the user the login page upon arrival
  app.get("/", function(req, res) {
    res.sendFile("login.html", { root: __dirname + "/../public" });
  });

  //Send the Patient Search page
  app.get("/page_patientsearch", function(req, res) {
    res.render("patientSearch");
  });

  //Send the Patient Information page
  app.get("/page_patientinformation", function(req, res) {
    res.render("patientInformation");
  });

  //Send the Patient Snapshots page
  app.get("/page_patientsnapshots", function(req, res) {
    res.render("patientSnapshots");
  });

  //Send the Add Patient page
  app.get("/page_addpatient", function(req, res) {
    res.render("addPatient");
  });

  //Send the Edit Patient page
  app.get("/page_editpatient", function(req, res) {
    res.render("editPatient");
  });

  //Send the Add Snapshot page
  app.get("/page_addsnapshot", function(req, res) {
    res.render("addSnapshot");
  });

  //Send the Edit Snapshot page
  app.get("/page/editsnapshot", function(req, res) {
    res.render("editSnapshot");
  });
};
