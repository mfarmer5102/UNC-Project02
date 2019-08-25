grabData(localStorage.getItem("activePatientId"));

function grabData(patientId) {
  // Global Vars /////////
  var pulseArr = [];
  var systolicBloodPressureArr = [];
  var weightArr = [];
  var snapshotDateArr = [];
  var temperatureArr = [];

  // Call API ///////////
  $.ajax({
    url: "/api/snapshots/all/" + patientId,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      pulseArr.push(parseInt(response[i].pulse));
      systolicBloodPressureArr.push(
        parseInt(response[i].systolicBloodPressure)
      );
      weightArr.push(parseInt(response[i].weightValue));
      temperatureArr.push(parseInt(response[i].temperature));
      snapshotDateArr.push(response[i].snapshotDate);
    }
    drawChart(
      pulseArr,
      snapshotDateArr,
      "pulseGraph",
      "Pulse Reading",
      "bar",
      "rgba(201, 40, 28, 0.3)"
    );
    drawChart(
      systolicBloodPressureArr,
      snapshotDateArr,
      "systolicGraph",
      "Systolic Blood Pressure",
      "line",
      "rgba(68, 177, 227, 0.3)"
    );
    drawChart(
      weightArr,
      snapshotDateArr,
      "weightGraph",
      "Weight (lbs)",
      "line",
      "rgba(230, 209, 28, 0.3)"
    );
    drawChart(
      temperatureArr,
      snapshotDateArr,
      "temperatureGraph",
      "Temperature (Fahrenheit)",
      "bar",
      "rgba(67, 184, 31, 0.3)"
    );
  });
}

function drawChart(
  dataArray,
  labelArray,
  receivingDivId,
  title,
  graphType,
  rgba
) {
  console.log(dataArray);
  var ctx = document.getElementById(receivingDivId).getContext("2d");
  var receivingDivId = new Chart(ctx, {
    type: graphType,
    data: {
      labels: labelArray,
      datasets: [
        {
          label: title,
          data: dataArray,
          backgroundColor: rgba,
          borderColor: rgba,
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}
