import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database"
import {getAuth, onAuthStateChanged } from "firebase/auth";

function Emergency1(firebaseConfig) {
    console.log('Running Emergency1')
    //Initialize Firebase only once
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    // Setup listeners for UI elements
    setupCall999Button();
    setupContactButtons();
    subscribeToAuthChanges();

    function setupCall999Button() {
        const call999btn = document.getElementById("call999Btn");
        if (call999btn) {
            console.log("Calling 999")
            call999btn.addEventListener("click", () => window.location.href = "tel:999");
        }
    }

    function setupContactButtons() {
        const emergencyContactButtons = [
            document.getElementById("contact1Btn"),
            document.getElementById("contact2Btn"),
            document.getElementById("contact3Btn")
        ];

        emergencyContactButtons.forEach((button, index) => {
            if (button) {
                console.log("Calling Emergency Contacts")
                button.addEventListener("click", () => initiateCall(index + 1));
            }
        });
    }

    function subscribeToAuthChanges() {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("userDBRef")
                const userDBRef = ref(database, '/users/' + user.uid);
                syncUserData(userDBRef);
            } else {
                console.log("No user is currently signed in");
            }
        });
    }

    function syncUserData(userDBRef) {
        const contactsDBRef = ref(userDBRef, '/myContacts');
        console.log("Sync User Data")
        onValue(contactsDBRef, snapshot => {
            const data = snapshot.val();
            if (data) {
                document.getElementById("phonenb1").value = data.number1 || "";
                document.getElementById("phonenb2").value = data.number2 || "";
                document.getElementById("phonenb3").value = data.number3 || "";
            }
        });
    }

    function initiateCall(contactNumber) {
        const currentUser = auth.currentUser;
        if (currentUser) {
            const userDBRef = ref(database, '/users/' + currentUser.uid);
            const contactsDBRef = ref(userDBRef, '/myContacts');
            onValue(contactsDBRef, snapshot => {
                const data = snapshot.val();
                const phoneNumberKey = number$
                {
                    contactNumber
                }
                ;
                if (data && data[phoneNumberKey]) {
                    const phoneNumber = data[phoneNumberKey];
                    window.location.href = `tel:${phoneNumber}`;
                } else {
                    alert("Emergency contact not available.");
                }
            });
        } else {
            alert("User is not authenticated.");
        }
    }
}

export default Emergency1