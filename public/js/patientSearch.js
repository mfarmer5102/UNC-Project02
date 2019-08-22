$.ajax({
  //url: "http://localhost:5000/api/patientsearch/all",
  url: "https://patientplus.herokuapp.com/api/patientsearch/all",
  method: "GET"
}).then(function(response) {
  console.log(response);
});
