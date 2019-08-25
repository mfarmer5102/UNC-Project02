//Define how to render ////////////////////////////////////////////////

function renderPatientNameBar(patientId, receivingDiv) {
  //Define patient description line
  var infoWrapper = $(
    "<div class='alert alert-light text-right' role='alert'>"
  );
  var firstName = localStorage.getItem("activePatientFirstName");
  var lastName = localStorage.getItem("activePatientLastName");
  var ssn = localStorage.getItem("activePatientSSN");
  infoWrapper.append(
    "<strong>" + lastName + ", " + firstName + " (SSN: " + ssn + ")</strong>"
  );

  //Plant items onto the receivingDiv
  $(receivingDiv).append(infoWrapper);
}

//Bind active patient ID ////////////////////////////////////////////////

renderPatientNameBar(
  localStorage.getItem("activePatientId"),
  "#profileNavbarHolder"
);
