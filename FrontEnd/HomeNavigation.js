console.log("Home")
function setupNavigation() {
    const navigationMap = {
        "settingsBtn": "./Settings.html",
        "quickIntakeBtn": "./QuickIntakePopup.html",
        "crisisStepsBtn": "./Emergency2.html",
        "airQltyBar": "./AirQuality01.html",
        "inhalerBar": "./MyInhaler.html",
        "emergencyBar": "./Emergency1.html",
        "999Home": "./Emergency1.html"
    };

    Object.keys(navigationMap).forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", () => {
                window.location.href = navigationMap[id];
            });
        }
    });
}

// Call the function to set up navigation
setupNavigation();
//
// const settingsBtn = document.getElementById("settingsBtn")
// if (settingsBtn){
//     settingsBtn.addEventListener("click", function(event){
//         console.log("Settings Button Clicked");
//         window.location.href = "./Settings.html"
//     });
// }
//
// const quickIntakeBtn = document.getElementById("quickIntakeBtn")
// if (quickIntakeBtn){
//     quickIntakeBtn.addEventListener("click", function(event){
//         console.log("Quick Intake Button Clicked");
//         window.location.href = "./QuickIntakePopup.html"
//     });
// }
//
// const crisisStepsButton = document.getElementById("crisisStepsBtn")
// if (crisisStepsButton){
//     crisisStepsButton.addEventListener("click", function(event){
//         console.log("Crisis Steps Button Clicked");
//         window.location.href = "./AddCrisis.html"
//     });
// }
//
// const airQualityBar = document.getElementById("airQltyBar")
// if (airQualityBar){
//     airQualityBar.addEventListener("click", function(event){
//         console.log("Air Quality Button Clicked");
//         window.location.href = "./AirQuality2.html"
//     });
// }
//
// const inhalerBar = document.getElementById("inhalerBar")
// if (inhalerBar){
//     inhalerBar.addEventListener("click", function(event){
//         console.log("Inhaler Button Clicked");
//         window.location.href = "./MyInhaler.html"
//     });
// }
//
// const emergencyBar = document.getElementById("emergencyBar")
// if (emergencyBar){
//     emergencyBar.addEventListener("click", function(event){
//         console.log("Emergency Button Clicked");
//         window.location.href = "./Emergency1.html"
//     });
// }
