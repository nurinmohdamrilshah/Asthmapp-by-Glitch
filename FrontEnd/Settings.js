import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings)
const database = getDatabase(app)
const phoneNumbersInDB = ref(database, "phoneNumber")
const myBoroughInDB = ref(database, "myBorough"); // assuming "meArea" is the key you want to add

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
    set(myBoroughInDB, { myBorough: myBoroughVar });
    set(phoneNumbersInDB, { number1: phoneNumber1, number2: phoneNumber2, number3: phoneNumber3 });
});



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
