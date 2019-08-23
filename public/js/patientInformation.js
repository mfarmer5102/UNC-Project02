function patientInfo(patientid) {
  $.ajax({
    url:
      "https://patientplus.herokuapp.com/api/patientinformation/" + patientid,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}
