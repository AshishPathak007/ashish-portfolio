window.addEventListener('load', () => {


// Enable CountUp from CDN
const CountUp = window.CountUp.CountUp;

// ========== TYPING TEXT EFFECT ==========
const typingText = document.getElementById("typing-text");
const phrases = [
  "Senior Product Manager",
  "Driving IIOT, Cloud & Platform Products",
  "Agile & Data-Driven Leader"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = phrases[phraseIndex];
  typingText.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();



// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});
  });
