// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Ignore empty # links
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();

      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background changes when scrolling
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});