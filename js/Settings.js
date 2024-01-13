// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {child, get, getDatabase, push, ref} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";


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
if (currentUser){
    var currentUID = currentUser.uid;
    var currentUserDB = ref(database, '/users/'+currentUID)
    var myContactsDB = child(currentUserDB, '/myContacts')
    var myBoroughDB = child(currentUserDB, '/myBorough')
}
else{
    currentUID = 'generalDB';
    currentUserDB = ref(database,'/users/'+currentUID);
    myBoroughDB = child(currentUserDB, '/myBorough')
    myContactsDB = child(currentUserDB, '/myContacts')
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = auth.currentUser;
        currentUID = user.uid;
        currentUserDB = ref(database,'/users/'+currentUID);
        myBoroughDB = child(currentUserDB, '/myBorough')
        myContactsDB = child(currentUserDB, '/myContacts')
    }
})
const phoneNumbersInDB = ref(myContactsDB)
const myBoroughInDB = ref(myBoroughDB);


const inputMyBorough = document.getElementById("myBoroughVar");
const inputContact1 = document.getElementById("phonenb1")
const inputContact2 = document.getElementById("phonenb2")
const inputContact3 = document.getElementById("phonenb3")
const inputUsername = document.getElementById("usernamevar")
const inputEmail = document.getElementById("emailvar")
const inputPassword = document.getElementById("passwordvar")
const updateButtonEl = document.getElementById("update-button")

// Display myPostcode in the input box when the page loads
onValue(myBoroughInDB, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Update input box with the latest value
        inputMyBorough.value = data.myBorough || "";
    }
});

// Display phone numbers in input boxes when the page loads
onValue(phoneNumbersInDB, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Update input boxes with the latest values
        inputContact1.value = data.number1 || "";
        inputContact2.value = data.number2 || "";
        inputContact3.value = data.number3 || "";
    }
});

updateButtonEl.addEventListener("click", function() {
    let myBoroughVar = inputMyBorough.value;
    let phoneNumber1 = inputContact1.value;
    let phoneNumber2 = inputContact2.value;
    let phoneNumber3 = inputContact3.value;

    // Use set instead of push to update the values
    set(myBoroughInDB, { myBorough: myBoroughVar })
    .then(() => {
        console.log("Data set successfully");
    })
    .catch((error) => {
        console.error("Error setting data:", error);
    });

set(phoneNumbersInDB, { number1: phoneNumber1, number2: phoneNumber2, number3: phoneNumber3 })
    .then(() => {
        console.log("Data set successfully");
    })
    .catch((error) => {
        console.error("Error setting data:", error);
    });

});



//link to home page
var backPageLink = document.getElementById("backBtn");
if (backPageLink) {
    backPageLink.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/Home.html";
    });
}


// link to signOut.js
var signOutLink = document.getElementById("signOutLink");
if (signOutLink) {
    signOutLink.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/index.html";
    });
}
