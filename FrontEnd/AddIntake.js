import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

    const appSettings = {
        databaseURL: "https://scrimba-162f5-default-rtdb.europe-west1.firebasedatabase.app/"
    };

    const app = initializeApp(appSettings);
    const database = getDatabase(app);
    const intakesDB = ref(database,"inhalerIntakes");

    const addIntakeBtn = document.getElementById("addIntakeBtn");
    const newIntakeTime = document.getElementById("intakeTimeVar");
    const newIntakePuffs = document.getElementById("nbPuffsVar");

    addIntakeBtn.addEventListener('click', function () {
        newIntakeInhaler.addIntake(newIntakeTime, newIntakePuffs);
        push(intakesDB,{
            inhaler: newIntakeInhaler,
            intake:  newIntakeInhaler.getAllInhalerIntakes()
        })
        if (newIntakeInhaler.isOverused()) {
            new Notification("Warning:"+newIntakeInhaler.getName() + " is Overused!", {
                body: "It is recommended to space out this inhaler intake according to your registered dose.",
                icon: "./public/solid-warning@2x.png"
            })
        }
    })