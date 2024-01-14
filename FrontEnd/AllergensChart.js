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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const ctx1 = document.getElementById('allergensChart');

const auth = getAuth(app);
var currentUser = auth.currentUser;
var currentUID, currentUserDB;

if (currentUser) {
    currentUID = currentUser.uid;
    currentUserDB = ref(database, '/users/' + currentUID);
} else {
    currentUID = 'testDosage2';
    currentUserDB = ref(database, '/users/' + currentUID);
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = auth.currentUser;
        currentUID = user.uid;
        currentUserDB = ref(database, '/users/' + currentUID);
        boroughDB = child(currentUserDB, '/myBorough');
    }
});

// const currentUID = "testDosage2";

const entriesInDB = ref(database, "users/"+currentUID+"/addCrisis");
let labels1 = ['Activities', 'Air Quality', 'Animals', 'Dust', 'Food Allergy', 'Greenery','Perfumes','Smoke','Stress','Temp & Humidity'];

onValue(entriesInDB, function(snapshot) {
    let allergens = [0,0,0,0,0,0,0,0,0,0];
    const entries = snapshot.val();
    
    // Counts total number of occurences of allergens for ALL crisis log entries
    for (var i=0; i<Object.keys(entries).length;i++) {
        const entry = Object.keys(entries)[i];
        const allergensInDB = ref(database, "users/"+currentUID+"/addCrisis/"+entry+"/selected_allergens"); 
        updateChart(allergens,allergensInDB);
    }
    updateChartWithSymptoms(allergens)
})

// Tallies number of occurences for EACH crisis log entry
function updateChart(allergens,allergensInDB) {
    onValue(allergensInDB, function(snapshot) {
        const data = snapshot.val();
        if (data != null) {
            if (data.activites == true) {
                allergens[0] += 1;
            } 
            if (data.airQuality == true) {
                allergens[1] += 1;
            }
            if (data.animals == true) {
                allergens[2] += 1;
            }
            if (data.dust == true) {
                allergens[3] += 1;
            }
            if (data.foodAllergy == true) {
                allergens[4] += 1;
            }
            if (data.greenery == true) {
                allergens[5] += 1;
            }
            if (data.perfumes == true) {
                allergens[6] += 1;
            }
            if (data.smoke == true) {
                allergens[7] += 1;
            }
            if (data.stress == true) {
                allergens[8] += 1;
            }
            if (data.tempHumidity == true) {
                allergens[9] += 1;
            }
            
        }});
}


function updateChartWithSymptoms(allergens) {
    const chartConfig = {
        type: 'bar',
        data: {
          labels: labels1,
          datasets: [{
            label: 'Occurances',
            data: allergens,
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
    if (window.liveChart2) {
        window.liveChart2.data = chartConfig.data;
        window.liveChart2.update();
    } else {
        // Initialize the chart for the first time
        window.liveChart2 = new Chart(ctx1, chartConfig);
    }      
}