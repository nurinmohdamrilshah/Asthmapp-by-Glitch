// listcont.js 



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";



const appSettings = {

    databaseURL: "https://scrimba-162f5-default-rtdb.europe-west1.firebasedatabase.app/"

};



const app = initializeApp(appSettings);

const database = getDatabase(app);

const contactListRef = ref(database, "contactList");

const contactListEl = document.getElementById("contact-list");



onValue(contactListRef, function (snapshot) {

    if (snapshot.exists()) {

        let contactsArray = Object.entries(snapshot.val());



        clearContactListEl();



        for (let i = 0; i < contactsArray.length; i++) {

            let currentContact = contactsArray[i];

            appendContactToContactListEl(currentContact);

        }

    } else {

        // Handle the case where no contacts exist 

        clearContactListEl();

        contactListEl.innerHTML = "No contacts";



    }

});



// Function to clear the contact list element 

function clearContactListEl() {

    contactListEl.innerHTML = "";

}



function appendContactToContactListEl(contact) {

    let contactID = contact[0];

    let contactValue = contact[1];

    let newEl = document.createElement("li");

    newEl.textContent = `Name: ${contactValue.name} - Relationship: ${contactValue.relationship}`;

    newEl.style.cursor = "pointer";



    newEl.addEventListener("click", function () {

        // Navigate to editcont.html with the contact ID in the URL 

        window.location.href = `editcont.html?id=${contactID}`;

    });



    contactListEl.append(newEl);

}



