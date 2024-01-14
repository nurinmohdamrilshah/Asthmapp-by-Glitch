// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {child, get, getDatabase, push, ref, set} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Inhaler,Intake,Dosage} from "./Inhaler.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function addInhalerPopup(firebaseConfig) {
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
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const analytics = getAnalytics(app);

    const auth = getAuth();
    let currentUser
    //identifying current logged in user
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const currentUID = user.uid;
            const currentUserDB = ref(database,'/users/'+currentUID)
            const inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
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


    addInhalerBtn.addEventListener('click', function () {
            const newInhalerName = document.getElementById("newInhalerName").value;
            const newInhalerVol = document.getElementById("newInhalerVolume").value;
            const newInhalerExpDate = document.getElementById("newInhalerExpDate").value;
            let newInhaler = new Inhaler(newInhalerName, newInhalerVol, newInhalerExpDate, newInhalerType);
            if (newInhaler.isExpired()) {
                alert("Inhaler " + newInhaler.getName() + " is expired, add a different one!")
            } else {
                if (inhalerDB) {
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

}

export default addInhalerPopup;






