// === ANIMATED COUNTER ===
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  // Trigger when visible
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) update();
  }, { threshold: 0.9 });
  observer.observe(counter);
});
