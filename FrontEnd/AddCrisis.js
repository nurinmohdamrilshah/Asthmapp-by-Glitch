//Add Crisis.js
// import configureButtonInteractions from "./AddCrisisButtons.js";

//Import firebase functions from module bundler
import {initializeApp} from "firebase/app";
import {child, get, getDatabase, push, ref} from "firebase/database";
import {getAuth, onAuthStateChanged} from "firebase/auth";

//Add Crisis page code
function AddCrisis(firebaseConfig) {
    // Initialize Firebase
    console.log("AddCrisis")
    // configureButtonInteractions()
    // const app = initializeApp(firebaseConfig);
    // const database = getDatabase(app);
    // const auth = getAuth();
    // var currentUser = auth.currentUser;
    // let currentUserDB, crisisDB;
    //
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         currentUser = auth.currentUser;
    //         const currentUID = user.uid;
    //
    //         currentUserDB = ref(database, '/users/' + currentUID);
    //         crisisDB = child(currentUserDB, '/addCrisis');
    //     }
    // })
    // // Declare constants for form and color buttons
    // const crisisForm = document.getElementById('crisisForm');
    // const symptomButtons = document.querySelectorAll('.symptomButton');
    // const allergenButtons = document.querySelectorAll('.allergenButton');
    // const locationButtons = document.querySelectorAll('.locationButton');
    // const resolutionButtons = document.querySelectorAll('.resolutionButton'); // Added resolution buttons
    //
    // // Attach submit event listener to the form
    // crisisForm.addEventListener('submit', function (e) {
    //     e.preventDefault(); // Prevent the default form submission
    //     submitForm();
    //     resetForm();
    // });
    //
    //
    // symptomButtons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         this.classList.toggle('true', !this.classList.contains('true'));
    //         this.classList.toggle('false', this.classList.contains('true'));
    //     });
    // });
    //
    // allergenButtons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         this.classList.toggle('true', !this.classList.contains('true'));
    //         this.classList.toggle('false', this.classList.contains('true'));
    //     });
    // });
    //
    // // Toggle state when location buttons are clicked
    // locationButtons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         this.classList.toggle('true', !this.classList.contains('true'));
    //         this.classList.toggle('false', this.classList.contains('true'));
    //     });
    // });
    //
    // // Toggle state when resolution buttons are clicked
    // resolutionButtons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         this.classList.toggle('true', !this.classList.contains('true'));
    //         this.classList.toggle('false', this.classList.contains('true'));
    //     });
    // });
    //
    // function submitForm() {
    //     const dateTimeInput = document.getElementById('dateTimeInput').value;
    //     const resDateTimeInput = document.getElementById('resDateTimeInput').value;
    //
    //     let addCrisisDB = child(currentUserDB, '/addCrisis/');
    //
    //     // Create an object with default values for all options
    //     const defaultOptions = {
    //         symptoms: ['wheezing', 'cough', 'chestCompressions', 'dysponea', 'fever', 'tingle', 'dizziness'],
    //         allergens: ['smoke', 'animals', 'dust', 'airQuality', 'greenery', 'stress', 'tempHumidity', 'activities', 'perfumes', 'foodAllergy'],
    //         locations: ['home', 'workSchool', 'outside', 'friendHouse', 'other'],
    //         resolutions: ['inhaler', 'hospitalization', 'oxygenMask', 'breathingExercises']
    //     };
    //
    //     // Initialize the data structure
    //     const newData = {
    //         dateTimeInput,
    //         resDateTimeInput,
    //         selected_symptoms: {},
    //         selected_allergens: {},
    //         selected_locations: {},
    //         selected_resolutions: {}
    //     };
    //
    //     // Set default values
    //     defaultOptions.symptoms.forEach(symptom => newData.selected_symptoms[symptom] = false);
    //     defaultOptions.allergens.forEach(allergen => newData.selected_allergens[allergen] = false);
    //     defaultOptions.locations.forEach(location => newData.selected_locations[location] = false);
    //     defaultOptions.resolutions.forEach(resolution => newData.selected_resolutions[resolution] = false);
    //
    //     // Function to update selected options
    //     const updateSelectedOptions = (selector, dataCategory) => {
    //         document.querySelectorAll(selector).forEach(button => {
    //             if (button.classList.contains('true')) {
    // //                 newData[dataCategory][button.value] = true;
    // //             }
    // //         });
    // //     };
    // //
    // //     // Update data based on selected buttons
    // //     updateSelectedOptions('.symptomButton.true', 'selected_symptoms');
    // //     updateSelectedOptions('.allergenButton.true', 'selected_allergens');
    // //     updateSelectedOptions('.locationButton.true', 'selected_locations');
    // //     updateSelectedOptions('.resolutionButton.true', 'selected_resolutions');
    // //
    // //     // Adding data using push (generates a unique key)
    // //     push(addCrisisDB, newData);
    // }
    //
    //
    // function resetForm() {
    //     // Clear the input values
    //     document.getElementById('dateTimeInput').value = '';
    //     document.getElementById('resDateTimeInput').value = '';
    //
    //     // Function to reset button states
    //     const resetButtonStates = (buttons) => {
    //         buttons.forEach(button => {
    //             button.classList.remove('true');
    //             button.classList.add('false');
    //         });
    //     };
    //
    //     // Reset all button states
    //     resetButtonStates(document.querySelectorAll('.symptomButton'));
    //     resetButtonStates(document.querySelectorAll('.allergenButton'));
    //     resetButtonStates(document.querySelectorAll('.locationButton'));
    //     resetButtonStates(document.querySelectorAll('.resolutionButton'));
    //
    //     // Clear the display result
    //     const displayResult = document.getElementById('displayResult'); // Assuming there's an element with this ID
    //     if (displayResult) {
    //         displayResult.textContent = '';
    //     }
    // }
    //
    // function setupPopupCloseListener(elementId) {
    //     var element = document.getElementById(elementId);
    //     if (element) {
    //         element.addEventListener("click", function (e) {
    //             var popup = e.currentTarget.parentNode;
    //
    //             function isOverlay(node) {
    //                 return node && node.classList.contains("popup-overlay");
    //             }
    //
    //             while (popup && !isOverlay(popup)) {
    //                 popup = popup.parentNode;
    //             }
    //
    //             if (popup && isOverlay(popup)) {
    //                 popup.style.display = "none";
    //             }
    //         });
    //     }
    // }

// // Set up listeners for closing popups
//     setupPopupCloseListener("close");
//     setupPopupCloseListener("popupaddCrisisBtnContainer");
}

export default AddCrisis;