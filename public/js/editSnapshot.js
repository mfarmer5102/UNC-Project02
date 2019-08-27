//Delete snapshot button
$(document).on("click touchstart", "#deleteSnapshotButton", function() {
  var snapshotId = $(this).attr("data-snapshotIdToDelete");
  $.ajax({
    url: "/api/editsnapshot/" + snapshotId,
    method: "DELETE"
  }).then(function(response) {
    console.log(response);
    console.log("DELETE REQUEST SENT");
  });
  window.location.replace("/page_patientsearch");
});

$(document).on("click touchstart", "#cancelButton", function() {
  window.location.replace(
    "/page_patientsnapshots/" + localStorage.getItem("activePatientId")
  );
});
