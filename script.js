// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ASCII flowing background
const canvas = document.getElementById("asciiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = "01#$%&@";
let drops = [];

for (let i = 0; i < canvas.width / 10; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 40, 0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00aaff";
    ctx.font = "15px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * 10, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


const text = `Hello, I'm SgtAzureDev\n
Cybersecurity Enthusiast • Developer • Learner`;

let i = 0;
const speed = 45;

const el = document.getElementById("glitch-text");
const glitchContainer = document.querySelector(".glitch-type");

function type() {
    if (i < text.length) {
        const char = text[i];

        if (char === "\n") {
            el.innerHTML += "<br>";
        } else {
            el.innerHTML += char;
        }

        glitchContainer.setAttribute("data-text", el.innerText);
        i++;
        setTimeout(type, speed);
    } else {
        // soft micro-glitch pulses
        setInterval(() => {
            glitchContainer.style.filter = "blur(0.6px)";
            setTimeout(() => glitchContainer.style.filter = "blur(0px)", 120);
        }, 2000);
    }
}

type();