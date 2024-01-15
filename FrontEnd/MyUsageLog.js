// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {child, get, getDatabase, push, ref} from "firebase/database";
import {getAuth, onAuthStateChanged} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function MyUsageLog(firebaseConfig) {
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

    var mainSection = document.getElementById("mainMyInhalerStats")
    //iterating over every inhaler
    get(inhalerDB).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach(function (childSnapshot) {
                var intakesDB = child(inhalerDB, childSnapshot.val().inhaler.name + '/intakes/')

                //iterating over every intake
                get(intakesDB).then((intakeList) => {
                    if (intakeList.exists()) {
                        intakeList.forEach(function (intake) {
                            // creating HTML element for individual intake
                            let intakeLogSection = document.createElement('ul')
                            intakeLogSection.className = "intakelogsection"

                            // converting intake time of ISO string from user database to Date
                            var intakeDateFormat = new Date(intake.val().time)

                            // displaying date and time of intake
                            let intakeTime = document.createElement('h1')
                            intakeTime.className = "intaketime"
                            intakeTime.textContent = intakeDateFormat.toLocaleDateString() + " at " + intakeDateFormat.toLocaleTimeString();
                            intakeLogSection.appendChild(intakeTime)

                            // displaying name of the inhaler for the intake
                            let intakeLogSection1 = document.createElement('div')
                            intakeLogSection1.className = "intakelogsection1"
                            let inhalerPointer = document.createElement('h2')
                            inhalerPointer.className = "numberofpuffs"
                            inhalerPointer.textContent = "Inhaler:"
                            intakeLogSection1.appendChild(inhalerPointer)
                            let inhalerNameVar = document.createElement('b')
                            inhalerNameVar.className = "inhalernamevar";
                            inhalerNameVar.textContent = childSnapshot.val().inhaler.name
                            intakeLogSection1.appendChild(inhalerNameVar)

                            // displaying number of puffs for the intake
                            let intakeLogSection2 = document.createElement('div')
                            intakeLogSection2.className = "intakelogsection1"
                            let puffsPointer = document.createElement('h2')
                            puffsPointer.className = "numberofpuffs"
                            puffsPointer.textContent = "Number of Puffs:"
                            intakeLogSection2.appendChild(puffsPointer)
                            let puffsNumVar = document.createElement('b')
                            puffsNumVar.className = "inhalernamevar";
                            puffsNumVar.textContent = intake.val().puffNum
                            intakeLogSection2.appendChild(puffsNumVar)

                            //appending all sections containing inhaler info together
                            intakeLogSection.appendChild(intakeLogSection1)
                            intakeLogSection.appendChild(intakeLogSection2)

                            //append log section for individual intakes on the document's main body
                            mainSection.appendChild(intakeLogSection)
                        })
                    }
                })
            })
        }
    })
}
export default MyUsageLog