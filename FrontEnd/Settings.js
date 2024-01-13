// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { child, get, getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

const auth = getAuth();
var currentUser = auth.currentUser;

if (currentUser) {
    var currentUID = currentUser.uid;
    var currentUserDB = ref(database, '/users/' + currentUID);
    var boroughDB = child(currentUserDB, '/myBorough');
    var contactsDB = child(currentUserDB, '/myContacts');
} else {
    currentUID = 'testDosage2';
    currentUserDB = ref(database, '/users/' + currentUID);
    boroughDB = child(currentUserDB, '/myBorough');
    contactsDB = child(currentUserDB, '/myContacts');
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = auth.currentUser;
        currentUID = user.uid;
        currentUserDB = ref(database, '/users/' + currentUID);
        boroughDB = child(currentUserDB, '/myBorough');
        contactsDB = child(currentUserDB, '/myContacts');
    }
});

// Declare constants for form and color buttons
const submitForm = document.getElementById('settingsForm');
const inputMyBorough = document.getElementById("myBoroughVar");
const inputContact1 = document.getElementById("phonenb1")
const inputContact2 = document.getElementById("phonenb2")
const inputContact3 = document.getElementById("phonenb3")
const inputUsername = document.getElementById("usernamevar")
const inputEmail = document.getElementById("emailvar")
const inputPassword = document.getElementById("passwordvar")

submitForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    settingsForm();
});

onValue(boroughDB, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        inputMyBorough.value = data.myBorough || "";
        localStorage.setItem('userarea', data.myBorough);
    }
});

onValue(contactsDB, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        inputContact1.value = data.number1 || "";
        inputContact2.value = data.number2 || "";
        inputContact3.value = data.number3 || "";
    }
});

function settingsForm() {
    let myBoroughVar = inputMyBorough.value;
    let phoneNumber1 = inputContact1.value;
    let phoneNumber2 = inputContact2.value;
    let phoneNumber3 = inputContact3.value;
    // add Boroughs
    let currentBoroughDB = child(currentUserDB, '/myBorough/');
    let phoneNumbersInDb = child(currentUserDB, '/myContacts/');
//Changed
    set(currentBoroughDB, { myBorough: myBoroughVar }) 
    set(phoneNumbersInDb, { number1: phoneNumber1, number2: phoneNumber2, number3: phoneNumber3 })
}


//link to home page
var backPageLink = document.getElementById("backBtn");
if (backPageLink) {
    backPageLink.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}


// link to signOut.js
var signOutLink = document.getElementById("signOutLink");
if (signOutLink) {
    signOutLink.addEventListener("click", function (e) {
        window.location.href = "./index.html";
    });
}
