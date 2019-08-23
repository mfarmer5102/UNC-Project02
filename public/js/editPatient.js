$(document).on("click", "#deletePatientButton", function() {
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
