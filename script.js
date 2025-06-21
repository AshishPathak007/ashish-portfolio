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

// ========== KPI COUNT-UP EFFECT ==========
function animateKPIs() {
  const kpi1 = new CountUp("kpi1", 35);
  const kpi2 = new CountUp("kpi2", 30);
  const kpi3 = new CountUp("kpi3", 12);
  kpi1.start();
  kpi2.start();
  kpi3.start();
}

document.addEventListener("DOMContentLoaded", () => {
  const impactSection = document.querySelector("#impact");
  if (impactSection) {
    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        animateKPIs();
        obs.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(impactSection);
  }
});


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
