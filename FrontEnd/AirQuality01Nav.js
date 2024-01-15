//AirQuality01Nav.js
//includes all the navigation features of the Air Quality 01 page


var close = document.getElementById("closeBtn");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

var londonBtn = document.getElementById("londonBtn");
if (londonBtn) {
    londonBtn.addEventListener("click", function (e) {
        window.location.href = "./AirQuality2.html";
    });
}

var travelBtn = document.getElementById("travelBtn");
if (travelBtn) {
    travelBtn.addEventListener("click", function (e) {
        window.location.href = "./AirQuality3.html";
    });
}

var londonBtn1 = document.getElementById("londonBtn");
if (londonBtn1) {
    londonBtn1.addEventListener("click", function (e) {
        window.location.href = "./AirQuality2.html";
    });
}

var travelBtn1 = document.getElementById("travelBtn");
if (travelBtn1) {
    travelBtn1.addEventListener("click", function (e) {
        window.location.href = "./AirQuality3.html";
    });
}

var londonBtn2 = document.getElementById("londonBtn1");
if (londonBtn2) {
    londonBtn2.addEventListener("click", function (e) {
        window.location.href = "./AirQuality2.html";
    });
}

var travelBtn2 = document.getElementById("travelBtn1");
if (travelBtn2) {
    travelBtn2.addEventListener("click", function (e) {
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
var changelocation = document.getElementById("changeLocationBtn");
if (changelocation) {
    changelocation.addEventListener("click", function (e) {
        window.location.href = "./changelocation.html";
    });
}