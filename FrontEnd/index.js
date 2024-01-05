import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push } from "firebase/database"; // Import the specific Firebase services you need
import { registerNewUser } from './SignUp';
console.log('Index Test');
console.log('FBS loaded:', typeof firebase !== 'undefined' ? 'Yes' : 'No');

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db,'users');

// Element Selection
const signInBtn = document.getElementById("signInBtn");
const forgotPasswordLink = document.getElementById("textContainer2");
const signUpLink = document.getElementById("textContainer3");
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

// Navigation Function
function navigateTo(url){
    window.location.href = url;
}

// Event Listeners
if (signInBtn) {
    signInBtn.addEventListener("click", authSignInWithEmail);
}
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", () => navigateTo("./ForgotPassword.html"));
}
if (signUpLink) {
    signUpLink.addEventListener("click", () => navigateTo("./SignUp.html"));
}

// Authentication Function
function authSignInWithEmail(inputName, inputEmail) {
    const dbRef = firebase.database().ref();
    console.log("!!!")
    dbRef.child('users').get().then((snapshot) => {
        if (snapshot.exists()) {
            const users = snapshot.val();
            for (const userId in users) {
                const user = users[userId];
                if (user.name === inputName && user.email === inputEmail) {
                    console.log('Match found:', user);
                }
            }
        } else {
            console.log('No data available');
        }
    }).catch((error) => {
        console.error(error);
    });

}


