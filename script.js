const birthdayMessage = "Happy Birthday! Thank you for always bringing so much energy and joy into my life. Here's to all the inside jokes, chaotic late-night conversations, and making many more unforgettable memories together. Have an incredible day! 🎉";

const speed = 40; 
let index = 0;
let isUnlocked = false;

function typeWriter() {
    if (index < birthdayMessage.length) {
        document.getElementById("birthday-letter").innerHTML += birthdayMessage.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Floaties (Balloons & Hearts) Generator
function createFloatingElement() {
    const env = document.getElementById("animation-env");
    const symbols = ['🎈', '❤️', '🌸', '🤍', '✨'];
    
    const span = document.createElement("span");
    span.classList.add("floating-element");
    span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = Math.random() * 1.5 + 12 + "px"; // Solid sizing for mobile
    
    const duration = Math.random() * 3 + 5; // 5s to 8s loop
    span.style.animationDuration = duration + "s";
    
    env.appendChild(span);
    setTimeout(() => span.remove(), duration * 1000);
}

// Touch/Click Sparkle Trail Generator
function createTouchSparkle(x, y) {
    if (!isUnlocked) return; // Don't trigger sparkles while overlay is active
    
    const env = document.getElementById("animation-env");
    const sparkles = ['✨', '🤍', '🌸', '💖'];
    
    const particle = document.createElement("span");
    particle.classList.add("sparkle-trail");
    particle.innerText = sparkles[Math.floor(Math.random() * sparkles.length)];
    
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    
    env.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
}

// Listen to both Desktop clicks and Mobile touch drags
window.addEventListener('mousemove', (e) => createTouchSparkle(e.clientX, e.clientY));
window.addEventListener('touchmove', (e) => {
    if(e.touches.length > 0) {
        createTouchSparkle(e.touches[0].clientX, e.touches[0].clientY);
    }
});

// Unlock Site Actions
document.getElementById("open-btn").addEventListener("click", () => {
    isUnlocked = true;
    
    const overlay = document.getElementById("surprise-overlay");
    overlay.style.opacity = "0";
    setTimeout(() => overlay.style.visibility = "hidden", 1200);
    
    document.getElementById("main-content").classList.remove("blurred");
    
    const music = document.getElementById("bg-music");
    music.play().catch(err => console.log("Audio skipped or blocked:", err));
    
    setTimeout(typeWriter, 600);
    setInterval(createFloatingElement, 350);
});
