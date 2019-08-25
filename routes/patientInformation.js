var QRCode = require("qrcode");

module.exports = function(app) {
  //Find one patient by their patientId
  app.get("/api/patient_qrcode/:patientid", function(req, res) {
    QRCode.toDataURL("https://www.wikipedia.org", function(err, url) {
      console.log(err);
      res.send(url);
    });
  });
};
