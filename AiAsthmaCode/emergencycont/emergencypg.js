import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://scrimba-162f5-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const contactListInDB = ref(database, "contactList")

const inputFieldEl = document.getElementById("input-field")
const editButton1El = document.getElementById("edit-cont1-button")
const editButton2El = document.getElementById("edit-cont2-button")
const editButton3El = document.getElementById("edit-cont3-button")
const contactListEl = document.getElementById("contactList")


editButton1El.addEventListener("click", function() {
    window.location.href = 'editcont1.html?id=1';
});


editButton2El.addEventListener("click", function() {
    window.location.href = 'editcont2.html?id=2';
});

editButton3El.addEventListener("click", function() {
    window.location.href = 'editcont3.html?id=3';
});
