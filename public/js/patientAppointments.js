$(document).on("click touchstart", ".delete-button", function() {
  var appointmentId = $(this).attr("data-appointmentId");
  $.ajax({
    url: "/api/appointments/" + appointmentId,
    method: "DELETE"
  }).then(function(response) {
    console.log(response);
  });
  $(this)
    .parent()
    .parent()
    .fadeOut();
});
