function renderProfileNavbar(patientId, receivingDiv) {
  //Construct patient info link
  var patientInfoLink = $(
    "<i id='patientInformationLink' style='color: blue' class='fas fa-user-alt fa-3x'></i>"
  );
  patientInfoLink.attr(
    "data-patientId",
    localStorage.getItem("activePatientId")
  );

  //Construct patient snapshot link
  var patientSnapshotLink = $(
    "<i id='patientSnapshotLink' style='color: green' class='fas fa-clipboard-list fa-3x'></i>"
  );
  patientSnapshotLink.attr(
    "data-patientId",
    localStorage.getItem("activePatientId")
  );

  //Construct patient vitals link
  var patientVitalsLink = $(
    "<i id='patientVitalsLink' style='color: red' class='fas fa-heartbeat fa-3x'></i>"
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
  alertWrapper.append(patientVitalsLink);

  $(receivingDiv).append(alertWrapper);
}

//Satisfy linter
renderProfileNavbar(1, "#profileNavbarHolder");
