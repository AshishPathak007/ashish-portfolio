
// Typing effect
const typingText = document.getElementById('typing-text');
const phrases = ['Product Leader', 'Strategic Thinker', 'Agile Champion'];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
function type() {
  const current = phrases[phraseIndex];
  typingText.textContent = current.substring(0, charIndex);
  if (!isDeleting && charIndex < current.length) {
    charIndex++; setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--; setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();
