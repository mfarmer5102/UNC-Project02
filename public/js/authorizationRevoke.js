//FIREBASE SETUP########################################################################

var firebaseConfig = {
  apiKey: "AIzaSyDIdypXltd1I_sABaWv6psEgunjfdxebkw",
  authDomain: "patientplus-4b901.firebaseapp.com",
  databaseURL: "https://patientplus-4b901.firebaseio.com",
  projectId: "patientplus-4b901",
  storageBucket: "",
  messagingSenderId: "466376390821",
  appId: "1:466376390821:web:61679caa59b01221"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Realtime listener
firebase.auth().onAuthStateChanged(function(firebaseUser) {
  if (firebaseUser) {
    console.log(firebaseUser);
    if (firebaseUser.email === "guest@email.com") {
      $("#loggedInIndicator").text("Guest User");
    } else {
      $("#loggedInIndicator").text(firebaseUser.email);
    }
  } else {
    console.log("not logged in");
    window.location.replace("/");
  }
});

//VARIABLES##############################################################################

var logoutButton = document.getElementById("logoutButton");

//EVENT LISTENERS########################################################################

//Log out
logoutButton.addEventListener("click", function(e) {
  console.log(e);
  firebase.auth().signOut();
});
