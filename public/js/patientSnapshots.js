//Handle taphold on card
$(document).on("click touchstart", ".snapshot-card", function() {
  var snapshotId = $(this).attr("data-snapshotid");
  var queryURL = "/page_editsnapshot/" + snapshotId;
  console.log(queryURL);
  window.location.replace(queryURL);
});

//Hover animation ////////////////////////////////////////////////
$(document).on("mouseenter", ".snapshot-card", function() {
  $(this).removeClass("fadeInUpBig");
  $(this).addClass("animated pulse");
});

$(document).on("mouseleave", ".snapshot-card", function() {
  $(this).removeClass("pulse");
});
