// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {child, get, getDatabase, push, ref} from "firebase/database";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Inhaler, Dosage, Intake} from "./Inhaler.js";
import Nav from "./Nav.js"


function AddIntakePopup(firebaseConfig) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const analytics = getAnalytics(app);

    const auth = getAuth();
    let currentUser
    onAuthStateChanged(auth, (user) => {
        if (user) {
            var currentUID = user.uid;
            var currentUserDB = ref(database,'/users/'+currentUID)
            var inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
        }
    })

    get(inhalerDB).then((snapshot) => {
        if (snapshot.exists()) {
            var addIntakeBtn = document.getElementById("addIntakeBtn");
            var inhalerSection = document.getElementById("selectInhalerSection");

            //let newIntakeInhaler = null;
            function createSelectInhalerBtn(inhaler) {
                //let choiceInhaler = new Inhaler(inhaler.name, inhaler.volume, inhaler.expiryDate, inhaler.type)
                let selectInhalerBtn;
                selectInhalerBtn = document.createElement('button');
                selectInhalerBtn.className = "inhaler11";
                inhalerSection.appendChild(selectInhalerBtn)
                selectInhalerBtn.id = 'select' + inhaler.name

                let divBtn = document.createElement('div')
                divBtn.className = "intaketimevar"
                divBtn.textContent = inhaler.name;
                selectInhalerBtn.appendChild(divBtn);

                selectInhalerBtn.addEventListener('click', function () {
                    var newIntakeInhaler = inhaler;
                    console.log(inhaler.name + ' is selected')
                    addIntakeBtn.addEventListener('click', function () {
                        var newIntakeTime = document.getElementById("intakeTimeVar").value;
                        var newIntakePuffs = document.getElementById("nbPuffsVar").value;
                        //newIntakeInhaler.addIntake(newIntakeTime, newIntakePuffs);
                        //var newIntake = new Intake(newIntakeTime,newIntakePuffs,newIntakeInhaler)
                        let selectedInhalerDB = child(inhalerDB, '/' + inhaler.name)
                        let intakesDB = child(selectedInhalerDB, '/intakes/')
                        push(intakesDB, {
                            time: newIntakeTime,
                            puffNum: newIntakePuffs
                        })
                        console.log('intake data pushed to firebase')
                        get(intakesDB).then((snapshot) => {
                            if (snapshot.exists()) {
                                var intakeCount = 0;
                                snapshot.forEach(function (childSnapshot) {
                                    intakeCount++
                                })
                                let dosageDB = child(selectedInhalerDB, '/dosage')
                                get(dosageDB).then((snapshot) => {
                                    if (snapshot.exists) {
                                        var numOfDose = 0;
                                        snapshot.forEach(function (childSnapshot) {
                                            numOfDose++
                                        })
                                    }
                                    if (intakeCount > numOfDose) { //NOTIFICATION
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
        Nav();
    }

    var close = document.getElementById("closeBtn");
    if (close) {
        Nav();
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