// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, set, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Emergency1(firebaseConfig) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const analytics = getAnalytics(app);

    const auth = getAuth();
    var currentUser = auth.currentUser;

    if (currentUser) {
        var currentUID = currentUser.uid;
        var currentUserDB = ref(database, '/users/' + currentUID);
        var contactsDB = child(currentUserDB, '/myContacts');
    } else {
        currentUID = 'testDosage2';
        currentUserDB = ref(database, '/users/' + currentUID);
        contactsDB = child(currentUserDB, '/myContacts');
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = auth.currentUser;
            currentUID = user.uid;
            currentUserDB = ref(database, '/users/' + currentUID);
            contactsDB = child(currentUserDB, '/myContacts');
        }
    });


    // Set up phone numbers

    const emergencyContactButtons = [
        document.getElementById("contact1Btn"),
        document.getElementById("contact2Btn"),
        document.getElementById("contact3Btn")
    ];
    const call999Btn = document.getElementById("call999Btn");
    const displayResult = document.getElementById("displayResult");

    // Attach event listeners to the emergency contact buttons
    emergencyContactButtons.forEach((button, index) => {
        button.addEventListener("click", () => initiateCall(index + 1));
    });

    // Event listener for initiating a call to an emergency contact
    function initiateCall(contactNumber) {
        onValue(contactsDB, (snapshot) => {
            const data = snapshot.val();
            const phoneNumberKey = `number${contactNumber}`;

            if (data && data[phoneNumberKey]) {
                const phoneNumber = data[phoneNumberKey];

                // Use the tel: URI scheme to initiate a phone call
                window.location.href = `tel:${phoneNumber}`;
            } else {
                alert("Emergency contact not available.");
            }
        });
    }

    // Event listener for calling 999
    call999Btn.addEventListener("click", initiateEmergencyCall);

    function initiateEmergencyCall() {
        // Use the tel: URI scheme to initiate a call to 999
        window.location.href = "tel:999";
    }


    //Set up elements
    var close = document.getElementById("close");
    var hyperlink = document.getElementById("emergencyStepsMore");
    var crisisStatsBtn = document.getElementById("crisisStatsBtn");
    var home = document.getElementById("homeBtn");
    var cloud = document.getElementById("airQltyBtn");
    var inhaler = document.getElementById("inhalerBtn");

    // Add event listeners to the elements
    if (close) {
        close.addEventListener("click", function (e) {
            window.location.href = "./Home.html";
        });
    }

    if (hyperlink) {
        hyperlink.addEventListener("click", function (e) {
            window.location.href = "./Emergency2.html";
        });
    }

    if (crisisStatsBtn) {
        crisisStatsBtn.addEventListener("click", function (e) {
            window.location.href = "./Emergency3.html";
        });
    }

    if (home) {
        home.addEventListener("click", function (e) {
            window.location.href = "./Home.html";
        });
    }

    if (cloud) {
        cloud.addEventListener("click", function (e) {
            window.location.href = "./AirQuality01.html";
        });
    }

    if (inhaler) {
        inhaler.addEventListener("click", function (e) {
            window.location.href = "./MyInhaler.html";
        });
    }
}

export default Emergency1
