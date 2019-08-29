//Cancel button
$(document).on("click touchstart", "#cancelButton", function() {
  var queryURL =
    "/page_patientinformation/" + localStorage.getItem("activePatientId");
  window.location.replace(queryURL);
});

//Ensure values provided
$(document).on("submit", "#addAppointmentForm", function() {
  //Stop form submission
  event.preventDefault();

  //Reset any previous highlights
  $("input").removeClass("alert-danger");
  $("textarea").removeClass("alert-danger");
  $("select").removeClass("alert-danger");

  //Ensure everything given; if so, submit form
  if ($("#appointmentDate").val() === "") {
    $("#appointmentDate").addClass("alert-danger");
  } else if ($("#appointmentTime").val() === "") {
    $("#appointmentTime").addClass("alert-danger");
  } else if ($("#physicianName").val() === null) {
    $("#physicianName").addClass("alert-danger");
  } else if ($("#comments").val() === "") {
    $("#comments").addClass("alert-danger");
  } else {
    document.getElementById("addAppointmentForm").submit();
  }
});
