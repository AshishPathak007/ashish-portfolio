// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Apply saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Toggle and save preference
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
  'Data-Driven Thinker',
  'Customer-Centric Builder'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  typingText.textContent = currentPhrase.substring(0, charIndex);

  if (!isDeleting && charIndex < currentPhrase.length) {
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


// ========== MOBILE NAV TOGGLE ==========
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

// ========== SCROLL ANIMATION INIT ==========
AOS.init({ duration: 1000, once: true });
