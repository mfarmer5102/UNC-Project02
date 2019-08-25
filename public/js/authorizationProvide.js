//FIREBASE SETUP#########################################################################

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
    window.location.replace("/page_patientsearch");
  } else {
    console.log("not logged in");
  }
});

//VARIABLES##############################################################################

var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var loginButton = document.getElementById("loginButton");
var signUpButton = document.getElementById("signUpButton");
console.log(loginButton);

//EVENT LISTENERS########################################################################

//Login
$(document).on("submit", "#loginForm", function() {
  event.preventDefault();
  var email = inputEmail.value;
  var pass = inputPassword.value;
  var auth = firebase.auth();

  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(function(error) {
    if (error.message === "The email address is badly formatted.") {
      M.toast({ html: "The email provided is not a valid email address." });
    } else if (
      error.message ===
      "There is no user record corresponding to this identifier. The user may have been deleted."
    ) {
      M.toast({ html: "The entered email address is incorrect." });
    } else if (
      error.message ===
      "The password is invalid or the user does not have a password."
    ) {
      M.toast({ html: "The entered password is incorrect." });
    }
  });
});

//Sign up
signUpButton.addEventListener("click", function(e) {
  console.log(e);
  var email = inputEmail.value;
  var pass = inputPassword.value;
  var auth = firebase.auth();

  var promise = auth.createUserWithEmailAndPassword(email, pass);
  promise
    //.then(user => console.log(user))
    .catch(function(e) {
      console.log(e.message);
    });
});

//Continue as guest
guestButton.addEventListener("click", function(e) {
  console.log(e);
  var email = "guest@email.com";
  var pass = "guest1";
  var auth = firebase.auth();

  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise
    //.then(user => console.log(user))
    .catch(function(e) {
      console.log(e.message);
    });
});

//Materialize Intialization##############################################################################
M.AutoInit();
