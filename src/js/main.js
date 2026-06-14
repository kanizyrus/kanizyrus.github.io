// Kaniz.Dev — Main JS
// Navigation toggle

(function() {
  'use strict';

  // Mobile nav toggle — uses event delegation since nav is in layout
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('#nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggle && navLinks) {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
      return;
    }

    // Close menu when a nav link is clicked
    if (e.target.closest('.nav__link') && navLinks) {
      const navToggle = document.getElementById('nav-toggle');
      if (navToggle) {
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
      navLinks.classList.remove('open');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const navLinks = document.getElementById('nav-links');
      const navToggle = document.getElementById('nav-toggle');
      if (navLinks && navLinks.classList.contains('open')) {
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      }
    }
  });

})();
