//AddIntake Popup.js
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {child, get, getDatabase, push, ref} from "firebase/database";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Inhaler, Dosage, Intake} from "./Inhaler.js";
import Nav from "./Nav.js"

//AddIntakePopup page code
function AddIntakePopup(firebaseConfig) {
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

    get(inhalerDB).then((snapshot) => {
        if (snapshot.exists()) {
            var addIntakeBtn = document.getElementById("addIntakeBtn");
            var inhalerSection = document.getElementById("selectInhalerSection");

            //create buttons to specify which inhaler in the user database is the new intake for
            function createSelectInhalerBtn(inhaler) {
                //create HTML element with appropriate CSS class
                let selectInhalerBtn;
                selectInhalerBtn = document.createElement('button');
                selectInhalerBtn.className = "inhaler11";
                inhalerSection.appendChild(selectInhalerBtn)
                selectInhalerBtn.id = 'select' + inhaler.name

                //adding inhaler name as button label
                let divBtn = document.createElement('div')
                divBtn.className = "intaketimevar"
                divBtn.textContent = inhaler.name;
                selectInhalerBtn.appendChild(divBtn);

                selectInhalerBtn.addEventListener('click', function () {
                    var newIntakeInhaler = inhaler;
                    console.log(inhaler.name + ' is selected')

                    //add intake button will depend on the latest inhaler button that was clicked
                    addIntakeBtn.addEventListener('click', function () {
                        var newIntakeTime = document.getElementById("intakeTimeVar").value;
                        var newIntakePuffs = document.getElementById("nbPuffsVar").value;

                        //direct data writing in firebase depending on selected inhaler
                        let selectedInhalerDB = child(inhalerDB, '/' + inhaler.name)
                        let intakesDB = child(selectedInhalerDB, '/intakes/')
                        push(intakesDB, {
                            time: newIntakeTime,
                            puffNum: newIntakePuffs
                        })
                        console.log('intake data pushed to firebase')

                        //analysing if selected inhaler is overused
                        get(intakesDB).then((snapshot) => {
                            if (snapshot.exists()) {
                                var intakeCount = 0;
                                //counting the number of intakes for the inhaler so far
                                snapshot.forEach(function (childSnapshot) {
                                    intakeCount++
                                })
                                let dosageDB = child(selectedInhalerDB, '/dosage')
                                get(dosageDB).then((snapshot) => {
                                    if (snapshot.exists) {
                                        var numOfDose = 0;
                                        //counting the number of dosages set for the inhaler so far
                                        snapshot.forEach(function (childSnapshot) {
                                            numOfDose++
                                        })
                                    }
                                    if (intakeCount > numOfDose) { // triggering notification or alert to warn overusage
                                        if (Notification.permission === "granted") {
                                            new Notification("Warning: Too Frequent Usage of " + newIntakeInhaler.getName() + "!", {
                                                body: "It is recommended to space out this inhaler intake according to your registered dose."
                                            })
                                        } else {
                                            alert("Warning:" + newIntakeInhaler.getName() + " is OverUsed!")
                                        }
                                    }
                                })
                                window.reload()
                            }
                        })
                    })
                })
            }
            //create select button for every inhaler in user's database
            snapshot.forEach(function (childSnapshot) {
                let inhalerChoice = childSnapshot.val().inhaler
                createSelectInhalerBtn(inhalerChoice)
            })
        }
        else {
            console.log("No data available");
        }
    }).catch((error) => {
    console.error(error);
    });


    //Navigation
    // eventListeners.js

    //Navigation App Header
    var topNav = document.getElementById("back");
    if (topNav) {
        Nav();
    }

    var close = document.getElementById("closeBtn");
    if (close) {
        Nav();
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
    //Bottom Navigation
    var home = document.getElementById("homeBtn");
    if (home) {
        Nav();
    }

    var cloud = document.getElementById("airQualityBtn");
    if (cloud) {
        Nav();
    }

    var hospital = document.getElementById("emergencyBtn");
    if (hospital) {
        Nav();
    }

    document.getElementById("closeBtn1")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");
    document.getElementById("addintakebtn")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");
}

export default AddIntakePopup;