// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Initialize Firebase
const appSettings = {
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

// Declare constants for form and color buttons
const crisisForm = document.getElementById('crisisForm');
const symptomButtons = document.querySelectorAll('.symptomButton');
const allergenButtons = document.querySelectorAll('.allergenButton');
const locationButtons = document.querySelectorAll('.locationButton');
const resolutionButtons = document.querySelectorAll('.resolutionButton'); // Added resolution buttons

// Attach submit event listener to the form
crisisForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    submitForm();
    resetForm();
});

// Toggle state when symptom buttons are clicked
symptomButtons.forEach(button => {
    button.addEventListener('click', function() {
        const symptom = this.value;
        const currentState = this.classList.contains('true');

        // Toggle the selected class and update button text
        this.classList.toggle('true', !currentState);
        this.classList.toggle('false', currentState);
    });
});

// Toggle state when allergen buttons are clicked
allergenButtons.forEach(button => {
    button.addEventListener('click', function() {
        const allergen = this.value;
        const currentState = this.classList.contains('true');

        // Toggle the selected class and update button text
        this.classList.toggle('true', !currentState);
        this.classList.toggle('false', currentState);
    });
});

// Toggle state when location buttons are clicked
locationButtons.forEach(button => {
    button.addEventListener('click', function() {
        const location = this.value;
        const currentState = this.classList.contains('true');

        // Toggle the selected class and update button text
        this.classList.toggle('true', !currentState);
        this.classList.toggle('false', currentState);
    });
});

// Toggle state when resolution buttons are clicked
resolutionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const resolution = this.value;
        const currentState = this.classList.contains('true');

        // Toggle the selected class and update button text
        this.classList.toggle('true', !currentState);
        this.classList.toggle('false', currentState);
    });
});

function submitForm() {
    const dateTimeInput = document.getElementById('dateTimeInput').value;
    const selectedSymptomButtons = document.querySelectorAll('.symptomButton.true');
    const selectedAllergenButtons = document.querySelectorAll('.allergenButton.true');
    const selectedLocationButtons = document.querySelectorAll('.locationButton.true');
    const selectedResolutionButtons = document.querySelectorAll('.resolutionButton.true'); // Added selected resolution buttons
    const resDateTimeInput = document.getElementById('resDateTimeInput').value; 

    // Reference to the database node where you want to store the data
    const dataRef = ref(database, 'addCrisisData');

    // Sample data to be added
    const newData = {
        dateTimeInput: dateTimeInput,
        resDateTimeInput: resDateTimeInput, // Added resolution time
        selected_symptoms: {},
        selected_allergens: {},
        selected_locations: {},
        selected_resolutions: {}
    };

    // Add symptoms:
    newData.selected_symptoms.wheezing = false;
    newData.selected_symptoms.cough = false;
    newData.selected_symptoms.chestCompressions = false;
    newData.selected_symptoms.dysponea = false;
    newData.selected_symptoms.fever = false;
    newData.selected_symptoms.tingle = false;
    newData.selected_symptoms.dizziness = false;

    if (selectedSymptomButtons.length > 0) {
        const selectedSymptoms = Array.from(selectedSymptomButtons).map(button => button.value);

        // Add each selected symptom with a value of true to selected_symptoms
        selectedSymptoms.forEach(symptom => {
            newData.selected_symptoms[symptom] = true;
        });
    }

    // Add allergens:
    newData.selected_allergens.smoke = false;
    newData.selected_allergens.animals = false;
    newData.selected_allergens.dust = false;
    newData.selected_allergens.airQuality = false;
    newData.selected_allergens.greenery = false;
    newData.selected_allergens.stress = false;
    newData.selected_allergens.tempHumidity = false;
    newData.selected_allergens.activities = false;
    newData.selected_allergens.perfumes = false;
    newData.selected_allergens.foodAllergy = false;

    if (selectedAllergenButtons.length > 0) {
        const selectedAllergens = Array.from(selectedAllergenButtons).map(button => button.value);

        // Add each selected allergen with a value of true to selected_allergens
        selectedAllergens.forEach(allergen => {
            newData.selected_allergens[allergen] = true;
        });
    }

    // Add locations:
    newData.selected_locations.home = false;
    newData.selected_locations.workSchool = false;
    newData.selected_locations.outside = false;
    newData.selected_locations.friendHouse = false;
    newData.selected_locations.other = false;

    if (selectedLocationButtons.length > 0) {
        const selectedLocations = Array.from(selectedLocationButtons).map(button => button.value);

        // Add each selected location with a value of true to selected_locations
        selectedLocations.forEach(location => {
            newData.selected_locations[location] = true;
        });
    }

    // Add resolutions:
    newData.selected_resolutions.inhaler = false;
    newData.selected_resolutions.hospitalization = false;
    newData.selected_resolutions.oxygenMask = false;
    newData.selected_resolutions.breathingExercises = false;

    if (selectedResolutionButtons.length > 0) {
        const selectedResolutions = Array.from(selectedResolutionButtons).map(button => button.value);

        // Add each selected resolution with a value of true to selected_resolutions
        selectedResolutions.forEach(resolution => {
            newData.selected_resolutions[resolution] = true;
        });
    }

    // Adding data using push (generates a unique key)
    push(dataRef, newData);
}
function resetForm() {
    // Clear the input values
    document.getElementById('dateTimeInput').value = '';
    document.getElementById('resDateTimeInput').value = '';

    // Reset symptom buttons
    symptomButtons.forEach(button => {
        button.classList.remove('true');
        button.classList.add('false');
    });

    // Reset allergen buttons
    allergenButtons.forEach(button => {
        button.classList.remove('true');
        button.classList.add('false');
    });

    // Reset location buttons
    locationButtons.forEach(button => {
        button.classList.remove('true');
        button.classList.add('false');
    });

    // Reset resolution buttons
    resolutionButtons.forEach(button => {
        button.classList.remove('true');
        button.classList.add('false');
    });

    // Clear the display result
    displayResult.textContent = '';
}