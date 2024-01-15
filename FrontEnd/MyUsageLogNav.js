//MyUsageLogNav.js
//includes all the navigation features of the My Usage Log page
var topNav = document.getElementById("back");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}

var topNav = document.getElementById("newInhalerIntakeBtn");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "./AddIntakePopup.html";
    });
}

var close = document.getElementById("closeBtn");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}
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