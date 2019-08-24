function drawCards(response) {
  //Define define and fill card header
  var header = $("<div class='card-header' style='font-weight: bold'></div>");
  header.append(response[i].lastName + ", " + response[i].firstName);

  //Define and fill Col 1
  var col1 = $("<div class='col-9'></div>");
  col1.append("Birthdate: " + response[i].birthDate);
  col1.append("<br>");
  col1.append("SSN: " + response[i].ssn);

  //Define and fill Col 2
  var col2 = $("<div class='col-3 text-center'></div>");
  col2.append(
    "<img src='" +
      response[i].photoURL +
      "' style='height: 50px; width: 50px; border-radius: 100%'>"
  );

  //Define and fill card body
  var body = $("<div class='card-body row' style='position: relative'></div>");
  body.append(col2);
  body.append(col1);

  //Define and fill card
  var card = $("<a></a>");
  card.css("color", "black");
  card.css("text-decoration", "none");
  card.addClass("patient-card card animated fadeInUpBig");
  card.attr("data-patientId", response[i].id);

  card.append(header);
  card.append(body);

  //Append the card to DOM and make a space
  $("#cardContainer").append(card);
  $("#cardContainer").append("<br>");
}

//Pull all patient cards by default
$.ajax({
  url: "/api/patientsearch/all",
  method: "GET"
}).then(function(response) {
  console.log(response);
  for (i = 0; i < response.length; i++) {
    drawCards(response);
  }
});

//Handle search for patient
$(document).on("submit", "#patientSearchForm", function() {
  //Prevent page reload
  event.preventDefault();

  //Make the AJAX call
  var searchValue = $("#patientSearchBar")
    .val()
    .trim();
  console.log(searchValue);
  $.ajax({
    url: "/api/patientsearch/" + searchValue,
    method: "GET"
  }).then(function(response) {
    //Clear the container to prepare for results
    $("#cardContainer").empty();
    //Convert response to an array
    var responseArr = [response];
    console.log(responseArr);
    console.log(responseArr.length);
    for (i = 0; i < responseArr.length; i++) {
      drawCards(responseArr);
    }
  });
});

//Handle click on card
$(document).on("click", ".patient-card", function() {
  var patientId = $(this).attr("data-patientId");
  window.location.replace("/page_patientinformation/" + patientId);
  localStorage.setItem("activePatientId", patientId);
});
