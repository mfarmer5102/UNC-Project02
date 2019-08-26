$(document).on("click touchstart", ".delete-button", function() {
  var appointmentId = $(this).attr("data-appointmentId");
  var patientId = $(this).attr("data-patientId");
  $.ajax({
    url: "/api/appointments/" + appointmentId,
    method: "DELETE"
  }).then(function(response) {
    console.log(response);
    console.log("DELETE REQUEST SENT");
  });
  window.location.replace("/page_patientappointments/" + patientId);
});
