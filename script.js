// script.js for Ashish Pathak Portfolio

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
  const kpi1 = new CountUp("kpi1", 35, { duration: 2 });
  const kpi2 = new CountUp("kpi2", 30, { duration: 2 });
  const kpi3 = new CountUp("kpi3", 12, { duration: 2 });

  if (!kpi1.error) kpi1.start();
  if (!kpi2.error) kpi2.start();
  if (!kpi3.error) kpi3.start();
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
