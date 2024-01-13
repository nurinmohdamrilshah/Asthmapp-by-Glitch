// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, onValue, push, ref, child, set} from "firebase/database";
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
//const analytics = getAnalytics(app);
//const auth = getAuth();
//const currentUser = auth.currentUser;
//if (currentUser){
//const currentUID = currentUser.uid;
//}

//onAuthStateChanged(auth, (user) => {
//  if (user) {
//    const currentUser = auth.currentUser;
//  const currentUID = user.uid;

let currentUserUID = 'testDosage2'
let currentUserDB = ref(database,'/users/'+currentUserUID);
let inhalerDB = child(currentUserDB,'/inhalers');
let inhaler1 = new Inhaler('inhaler1',50,'04 Feb 2024 00:12:00 GMT','Crisis')
let inhaler1DB = child(inhalerDB,'/'+inhaler1.getName())
set(inhaler1DB, {
    //name: inhaler1.getName(),
    // volume: inhaler1.getVol(),
    // expDate: new Date(inhaler1.getExpDate()).toDateString(),
    // type: inhaler1.getType(),
    inhaler: inhaler1
}).then(r => {})

inhaler1.setDose(new Date("2024-01-17T21:14:00"))
let i = 1;
var dosage1DB = child(inhaler1DB,'/dosage/reminder'+i.toString())
set(dosage1DB,{
    time: inhaler1.getNewDose().getReminderTime().getTime()
}).then(r => {})

inhaler1.setDose(new Date("2024-01-04T21:15:00"))
i++;
var dosage1DB = child(inhaler1DB,'/dosage/reminder'+i.toString())
set(dosage1DB,{
    time: inhaler1.getNewDose().getReminderTime().getTime()
}).then(r => {})

let currentTimeString = null;
let reminderString = null;

function checkReminder(inhaler){
    const currentTimeString = Date.now().toString()
    let reminderString = inhaler.getNextDose().getReminderTime().getTime()
    console.log(reminderString+' checking...'+currentTimeString)
    if (Math.abs(reminderString - currentTimeString)<=30000) {
        reminderNotification(inhaler.getName())
    }
}
function reminderNotification(inhalerName) {
    console.log("Time to Use " + inhalerName + "!")
    //if (Notification.permission === 'granted') {
    //new Notification("Time to Use " + inhalerName + "!", {
    //body: "Based on your dosage, it is recommended to use your inhaler now.",
    //icon: "./public/inhaler2@2x.png",
    //tag: "dose-notify"
    //})
    //}
}
//
setInterval(function(){
    checkReminder(inhaler1)
},30000)