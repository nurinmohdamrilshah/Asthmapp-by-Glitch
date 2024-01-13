import {initializeApp} from "firebase/app";
import { getAuth, sendPasswordResetEmail } from './../node_modules/firebase/auth';


function forgotPassword(firebaseConfig) {
    const app = initializeApp(firebaseConfig)

    const auth = getAuth();
    const forgotPasswordLink = document.getElementById("resetPasswordBtn");
    const emailAddressInput = document.getElementById('emailInput');

    if (forgotPasswordLink && emailAddressInput) {
        forgotPasswordLink.addEventListener('click', function(e) {
            sendPasswordResetEmail(auth, emailAddressInput.value)
                .then(() => {
                    console.log("Password reset email sent!");
                })
                .catch((error) => {
                    console.error(`Error sending password reset email: ${error.code}, ${error.message}`);
                });
        });
    } else {

        //console.error("Forgot password link or email input field is missing.");
    }
}

export default forgotPassword;