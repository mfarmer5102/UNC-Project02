$(document).on("click", "#patientInformationLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientinformation/" + patientId);
});

$(document).on("click", "#patientSnapshotLink", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientsnapshots/" + patientId);
});

//Handle click on card
$(document).on("click", ".snapshot-card", function() {
  var snapshotId = $(this).attr("data-snapshotid");
  var queryURL = "/page_editsnapshot/" + snapshotId;
  console.log(queryURL);
  window.location.replace(queryURL);
});
