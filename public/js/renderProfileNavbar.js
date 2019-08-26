//Define how to render ////////////////////////////////////////////////

function renderProfileNavbar(patientId, receivingDiv) {
  //Construct patient info link
  var patientInfoLink = $(
    "<i id='patientInformationLink' style='color: blue' class='nav-icon fas fa-user-alt fa-3x'></i>"
  );
  patientInfoLink.attr(
    "data-patientId",
    localStorage.getItem("activePatientId")
  );

  //Construct patient snapshot link
  var patientSnapshotLink = $(
    "<i id='patientSnapshotLink' style='color: green' class='nav-icon fas fa-clipboard-list fa-3x'></i>"
  );
  patientSnapshotLink.attr(
    "data-patientId",
    localStorage.getItem("activePatientId")
  );

  //Construct patient appointments link
  var patientAppointmentsLink = $(
    "<i id='patientAppointmentsLink' style='color: orange' class='nav-icon fas fa-calendar-week fa-3x'></i>"
  );
  patientAppointmentsLink.attr(
    "data-patientId",
    localStorage.getItem("activePatientId")
  );

  //Construct patient vitals link
  var patientVitalsLink = $(
    "<i id='patientVitalsLink' style='color: red' class='nav-icon fas fa-heartbeat fa-3x'></i>"
  );
  patientVitalsLink.attr(
    "data-patientId",
    localStorage.getItem("activePatientId")
  );

  //Define alert wrapper
  var alertWrapper = $(
    "<div class='alert alert-secondary text-center' style='display: flex; justify-content: space-evenly' role='alert'>"
  );
  alertWrapper.append(patientInfoLink);
  alertWrapper.append(patientSnapshotLink);
  alertWrapper.append(patientAppointmentsLink);
  alertWrapper.append(patientVitalsLink);

  //Place on the DOM
  $(receivingDiv).append(alertWrapper);
}

//Bind active patient ID ////////////////////////////////////////////////

renderProfileNavbar(
  localStorage.getItem("activePatientId"),
  "#profileNavbarHolder"
);

//Define button functions ////////////////////////////////////////////////

$(document).on("click touchstart", "#patientInformationLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientinformation/" + patientId);
});

$(document).on("click touchstart", "#patientSnapshotLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientsnapshots/" + patientId);
});

$(document).on("click touchstart", "#patientAppointmentsLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientappointments/" + patientId);
});

$(document).on("click touchstart", "#patientVitalsLink", function() {
  //var patientId = $(this).attr("data-patientId");
  window.location.replace("/vitals");
});

//Hover animation ////////////////////////////////////////////////

$(document).on("mouseenter", ".nav-icon", function() {
  $(this).addClass("animated heartBeat");
});

$(document).on("mouseleave", ".nav-icon", function() {
  $(this).removeClass("heartBeat");
});
