// Function to Navigate Between Webpages
function Nav() {
    const pageLinks = {
        "signUpPageBtn": "SignUp.html",
        "forgotPasswordBtn": "ForgotPassword.html",
        "signInPageBtn": "index.html",
        "backPageBtn": "index.html",
        "homePageBtn": "home.html"
    };

    const navigationButtons = [
        document.getElementById("forgotPasswordBtn"),
        document.getElementById("signInPageBtn"),
        document.getElementById("signUpPageBtn"),
        document.getElementById("backPageBtn"),
        document.getElementById("homePageBtn")
    ];

    navigationButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener("click", function(e) {
                const id = btn.getAttribute("id");
                if (pageLinks[id]) {
                    window.location.href = pageLinks[id];
                } else {
                    console.error(`No link defined for button with id ${id}`);
                }
            });
        }
    });
}

export default Nav;