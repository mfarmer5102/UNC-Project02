$(document).on("click", "#patientInformationLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientinformation/" + patientId);
});

$(document).on("click", "#patientSnapshotLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientsnapshots/" + patientId);
});