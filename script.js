// ================================
// Ayna Proposal — Sejut ❤️
// ================================

const screens = document.querySelectorAll(".screen");
let currentScreen = 0;


// ================================
// START EXPERIENCE
// ================================

function startExperience() {

    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.8;

        // Button চাপলেই গান শুরু হবে
        music.play().catch(() => {
            // Browser যদি audio block করে, website তবুও চলবে
        });
    }

    showScreen(1);
}


// ================================
// SHOW SCREEN
// ================================

function showScreen(index) {

    screens.forEach((screen) => {
        screen.classList.remove("active");
    });

    if (screens[index]) {
        screens[index].classList.add("active");
        currentScreen = index;
    }
}


// ================================
// NEXT SCREEN
// ================================

function nextScreen() {

    if (currentScreen < screens.length - 1) {
        showScreen(currentScreen + 1);
    }
}


// ================================
// YES BUTTON
// ================================

function sayYes() {

    createHearts();

    setTimeout(() => {
        showScreen(screens.length - 1);
    }, 500);
}


// ================================
// MAYBE BUTTON
// ================================

function maybe() {

    const button = document.querySelector(".maybe");

    if (!button) return;

    button.textContent = "Take your time ❤️";

    button.style.transform = "scale(1.05)";

    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 300);
}


// ================================
// FLOATING HEARTS
// ================================

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        const duration = 2500 + Math.random() * 2500;

        heart.animate(
            [
                {
                    transform: "translateY(0) scale(0.7)",
                    opacity: 0
                },
                {
                    transform: "translateY(-40vh) scale(1)",
                    opacity: 1
                },
                {
                    transform: "translateY(-110vh) scale(1.3)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}


// ================================
// INTRO TYPING EFFECT
// ================================

const typingElement = document.getElementById("typingText");

if (typingElement) {

    const text = "I have something to tell you...";

    let i = 0;

    function typeText() {

        if (i < text.length) {

            typingElement.textContent += text.charAt(i);

            i++;

            setTimeout(typeText, 80);
        }
    }

    setTimeout(typeText, 800);
}


// ================================
// LOADING SCREEN
// ================================

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        if (loading) {
            loading.classList.add("hide");
        }

    }, 1800);

});
