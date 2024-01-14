
//Set up elements
var close = document.getElementById("close");
var hyperlink = document.getElementById("emergencyStepsMore");
var crisisStatsBtn = document.getElementById("crisisStatsBtn");
var home = document.getElementById("homeBtn");
var cloud = document.getElementById("airQltyBtn");
var inhaler = document.getElementById("inhalerBtn");

// Add event listeners to the elements
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

if (hyperlink) {
    hyperlink.addEventListener("click", function (e) {
        window.location.href = "./Emergency2.html";
    });
}

if (crisisStatsBtn) {
    crisisStatsBtn.addEventListener("click", function (e) {
        window.location.href = "./Emergency3.html";
    });
}

if (home) {
    home.addEventListener("click", function (e) {
        window.location.href = "./Home.html";
    });
}

if (cloud) {
    cloud.addEventListener("click", function (e) {
        window.location.href = "./AirQuality01.html";
    });
}

if (inhaler) {
    inhaler.addEventListener("click", function (e) {
        window.location.href = "./MyInhaler.html";
    });
}