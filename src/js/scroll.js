// Kaniz.Dev — Scroll Reveal
// IntersectionObserver-based scroll-triggered animations

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Make everything visible immediately
    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  // Reveal single elements
  const revealElements = document.querySelectorAll('[data-reveal]');
  const staggerElements = document.querySelectorAll('[data-reveal-stagger]');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
  staggerElements.forEach(el => revealObserver.observe(el));

})();
