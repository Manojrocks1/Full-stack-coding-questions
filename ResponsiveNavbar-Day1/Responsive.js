const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle Navigation on Click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});