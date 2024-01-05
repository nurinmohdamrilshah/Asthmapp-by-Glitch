
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
function authSignInWithEmail() {
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log("Implement sign-in functionality");
    navigateTo("./Home.html");
}


