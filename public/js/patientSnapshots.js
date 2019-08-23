function patientSnaps(patientid) {
  $.ajax({
    url: "https://patientplus.herokuapp.com/api/snapshots/all/" + patientid,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
  return patientSnaps;
}
