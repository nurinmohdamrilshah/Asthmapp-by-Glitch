import {Inhaler,Intake,Dosage} from "./Inhaler.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAPI, setAPI } from "./utils.js";
import Nav from "./Nav.js";

function Home(firebaseConfig) {
    console.log("Home")
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    let inhalerDB;
    let currentUserDB;
    console.log("The current user is" + currentUserDB)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const currentUID = user.uid;
            currentUserDB = ref(database, '/users/' + user.uid);
            inhalerDB = ref(database, '/users/' + user.uid + '/inhalers');
            //loadInhalerWidget(inhalerDB);
            console.log(currentUID)
        } else {
            console.log("No user is currenly signed in")
        }
    });

    // Load Add Crisis Content
    function loadAddCrisisContent() {
        fetch('./QuickIntake.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('quickIntakePopup').innerHTML = data;
                var overlay = document.getElementById('overlay');
                if (overlay) {
                    overlay.style.backgroundColor = 'rgba(30, 56, 95, 0.8)';
                    overlay.style.display = 'block';
                }
                document.getElementById('quickIntakePopup').style.display = 'block';
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load Inhaler Widget Content
    var favInhalerName = document.getElementById("fav-inhaler-title")
    var nextReminderTime = document.getElementById('nextReminderVar');
    var intakeExpiresIn = document.getElementById("expiryDateFavVar");
    function loadInhalerWidget(inhalerDBRef) {
        get(inhalerDBRef).then((snapshot) => {
            if (snapshot.exists()) {
                // Process and display favorite inhaler details
                snapshot.forEach(function (childSnapshot) {
                    if (childSnapshot.val().inhaler.fav) {
                        var UserFavInhaler = childSnapshot.val().inhaler
                        favInhalerName.textContent = "My Favourite Inhaler: "+childSnapshot.val().inhaler.name
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
                                        nextReminderTime.textContent = "[add new reminder]"
                                    }
                                })
                            }
                            else{
                                nextReminderTime.textContent = "[add reminder]"
                            }
                        })
                        let milliUntilExp = Number(childSnapshot.val().inhaler.expiryDate)-Date.now();
                        let hoursUntilExp = (milliUntilExp/86400000)
                        intakeExpiresIn.textContent = Math.round(hoursUntilExp).toString()+" hours";
                    }
                })
            }
            else{
                nextReminderTime.textContent = "[no inhaler added]"
                intakeExpiresIn.textContent = "[no inhaler added]"
            }
        });
    }

    // Set up navigation
    function setupNav(elements) {
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener("click", Nav);
            }
        });
    }

    const elementsWithNav = ["settingsBtn", "quickIntakeBtn", "crisisStepsBtn", "airQltyBar", "inhalerBar", "emergencyBar"];
    setupNav(elementsWithNav);

    // Popup cancel button logic
    var popupcancelBtnContainer = document.getElementById("popupcancelBtnContainer");
    if (popupcancelBtnContainer) {
        popupcancelBtnContainer.addEventListener("click", function (e) {
            var popup = e.currentTarget.parentNode;
            while (popup && !popup.classList.contains("popup-overlay")) {
                popup = popup.parentNode;
            }
            if (popup) {
                popup.style.display = "none";
            }
        });
    }

    // Update area name and AQI
    var areaname = document.getElementById('areaname');
    const areatag = localStorage.getItem('userarea');
    areaname.innerText = areatag;
    console.log(getAPI(areatag));


    Notification.requestPermission().then((permission)=>{
        if(permission !== "granted"){
            alert("You need to allow permissions to receive warnings and dosage reminders!")
        }
        }
    )
}

export default Home;
