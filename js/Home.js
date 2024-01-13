import {Inhaler,Intake,Dosage} from "./Inhaler.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, push, ref, onValue, child, get, set, update,orderByChild,equalTo} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
const currentUser = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        const currentUID = currentUser.uid;
        const currentUserDB = ref(database,'/users/'+currentUID)
        const inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
    }
})
if (currentUser){
    var currentUID = currentUser.uid;
    var currentUserDB = ref(database,'/users/'+currentUID)
    var inhalerDB = child(currentUserDB, '/inhalers')
}
else {
    currentUID = 'testDosage2'
    currentUserDB = ref(database, '/users/' + currentUID)
    inhalerDB = child(currentUserDB, '/inhalers')
}

function loadAddCrisisContent() {
    // Fetch the content of AddCrisis.html
    fetch('./QuickIntake.html')
        .then(response => response.text())
        .then(data => {
            // Set the innerHTML of the addCrisisPopup div with the content of AddCrisis.html
            document.getElementById('quickIntakePopup').innerHTML = data;

            // Display the overlay with the specified color and opacity
            var overlay = document.getElementById('overlay');
            if (overlay) {
                overlay.style.backgroundColor = 'rgba(30, 56, 95, 0.8)';
                overlay.style.display = 'block';
            }

            // Display the popup
            document.getElementById('quickIntakePopup').style.display = 'block';
        })
        .catch(error => console.error('Error loading quickIntakePopup content:', error));
}


var popupcancelBtnContainer = document.getElementById("popupcancelBtnContainer");
if (popupcancelBtnContainer) {
    popupcancelBtnContainer.addEventListener("click", function (e) {
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

var profilePicture = document.getElementById("settingsBtn");
if (profilePicture) {
    profilePicture.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/Settings.html";
    });
}

var quickIntakeBtn = document.getElementById("quickIntakeBtn");
if (quickIntakeBtn) {
    quickIntakeBtn.addEventListener("click", function () {
            if (Inhaler.favInhaler == null) {
                window.alert("You haven't chose a favourite inhaler yet!")
            } else {
                var popup = document.getElementById("quickIntakePopup");
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

                var onClick = popup.onClick || function (e) {
                    if (e.target === popup && popup.hasAttribute("closable")) {
                        popupStyle.display = "none";
                    }
                };
                popup.addEventListener("click", onClick);
            }
        }
        );
}

// load inhaler widget content

    var nextReminderTime = document.getElementById('nextReminderVar');
    get(inhalerDB).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().fav) {
                    var UserFavInhaler = childSnapshot.val().inhaler
                    let newInhalerDB = child(inhalerDB, '/' + childSnapshot.val().inhaler.name)
                    let dosageDB = child(newInhalerDB, '/dosage')
                    get(dosageDB).then((snapshot) => {
                        if (snapshot.exists()) {
                            let allDiffTime = [];
                            snapshot.forEach(function (childSnapshot) {
                                if ((childSnapshot.val().time - Date.now()) > 0) {
                                    var diffTime = childSnapshot.val().time - Date.now()
                                    allDiffTime.push(diffTime)
                                    if (Math.min.apply(Math, allDiffTime) === diffTime) {
                                        var nextTime = new Date(childSnapshot.val().time)
                                        nextReminderTime.textContent = nextTime.toLocaleTimeString()
                                    }
                                }
                                else{
                                    nextReminderTime.textContent = "N/A"
                                }
                            })
                        }
                    })
                }
            })
        }
    })


    const intakeExpiresIn = document.getElementById("expiryDateFavVar");
    if(Inhaler.getFavInhaler()){
        let milliUntilIntake = Inhaler.getFavInhaler().getNextDoseTime()-Date.now();
        let hoursUntilIntake = (milliUntilIntake/86400000)
        intakeExpiresIn.textContent = hoursUntilIntake.toString()+" hours";
    }
    else{intakeExpiresIn.textContent = "N/A"}


var home = document.getElementById("999Home");
if (home) {
    home.addEventListener("click", function (e) {
        //TODO: <a href="tel:999">
    });
}


var crisisStepsBtn = document.getElementById("crisisStepsBtn");
if (crisisStepsBtn) {
    crisisStepsBtn.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/Emergency2.html";
    });
}

var cloud = document.getElementById("airQltyBar");
if (cloud) {
    cloud.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/AirQuality01.html";
    });
}

var inhaler = document.getElementById("inhalerBar");
if (inhaler==null) {
    inhaler.addEventListener("click",  function (e) {
        window.location.href = "../FrontEnd/MyInhaler.html";
    });
}

var hospital = document.getElementById("999Home");
if (hospital) {
    hospital.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/Emergency1.html";
    });
}


