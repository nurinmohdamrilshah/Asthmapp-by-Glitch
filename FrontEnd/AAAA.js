    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import {child, get, getDatabase, push, ref, set} from "firebase/database";
    import { getAuth, onAuthStateChanged } from "firebase/auth";


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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const analytics = getAnalytics(app);

    const auth = getAuth();
    var currentUser = auth.currentUser;
    if (currentUser){
        var currentUID = currentUser.uid;
        var currentUserDB = ref(database, '/users/'+currentUID)
        var crisisLogDB = child(currentUserDB, '/crisisLog')
    }
    else{
        currentUID = 'testDosage2';
        currentUserDB = ref(database,'/users/'+currentUID);
        crisisLogDB = child(currentUserDB, '/crisisLog')
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = auth.currentUser;
            currentUID = user.uid;
            currentUserDB = ref(database,'/users/'+currentUID);
            crisisLogDB = child(currentUserDB, '/crisisLog')
        }
    })