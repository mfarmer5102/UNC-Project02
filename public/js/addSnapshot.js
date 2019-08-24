//Cancel button
$(document).on("click", "#cancelButton", function() {
  var queryURL =
    "/page_patientinformation/" + localStorage.getItem("activePatientId");
  window.location.replace(queryURL);
});
