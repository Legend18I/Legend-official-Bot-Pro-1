// Correct License Key
const correctKey = "QX@Legend";

// DOM Elements
const licenseScreen = document.getElementById("license-screen");
const botScreen = document.getElementById("bot-screen");
const licenseInput = document.getElementById("license-key");
const errorText = document.getElementById("error");
const loadingText = document.getElementById("loading");
const signalBox = document.getElementById("signal");
const currencySelect = document.getElementById("currency");
const timeframeSelect = document.getElementById("timeframe");

// Unlock Bot Function
function unlockBot() {
    const enteredKey = licenseInput.value.trim();

    if (enteredKey === correctKey) {
        licenseScreen.style.display = "none";
        botScreen.style.display = "block";
    } else {
        errorText.textContent = "❌ Invalid Key!";
    }
}

// Generate Signal
function generateSignal() {
    loadingText.style.display = "block";
    signalBox.style.display = "none";
    signalBox.textContent = "";

    // 3 seconds delay before showing signal
    setTimeout(() => {
        loadingText.style.display = "none";
        
        const signals = ["UP", "DOWN"];
        const randomSignal = signals[Math.floor(Math.random() * signals.length)];
        
        signalBox.textContent = randomSignal;
        signalBox.className = `signal ${randomSignal.toLowerCase()}`;
        signalBox.style.display = "inline-block";
    }, 3000);
}
