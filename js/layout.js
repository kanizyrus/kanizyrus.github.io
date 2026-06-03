// Kaniz.Dev — Shared Layout
// Renders nav and footer from a single source of truth.
// Include this script before main.js on every page.

(function() {
  'use strict';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return href === currentPage ? ' nav__link--active' : '';
  }

  // ── Nav ──
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.outerHTML = `
    <nav class="nav" id="main-nav">
      <div class="nav__inner">
        <a href="index.html" class="nav__logo">Kaniz<span class="dot">.</span>Dev</a>
        <button class="nav__toggle" id="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav__links" id="nav-links">
          <a href="blog.html" class="nav__link${isActive('blog.html')}">Essays</a>
          <a href="about.html" class="nav__link${isActive('about.html')}">About</a>
        </div>
      </div>
    </nav>`;
  }

  // ── Footer ──
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.outerHTML = `
    <footer class="footer">
      <div class="footer__inner">
        <p>&copy; ${new Date().getFullYear()} Kaniz.Dev</p>
        <div class="footer__links">
          <a href="blog.html">Essays</a>
          <a href="about.html">About</a>
          <a href="https://github.com/kanizyrus" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/ping-hsien-lin-2635a943/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>`;
  }

  // Post.html also gets active state on Essays
  if (currentPage === 'post.html') {
    const essayLink = document.querySelector('.nav__link[href="blog.html"]');
    if (essayLink) essayLink.classList.add('nav__link--active');
  }

})();
