import firebase from 'firebase'
require("@firebase/firestore")


//Initiate Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDAHPhMWb7XGQhoQHsPnfnUs2E7Xcr_KQA",
    authDomain: "newsletter-9ad47.firebaseapp.com",
    databaseURL: "https://newsletter-9ad47-default-rtdb.firebaseio.com",
    projectId: "newsletter-9ad47",
    storageBucket: "newsletter-9ad47.appspot.com",
    messagingSenderId: "343830826326",
    appId: "1:343830826326:web:fe85b11b05cd194d6ddaf7"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()