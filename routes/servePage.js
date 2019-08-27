var db = require("../models");

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
  app.get("/page_patientinformation/:patientid", function(req, res) {
    db.Patients.findOne({
      where: {
        id: req.params.patientid
      }
    }).then(function(result) {
      if (result !== null) {
        var resArr = [];
        resArr.push(result.dataValues);
        res.render("patientInformation", { patient: resArr });
      } else {
        res.sendStatus(418);
      }
    });
  });

  //Send the Patient Snapshots page
  app.get("/page_patientsnapshots/:patientid", function(req, res) {
    db.Snapshots.findAll({
      where: {
        patientId: req.params.patientid
      },
      order: [["snapshotDate", "DESC"]]
    }).then(function(result) {
      if (result !== null) {
        res.render("patientSnapshots", { snapshot: result });
      } else {
        res.sendStatus(418);
      }
    });
  });

  //Send the Add Patient page
  app.get("/page_addpatient", function(req, res) {
    res.render("addPatient");
  });

  //Send the Edit Patient page
  app.get("/page_editpatient/:patientid", function(req, res) {
    db.Patients.findOne({
      where: {
        id: req.params.patientid
      }
    }).then(function(result) {
      if (result !== null) {
        var resArr = [];
        resArr.push(result.dataValues);
        res.render("editPatient", { patient: resArr });
      } else {
        res.sendStatus(418);
      }
    });
  });

  //Send the Edit Patient page
  app.get("/page_addappointment/:patientid", function(req, res) {
    db.Patients.findOne({
      where: {
        id: req.params.patientid
      }
    }).then(function(result) {
      if (result !== null) {
        var resArr = [];
        resArr.push(result.dataValues);
        res.render("addAppointment", { patient: resArr });
      } else {
        res.sendStatus(418);
      }
    });
  });

  //Send the Add Snapshot page
  app.get("/page_addsnapshot/:patientid", function(req, res) {
    var patientIdCapture = req.params.patientid;
    res.render("addSnapshot", { patientId: patientIdCapture });
  });

  //Send the Edit Snapshot page
  app.get("/page_editsnapshot/:snapshotid", function(req, res) {
    db.Snapshots.findAll({
      where: {
        id: req.params.snapshotid
      }
    }).then(function(result) {
      if (result !== null) {
        res.render("editSnapshot", { snapshot: result });
      } else {
        res.sendStatus(418);
      }
    });
  });

  //Send the Vitals page
  app.get("/vitals", function(req, res) {
    res.render("vitals");
  });

  //Send the Wristband Print page
  app.get("/page_wristbandprint/:patientid", function(req, res) {
    db.Patients.findOne({
      where: {
        id: req.params.patientid
      }
    }).then(function(result) {
      if (result !== null) {
        var resArr = [];
        resArr.push(result.dataValues);
        res.render("wristbandPrint", { patient: resArr });
      } else {
        res.sendStatus(418);
      }
    });
  });
};
