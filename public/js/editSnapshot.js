$(document).on("click", "#deleteSnapshotButton", function() {
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
