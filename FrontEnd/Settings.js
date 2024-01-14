import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, set, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Settings(firebaseConfig) {
    console.log("Entered settings")
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    let currentUser = auth.currentUser;
    let currentUserDB;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, handle the display of user data
            currentUserDB = ref(database, '/users/' + user.uid);
            console.log(currentUserDB)
        } else {
            // No user is signed in
            console.log("No user is currently signed in.");
            // Handle scenarios where there is no user signed in
        }
    });

    // Form and input elements
    const updateSettings = document.getElementById('update-button');
    const inputMyBorough = document.getElementById("myBoroughVar");
    const inputContact1 = document.getElementById("phonenb1");
    const inputContact2 = document.getElementById("phonenb2");
    const inputContact3 = document.getElementById("phonenb3");

    function settingsForm() {
        console.log("Entered settings func")

        if (!currentUserDB) {
            console.error("User database reference is not set.");
            return;
        }
``
        const myBoroughVar = inputMyBorough ? inputMyBorough.value : "";
        const phoneNumber1 = inputContact1 ? inputContact1.value : "";
        const phoneNumber2 = inputContact2 ? inputContact2.value : "";
        const phoneNumber3 = inputContact3 ? inputContact3.value : "";

        // Paths in the database
        const currentBoroughDB = child(currentUserDB, '/myBorough/');
        const phoneNumbersInDb = child(currentUserDB, '/myContacts/');

        // Saving data to Firebase
        set(currentBoroughDB, {myBorough: myBoroughVar})
            .then(() => console.log("Borough data saved"))
            .catch(error => console.error("Error saving borough data: ", error));
        set(phoneNumbersInDb, {number1: phoneNumber1, number2: phoneNumber2, number3: phoneNumber3})
            .then(() => console.log("Contact data saved"))
            .catch(error => console.error("Error saving contact data: ", error));
    }


    // Add submit event listener
    if (updateSettings) {
        updateSettings.addEventListener('click', function(e) {
            e.preventDefault();
            settingsForm();
            console.log("clicked")
        });
    } else {
        console.error("Settings form not found.");
    }

    // Navigation Links
    const backPageLink = document.getElementById("backBtn");
    const signOutLink = document.getElementById("signOutLink");

    backPageLink?.addEventListener("click", () => window.location.href = "./Home.html");
    signOutLink?.addEventListener("click", () => window.location.href = "./index.html");
}


export default Settings