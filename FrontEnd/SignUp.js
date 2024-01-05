// Assuming Firebase has been imported and initialized outside this function

export function registerNewUser() {
    // == Variables from HTML Inputs ==
    const emailAddress = document.getElementById("emailAddress").value;
    const userName = document.getElementById("userName").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("passwordConfirm").value;

    // == Data Validation ==
    if (!userName || userName.length < 3) {
        console.error("Username must be at least 3 characters long.");
        return;
    }
    if (!emailAddress || !emailAddress.includes('@')) {
        console.error("Invalid email format.");
        return;
    }
    if (!newPassword || newPassword.length < 6) {
        console.error("Password must be at least 6 characters long.");
        return;
    }
    if (newPassword !== confirmPassword) {
        console.error("Passwords do not match.");
        return;
    }

    // == Firebase User Registration (Recommended Approach) ==
    // Use Firebase Authentication for user registration.
    // This example is for Firebase Realtime Database only.

    // Generate a random user ID
    const userId = firebase.database().ref().child('users').push().key;

    // Create user object
    const userData = {
        id: userId,
        username: userName,
        email: emailAddress,
        // Password should be handled securely, not stored directly in the database.
    };

    // Save user data in Firebase Realtime Database
    firebase.database().ref('users/' + userId).set(userData)
        .then(() => console.log("User created successfully with ID:", userId))
        .catch((error) => console.error("Error creating user:", error));
}
