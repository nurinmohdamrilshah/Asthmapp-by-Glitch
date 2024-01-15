/* == Firebase == */
import { initializeApp } from 'firebase/app';
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

import Nav from "./Nav.js";
import SignIn from "./SignIn.js";
import forgotPassword from "./ForgotPassword.js";
import SignUp from "./SignUp.js";
import Settings from "./Settings.js";
//import Home from "./Home.js"

Nav();
Settings(firebaseConfig);
SignIn(firebaseConfig);
SignUp(firebaseConfig);
forgotPassword(firebaseConfig);
