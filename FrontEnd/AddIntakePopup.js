// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {child, get, getDatabase, push, ref} from "firebase/database";
import {getAuth, onAuthStateChanged} from "firebase/auth";
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

    get(inhalerDB).then((snapshot) => {
            if (snapshot.exists()) {
                var addIntakeBtn = document.getElementById("addIntakeBtn");
                var newIntakeTime = document.getElementById("intakeTimeVar");
                var newIntakePuffs = document.getElementById("nbPuffsVar");
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
                        alert(inhaler.name+' is Selected!')
                        addIntakeBtn.addEventListener('click', function () {
                            //newIntakeInhaler.addIntake(newIntakeTime, newIntakePuffs);
                            //var newIntake = new Intake(newIntakeTime,newIntakePuffs,newIntakeInhaler)
                            let selectedInhalerDB = child(inhalerDB,'/'+inhaler.name)
                            let intakesDB = child(selectedInhalerDB, '/intakes')
                            get(intakesDB).then((snapshot) => {
                                if (snapshot.exists()) {
                                    var newIntakeDB = child(intakesDB,'/dosage/reminder'+(snapshot.numChildren()+1).toString())
                                }
                            })
                            push(newIntakeDB, {
                                time: newIntakeTime,
                                puffNum: newIntakePuffs
                            })
                            get(intakesDB).then((snapshot) => {
                                if (snapshot.exists()) {
                                    var intakeCount = snapshot.numChildren()
                                }
                            })
                            let dosageDB = child(selectedInhalerDB,'/dosage/')
                            get(dosageDB).then((snapshot) => {
                                if (snapshot.exists) {
                                    var numOfDose = snapshot.numChildren()
                                }
                            })
                            if (intakeCount>numOfDose){
                                alert("Warning:" + newIntakeInhaler.getName() + " is Overused!\nIt is recommended to space out this inhaler intake according to your registered dose.")
                            }
                            else{
                                alert('not overused :)')
                            }
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

    //page popup feature
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






