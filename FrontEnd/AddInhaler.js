// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Initialize Firebase
const appSettings = {
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const inhalerDoseDB = ref(database,"inhalerDose");

    Notification.requestPermission().then(permission => {
        if (permission === 'denied') {
            alert("You need to allow notifications to receive dosage reminders.")
        }
    })
    const InhalerDataRef = ref(database, 'addInhalerData');
    const addInhalerBtn = document.getElementById("applyBtn");
    const newInhalerCrisisBtn = document.getElementById("crisisInhalerBtn");
    const newInhalerPreventionBtn = document.getElementById("preventionBtn");

    const newInhalerName = document.getElementById("newInhalerName");
    const newInhalerDose = document.getElementById("newInhalerVolume");
    const newInhalerExpDate = document.getElementById("newInhalerExpDate");
    const newInhalerVolume = document.getElementById("newInhalerVolume")
    let newInhalerType = "Type Unknown";
    let newInhaler = 0;

    newInhalerCrisisBtn.addEventListener('click', function () {
        let newInhalerType = "Crisis";
    })
    newInhalerPreventionBtn.addEventListener('click', function () {
        let newInhalerType = "Prevention";
    })
    addInhalerBtn.addEventListener('click', function () {
        let newInhaler = new Inhaler(newInhalerName,newInhalerDose,newInhalerVolume,newInhalerExpDate,newInhalerType);
        if (newInhaler.isExpired()){
            alert("Inhaler "+ newInhaler.getName() + " is expired!")
        }
    })

    push(inhalerDoseDB,{
        inhaler: newInhaler,
        doses: newInhalerDoses
    })

    for (let i=0;i<=newInhalerDoses.length;i++){
        let reminderTime = newInhaler.getDose(i).getReminderTime();
        if (reminderTime - Date.now()>0){
            setTimeout(()=>{
                new Notification("Time to Use "+newInhalerName+"!", {
                    body: "Based on your dosage, it is recommended to use your inhaler now.",
                    icon: "./public/inhaler2@2x.png",
                    tag:"dose-notify"
                })
            },(reminderTime - Date.now()))
        }
    }