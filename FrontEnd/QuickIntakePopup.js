import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getDatabase, push, ref, onValue, child, get, set, update,orderByChild,equalTo} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {Inhaler,Intake,Dosage} from "./Inhaler.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

var favInhalerName = document.getElementById("favInhalerVar");


get(inhalerDB).then((snapshot) => {
    if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
            if(childSnapshot.val().inhaler.fav){
                favInhalerName.textContent = "Favourite Inhaler: "+childSnapshot.val().inhaler.name
            }
        })
    }
})

//Timer bar
//Reference - taken from https://chat.openai.com/share/3759b693-44fe-4ed6-b6d3-a44a338071c3
// Set the countdown time in seconds
const countdownTime = 5;

// Get the countdown elements
const countdownBar = document.getElementById('countdown-bar');
const countdownProgress = document.getElementById('countdown-progress');

// Calculate the width of each 0.5 second interval in percentage
const widthPerInterval = 100 / (countdownTime * 2);

// Update the progress bar every 0.5 seconds
const updateProgressBar = () => {
    const elapsedIntervals = Math.max(0, elapsedMilliseconds() / 500);
    const progressWidth = widthPerInterval * elapsedIntervals;
    countdownProgress.style.width = `${progressWidth}%`;
};

// Function to calculate elapsed milliseconds
const elapsedMilliseconds = () => {
    return Date.now() - startTime;
};

// Start the countdown
const startTime = Date.now();
updateProgressBar();
const countdownInterval = setInterval(() => {
    updateProgressBar();
    // Check if the countdown is complete
    if (elapsedMilliseconds() >= countdownTime * 1000) {
        clearInterval(countdownInterval);
        window.location.href = "./Home.html";
        get(inhalerDB).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach(function (childSnapshot) {
                        if (childSnapshot.val().inhaler.fav) {
                            let favInhalerDB = child(inhalerDB, '/' + childSnapshot.val().inhaler.name)
                            let intakesDB = child(favInhalerDB, '/intakes/')
                            push(intakesDB, {
                                time: new Date().toISOString(),
                                puffNum: 2
                            })
                        }
                    }
                );
            }
        });
    }
}, 500);

// Add event listener to cancel button
const cancelBtnContainer = document.getElementById('popupcancelBtnContainer');
cancelBtnContainer.addEventListener('click', () => {
    clearInterval(countdownInterval);
    window.location.href = "./Home.html";
});

// end of reference




// popupHandler.js
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

var popupcancelBtnContainer = document.getElementById("popupcancelBtnContainer");
if (popupcancelBtnContainer) {
    popupcancelBtnContainer.addEventListener("click", function (e) {
        Inhaler.favInhaler.removeLastIntake();
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
document.getElementById("cancelBtn")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");
