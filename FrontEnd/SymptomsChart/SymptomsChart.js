import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBy1dB-bUbRIQPsvMiO3nujknwP6ntdMes",
    authDomain: "asthmapp-121a8.firebaseapp.com",
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "asthmapp-121a8",
    storageBucket: "asthmapp-121a8.appspot.com",
    messagingSenderId: "583573518616",
    appId: "1:583573518616:web:921a17f44e5fca27b3066d",
    measurementId: "G-PLRLWFR1X7"
};

// const auth = getAuth();
// var currentUser = auth.currentUser;
// var currentUID, currentUserDB;

// if (currentUser) {
//     currentUID = currentUser.uid;
//     currentUserDB = ref(database, '/users/' + currentUID);
// } else {
//     currentUID = 'testDosage2';
//     currentUserDB = ref(database, '/users/' + currentUID);
// }

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         currentUser = auth.currentUser;
//         currentUID = user.uid;
//         currentUserDB = ref(database, '/users/' + currentUID);
//         boroughDB = child(currentUserDB, '/myBorough');
//     }
// });

const currentUID = "testDosage2";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const ctx = document.getElementById('symptomsChart');
const entriesInDB = ref(database, "users/"+currentUID+"/addCrisis");
let labels = ['Chest Compressions', 'Cough', 'Dizziness', 'Dysponea', 'Fever', 'Tingling','Wheezing'];

onValue(entriesInDB, function(snapshot) {
    let symptoms = [0,0,0,0,0,0,0];
    const entries = snapshot.val();
    
    // Counts total number of occurences of symptoms for ALL crisis log entries
    for (var i=0; i<Object.keys(entries).length;i++) {
        const entry = Object.keys(entries)[i];
        const symptomsInDB = ref(database, "users/"+currentUID+"/addCrisis/"+entry+"/selected_symptoms"); 
        updateChart(symptoms,symptomsInDB);
    }
    updateChartWithSymptoms(symptoms)
})

// Tallies number of occurences for EACH crisis log entry
function updateChart(symptoms,symptomsInDB) {
    onValue(symptomsInDB, function(snapshot) {
        const data = snapshot.val();
        if (data != null) {
            if (data.chestCompressions == true) {
                symptoms[0] += 1;
            } 
            if (data.cough == true) {
                symptoms[1] += 1;
            }
            if (data.dizziness == true) {
                symptoms[2] += 1;
            }
            if (data.dysponea == true) {
                symptoms[3] += 1;
            }
            if (data.fever == true) {
                symptoms[4] += 1;
            }
            if (data.tingle == true) {
                symptoms[5] += 1;
            }
            if (data.wheezing == true) {
                symptoms[6] += 1;
            }
            
        }});
}


function updateChartWithSymptoms(symptoms) {
    const chartConfig = {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Occurances',
            data: symptoms,
            borderWidth: 0.3
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
                display: false
              }
          }
        }
      }
      // Check if chart is already initialized
    if (window.liveChart) {
        window.liveChart.data = chartConfig.data;
        window.liveChart.update();
    } else {
        // Initialize the chart for the first time
        window.liveChart = new Chart(ctx, chartConfig);
    }      
}
