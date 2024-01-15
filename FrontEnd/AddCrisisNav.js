//AddCrisisNav
//includes all the navigation features of the Add Crisis page

// Top navigation event
var topNav = document.getElementById("back");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "./Emergency1.html";
    });
}

// Close button event
var close = document.getElementById("close");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}
// Home button event
var home = document.getElementById("homeBtn");
if (home) {
    home.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

// Air quality button event
var cloud = document.getElementById("airQltyBtn");
if (cloud) {
    cloud.addEventListener("click", function (e) {
        window.location.href = "./AirQuality01.html";
    });
}

// Inhaler button event
var inhaler = document.getElementById("inhalerBtn");
if (inhaler) {
    inhaler.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}