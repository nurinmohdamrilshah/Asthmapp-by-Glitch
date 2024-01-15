import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, set, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import ErrorHandle from "./ErrorHandle.js";

function Settings(firebaseConfig) {
    const settingsBtn = document.getElementById("settingsBtn")
    if (settingsBtn){
        settingsBtn.addEventListener("click", function(event){
            console.log("Settings btn pressed");
            window.location.href = './Settings.html'
        });
    }
    console.log("Entered settings");
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    let currentUserDB;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUserDB = ref(database, '/users/' + user.uid);
            console.log("User DB Reference:", currentUserDB);

            // Synchronize borough and contacts data
            syncUserData(currentUserDB);
        } else {
            console.log("No user is currently signed in.");
        }
    });


    // Sync user data with form inputs
    function syncUserData(userDBRef) {
        const boroughDB = child(userDBRef, '/myBorough');
        const contactsDB = child(userDBRef, '/myContacts');

        onValue(boroughDB, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                document.getElementById("myBoroughVar").value = data.myBorough || "";
            }
        });

        onValue(contactsDB, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                document.getElementById("phonenb1").value = data.number1 || "";
                document.getElementById("phonenb2").value = data.number2 || "";
                document.getElementById("phonenb3").value = data.number3 || "";
            }
        });

        onValue(userDBRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            if (data) {
                document.getElementById("usernamevar").value = data.username || "";
                document.getElementById("emailvar").value = data.email || "";
                console.log(data.username)
                console.log(data.emailAddress)
            }
        });
    }

    // Form submission event listener
    const updateSettings = document.getElementById('update-button');
    if (updateSettings) {
        updateSettings.addEventListener('click', function (e) {
            e.preventDefault();
            settingsForm();
        });
    } else {
        console.error("Settings form not found.");
    }

    // Handle settings form submission
    function settingsForm() {
        if (!currentUserDB) {
            console.error("User database reference is not set.");
            return;
        }

        const inputMyBorough = document.getElementById("myBoroughVar");
        const inputContact1 = document.getElementById("phonenb1");
        const inputContact2 = document.getElementById("phonenb2");
        const inputContact3 = document.getElementById("phonenb3");

        const myBoroughVar = inputMyBorough ? inputMyBorough.value : "";
        const phoneNumber1 = inputContact1 ? inputContact1.value : "";
        const phoneNumber2 = inputContact2 ? inputContact2.value : "";
        const phoneNumber3 = inputContact3 ? inputContact3.value : "";

        if (!isValidPhoneNumber(phoneNumber1) || !isValidPhoneNumber(phoneNumber2) || !isValidPhoneNumber(phoneNumber3)) {
            console.log("Invalid Phone Number");
            alert("Invalid Phone Number");
            return;
        }

        // Save data to Firebase
        saveUserData(currentUserDB, myBoroughVar, phoneNumber1, phoneNumber2, phoneNumber3);
    }

    function saveUserData(userDBRef, borough, phone1, phone2, phone3) {
        const currentBoroughDB = child(userDBRef, '/myBorough/');
        const phoneNumbersInDb = child(userDBRef, '/myContacts/');

        set(currentBoroughDB, { myBorough: borough })
            .then(() => console.log("Borough data saved"))
            .catch(error => console.error("Error saving borough data: ", error));

        set(phoneNumbersInDb, { number1: phone1, number2: phone2, number3: phone3 })
            .then(() => console.log("Contact data saved"))
            .catch(error => console.error("Error saving contact data: ", error));
    }

    // Phone number validation
    function isValidPhoneNumber(number) {
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return phoneRegex.test(number);
    }

    const signOutLink = document.getElementById("signOutLink")
    if (signOutLink) {
        signOutLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior

            signOut(auth).then(() => {
                console.log("Signed Out");
                // Redirect after successful sign out
                window.location.href = './index.html';
            }).catch((error) => {
                console.error("Error Signing Out: ", error);
                alert("Error Signing Out");
            });
        });
    }

    const backBtn = document.getElementById("backBtn");
    if (backBtn) {
        backBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevents any default action associated with the button
            console.log("Back button pressed");
            window.history.back(); // Navigates to the previous page in history
        });
    }

}

export default Settings;
