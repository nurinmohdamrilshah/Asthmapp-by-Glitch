
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import {getDatabase, push, ref, onValue, child, get, set, update,orderByChild,equalTo} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Inhaler,Intake,Dosage} from "./Inhaler.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function MyInhaler(firebaseConfig) {
// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const analytics = getAnalytics(app);

    const auth = getAuth();
    let currentUser
    let currentUID
    let currentUserDB
    let inhalerDB
    //identifying current logged in user
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user
            currentUID = user.uid;
            currentUserDB = ref(database,'/users/'+currentUID)
            inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
        }
    })

    // reading and iterating over inhalers in user's database
    get(inhalerDB).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach(function (childSnapshot) {
                let inhaler = childSnapshot.val().inhaler;

                // displaying inhaler type
                let inhalerList = document.getElementById("mainMyInhaler")
                let inhalerType = document.createElement('h1');
                inhalerType.className = "reminders"
                inhalerType.textContent = childSnapshot.val().inhaler.type;
                inhalerList.appendChild(inhalerType)

                // displaying inhaler image depending on its type
                let inhalerField = document.createElement('ul')
                inhalerField.className = "inhalerfield"
                inhalerList.appendChild(inhalerField)
                let inhalerImage = document.createElement('button')
                inhalerImage.id = "editInhalerBtn"
                if (inhalerType.textContent === "Prevention") {
                    inhalerImage.className = "inhalerimage"
                } else {
                    inhalerImage.className = "inhalerimage2"
                }
                inhalerField.appendChild(inhalerImage)

                // adding favourite button to set inhaler as favourite
                // selected inhaler is set as fav and overwrite other inhalers to be non-favourite
                let favBtn = document.createElement('button');
                favBtn.className = "love"
                let favImg = document.createElement('img');
                favImg.src = "./public/love@2x.png"
                favImg.className = "love-icon"
                //favImg.alt = "Set as Favourite"
                favImg.addEventListener('click', () => {
                    var favInhalerRef = childSnapshot.ref
                    var favField = child(favInhalerRef, '/inhaler/fav')
                    // iterating over all inhalers' favourite field to be set as false
                    get(inhalerDB).then((snapshot) => {
                        if (snapshot.exists()) {
                            snapshot.forEach(function (childSnapshot) {
                                var otherInhalerRef = childSnapshot.ref
                                var otherFavField = child(favInhalerRef, '/inhaler/fav')
                                set(otherFavField, false)
                            })
                        }
                    })
                    // set concerned inhaler as favourite
                    set(favField, true)
                })
                favBtn.appendChild(favImg)
                inhalerField.appendChild(favBtn)

                // displaying inhaler's name
                let inhalerSection = document.createElement('section')
                inhalerSection.className = "inhalertext"
                inhalerField.appendChild(inhalerSection)
                let inhalerName = document.createElement('h2')
                inhalerName.className = "reminders"
                inhalerName.textContent = childSnapshot.val().inhaler.name
                inhalerSection.appendChild(inhalerName)

                // displaying inhaler's last intake time
                let inhalerStats = document.createElement('section')
                inhalerStats.className = "statsinhaler"
                inhalerSection.appendChild(inhalerStats)

                let lastUsageDiv = document.createElement('div')
                lastUsageDiv.className = "lastusagediv"
                inhalerSection.appendChild(lastUsageDiv)
                let lastUsage = document.createElement('h3')
                lastUsage.className = "lastusage"
                lastUsage.textContent = "Last Usage:"
                let lastUsageVar = document.createElement('b')
                lastUsageVar.className = "lastusagevar"
                var lastUsageTime = "N/A (no intake yet)"
                var intakesDB = child(inhalerDB, childSnapshot.val().inhaler.name + '/intakes/')

                //determining which child is the last intake in database
                var now = Date.now();
                var diff = [];
                get(intakesDB).then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach(function (childSnapshot) {
                            let forEpochTime = Date.parse(childSnapshot.val().time)
                            let timeDiff = forEpochTime - now
                            diff.push(timeDiff)
                            if (Math.min.apply(Math, diff) === timeDiff) {
                                lastUsageVar.textContent = childSnapshot.val().time
                            }
                        })
                    } else {
                        lastUsageVar.textContent = "[NO INTAKES YET]"
                    }
                })
                lastUsageDiv.appendChild(lastUsage)
                lastUsageDiv.appendChild(lastUsageVar)

                // display expiry date of inhaler
                let expDateDiv = document.createElement('div')
                expDateDiv.className = "lastusagediv"
                inhalerSection.appendChild(expDateDiv)
                let expDate = document.createElement('h3')
                expDate.className = "lastusage"
                expDate.textContent = "Expiry Date:"
                let expDateVar = document.createElement('b')
                expDateVar.className = "expirydatevar"
                let expiryDate = new Date(childSnapshot.val().inhaler.expiryDate)
                expDateVar.textContent = expiryDate.toDateString()
                expDateDiv.appendChild(expDate)
                expDateDiv.appendChild(expDateVar)

                // display usages left for the inhaler
                let usagesLeftDiv = document.createElement('div')
                usagesLeftDiv.className = "lastusagediv"
                inhalerSection.appendChild(usagesLeftDiv)
                let usagesLeft = document.createElement('h3')
                usagesLeft.className = "lastusage"
                usagesLeft.textContent = "Usage Left:"
                let usagesLeftVar = document.createElement('b')
                usagesLeftVar.className = "expirydatevar"
                var dosageDB = child(inhalerDB, childSnapshot.val().inhaler.name + '/dosage')
                var numUsagesLeft = 0
                get(dosageDB).then((snapshot) => {
                    if (snapshot.exists()) {
                        var dosageNum = 0;
                        var intakesNum = 0;
                        // counting number of dosages set for the inhaler
                        snapshot.forEach(function (childSnapshot) {
                            dosageNum++
                        })
                        get(intakesDB).then((snapshot) => {
                            if (snapshot.exists()) {
                                // counting number of intakes for the inhaler
                                snapshot.forEach(function (childSnapshot) {
                                    intakesNum++
                                })
                            }
                            var d = dosageNum - intakesNum
                            if (d > 0) {
                                usagesLeftVar.textContent = d.toString()
                            } else {
                                usagesLeftVar.textContent = "[NO DOSES LEFT]"
                            }
                        })
                    } else {
                        usagesLeftVar.textContent = "[ADD DOSE]"
                    }
                })
                usagesLeftDiv.appendChild(usagesLeft)
                usagesLeftDiv.appendChild(usagesLeftVar)

                inhalerStats.appendChild(lastUsageDiv)
                inhalerStats.appendChild(expDateDiv)
                inhalerStats.appendChild(usagesLeftDiv)

                // displaying dosage reminder times set for the inhaler
                let reminderSection = document.createElement('section')
                reminderSection.className = "reminderssection"
                inhalerStats.appendChild(reminderSection)
                let reminders = document.createElement('h2')
                reminders.className = "reminders"
                reminders.textContent = "Reminders:"
                reminderSection.appendChild(reminders)
                let remindersList = document.createElement('ul')
                remindersList.className = "reminderul1"
                reminderSection.appendChild(remindersList)

                // iterating over dosages set for the inhaler
                get(dosageDB).then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach(function (childSnapshot) {
                            let reminderVar = document.createElement('i')
                            reminderVar.className = "remindervar"

                            // converting dosage reminder time stored as epoch milliseconds
                            let reminder = new Date(Number(childSnapshot.val().time))
                            reminderVar.textContent = reminder.toLocaleTimeString() + " || "
                            remindersList.append(reminderVar)
                        })
                    }
                })
            })
        }
    })


// Function to close a popup by traversing up the DOM tree
    function closePopup(event) {
        let popup = event.currentTarget.parentNode;
        while (popup && !popup.classList.contains("popup-overlay")) {
            popup = popup.parentNode;
        }
        if (popup) {
            popup.style.display = "none";
        }
    }

// Function to open a popup
    function openPopup(popupId) {
        const popup = document.getElementById(popupId);
        if (!popup) return;

        const popupStyle = popup.style;
        popupStyle.display = "flex";
        popupStyle.zIndex = "100";
        popupStyle.backgroundColor = "rgba(30, 56, 95, 0.8)";
        popupStyle.alignItems = "center";
        popupStyle.justifyContent = "center";
        popup.setAttribute("closable", "");

        const onClick = function (e) {
            if (e.target === popup && popup.hasAttribute("closable")) {
                popupStyle.display = "none";
            }
        };
        popup.addEventListener("click", onClick);
    }

// Attach event listeners
    document.getElementById("closeBtn")?.addEventListener("click", closePopup);
    document.getElementById("addIntakeBtn")?.addEventListener("click", closePopup);
    document.getElementById("applyBtn")?.addEventListener("click", closePopup);



}

export default MyInhaler