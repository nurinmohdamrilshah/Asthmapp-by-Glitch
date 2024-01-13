function loadAddCrisisContent() {
    fetch('./AddCrisis.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load AddCrisis.html');
            }
            return response.text();
        })
        .then(htmlData => {
            document.getElementById('addCrisisPopup').innerHTML = htmlData;
            return fetch('./AddCrisis.js');
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load AddCrisis.js');
            }
            return response.text();
        })
        .then(jsData => {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = jsData;

            document.getElementById('addCrisisPopup').appendChild(script);

            var overlay = document.getElementById('overlay');
            if (overlay) {
                overlay.style.backgroundColor = 'rgba(30, 56, 95, 0.8)';
                overlay.style.display = 'block';
            }

            document.getElementById('addCrisisPopup').style.display = 'block';
        })
        .catch(error => console.error('Error loading AddCrisis content:', error));
}



// Close popup event
var popupclose = document.getElementById("close");
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

// Add crisis button container event
var popupaddCrisisBtnContainer = document.getElementById("popupaddCrisisBtnContainer");
if (popupaddCrisisBtnContainer) {
    popupaddCrisisBtnContainer.addEventListener("click", function (e) {
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

