//AirQuality2Nav.js
//includes all the navigation features of the Air Quality 2 page

var topNav = document.getElementById("backBtn");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var close = document.getElementById("closeBtn");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var yourAreaBtn = document.getElementById("yourAreaBtn");
if (yourAreaBtn) {
    yourAreaBtn.addEventListener("click", function (e) {
        window.location.href = "./AirQuality01.html";
    });
}

var travelBtn = document.getElementById("travelBtn");
if (travelBtn) {
    travelBtn.addEventListener("click", function (e) {
        window.location.href = "./AirQuality3.html";
    });
}

var home = document.getElementById("HomeBtn");
if (home) {
    home.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var inhaler = document.getElementById("inhalerBtn");
if (inhaler) {
    inhaler.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}

var hospital = document.getElementById("emergencyBtn");
if (hospital) {
    hospital.addEventListener("click", function (e) {
        window.location.href = "./Emergency1.html";
    });
}