import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    databaseURL: "https://scrimba-162f5-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const phoneNumbersRef = ref(database, "phoneNumber");

// Set up phone numbers 

const emergencyContactButtons = [
    document.getElementById("contact1Btn"),
    document.getElementById("contact2Btn"),
    document.getElementById("contact3Btn")
];
const call999Btn = document.getElementById("call999Btn");
const displayResult = document.getElementById("displayResult");

// Attach event listeners to the emergency contact buttons
emergencyContactButtons.forEach((button, index) => {
    button.addEventListener("click", () => initiateCall(index + 1));
});

// Event listener for initiating a call to an emergency contact
function initiateCall(contactNumber) {
    onValue(phoneNumbersRef, (snapshot) => {
        const data = snapshot.val();
        const phoneNumberKey = `number${contactNumber}`;

        if (data && data[phoneNumberKey]) {
            const phoneNumber = data[phoneNumberKey];

            // Use the tel: URI scheme to initiate a phone call
            window.location.href = `tel:${phoneNumber}`;
        } else {
            alert("Emergency contact not available.");
        }
    });
}

// Event listener for calling 999
call999Btn.addEventListener("click", initiateEmergencyCall);

function initiateEmergencyCall() {
    // Use the tel: URI scheme to initiate a call to 999
    window.location.href = "tel:999";
}



//Set up elements
var close = document.getElementById("close");
var hyperlink = document.getElementById("emergencyStepsMore");
var crisisStatsBtn = document.getElementById("crisisStatsBtn");
var home = document.getElementById("homeBtn");
var cloud = document.getElementById("airQltyBtn");
var inhaler = document.getElementById("inhalerBtn");

// Add event listeners to the elements
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

if (hyperlink) {
    hyperlink.addEventListener("click", function (e) {
        window.location.href = "./Emergency2.html";
    });
}

if (crisisStatsBtn) {
    crisisStatsBtn.addEventListener("click", function (e) {
        window.location.href = "./Emergency3.html";
    });
}

if (home) {
    home.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

if (cloud) {
    cloud.addEventListener("click", function (e) {
        window.location.href = "./AirQuality01.html";
    });
}

if (inhaler) {
    inhaler.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}
