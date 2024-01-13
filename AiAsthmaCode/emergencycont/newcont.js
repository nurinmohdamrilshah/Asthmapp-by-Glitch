// newcont.js 

 

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; 

import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; 

 

// Firebase configuration 

const appSettings = { 

databaseURL: "https://scrimba-162f5-default-rtdb.europe-west1.firebasedatabase.app/" 

}; 

 

const app = initializeApp(appSettings); 

const database = getDatabase(app); 

const contactListRef = ref(database, "contactList"); 

 

const inputNameEl = document.getElementById("input-name"); 

const inputPhoneNbEl = document.getElementById("input-phonenb"); 

const inputRelationshipEl = document.getElementById("input-relationship"); 

const addButtonEl = document.getElementById("add-button"); 

 

addButtonEl.addEventListener("click", function () { 

let inputNameValue = inputNameEl.value; 

let inputPhoneNbValue = parseInt(inputPhoneNbEl.value); 

let inputRelationshipValue = inputRelationshipEl.value; 

 

if (inputNameValue.trim() !== "" && !isNaN(inputPhoneNbValue) && inputRelationshipValue.trim() !== "") { 

// Push data to the database 

const newContactRef = push(contactListRef); 

set(newContactRef, { name: inputNameValue, phonenb: inputPhoneNbValue, relationship: inputRelationshipValue }) 

.then(() => { 

// Database update successful 

clearInputFields(); 

displayMessage("Contact added successfully!", "green"); 

}) 

.catch((error) => { 

// Handle errors 

console.error("Error adding contact to the database: ", error); 

displayMessage("An error occurred while adding the contact. Please try again.", "red"); 

}); 

} else { 

displayMessage("Please provide name, phone number, and relationship.", "red"); 

} 

}); 

 

// Handle updates or other functionality if needed based on the data 

onValue(contactListRef, function (snapshot) { 

// You can handle the snapshot data as needed, e.g., updating other parts of the UI 

// If you don't need to do anything here, you can omit this function 

}); 

 

function displayMessage(message, color) { 

// Create a message element 

const messageElement = document.createElement('p'); 

messageElement.textContent = message; 

messageElement.style.color = color; 

 

// Append the message to a container (you might need to create a container element if it doesn't exist) 

const messageContainer = document.getElementById("message-container"); 

messageContainer.innerHTML = ""; // Clear previous messages 

messageContainer.appendChild(messageElement); 

} 

 

function clearInputFields() { 

inputNameEl.value = ""; 

inputPhoneNbEl.value = ""; 

inputRelationshipEl.value = ""; 

} 

 

 