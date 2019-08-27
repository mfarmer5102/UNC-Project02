var db = require("../models");
var nodemailer = require("nodemailer");
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
      sendEmailToPatient(
        req.body.notificationEmail,
        req.body.physicianName,
        req.body.firstName,
        req.body.lastName,
        req.body.appointmentTime,
        req.body.appointmentDate,
        req.body.comments
      );
      res.redirect("/page_patientappointments/" + req.body.patientId);
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

// Define function for sending email to a patient /////////////////////////////////////////////////

function sendEmailToPatient(
  recipientEmail,
  physicianName,
  firstName,
  lastName,
  time,
  date,
  reason
) {
  var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3"
    },
    auth: {
      user: process.env.NODEMAILER_EMAIL_ADDRESS,
      pass: process.env.NODEMAILER_EMAIL_PASSWORD
    }
  });

  // setup e-mail data, even with unicode symbols
  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL_ADDRESS, // sender address (who sends)
    to: recipientEmail, // list of receivers (who receives)
    subject: "Appointment Confirmation for " + firstName + " " + lastName, // Subject line
    text:
      "This email is to confirm that " +
      firstName +
      " " +
      lastName +
      " has an appointment with " +
      physicianName +
      " at " +
      time +
      " on " +
      date +
      ". The reason for the appointment is " +
      reason +
      "." // plaintext body
    // html:
    //   "<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js" // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }

    console.log("Message sent: " + info.response);
  });
}
