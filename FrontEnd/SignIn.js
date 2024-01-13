import forgotPassword from "../js/ForgotPassword.js";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from './../node_modules/firebase/auth';
import Nav from "./Nav.js";


function SignIn(firebaseConfig) {
    const app = initializeApp(firebaseConfig);
    console.log("Entered SignIn Function");

    const auth = getAuth();
    const signInBtn = document.getElementById("signInBtn");

    if (signInBtn) {
        signInBtn.addEventListener("click", function() {
            const email = document.getElementById("emailInput").value;
            const password = document.getElementById("passwordInput").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('SignIn successful', user);
                    window.location.href = '../html/Home.html';
                })
                .catch((error) => {
                    // Handle errors here
                    console.error('Error during sign-in:', error.message);
                });
        });
        console.log('SignIn event listener attached');
    } else {
        console.error('SignIn button not found');
    }
}

export default SignIn;