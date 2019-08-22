$.ajax({
  url: "https://patientplus.herokuapp.com/api/patientsearch/all",
  method: "GET"
}).then(function(response) {
  console.log(response);
  for (i = 0; i < response.length; i++) {
    //Define define and fill card header
    var header = $("<div class='card-header'></div>");
    header.append(response[i].lastName + ", " + response[i].firstName);

    //Define and fillcard body
    var body = $("<div class='card-body'></div>");
    body.append(response[i].ssn);
    body.append(response[i].birthDate);

    //Define and fill card
    var card = $("<div class='card'></div>");
    card.append(header);
    card.append(body);
  }
});
