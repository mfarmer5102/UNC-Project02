function patientInfo(patientid) {
  $.ajax({
    url: "/api/patientinformation/" + patientid,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}
patientInfo(1);
