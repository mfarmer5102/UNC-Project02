//Delete patient button
$(document).on("click touchstart", "#deletePatientButton", function() {
  var patientId = $(this).attr("data-patientIdToDelete");
  $.ajax({
    url: "/api/editpatient/" + patientId,
    method: "DELETE"
  }).then(function(response) {
    console.log(response);
    console.log("DELETE REQUEST SENT");
  });
  window.location.replace("/page_patientsearch");
});

//Cancel button
$(document).on("click touchstart", "#cancelButton", function() {
  var queryURL =
    "/page_patientinformation/" + localStorage.getItem("activePatientId");
  window.location.replace(queryURL);
});
