$.ajax({
  url: "/api/patientsearch/all",
  method: "GET"
}).then(function(response) {
  console.log(response);
  for (i = 0; i < response.length; i++) {
    //Define define and fill card header
    var header = $("<div class='card-header'></div>");
    header.append(response[i].lastName + ", " + response[i].firstName);

    //Define and fillcard body
    var body = $("<div class='card-body'></div>");
    body.append("Birthdate: " + response[i].birthDate);
    body.append("<br>");
    body.append("SSN: " + response[i].ssn);

    //Define and fill card
    var card = $("<div class='card animated fadeInUpBig'></div>");
    card.append(header);
    card.append(body);

    //Append the card to DOM and make a space
    $("#cardContainer").append(card);
    $("#cardContainer").append("<br>");
  }
});
