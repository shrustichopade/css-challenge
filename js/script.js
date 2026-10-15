
"use strict";

// Set the current year automatically.
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Give the animation demo button a working interaction.
const magicButton = document.getElementById("magic-button");
const buttonMessage = document.getElementById("button-message");

if (magicButton && buttonMessage) {
    magicButton.addEventListener("click", () => {
        const activated = magicButton.dataset.activated === "true";

        magicButton.dataset.activated = String(!activated);

        if (!activated) {
            magicButton.textContent = "Effect activated ✓";
            buttonMessage.textContent = "Nice! Your interaction is working.";
        } else {
            magicButton.textContent = "Activate effect ↗";
            buttonMessage.textContent = "Demo reset. Try again!";
        }
    });
}
