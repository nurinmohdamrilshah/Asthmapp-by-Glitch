// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {child, get, getDatabase, push, ref, set} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {Inhaler,Intake,Dosage} from "./Inhaler.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var popupclose = document.getElementById("closeBtn");
if (popupclose) {
    popupclose.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(
                node &&
                node.classList &&
                node.classList.contains("popup-overlay")
            );
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

var popupbuttonPrimary = document.getElementById("applyBtn");
if (popupbuttonPrimary) {
    popupbuttonPrimary.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(
                node &&
                node.classList &&
                node.classList.contains("popup-overlay")
            );
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

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
if (currentUser){
    var currentUID = currentUser.uid;
    var currentUserDB = ref(database, '/users/'+currentUID)
    var inhalerDB = child(currentUserDB, '/inhalers')
}
else{
    currentUID = 'testDosage2';
    currentUserDB = ref(database,'/users/'+currentUID);
    inhalerDB = child(currentUserDB,'/inhalers');
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = auth.currentUser;
        currentUID = user.uid;
        currentUserDB = ref(database,'/users/'+currentUID);
        inhalerDB = child(currentUserDB,'/inhalers');
    }
})

const addInhalerBtn = document.getElementById("applyBtn");
const newInhalerCrisisBtn = document.getElementById("crisisInhalerBtn");
const newInhalerPreventionBtn = document.getElementById("preventionBtn");

var newInhalerType = "Type Unknown";
let preventionBtnText = document.getElementById("preventionText")
let crisisBtnText = document.getElementById("crisisText")

newInhalerCrisisBtn.addEventListener('click', function () {
    newInhalerType = "Crisis";
    crisisBtnText.textContent = "Crisis (selected)"
    preventionBtnText.textContent = "Prevention"
})
newInhalerPreventionBtn.addEventListener('click', function () {
    newInhalerType = "Prevention";
    preventionBtnText.textContent = "Prevention (selected)"
    crisisBtnText.textContent = "Crisis"
})

const newInhalerDoseBtn = document.getElementById("addReminderBtn");
let reminderCount = 0;
let reminderTimes = [];

newInhalerDoseBtn.addEventListener('click', function () {
    const newReminder = document.getElementById("newDose");
    let newInhalerDoseReminder = new Date(newReminder.value);
    if(newInhalerDoseReminder) {
        if ((newInhalerDoseReminder - Date.now()) > 0) {
            reminderTimes.push(newReminder.value)
            reminderCount++;
            let reminderSection = document.getElementById("dosagePrescriptionSection")
            let newReminderAdded = document.createElement('h3')
            newReminderAdded.className = "inhaler-name"
            newReminderAdded.textContent = "Dosage " + reminderCount.toString() +": "+newInhalerDoseReminder.toLocaleTimeString()
            reminderSection.appendChild(newReminderAdded)
        }
        else{alert('Reminder submitted is in the past')}
    }

})


addInhalerBtn.addEventListener('click', function () {
        const newInhalerName = document.getElementById("newInhalerName").value;
        const newInhalerVol = document.getElementById("newInhalerVolume").value;
        const newInhalerExpDate = document.getElementById("newInhalerExpDate").value;
        let newInhaler = new Inhaler(newInhalerName,newInhalerVol,newInhalerExpDate,newInhalerType);
        if (newInhaler.isExpired()){
            alert("Inhaler "+ newInhaler.getName() + " is expired, add a different one!")
        }
        else{
            if (inhalerDB){
                let newInhalerDB = child(inhalerDB,'/'+newInhaler.getName())
                set(newInhalerDB, {
                    inhaler: newInhaler,
                    fav: false
                }).then(r => {})
                for(let i=0;i<=reminderTimes.length;i++) {
                    newInhaler.setDose(new Date(reminderTimes[i]));
                    let newDose = newInhaler.getNewDose();
                    let dosageDB = child(newInhalerDB,'/dosage/reminder'+(i+1).toString())
                    if (newDose.getReminderTime().getTime() > Date.now()) {
                        let dosageString = newDose.getReminderTime().getTime().toString()
                        set(dosageDB,{
                            time: dosageString
                        }).then(r => {})
                    }
                }
                console.log('inhaler is successfully added to user database')
                location.reload()
            }
        }
    }
)

//Navigation
// eventListeners.js
var popupclose = document.getElementById("closeBtn");
if (popupclose) {
    popupclose.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(node && node.classList && node.classList.contains("popup-overlay"));
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

var popupaddIntakeBtn = document.getElementById("addIntakeBtn");
if (popupaddIntakeBtn) {
    popupaddIntakeBtn.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(node && node.classList && node.classList.contains("popup-overlay"));
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

var topNav = document.getElementById("back");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}

var close = document.getElementById("closeBtn");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var newInhalerIntake = document.getElementById("newInhalerIntakeBtn");
if (newInhalerIntake) {
    newInhalerIntake.addEventListener("click", function () {
        var popup = document.getElementById("addIntakePopup");
        if (!popup) return;
        var popupStyle = popup.style;
        if (popupStyle) {
            popupStyle.display = "flex";
            popupStyle.zIndex = 100;
            popupStyle.backgroundColor = "rgba(30, 56, 95, 0.8)";
            popupStyle.alignItems = "center";
            popupStyle.justifyContent = "center";
        }
        popup.setAttribute("closable", "");

        var onClick =
            popup.onClick ||
            function (e) {
                if (e.target === popup && popup.hasAttribute("closable")) {
                    popupStyle.display = "none";
                }
            };
        popup.addEventListener("click", onClick);
    });
}

var home = document.getElementById("homeBtn");
if (home) {
    home.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var cloud = document.getElementById("airQualityBtn");
if (cloud) {
    cloud.addEventListener("click", function (e) {
        window.location.href = "./AirQuality01.html";
    });
}

var hospital = document.getElementById("emergencyBtn");
if (hospital) {
    hospital.addEventListener("click", function (e) {
        window.location.href = "./Emergency1.html";
    });
}
document.getElementById("closeBtn1")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");
document.getElementById("applyBtn")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");








