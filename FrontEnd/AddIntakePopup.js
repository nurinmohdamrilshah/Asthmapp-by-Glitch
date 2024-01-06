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
    const currentUser = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const currentUID = currentUser.uid;
            const currentUserDB = ref(database,'/users/'+currentUID)
            const inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
        }
    })
    if (currentUser){
        const currentUID = currentUser.uid;
        const currentUserDB = ref(database,'/users/'+currentUID)
        const inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
    }
    else {
        const currentUID = 'testDosage2'
        const currentUserDB = ref(database, '/users/' + currentUID)
        const inhalerDB = child(currentUserDB, '/inhalers')

        get(inhalerDB).then((snapshot) => {
            if (snapshot.exists()) {
                const addIntakeBtn = document.getElementById("addIntakeBtn");
                const newIntakeTime = document.getElementById("intakeTimeVar");
                const newIntakePuffs = document.getElementById("nbPuffsVar");
                const inhalerSection = document.getElementById("symptomsSection");

                let newIntakeInhaler = null;

                function createSelectInhalerBtn(inhaler) {
                    let choiceInhaler = new Inhaler(inhaler.name, inhaler.volume, inhaler.expiryDate, inhaler.type)
                    let selectInhalerBtn;
                    selectInhalerBtn = document.createElement('button');
                    selectInhalerBtn.className = "inhaler11";
                    inhalerSection.appendChild(selectInhalerBtn)
                    selectInhalerBtn.id = 'select' + choiceInhaler.getName()
                    let divBtn = document.createElement('div')
                    divBtn.className = "intaketimevar"
                    divBtn.textContent = choiceInhaler.getName();
                    selectInhalerBtn.appendChild(divBtn);
                    selectInhalerBtn.addEventListener('click', function () {
                        let newIntakeInhaler = choiceInhaler;
                        divBtn.textContent = '*' + choiceInhaler.getName();
                        addIntakeBtn.addEventListener('click', function () {
                            newIntakeInhaler.addIntake(newIntakeTime, newIntakePuffs);
                            const newIntake = newIntakeInhaler.getLastIntake()
                            let intakesDB = child(inhalerDB, '/intakes/')
                            let intakeTimeLocale = newIntake.getTime()
                            push(intakesDB, {
                                time: intakeTimeLocale,
                                puffNum: newIntakePuffs
                            })
                            if (newIntakeInhaler.isOverused()) {
                                alert("Warning:" + newIntakeInhaler.getName() + " is Overused!\nIt is recommended to space out this inhaler intake according to your registered dose.")
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
    }






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






