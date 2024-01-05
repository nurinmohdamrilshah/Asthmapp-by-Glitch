/* === Imports === */
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//import { getDatabase, ref, set, onValue, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
//import { initializeApp } from "firebase/app"
//import {getAnalytics} from "firebase/analytics";
//import {getDatabase, ref, set} from "firebase/database";

/* === Firebase Setup === */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy1dB-bUbRIQPsvMiO3nujknwP6ntdMes",
    authDomain: "asthmapp-121a8.firebaseapp.com",
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "asthmapp-121a8",
    storageBucket: "asthmapp-121a8.appspot.com",
    messagingSenderId: "583573518616",
    appId: "1:583573518616:web:921a17f44e5fca27b3066d",
    measurementId: "G-PLRLWFR1X7"
};
//
// /* == Firebase Variables & Constants == */
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
// const db = getDatabase(app)

/* == Variables from HTML == */
const emailAddress = document.getElementById("emailAdress")
const userName = document.getElementById("userName")
const newPassword = document.getElementById("newPassword")
const confirmPassword = document.getElementById("passwordConfirm")

/* == Event Listeners == */
var topNav = document.getElementById("backBtn");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "./index.html";
    });
}

var buttonPrimaryContainer = document.getElementById("buttonPrimaryContainer");
if (buttonPrimaryContainer) {
    buttonPrimaryContainer.addEventListener("click", function (e) {
        window.location.href = "./Settings.html";
    });
}

var buttonPrimary = document.getElementById("signUpBtn");
if (buttonPrimary) {
    buttonPrimary.addEventListener("click", registerNewUser);
}


/* == Event Listeners == */

/* == Function - Navigate to new page == */
function navigateTo(url){
    window.location.href = url;
}

/* === Async Functions == */
async function registerNewUser() {
    console.log("A")

    try {
        const email = emailAddress.value;
        const user = userName.value;
        const newPasswordValue = newPassword.value;
        const confirmPasswordValue = confirmPassword.value;


        set(ref(db, 'users'), {
            "emailAddress": email,
            "userName": user,
            "password": confirmPasswordValue
        })
        console.log("New User Registered")
        navigateTo("./Home.html")

    } catch (error) {
        console.error("Failed to read value", error.message);
    }
}

