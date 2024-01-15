/* == Firebase == */
import { initializeApp } from 'firebase/app';
// import './generatedImports.js'
import { getDatabase, ref, child, get, push , set} from 'firebase/database';
import { getAuth, fetchSignInMethodsForEmail, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

console.log('Firebase loaded:', typeof initializeApp !== 'undefined' ? 'Yes' : 'No');

/* === Firebase Setup === */
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

import SignIn from "./SignIn.js";
import forgotPassword from "./ForgotPassword.js";
import SignUp from "./SignUp.js";
import Settings from "./Settings.js";
import Emergency1 from "./Emergency1.js";

import AddCrisis from "./AddCrisis.js";
import AddIntakePopup from "./AddIntakePopup.js";
// import AllergensChart from "./AllergensChart.js";
import Home from "./Home.js"
import MyUsageLog from "./MyUsageLog.js";
// import SymptomsChart from "./SymptomsChart.js";
import log from "./log.js"
import AddInhalerPopup from "./AddInhalerPopup.js";

// Settings(firebaseConfig);
// SignIn(firebaseConfig);
// SignUp(firebaseConfig);
// Emergency1(firebaseConfig)
// forgotPassword(firebaseConfig);
// AddCrisis(firebaseConfig)


// AddIntakePopup(firebaseConfig);
AddInhalerPopup(firebaseConfig)
// AllergensChart(firebaseConfig);
// SymptomsChart(firebaseConfig)
// Home(firebaseConfig);
// MyUsageLog(firebaseConfig);
// SymptomsChart(firebaseConfig);
// log(firebaseConfig)


