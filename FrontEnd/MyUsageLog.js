// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {child, get, getDatabase, push, ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {Inhaler, Dosage, Intake} from "./Inhaler.js";
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
var mainSection = document.getElementById("mainMyInhalerStats")
get(inhalerDB).then((snapshot) => {
    if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
            var intakesDB = child(inhalerDB, childSnapshot.val().inhaler.name+'/intakes/')
            get(intakesDB).then((intakeList) => {
                if (intakeList.exists()) {
                    intakeList.forEach(function (intake) {
                        let intakeLogSection = document.createElement('ul')
                        intakeLogSection.className = "intakelogsection"

                        var intakeDateFormat = new Date(intake.val().time)
                        let intakeTime = document.createElement('h1')
                        intakeTime.className = "intaketime"
                        intakeTime.textContent = intakeDateFormat.toLocaleDateString()+" at "+intakeDateFormat.toLocaleTimeString();
                        intakeLogSection.appendChild(intakeTime)

                        let intakeLogSection1 = document.createElement('div')
                        intakeLogSection1.className = "intakelogsection1"
                        let inhalerPointer = document.createElement('h2')
                        inhalerPointer.className = "numberofpuffs"
                        inhalerPointer.textContent = "Inhaler:"
                        intakeLogSection1.appendChild(inhalerPointer)

                        let inhalerNameVar = document.createElement('b')
                        inhalerNameVar.className = "inhalernamevar";
                        inhalerNameVar.textContent = childSnapshot.val().inhaler.name
                        intakeLogSection1.appendChild(inhalerNameVar)

                        let intakeLogSection2 = document.createElement('div')
                        intakeLogSection2.className = "intakelogsection1"
                        let puffsPointer = document.createElement('h2')
                        puffsPointer.className = "numberofpuffs"
                        puffsPointer.textContent = "Number of Puffs:"
                        intakeLogSection2.appendChild(puffsPointer)

                        let puffsNumVar = document.createElement('b')
                        puffsNumVar.className = "inhalernamevar";
                        puffsNumVar.textContent = intake.val().puffNum
                        intakeLogSection2.appendChild(puffsNumVar)

                        intakeLogSection.appendChild(intakeLogSection1)
                        intakeLogSection.appendChild(intakeLogSection2)
                        mainSection.appendChild(intakeLogSection)
                    })
                }
            })
        })
    }
})
