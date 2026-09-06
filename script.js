// ==============================
// Loading Screen
// ==============================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").classList.add("hide");
    }, 1800);
});


// ==============================
// Screen Navigation
// ==============================

const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

function nextScreen() {

    if (currentScreen >= screens.length - 1) return;

    screens[currentScreen].classList.remove("active");

    currentScreen++;

    screens[currentScreen].classList.add("active");
}


// ==============================
// Typing Effect
// ==============================

const text = "There are some things I should have said sooner...";
const typingElement = document.getElementById("typingText");

let textIndex = 0;

function typeText() {

    if (textIndex < text.length) {

        typingElement.textContent += text.charAt(textIndex);

        textIndex++;

        setTimeout(typeText, 55);

    }
}

setTimeout(typeText, 2200);


// ==============================
// Floating Hearts
// ==============================

const heartsContainer = document.querySelector(".hearts");

const heartSymbols = ["❤️", "💗", "💖", "💕", "♥"];

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.innerHTML =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 13000);
}

setInterval(createHeart, 650);


// ==============================
// YES BUTTON
// ==============================

function sayYes() {

    createHeartExplosion();

    setTimeout(() => {

        screens[currentScreen].classList.remove("active");

        currentScreen = screens.length - 1;

        screens[currentScreen].classList.add("active");

    }, 1200);
}


// ==============================
// Heart Explosion
// ==============================

function createHeartExplosion() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize =
            (14 + Math.random() * 25) + "px";

        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 300;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.4)`,
                    opacity: 0
                }
            ],
            {
                duration: 1300 + Math.random() * 700,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2200);
    }
}


// ==============================
// MAYBE BUTTON
// ==============================

function maybe() {

    const button = document.querySelector(".maybe");

    button.textContent = "Take your time ❤️";

    button.style.transform = "scale(1.05)";

    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 300);

}
