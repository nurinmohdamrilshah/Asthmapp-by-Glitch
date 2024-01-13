/* == Firebase == */
import { initializeApp } from './../node_modules/firebase/app';
import { getDatabase, ref, child, get, push , set} from './../node_modules/firebase/database';
import { getAuth, fetchSignInMethodsForEmail, createUserWithEmailAndPassword, onAuthStateChanged } from './../node_modules/firebase/auth';

console.log('Firebase loaded:', typeof initializeApp !== 'undefined' ? 'Yes' : 'No');

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

import Nav from "./Nav.js";
import SignIn from "./SignIn.js";
import forgotPassword from "./ForgotPassword.js";
import SignUp from "./SignUp.js";
import Home from "./Home.js"

Nav();
SignIn(firebaseConfig);
SignUp(firebaseConfig);
//Home(firebaseConfig);
forgotPassword(firebaseConfig);

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


