import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; 

import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; 

 

const appSettings = { 

databaseURL: "https://scrimba-162f5-default-rtdb.europe-west1.firebasedatabase.app/" 

}; 

 

const app = initializeApp(appSettings); 

const database = getDatabase(app); 

const emergencyLogInDB = ref(database, "emergencyLog"); 

 

const inputLocationEl = document.getElementById("input-location"); 

const inputDateOccurredEl = document.getElementById("input-date-occurred"); 

const inputPuffsEl = document.getElementById("input-puffs"); 

const inputSymptomsEl = document.getElementById("input-symptoms"); 

const inputDurationMinutesEl = document.getElementById("input-duration-minutes"); 

const hospitalTripYesEl = document.getElementById("hospital-trip-yes"); 

const hospitalTripNoEl = document.getElementById("hospital-trip-no"); 

const addButtonEl = document.getElementById("add-emergency-button"); 

const emergencyLogListEl = document.getElementById("emergency-log-list"); 

 

addButtonEl.addEventListener("click", function() { 

let locationValue = inputLocationEl.value; 

let dateOccurredValue = inputDateOccurredEl.value; 

let puffsValue = parseInt(inputPuffsEl.value, 10); 

let symptomsValue = inputSymptomsEl.value; 

let durationMinutesValue = parseInt(inputDurationMinutesEl.value, 10); // Add this line 

let hospitalTripValue = hospitalTripYesEl.checked ? "Yes" : "No"; 

 

if ( 

locationValue.trim() !== "" && 

dateOccurredValue.trim() !== "" && 

puffsValue !== "" && 

symptomsValue.trim() !== "" && 

durationMinutesValue !== "" 

) { 

push(emergencyLogInDB, { 

location: locationValue, 

dateOccurred: dateOccurredValue, 

nbOfPuffs: puffsValue, 

symptoms: symptomsValue, 

duration: durationMinutesValue,  

hospitalTrip: hospitalTripValue // Fix the typo here 

}); 

clearInputFields(); 

} else { 

alert("Please fill in all the emergency details."); 

} 

}); 

 

onValue(emergencyLogInDB, function(snapshot) { 

if (snapshot.exists()) { 

let emergenciesArray = Object.entries(snapshot.val()); 

 

clearEmergencyLogListEl(); 

 

for (let i = 0; i < emergenciesArray.length; i++) { 

let currentEmergency = emergenciesArray[i]; 

appendEmergencyToLogListEl(currentEmergency); 

}  

} else { 

emergencyLogListEl.innerHTML = "No emergencies logged yet"; 

} 

}); 

 

function clearEmergencyLogListEl() { 

emergencyLogListEl.innerHTML = ""; 

} 

 

function clearInputFields() { 

inputLocationEl.value = ""; 

inputDateOccurredEl.value = ""; 

inputPuffsEl.value = ""; 

inputSymptomsEl.value = ""; 

inputDurationMinutesEl.value = ""; 

} 

 

function appendEmergencyToLogListEl(emergency) { 

let emergencyID = emergency[0]; 

let emergencyValue = emergency[1]; 

let newEl = document.createElement("li"); 

newEl.textContent = `Date Occurred: ${emergencyValue.dateOccurred} - Location: ${emergencyValue.location}`; 

if (emergencyLogListEl.children.length === 0) { 

emergencyLogListEl.innerHTML = "No emergencies logged yet"; 

} 

 

newEl.addEventListener("click", function() { 

if (confirm("Do you really want to do this?")) { 

// Remove the exact emergency entry from the database 

let exactLocationOfEmergencyInDB = ref(database, `emergencyLog/${emergencyID}`); 

remove(exactLocationOfEmergencyInDB); 

 

// Remove the clicked list item from the UI 

newEl.remove(); 

 

// If the list is empty after removal, display a message 

if (emergencyLogListEl.children.length === 0) { 

emergencyLogListEl.innerHTML = "No emergencies logged yet"; 

} 

} 

}); 

 

emergencyLogListEl.append(newEl); 

} 

 

 

 