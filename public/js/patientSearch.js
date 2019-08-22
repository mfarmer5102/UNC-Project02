$.ajax({
  url: "https://patientplus.herokuapp.com/api/patientsearch/all",
  method: "GET"
}).then(function(response) {
  console.log(response);
  for (i = 0; i < response.length; i++) {
    $("#cardContainer").append(
      `
      <div class="card">
        <div class="card-header">
        ${response[i].lastName}, ${response[i].firstName}
        </div>
        <div class="card-body">
        ${response[i].ssn}
        ${response[i].birthDate}
        </div>
      </div>
    `
    );
  }
});
