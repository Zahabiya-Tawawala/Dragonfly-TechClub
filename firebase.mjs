// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// const { initializeApp } = require("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
// const { getAuth, signInWithEmailAndPassword } = require("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCpbfCi9mOFdoyCjtykUfoxbkMX55qjEk",
  authDomain: "signup-login-2555c.firebaseapp.com",
  projectId: "signup-login-2555c",
  storageBucket: "signup-login-2555c.appspot.com",
  messagingSenderId: "26182011404",
  appId: "1:26182011404:web:bd5be05ebcb09b16a17c29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // document.getElementById("result-pg")
    window.location.href = "/homepage-TechClub/index.html"
    // i think error??
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    switch (errorCode) {
        case "auth/invalid-email":
            alert("Invalid email address.");          
            break;

        case "auth/user-not-found":
            alert("User not found. Please check your email and try again.");           
            break;

        case "auth/wrong-password":
            alert("Incorrect password. Please try again.");
            break;
        default:
            alert("An error occurred. Please try again later");
            console.error(errorMessage);
            break;
    }

  });

});























