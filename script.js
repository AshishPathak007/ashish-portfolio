// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// ========== FADE-IN ON SCROLL ==========
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ========== TYPING TEXT EFFECT ==========
const typingText = document.getElementById('typing-text');
const phrases = [
  'Product Leader',
  'Agile Champion',
  'Customer-Centric Thinker',
  'Strategic Builder'
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
    setTimeout(type, 800);
  }
}
type();

// ========== TOGGLE MOBILE NAV ==========
function toggleMenu() {
  document.querySelector('nav ul').classList.toggle('open');
}

// ========== PARTICLES BACKGROUND ==========
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, color: "#ffffff", opacity: 0.3 },
    move: { speed: 2 }
  }
});

// ========== KPI ANIMATIONS (CountUp.js) ==========
function animateKPIs() {
  const options = { duration: 2 };

  const kpi1 = new CountUp('kpi1', 35, options);
  const kpi2 = new CountUp('kpi2', 30, options);
  const kpi3 = new CountUp('kpi3', 12, options);

  if (!kpi1.error) kpi1.start();
  if (!kpi2.error) kpi2.start();
  if (!kpi3.error) kpi3.start();
}

document.addEventListener('DOMContentLoaded', () => {
  const kpiSection = document.querySelector('.impact-section');
  if (kpiSection) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateKPIs();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(kpiSection);
  }
});



// ========== KPI ANIMATIONS (Safe CountUp Setup) ==========
if (window.CountUp && window.CountUp.CountUp) {
  const CountUpSafe = window.CountUp.CountUp;

  function animateKPIs() {
    const options = { duration: 2 };

    const kpi1 = new CountUpSafe('kpi1', 35, options);
    const kpi2 = new CountUpSafe('kpi2', 30, options);
    const kpi3 = new CountUpSafe('kpi3', 12, options);

    if (!kpi1.error) kpi1.start();
    if (!kpi2.error) kpi2.start();
    if (!kpi3.error) kpi3.start();
  }

  const kpiSection = document.querySelector('.impact-section');
  if (kpiSection) {
    const kpiObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateKPIs();
        kpiObserver.disconnect();
      }
    }, { threshold: 0.5 });

    kpiObserver.observe(kpiSection);
  }
} else {
  console.warn("⚠️ CountUp.js library not available. Skipping KPI animation.");
}
