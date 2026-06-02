// Kaniz.Dev — Blog Renderer
// Dynamically renders blog listing and individual post pages
// from the ContentAdapter (supports local JSON + headless CMS)

const BlogRenderer = (function() {
  'use strict';

  /**
   * Format date string to display format
   * @param {string} dateStr - ISO date string (YYYY-MM-DD)
   * @returns {string} Formatted date (e.g., "2026.05.20")
   */
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  /**
   * Create a blog card element for the listing page
   */
  function createBlogCard(post) {
    const card = document.createElement('a');
    card.href = `post.html?slug=${post.slug}`;
    card.className = 'blog-card';
    card.id = `blog-post-${post.slug}`;

    card.innerHTML = `
      <div class="blog-card__meta">
        <span class="blog-card__date">${formatDate(post.date)}</span>
        <span class="blog-card__dot"></span>
        <span class="blog-card__read-time">${post.readTime}</span>
      </div>
      <h2 class="blog-card__title">${post.title}</h2>
      <p class="blog-card__excerpt">${post.excerpt}</p>
      <div class="blog-card__category">
        <span class="tag">${post.category}</span>
      </div>
    `;

    return card;
  }

  /**
   * Render the blog listing page
   */
  async function renderListing(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    try {
      const posts = await ContentAdapter.getPosts();

      // Clear existing static content
      container.innerHTML = '';

      if (posts.length === 0) {
        container.innerHTML = '<p class="blog-empty">No posts yet. Check back soon.</p>';
        return;
      }

      posts.forEach(post => {
        container.appendChild(createBlogCard(post));
      });

      // Re-trigger scroll reveal for dynamically added content
      container.setAttribute('data-reveal-stagger', '');
      container.classList.add('visible');

    } catch (err) {
      console.error('Failed to load blog posts:', err);
      container.innerHTML = '<p class="blog-empty">Failed to load posts. Please try again later.</p>';
    }
  }

  /**
   * Render a single blog post page
   */
  async function renderPost() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    const titleEl = document.getElementById('post-title');
    const metaEl = document.getElementById('post-meta');
    const bodyEl = document.getElementById('post-body');
    const backLink = document.getElementById('post-back');

    if (!slug || !titleEl || !bodyEl) return;

    try {
      const post = await ContentAdapter.getPost(slug);

      if (!post) {
        titleEl.textContent = 'Post Not Found';
        bodyEl.innerHTML = '<p>The requested post could not be found.</p><p><a href="blog.html" class="link-arrow">← Back to Essays</a></p>';
        document.title = 'Not Found — Kaniz.Dev';
        return;
      }

      // Set page title
      document.title = `${post.title} — Kaniz.Dev`;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.excerpt);
      }

      // Render title
      titleEl.textContent = post.title;

      // Render meta info
      if (metaEl) {
        metaEl.innerHTML = `
          <span class="post-meta__date">${formatDate(post.date)}</span>
          <span class="post-meta__dot"></span>
          <span class="post-meta__read-time">${post.readTime}</span>
          <span class="post-meta__dot"></span>
          <span class="post-meta__category tag">${post.category}</span>
        `;
      }

      // Render body content
      bodyEl.innerHTML = post.content;

      // Trigger reveal animations
      document.querySelectorAll('[data-reveal]').forEach(el => {
        el.classList.add('visible');
      });

    } catch (err) {
      console.error('Failed to load post:', err);
      titleEl.textContent = 'Error';
      bodyEl.innerHTML = '<p>Failed to load this post. Please try again later.</p>';
    }
  }

  // Public API
  return {
    renderListing,
    renderPost
  };

})();
