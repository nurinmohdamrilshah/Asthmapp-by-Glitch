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
                console.log(inhaler.name+' is selected')
                addIntakeBtn.addEventListener('click', function () {
                    var newIntakeTime = document.getElementById("intakeTimeVar").value;
                    var newIntakePuffs = document.getElementById("nbPuffsVar").value;
                    //newIntakeInhaler.addIntake(newIntakeTime, newIntakePuffs);
                    //var newIntake = new Intake(newIntakeTime,newIntakePuffs,newIntakeInhaler)
                    let selectedInhalerDB = child(inhalerDB,'/'+inhaler.name)
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
                            let dosageDB = child(selectedInhalerDB,'/dosage')
                            get(dosageDB).then((snapshot) => {
                                if (snapshot.exists) {
                                    var numOfDose = 0;
                                    snapshot.forEach(function (childSnapshot) {
                                        numOfDose++
                                    })
                                }
                                if (intakeCount>numOfDose){ //NOTIFICATION
                                    alert("Warning:" + newIntakeInhaler.getName() + " is Overused!\nIt is recommended to space out this inhaler intake according to your registered dose.")
                                }
                                window.reload()
                            })

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

// //page popup feature
// var popupclose = document.getElementById("closeBtn");
// if (popupclose) {
//     popupclose.addEventListener("click", function (e) {
//         var popup = e.currentTarget.parentNode;
//         function isOverlay(node) {
//             return !!(node && node.classList && node.classList.contains("popup-overlay"));
//         }
//         while (popup && !isOverlay(popup)) {
//             popup = popup.parentNode;
//         }
//         if (isOverlay(popup)) {
//             popup.style.display = "none";
//         }
//     });
// }
//
// var popupaddIntakeBtn = document.getElementById("addIntakeBtn");
// if (popupaddIntakeBtn) {
//     popupaddIntakeBtn.addEventListener("click", function (e) {
//         var popup = e.currentTarget.parentNode;
//         function isOverlay(node) {
//             return !!(node && node.classList && node.classList.contains("popup-overlay"));
//         }
//         while (popup && !isOverlay(popup)) {
//             popup = popup.parentNode;
//         }
//         if (isOverlay(popup)) {
//             popup.style.display = "none";
//         }
//     });
// }