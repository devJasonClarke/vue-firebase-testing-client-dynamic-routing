const firebase = require("firebase");
// Required for side-effects
require("firebase/firebase-firestore");
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjeQ6IkYEtlIvTjQu9BDW3SOb4pAmQu24",
    authDomain: "genr8-3d-money-tracking.firebaseapp.com",
    projectId: "genr8-3d-money-tracking",
    storageBucket: "genr8-3d-money-tracking.appspot.com",
    messagingSenderId: "430711737245",
    appId: "1:430711737245:web:b916a77ccd918d377a7d74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();
