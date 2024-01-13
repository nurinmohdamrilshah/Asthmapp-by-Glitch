import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://scrimba-162f5-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const contactListInDB = ref(database, "contactList");

// Retrieve contact ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const contactID = urlParams.get('id');

const contactRef = ref(database, `contactList/${contactID}`);

onValue(contactRef, function(snapshot) {
    if (snapshot.exists()) {
        // Populate the HTML elements with the contact data for editing
        const contactData = snapshot.val();
        const nameInput = document.getElementById('name');
        const phonenbInput = document.getElementById('phonenb');
        const relationshipInput = document.getElementById('relationship');

        nameInput.value = contactData.name;
        phonenbInput.value = contactData.phonenb;
        relationshipInput.value = contactData.relationship;
    } else {
        console.error("Contact not found");
    }
});

// Handle the editing and updating logic
const updateButton = document.getElementById('update-button');
const backButton = document.getElementById('back-button');
const deleteButton = document.getElementById('delete-button');

updateButton.addEventListener('click', function() {
    // Retrieve the updated values from the HTML elements
    const updatedName = document.getElementById('name').value;
    const updatedPhonenb = document.getElementById('phonenb').value;
    const updatedRelationship = document.getElementById('relationship').value;

    // Update the contact data in the database
    const updatedContactData = {
        name: updatedName,
        phonenb: updatedPhonenb,
        relationship: updatedRelationship
    };

    set(ref(database, `contactList/${contactID}`), updatedContactData)
        .then(() => {
            console.log("Contact updated successfully");
            // Display success message
            const successMessage = document.createElement('p');
            successMessage.textContent = "Contact updated successfully";
            successMessage.style.color = "green"; // Customize the style if needed
            updateButton.parentNode.appendChild(successMessage);
        })
        .catch((error) => {
            console.error("Error updating contact:", error);
            // Display error message
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "Error updating contact";
            errorMessage.style.color = "red"; // Customize the style if needed
            updateButton.parentNode.appendChild(errorMessage);
        });
});

backButton.addEventListener('click', function() {
    window.location.href = 'emergencypg.html';
});

// Add event listener for the "Delete" button
deleteButton.addEventListener('click', function() {
    if (confirm("Are you sure you want to delete this contact?")) {
        // User clicked OK, proceed with deletion

        // Remove the contact data from the database
        set(ref(database, `contactList/${contactID}`), null)
            .then(() => {
                console.log("Contact deleted successfully");
                // Redirect to the contact list page after deletion
                window.location.href = 'listcont.html';
            })
            .catch((error) => {
                console.error("Error deleting contact:", error);
                // Display error message
                const errorMessage = document.createElement('p');
                errorMessage.textContent = "Error deleting contact";
                errorMessage.style.color = "red"; // Customize the style if needed
                deleteButton.parentNode.appendChild(errorMessage);
            });
    }
});





// function setupDefaultContacts() {
//     const defaultContacts = [
//         { contactnb: 1, name: 'John Smith', phonenb: '12345678910', relationship: 'Default Relationship 1' },
//         { contactnb: 2, name: 'John Smith', phonenb: '12345678910', relationship: 'Default Relationship 2' },
//         { contactnb: 3, name: 'John Smith', phonenb: '12345678910', relationship: 'Default Relationship 3' }
//     ];
//     defaultContacts.forEach((defaultContact) => {
//         const contactRef = ref(database, `contactList/${defaultContact.contactnb}`);
//         set(contactRef, defaultContact)
//             .then(() => {
//                 console.log(`Default contact for contactnb ${defaultContact.contactnb} set up successfully`);
//             })
//             .catch((error) => {
//                 console.error(`Error setting up default contact for contactnb ${defaultContact.contactnb}:`, error);
//             });
//     });
// }

// setupDefaultContacts();
















