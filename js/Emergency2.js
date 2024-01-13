var topNav = document.getElementById("back");
if (topNav) {
    topNav.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/Emergency1.html";
    });
}

var close = document.getElementById("close");
if (close) {
    close.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/Home.html";
    });
}

var home = document.getElementById("homeBtn");
if (home) {
    home.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/Home.html";
    });
}

var cloud = document.getElementById("airQltyBtn");
if (cloud) {
    cloud.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/AirQuality01.html";
    });
}

var inhaler = document.getElementById("inhalerBtn");
if (inhaler) {
    inhaler.addEventListener("click", function (e) {
        window.location.href = "../FrontEnd/MyInhaler.html";
    });
}
