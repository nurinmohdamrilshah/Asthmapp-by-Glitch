//Timer bar
//Reference - taken from https://chat.openai.com/share/3759b693-44fe-4ed6-b6d3-a44a338071c3
// Set the countdown time in seconds
const countdownTime = 5;

// Get the countdown elements
const countdownBar = document.getElementById('countdown-bar');
const countdownProgress = document.getElementById('countdown-progress');

// Calculate the width of each 0.5 second interval in percentage
const widthPerInterval = 100 / (countdownTime * 2);

// Update the progress bar every 0.5 seconds
const updateProgressBar = () => {
    const elapsedIntervals = Math.max(0, elapsedMilliseconds() / 500);
    const progressWidth = widthPerInterval * elapsedIntervals;
    countdownProgress.style.width = `${progressWidth}%`;
};

// Function to calculate elapsed milliseconds
const elapsedMilliseconds = () => {
    return Date.now() - startTime;
};

// Start the countdown
const startTime = Date.now();
updateProgressBar();
const countdownInterval = setInterval(() => {
    updateProgressBar();

    // Check if the countdown is complete
    if (elapsedMilliseconds() >= countdownTime * 1000) {
        clearInterval(countdownInterval);
        window.location.href = "./Home.html";
    }
}, 500);
// end of reference




// popupHandler.js
import {Inhaler} from "./Inhaler.js";

var popupclose = document.getElementById("closeBtn");
if (popupclose) {
    popupclose.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(node && node.classList && node.classList.contains("popup-overlay"));
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

var popupcancelBtnContainer = document.getElementById("popupcancelBtnContainer");
if (popupcancelBtnContainer) {
    popupcancelBtnContainer.addEventListener("click", function (e) {
        Inhaler.favInhaler.removeLastIntake();
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(node && node.classList && node.classList.contains("popup-overlay"));
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

    let favInhalerName = document.getElementById("favInhalerVar");
    favInhalerName.textContent = "Favourite Inhaler: "+Inhaler.favInhaler.getName();
    const cancelBtn = document.getElementById("cancelBtn");

    cancelBtn.addEventListener('click', function () {
        Inhaler.favInhaler.removeLastIntake();
    })
//Navigation
// eventListeners.js
var popupclose = document.getElementById("closeBtn");
if (popupclose) {
    popupclose.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(node && node.classList && node.classList.contains("popup-overlay"));
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

var popupaddIntakeBtn = document.getElementById("addIntakeBtn");
if (popupaddIntakeBtn) {
    popupaddIntakeBtn.addEventListener("click", function (e) {
        var popup = e.currentTarget.parentNode;
        function isOverlay(node) {
            return !!(node && node.classList && node.classList.contains("popup-overlay"));
        }
        while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
        }
        if (isOverlay(popup)) {
            popup.style.display = "none";
        }
    });
}

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

var newInhalerIntake = document.getElementById("newInhalerIntakeBtn");
if (newInhalerIntake) {
    newInhalerIntake.addEventListener("click", function () {
        var popup = document.getElementById("addIntakePopup");
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

        var onClick =
            popup.onClick ||
            function (e) {
                if (e.target === popup && popup.hasAttribute("closable")) {
                    popupStyle.display = "none";
                }
            };
        popup.addEventListener("click", onClick);
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
document.getElementById("closeBtn1")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");
document.getElementById("applyBtn1")?.addEventListener("click", () => window.location.href = "./MyInhaler.html");
