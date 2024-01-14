//AddInhalerPopup.js
// Import the functions needed from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {child, get, getDatabase, push, ref, set} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Inhaler,Intake,Dosage} from "./Inhaler.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Add Inhaler Page Code
function addInhalerPopup(firebaseConfig) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const analytics = getAnalytics(app);

    const auth = getAuth();
    let currentUser
    let currentUID
    let currentUserDB
    let inhalerDB
    //identifying current logged in user
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user
            currentUID = user.uid;
            currentUserDB = ref(database,'/users/'+currentUID)
            inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
        }
    })

    //getting HTML buttons
    const addInhalerBtn = document.getElementById("applyBtn");
    const newInhalerCrisisBtn = document.getElementById("crisisInhalerBtn");
    const newInhalerPreventionBtn = document.getElementById("preventionBtn");

    //initialise inhaler type in case user does not choose any
    var newInhalerType = "Type Unknown";

    //getting inhaler type button text display
    let preventionBtnText = document.getElementById("preventionText")
    let crisisBtnText = document.getElementById("crisisText")

    //choosing new inhaler type
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

    //setting up for dosage reminders added for new inhaler
    const newInhalerDoseBtn = document.getElementById("addReminderBtn");
    let reminderCount = 0;
    let reminderTimes = [];

    //confirming dosage reminder time to be added for inhaler
    newInhalerDoseBtn.addEventListener('click', function () {
        const newReminder = document.getElementById("newDose");
        let newInhalerDoseReminder = new Date(newReminder.value);
        if (newInhalerDoseReminder) {
            if ((newInhalerDoseReminder - Date.now()) > 0) {
                reminderTimes.push(newReminder.value)
                reminderCount++;
                let reminderSection = document.getElementById("dosagePrescriptionSection")
                let newReminderAdded = document.createElement('h3')
                newReminderAdded.className = "inhaler-name"
                newReminderAdded.textContent = "Dosage " + reminderCount.toString() + ": " + newInhalerDoseReminder.toLocaleTimeString()
                reminderSection.appendChild(newReminderAdded)
            } else {
                alert('Reminder submitted is in the past')
            }
        }

    })

    //set button to write inhaler, its fields, and reminders to user's database on click
    addInhalerBtn.addEventListener('click', function () {
            const newInhalerName = document.getElementById("newInhalerName").value;
            const newInhalerVol = document.getElementById("newInhalerVolume").value;
            const newInhalerExpDate = document.getElementById("newInhalerExpDate").value;

            //create new instance of inhaler to access methods
            let newInhaler = new Inhaler(newInhalerName, newInhalerVol, newInhalerExpDate, newInhalerType);
            if (newInhaler.isExpired()) {
                alert("Inhaler " + newInhaler.getName() + " is expired, add a different one!")
            }
            else {
                if (inhalerDB) {
                    //create new child in list of inhalers with default as non-favourite
                    let newInhalerDB = child(inhalerDB, '/' + newInhaler.getName())
                    set(newInhalerDB, {
                        inhaler: newInhaler,
                        fav: false
                    }).then(r => {
                    })
                    for (let i = 0; i <= reminderTimes.length; i++) {
                        newInhaler.setDose(new Date(reminderTimes[i]));
                        let newDose = newInhaler.getNewDose();
                        let dosageDB = child(newInhalerDB, '/dosage/reminder' + (i + 1).toString())
                        if (newDose.getReminderTime().getTime() > Date.now()) {
                            let dosageString = newDose.getReminderTime().getTime().toString()
                            set(dosageDB, {
                                time: dosageString
                            }).then(r => {
                            })
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
    //Navigation App Header
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
    //Used to be for when this page was a popup-kept in case
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
    //Bottom navigation
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

}

export default addInhalerPopup;






