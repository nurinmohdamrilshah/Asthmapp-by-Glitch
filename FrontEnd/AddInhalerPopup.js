import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const inhalerDoseDB = ref(database,"inhalerDose");

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

    const newInhalerName = document.getElementById("newInhalerName");
    const newInhalerVol = document.getElementById("newInhalerVolume");
    const newInhalerExpDate = document.getElementById("newInhalerExpDate");
    let newInhalerType = "Type Unknown";
    let newInhaler = 0;

    newInhalerCrisisBtn.addEventListener('click', function () {
        let newInhalerType = "Crisis";
    })
    newInhalerPreventionBtn.addEventListener('click', function () {
        let newInhalerType = "Prevention";
    })
    addInhalerBtn.addEventListener('click', function () {
        let newInhaler = new Inhaler(newInhalerName,newInhalerVol,newInhalerExpDate,newInhalerType);
        if (newInhaler.isExpired()){
            alert("Inhaler "+ newInhaler.getName() + " is expired!")
        }
    })

    const newInhalerDoseBtn = document.getElementById("addReminderBtn");
    const newInhalerDoseReminder = document.getElementById("newDose");
    let newInhalerDoses = [];
    newInhalerDoseBtn.addEventListener('click', function () {
        newInhaler.setDose(newInhalerDoseReminder);
        let newInhalerDoses = newInhaler.getAllDoses();
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
                    tag: "dose-notify"
                })
            },(reminderTime - Date.now()))
        }
    }