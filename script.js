// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save theme preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// ========== FADE-IN ON SCROLL ==========
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Optional: Toast Notifications
// function showToast(message) {
//   const toast = document.createElement('div');
//   toast.className = 'toast';
//   toast.textContent = message;
//   document.body.appendChild(toast);
//   setTimeout(() => toast.classList.add('show'), 100);
//   setTimeout(() => {
//     toast.classList.remove('show');
//     setTimeout(() => toast.remove(), 500);
//   }, 3000);
// }
