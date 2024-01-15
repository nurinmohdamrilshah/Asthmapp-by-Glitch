//Navigation
// eventListeners.js
//Navigation App Header
var topNav = document.getElementById("back");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}

var close = document.getElementById("closeBtn");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}
var close = document.getElementById("closeBtn1");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}
var close = document.getElementById("applyBtn");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}
//Bottom navigation
var home = document.getElementById("homeBtn");
if (home) {
    home.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var cloud = document.getElementById("airQualityBtn");
if (cloud) {
    cloud.addEventListener("click", function (e) {
        window.location.href = "./AirQuality01.html";
    });
}

var hospital = document.getElementById("emergencyBtn");
if (hospital) {
    hospital.addEventListener("click", function (e) {
        window.location.href = "./Emergency1.html";
    });
}
// document.getElementById("closeBtn1")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");
// document.getElementById("applyBtn")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");
