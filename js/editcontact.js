import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings)
const database = getDatabase(app)
const phoneNumbersInDB = ref(database, "phoneNumber")

const inputFieldEl = document.getElementById("phonenb1")
const inputField2El = document.getElementById("phonenb2")
const inputField3El = document.getElementById("phonenb3")
const updateButtonEl = document.getElementById("update-button")

// Display phone numbers in input boxes when the page loads
onValue(phoneNumbersInDB, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Update input boxes with the latest values
        inputFieldEl.value = data.number1 || "";
        inputField2El.value = data.number2 || "";
        inputField3El.value = data.number3 || "";
    }
});

updateButtonEl.addEventListener("click", function() {
    let phoneNumber1 = inputFieldEl.value;
    let phoneNumber2 = inputField2El.value;
    let phoneNumber3 = inputField3El.value;

    // Use set instead of push to update the values
    set(phoneNumbersInDB, { number1: phoneNumber1, number2: phoneNumber2, number3: phoneNumber3 });
});
