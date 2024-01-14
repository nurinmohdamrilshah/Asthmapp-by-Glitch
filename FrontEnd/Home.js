import {fetchSignInMethodsForEmail} from "firebase/auth";
import ErrorHandle from "./ErrorHandle.js";

async function checkEmailExists(email) {
    try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length > 0) {
            console.log('Email is already in use');
            ErrorHandle('Email is already in use');
            return true;
        } else {
            console.log('Email is not in use');
            return false;
        }
    } catch (error) {
        console.error(`Error checking email existence: ${error}`);
        ErrorHandle(`Error checking email existence: ${error}`);
        return true;
    }
}