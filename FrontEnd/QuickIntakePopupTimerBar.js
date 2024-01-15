//QuickIntakePopupTimerBar.js
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

// Add event listener to cancel button
const cancelBtnContainer = document.getElementById('popupcancelBtnContainer');
cancelBtnContainer.addEventListener('click', () => {
    clearInterval(countdownInterval);
    window.location.href = "./Home.html";
});

// end of reference