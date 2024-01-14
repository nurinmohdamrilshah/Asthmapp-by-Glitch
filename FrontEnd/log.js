import { initializeApp } from "firebase/app"
import { getDatabase, ref, onValue } from "firebase/database"


function log(firebaseConfig){
    const app = initializeApp(firebaseConfig)

    const database = getDatabase(app)
    const crisisListInDB = ref(database, "addCrisisData")
    const crisisListEl = document.getElementById("crisis-list")

    onValue(crisisListInDB, function (snapshot) {
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

        newEl.addEventListener("click", function () {
            // Modify this part as needed
            window.location.href = 'DeleteCrisis.html';
        });

        crisisListEl.append(newEl);
    }
}

export default log
