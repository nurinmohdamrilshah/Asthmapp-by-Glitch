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

// New crisis log event
// New crisis log event
var newCrisisLog = document.getElementById("newCrisisLogBtn");
if (newCrisisLog) {
    newCrisisLog.addEventListener("click", function () {
        var popup = document.getElementById("addCrisisPopup");
        if (!popup) return;
        var popupStyle = popup.style;
        if (popupStyle) {
            popupStyle.display = "flex";
            popupStyle.zIndex = 100;
            popupStyle.backgroundColor = "rgba(30, 56, 95, 0.8)";
            popupStyle.alignItems = "center";
            popupStyle.justifyContent = "center";
        }
        popup.setAttribute("closable", "");

        var onClick = function (e) {
            if (e.target === popup && popup.hasAttribute("closable")) {
                popupStyle.display = "none";
            }
        };
        popup.addEventListener("click", onClick);
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

document.getElementById('newCrisisLogBtn').addEventListener('click', function() {
    loadAddCrisisContent();
});

document.getElementById("newCrisisLogBtn")?.addEventListener("click", () => window.location.href = "./AddCrisis.html");
