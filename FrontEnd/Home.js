import {Inhaler,Intake,Dosage} from "./Inhaler.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home(firebaseConfig) {
    //Initializing Firebase and Database Structure
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    let inhalerDB;
    let currentUserDB;
    console.log("The current user is")

    onAuthStateChanged(auth, (user) => {
        console.log("onauthstatechanged")
        if (user) {
            const currentUID = user.uid;
            currentUserDB = ref(database, '/users/' + user.uid);
            inhalerDB = ref(database, '/users/' + user.uid + '/inhalers');
            //loadInhalerWidget(inhalerDB);
            console.log(currentUID)
        } else {
            console.log("No user is currently signed in")
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

    //Load Inhaler Widget Content
    var favInhalerName = document.getElementById("fav-inhaler-title")
    var nextReminderTime = document.getElementById('nextReminderVar');
    var intakeExpiresIn = document.getElementById("expiryDateFavVar");
    function loadInhalerWidget(inhalerDBRef) {
        console.log("Loading Inhaler Widget...");
        get(inhalerDBRef).then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Snapshot exists:", snapshot.val());
                snapshot.forEach(function (childSnapshot) {
                    console.log("Child snapshot:", childSnapshot.val());
                    if (childSnapshot.val().inhaler.fav) {
                        var UserFavInhaler = childSnapshot.val().inhaler;
                        console.log("Favorite Inhaler:", UserFavInhaler);
                        favInhalerName.textContent = "My Favourite Inhaler: " + UserFavInhaler.name;
                        let newInhalerDB = child(inhalerDB, '/' + UserFavInhaler.name);
                        let dosageDB = child(newInhalerDB, '/dosage');
                        get(dosageDB).then((snapshot) => {
                            if (snapshot.exists()) {
                                console.log("Dosage snapshot:", snapshot.val());
                                let allDiffTime = [];
                                snapshot.forEach(function (childSnapshot) {
                                    var diffTime = childSnapshot.val().time - Date.now();
                                    console.log("Diff time for reminder:", diffTime);
                                    if (diffTime > 0) {
                                        allDiffTime.push(diffTime);
                                        if (Math.min.apply(Math, allDiffTime) === diffTime) {
                                            var nextTime = new Date(childSnapshot.val().time);
                                            console.log("Next reminder time:", nextTime);
                                            nextReminderTime.textContent = nextTime.toLocaleTimeString();
                                        }
                                    } else {
                                        nextReminderTime.textContent = "[add new reminder]";
                                        console.log("Time for a new reminder.");
                                    }
                                });
                            }
                            else {
                                nextReminderTime.textContent = "[add reminder]";
                                console.log("No reminders found, needs to add reminder.");
                            }
                        });
                        let milliUntilExp = Number(UserFavInhaler.expiryDate) - Date.now();
                        let hoursUntilExp = (milliUntilExp / 86400000);
                        console.log("Hours until expiration:", hoursUntilExp);
                        intakeExpiresIn.textContent = Math.round(hoursUntilExp).toString() + " hours";
                    }
                });
            }
            else {
                nextReminderTime.textContent = "[no inhaler added]";
                intakeExpiresIn.textContent = "[no inhaler added]";
                console.log("No inhaler data found.");
            }
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }

    loadInhalerWidget(inhalerDB);


    //Popup cancel button logic
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

}

export default Home;
