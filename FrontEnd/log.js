import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const crisisListInDB = ref(database, "addCrisisData")
const crisisListEl = document.getElementById("crisis-list")

onValue(crisisListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearCrisisListEl();
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i];
            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1];
            
            appendItemToShoppingListEl(currentItem);
        }    
    } else {
        crisisListEl.innerHTML = "No Crisis Logged in the ";
    }
});

function clearCrisisListEl() {
    crisisListEl.innerHTML = "";
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0];
    let itemValue = item[1];
    
    let newEl = document.createElement("li");
    
    newEl.textContent = itemValue.dateTimeInput;
    
    newEl.addEventListener("click", function() {
        // Modify this part as needed
        window.location.href = 'DeleteCrisis.html';
    });
    
    crisisListEl.append(newEl);
}
