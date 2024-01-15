//QuickIntakePopupNav.js
//includes all the navigation features of the Quick Intake Popup page

//AddIntakePopupNav.js
//includes all the navigation features of the Add Intake Popup page

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
var close = document.getElementById("popupcancelBtnContainer");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
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

