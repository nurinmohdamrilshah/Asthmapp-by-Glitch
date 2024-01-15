import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import {getDatabase, push, ref, onValue, child, get, set, update,orderByChild,equalTo} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Inhaler,Intake,Dosage} from "./Inhaler.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function QuickIntakePopup(firebaseConfig) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    let currentUser
    let currentUID
    let currentUserDB
    let inhalerDB

    // identifying current logged in user
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user
            currentUID = user.uid;
            currentUserDB = ref(database,'/users/'+currentUID)
            inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
        }
    })

    //display favourite inhaler's name
    var favInhalerName = document.getElementById("favInhalerVar");
    // reading and iterating over users' database to find which inhaler is the favourite
    get(inhalerDB).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().inhaler.fav) {
                    favInhalerName.textContent = "Favourite Inhaler: " + childSnapshot.val().inhaler.name
                }
            })
        }
    })

//Timer bar
//Reference - taken from https://chat.openai.com/share/3759b693-44fe-4ed6-b6d3-a44a338071c3
// Set the countdown time in seconds
    const countdownTime = 5;

// Get the countdown elements
    const countdownBar = document.getElementById('countdown-bar');
    const countdownProgress = document.getElementById('countdown-progress');


// Function to calculate elapsed milliseconds
    const elapsedMilliseconds = () => {
        return Date.now() - startTime;
    };

// Start the countdown
    const startTime = Date.now();
    updateProgressBar();
    const countdownInterval = setInterval(() => {
        updateProgressBar();
        // Check if the countdown is complete
        if (elapsedMilliseconds() >= countdownTime * 1000) {
            clearInterval(countdownInterval);
            // end of reference

            get(inhalerDB).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach(function (childSnapshot) {
                            if (childSnapshot.val().inhaler.fav) {
                                let favInhalerDB = child(inhalerDB, '/' + childSnapshot.val().inhaler.name)
                                let intakesDB = child(favInhalerDB, '/intakes/')
                                push(intakesDB, {
                                    time: new Date().toISOString(),
                                    puffNum: 2
                                })
                            }
                        }
                    );
                }
            });
        }
    }, 500);

// Add event listener to cancel button
    const cancelBtnContainer = document.getElementById('popupcancelBtnContainer');
    cancelBtnContainer.addEventListener('click', () => {
        clearInterval(countdownInterval);
        window.location.href = "./Home.html";
    });


}

export default QuickIntakePopup