$(document).on("click touchstart", "#patientInformationLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientinformation/" + patientId);
});

$(document).on("click touchstart", "#patientSnapshotLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientsnapshots/" + patientId);
});

$(document).on("click touchstart", "#editPatientButton", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_editpatient/" + patientId);
});
