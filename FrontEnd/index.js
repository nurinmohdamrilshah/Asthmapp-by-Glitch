import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push } from "firebase/database"; // Import the specific Firebase services you need
import { registerNewUser } from './SignUp';
console.log('Index Test');
console.log('FBS loaded:', typeof firebase !== 'undefined' ? 'Yes' : 'No');

const webPush = require('web-push')

/* === Firebase Setup === */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getDatabase(app);
const messagesRef = ref(db,'users');

// Element Selection
const signInBtn = document.getElementById("signInBtn");
const forgotPasswordLink = document.getElementById("textContainer2");
const signUpLink = document.getElementById("textContainer3");
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

// Navigation Function
function navigateTo(url){
    window.location.href = url;
}

// Event Listeners
if (signInBtn) {
    signInBtn.addEventListener("click", authSignInWithEmail);
}
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", () => navigateTo("./ForgotPassword.html"));
}
if (signUpLink) {
    signUpLink.addEventListener("click", () => navigateTo("./SignUp.html"));
}

// Authentication Function
function authSignInWithEmail(inputName, inputEmail) {
    const dbRef = firebase.database().ref();
    console.log("!!!")
    dbRef.child('users').get().then((snapshot) => {
        if (snapshot.exists()) {
            const users = snapshot.val();
            for (const userId in users) {
                const user = users[userId];
                if (user.name === inputName && user.email === inputEmail) {
                    console.log('Match found:', user);
                }
            }
        } else {
            console.log('No data available');
        }
    }).catch((error) => {
        console.error(error);
    });
}

//setting up for push notification: https://medium.com/@a7ul/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679
    const check = () => {
        if (!('serviceWorker' in navigator)) {
            throw new Error('No Service Worker support!')
        }
        if (!('PushManager' in window)) {
            throw new Error('No Push API Support!')
        }
    }
    const registerServiceWorker = async () => {
        const swRegistration = await navigator.serviceWorker.register('service-worker.js'); //notice the file name
        return swRegistration;
    }
    export const requestNotificationPermission = async () => {
        const permission = await window.Notification.requestPermission();
        if(permission !== 'granted'){
            alert('You need to allow notifications to receive dosage reminders!')
            throw new Error('Permission not granted for Notification');
        }
    }
    export const showLocalNotification = (title, body, swRegistration) => {
        const options = {
            body
        };
        swRegistration.showNotification(title, options);
    }

    const express = require('express')
    const cors = require('cors')
    const bodyParser = require('body-parser')
    const appExpress = express()
    appExpress.use(cors())
    appExpress.use(bodyParser.json())
    const port = 4000

    const subscriptionDB = { subscription: null }

    const saveToDatabase = async subscription => {
        subscriptionDB.subscription = subscription
    }

    appExpress.post('/save-subscription', async (req, res) => {
        const subscription = req.body
        await saveToDatabase(subscription)
        res.json({ message: 'success' })
    })

    const vapidKeys = {
        publicKey:'BL0MajlgAZHbKuGhHZJ_pEVZmvw71StnX8bn3CVo9_iskfUrTYMSY7kFWKK-VCdtsO68NPtvARVACw5tpoVf-zg',
        privateKey:'4ihHI7IaOlwPN6lGB3ka2qp0LRmKrDyNlSgC5CCnmKU'
    }

    webPush.setVapidDetails(
        'mailto:myuserid@email.com',
        vapidKeys.publicKey,
        vapidKeys.privateKey
    )
    const sendNotification = (subscription, dataToSend) => {
        webPush.sendNotification(subscription, dataToSend)
    }

    appExpress.get('/send-notification', (req, res) => {
        const subscription = dummyDb.subscription //get subscription from your databse here.
        const message = 'Hello World'
        sendNotification(subscription, message)
        res.json({ message: 'message sent' })
    })

    appExpress.listen(port, () => console.log(`Example app listening on port ${port}!`))

const main = async () => {
    check()
    const swRegistration = await registerServiceWorker();
    const permission =  await requestNotificationPermission();
    showLocalNotification('This is title', 'this is the message', swRegistration);
}
main()


