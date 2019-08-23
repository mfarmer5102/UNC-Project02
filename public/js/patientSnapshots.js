function patientSnaps(patientid) {
  $.ajax({
    url: "/api/snapshots/all/" + patientid,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}
patientSnaps(1);
