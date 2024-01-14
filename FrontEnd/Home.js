import {Inhaler,Intake,Dosage} from "./Inhaler.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAPI } from "./utils.js";
import Nav from "./Nav.js";

function Home(firebaseConfig) {
    console.log("Entered Home")

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    let inhalerDB;
    let currentUserDB;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const currentUID = user.uid;
            currentUserDB = ref(database, '/users/' + user.uid);
            inhalerDB = ref(database, '/users/' + user.uid + '/inhalers');
            //loadInhalerWidget(inhalerDB);
            console.log(currentUID)
        } else {
            console.log("No user is currenly signed in")
        }
    });

    // Load Add Crisis Content
    function loadAddCrisisContent() {
        fetch('./QuickIntake.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('quickIntakePopup').innerHTML = data;
                var overlay = document.getElementById('overlay');
                if (overlay) {
                    overlay.style.backgroundColor = 'rgba(30, 56, 95, 0.8)';
                    overlay.style.display = 'block';
                }
                document.getElementById('quickIntakePopup').style.display = 'block';
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load Inhaler Widget Content
    function loadInhalerWidget(inhalerDBRef) {
        get(inhalerDBRef).then((snapshot) => {
            if (snapshot.exists()) {
                // Process and display favorite inhaler details
            }
        });
    }

    // Set up navigation
    function setupNav(elements) {
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener("click", Nav);
            }
        });
    }

    const elementsWithNav = ["settingsBtn", "quickIntakeBtn", "crisisStepsBtn", "airQltyBar", "inhalerBar", "emergencyBar"];
    setupNav(elementsWithNav);

    // Popup cancel button logic
    var popupcancelBtnContainer = document.getElementById("popupcancelBtnContainer");
    if (popupcancelBtnContainer) {
        popupcancelBtnContainer.addEventListener("click", function (e) {
            var popup = e.currentTarget.parentNode;
            while (popup && !popup.classList.contains("popup-overlay")) {
                popup = popup.parentNode;
            }
            if (popup) {
                popup.style.display = "none";
            }
        });
    }

    // Update area name and AQI
    var areaname = document.getElementById('areaname');
    const areatag = localStorage.getItem('userarea');
    if (areaname && areatag) {
        areaname.innerText = areatag;
        getAPI(areatag);
    }
}

export default Home;
