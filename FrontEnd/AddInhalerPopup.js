    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import {getDatabase, push, ref} from "firebase/database";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
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
    if (currentUser){
        const currentUID = currentUser.uid;
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const currentUser = auth.currentUser;
            const currentUID = user.uid;
        }
        //else{alert('Sorry, you are not signed in!')}
    })

    let currentUserDB = null;
    let inhalerDB = null;
    if (currentUser) {
        let currentUserDB = ref(database, '/users/' + currentUID)
        let inhalerDB = ref(database, '/users/' + currentUID + '/inhalers')
    }


var popupclose = document.getElementById("closeBtn");
    if (popupclose) {
        popupclose.addEventListener("click", function (e) {
            var popup = e.currentTarget.parentNode;
            function isOverlay(node) {
                return !!(
                    node &&
                    node.classList &&
                    node.classList.contains("popup-overlay")
                );
            }
            while (popup && !isOverlay(popup)) {
                popup = popup.parentNode;
            }
            if (isOverlay(popup)) {
                popup.style.display = "none";
            }
        });
    }

    var popupbuttonPrimary = document.getElementById("applyBtn");
    if (popupbuttonPrimary) {
        popupbuttonPrimary.addEventListener("click", function (e) {
            var popup = e.currentTarget.parentNode;
            function isOverlay(node) {
                return !!(
                    node &&
                    node.classList &&
                    node.classList.contains("popup-overlay")
                );
            }
            while (popup && !isOverlay(popup)) {
                popup = popup.parentNode;
            }
            if (isOverlay(popup)) {
                popup.style.display = "none";
            }
        });
    }

    const addInhalerBtn = document.getElementById("applyBtn");
    const newInhalerCrisisBtn = document.getElementById("crisisInhalerBtn");
    const newInhalerPreventionBtn = document.getElementById("preventionBtn");

    let newInhalerType = "Type Unknown";
    let preventionBtnText = document.getElementById("preventionText")
    let crisisBtnText = document.getElementById("crisisText")

    newInhalerCrisisBtn.addEventListener('click', function () {
        let newInhalerType = "Crisis";
        crisisBtnText.textContent = "Crisis (selected)"
        preventionBtnText.textContent = "Prevention"
    })
    newInhalerPreventionBtn.addEventListener('click', function () {
        let newInhalerType = "Prevention";
        preventionBtnText.textContent = "Prevention (selected)"
        crisisBtnText.textContent = "Crisis"
    })

    const newInhalerDoseBtn = document.getElementById("addReminderBtn");
    let reminderCount = 0;
    let reminderTimes = [];

    newInhalerDoseBtn.addEventListener('click', function () {
        const newReminder = document.getElementById("newDose");
        let newInhalerDoseReminder = new Date(newReminder.value);
        if(newInhalerDoseReminder) {
            if ((newInhalerDoseReminder - Date.now()) > 0) {
                reminderTimes.push(newReminder.value)
                reminderCount++;
                let reminderSection = document.getElementById("dosagePrescriptionSection")
                let newReminderAdded = document.createElement('h3')
                newReminderAdded.className = "inhaler-name"
                newReminderAdded.textContent = "Dosage " + reminderCount.toString() +": "+newInhalerDoseReminder.toLocaleTimeString()
                reminderSection.appendChild(newReminderAdded)
            }
            else{alert('Reminder submitted is in the past')}
        }

    })


    addInhalerBtn.addEventListener('click', function () {
        const newInhalerName = document.getElementById("newInhalerName").value;
        const newInhalerVol = document.getElementById("newInhalerVolume").value;
        const newInhalerExpDate = document.getElementById("newInhalerExpDate").value;

        let newInhaler = new Inhaler(newInhalerName,newInhalerVol,newInhalerExpDate,newInhalerType);

        if (newInhaler.isExpired()){
            alert("Inhaler "+ newInhaler.getName() + " is expired, add a different one!")
        }
        else{
            if (inhalerDB){
                push(inhalerDB,{newInhaler}).then((snap) => {
                    const newIntakeInhalerKeyKey = snap.key;
                })
            }
        }

        for(let i=0;i<=reminderTimes.length;i++) {
            newInhaler.setDose(new Date(reminderTimes[i]));
            let newDose = newInhaler.getNewDose();
            if (newDose.getReminderTime().getTime() > Date.now()) {
                alert('here')
                setTimeout(() => {
                    if (Notification.permission === 'granted') {
                        new Notification("Time to Use " + newInhalerName + "!", {
                            body: "Based on your dosage, it is recommended to use your inhaler now.",
                            icon: "./public/inhalerLogoBlue@2x.png",
                            tag: "dose-notify"
                        })
                    }
                    else {
                        alert('You need to allow notification to receive dosage reminders!')
                    }
                }, newDose.getReminderTime().getTime() - Date.now())
            }
            const dosageDB = ref(database,
                '/users/' + currentUID + '/inhalers/' + newIntakeInhalerKey + '/dosage')
            if(dosageDB){
            push(dosageDB, newDose)
            }
        }
    })