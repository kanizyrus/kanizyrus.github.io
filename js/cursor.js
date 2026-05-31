// Kaniz.Dev — Cursor Effect
// Blinking cursor animation on hero page

(function() {
  'use strict';

  const cursor = document.querySelector('.hero__cursor');
  if (!cursor) return;

  // The cursor blink is handled by CSS animation.
  // This JS file adds an optional typing effect for the tagline.

  const tagline = document.querySelector('.hero__tagline');
  if (!tagline) return;

  const originalText = tagline.innerHTML;
  const textContent = tagline.textContent.trim();

  // Only run typing effect on first visit (per session)
  const hasPlayed = sessionStorage.getItem('kaniz-typing-played');

  if (!hasPlayed) {
    tagline.innerHTML = '';
    tagline.style.visibility = 'visible';

    let charIndex = 0;
    const typingSpeed = 40;

    function typeChar() {
      if (charIndex < textContent.length) {
        tagline.textContent += textContent[charIndex];
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else {
        // Restore original HTML with spans for styling
        tagline.innerHTML = originalText;
        sessionStorage.setItem('kaniz-typing-played', 'true');
      }
    }

    // Small delay before typing starts
    setTimeout(typeChar, 800);
  }
})();
