var db = require("../models");
console.log(db);

module.exports = function(app) {
  app.get("/page_allappointments", function(req, res) {
    db.Appointments.findAll({
      order: [["appointmentDate", "ASC"]]
    }).then(function(result) {
      console.log(result);
      if (result !== null) {
        var resArr = [];
        resArr.push(result.dataValues);
        res.render("allAppointments", { appointment: result });
      } else {
        res.sendStatus(418);
      }
    });
  });

  app.get("/api/appointments/:patientid", function(req, res) {
    db.Appointments.findAll({
      where: {
        patientId: req.params.patientid
      },
      order: [["date", "ASC"]]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/addappointment", function(req, res) {
    db.Appointments.create(req.body).then(function() {
      res.send("appointment added");
    });
  });

  app.get("/page_patientappointments/:patientid", function(req, res) {
    db.Appointments.findAll({
      where: {
        patientId: req.params.patientid
      },
      order: [["appointmentDate", "ASC"]]
    }).then(function(result) {
      console.log(result);
      if (result !== null) {
        var resArr = [];
        resArr.push(result.dataValues);
        console.log(resArr);
        console.log(resArr[0]);
        res.render("patientAppointments", { appointment: result });
      } else {
        res.sendStatus(418);
      }
    });
  });

  app.delete("/api/appointments/:appointmentid", function(req, res) {
    db.Appointments.destroy({
      where: {
        id: req.params.appointmentid
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
