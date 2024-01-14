import forgotPassword from "./ForgotPassword.js";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


function SignIn(firebaseConfig) {
    const signUpButton = document.getElementById("signUpPageBtn")
    if (signUpButton){
        signUpButton.addEventListener("click", function(event){
            console.log("Sign Up Button Clicked");
            window.location.href = "./SignUp.html"
        });
    }
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
                    window.location.href = "./Home.html"
                })
                .catch((error) => {
                    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
                        alert('Incorrect email or password. Please try again.');
                    } else {
                        // Handle other types of errors
                        alert('An error occurred during sign-in. Please try again.');
                    }
                    console.error('Error during sign-in:', error.message);
                });
        });
        console.log('SignIn event listener attached');
    } else {
        console.error('SignIn button not found');
    }
}

export default SignIn;