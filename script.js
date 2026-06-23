const birthdayMessage = "Happy Birthday! Thank you for always bringing so much energy and joy into my life. Here's to all the inside jokes, chaotic late-night conversations, and making many more unforgettable memories together. Have an incredible day! 🎉";

const speed = 40; 
let index = 0;

// Typewriter Functionality
function typeWriter() {
    if (index < birthdayMessage.length) {
        document.getElementById("birthday-letter").innerHTML += birthdayMessage.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Floaties (Hearts, Stars, Balloons) Generator
function createFloatingElement() {
    const container = document.getElementById("floating-container");
    const elements = ['🎈', '❤️', '✨', '🌸', '🤍'];
    
    const span = document.createElement("span");
    span.classList.add("floating-element");
    span.innerText = elements[Math.floor(Math.random() * elements.length)];
    
    // Randomize initial horizontal position and size scaling
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = Math.random() * 1.5 + 1 + "rem";
    
    // Randomize speed duration of individual elements
    const duration = Math.random() * 3 + 4; // 4s to 7s
    span.style.animationDuration = duration + "s";
    
    container.appendChild(span);
    
    // Clean up memory by deleting element after completion
    setTimeout(() => {
        span.remove();
    }, duration * 1000);
}

// Master Initialization Event when user clicks "Open Surprise"
document.getElementById("open-btn").addEventListener("click", () => {
    // 1. Hide the entry overlay smoothly
    const overlay = document.getElementById("surprise-overlay");
    overlay.style.opacity = "0";
    setTimeout(() => overlay.style.visibility = "hidden", 1000);
    
    // 2. Remove blur layout filter from main content
    document.getElementById("main-content").classList.remove("blurred");
    
    // 3. Fire up background music safely
    const music = document.getElementById("bg-music");
    music.play().catch(error => console.log("Audio playback waiting for permission:", error));
    
    // 4. Start the letter typing animation
    setTimeout(typeWriter, 500);
    
    // 5. Continuously launch animated floating elements
    setInterval(createFloatingElement, 400);
});