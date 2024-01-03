// Function to close a popup by traversing up the DOM tree
function closePopup(event) {
    let popup = event.currentTarget.parentNode;
    while (popup && !popup.classList.contains("popup-overlay")) {
        popup = popup.parentNode;
    }
    if (popup) {
        popup.style.display = "none";
    }
}

// Function to open a popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    const popupStyle = popup.style;
    popupStyle.display = "flex";
    popupStyle.zIndex = "100";
    popupStyle.backgroundColor = "rgba(30, 56, 95, 0.8)";
    popupStyle.alignItems = "center";
    popupStyle.justifyContent = "center";
    popup.setAttribute("closable", "");

    const onClick = function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
            popupStyle.display = "none";
        }
    };
    popup.addEventListener("click", onClick);
}

// Attach event listeners
document.getElementById("closeBtn")?.addEventListener("click", closePopup);
document.getElementById("addIntakeBtn")?.addEventListener("click", closePopup);
document.getElementById("applyBtn")?.addEventListener("click", closePopup);
document.getElementById("newInhalerIntakeBtn")?.addEventListener("click", () => openPopup("addIntakePopup"));
document.getElementById("editInhalerBtn")?.addEventListener("click", () => openPopup("addInhalerPopup"));
document.getElementById("newInhalerBtn")?.addEventListener("click", () => openPopup("addInhalerPopup"));
document.getElementById("usageHistoryBtn")?.addEventListener("click", () => window.location.href = "./MyUsageLog.html");
document.getElementById("homeBtn")?.addEventListener("click", () => window.location.href = "./Home.html");
document.getElementById("cloudContainer")?.addEventListener("click", () => window.location.href = "./AirQuality01.html");
document.getElementById("emergencyBtn")?.addEventListener("click", () => window.location.href = "./Emergency1.html");

//Display inhaler list as script inside html

//





