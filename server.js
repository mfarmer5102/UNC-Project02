require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////// PATIENT SEARCH PAGE //////////////////////////////////////////////////////

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

//////// PATIENT INFORMATION PAGE //////////////////////////////////////////////////////

//Pull patient's personal information
app.get("/patientinformation/:patientid", function(req, res) {
  console.log(req);
  res.send("Hit route for pulling a specific patient's personal information.");
});

//////// PATIENT SNAPSHOTS PAGE //////////////////////////////////////////////////////

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

//////// ADD PATIENT PAGE //////////////////////////////////////////////////////

//Add a new patient
app.post("/addpatient", function(req, res) {
  console.log(req);
  res.send("Hit route for adding a new patient.");
});

//////// EDIT PATIENT PAGE //////////////////////////////////////////////////////

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

//////// ADD SNAPSHOT PAGE //////////////////////////////////////////////////////

//Add a new snapshot for a patient
app.get("/addsnapshot", function(req, res) {
  console.log(req);
  res.send("Hit route for adding a new shapshot.");
});

//////// EDIT SNAPSHOT PAGE //////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
