// Kaniz.Dev — Content Adapter
// Pluggable content layer for headless CMS compatibility.
// Default: fetches from local JSON files.
// Swap the adapter to connect to Contentful, Sanity, Strapi, etc.

const ContentAdapter = (function() {
  'use strict';

  // =============================================
  // ADAPTER INTERFACE
  // To use a headless CMS, replace the methods in
  // the active adapter object below.
  // =============================================

  /**
   * Local JSON adapter (default)
   * Reads from /content/posts.json
   */
  const localAdapter = {
    name: 'local',

    async getPosts() {
      const res = await fetch('content/posts.json');
      if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
      const data = await res.json();
      return data.posts
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    async getPost(slug) {
      const res = await fetch('content/posts.json');
      if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
      const data = await res.json();
      return data.posts.find(p => p.slug === slug) || null;
    },

    async getPostsByCategory(category) {
      const posts = await this.getPosts();
      return posts.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
  };

  // =============================================
  // EXAMPLE: Contentful Adapter (uncomment to use)
  // =============================================
  // const contentfulAdapter = {
  //   name: 'contentful',
  //   spaceId: 'YOUR_SPACE_ID',
  //   accessToken: 'YOUR_ACCESS_TOKEN',
  //   contentType: 'blogPost',
  //
  //   async getPosts() {
  //     const url = `https://cdn.contentful.com/spaces/${this.spaceId}/entries?access_token=${this.accessToken}&content_type=${this.contentType}&order=-fields.date`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     return data.items.map(item => ({
  //       slug: item.fields.slug,
  //       title: item.fields.title,
  //       date: item.fields.date,
  //       excerpt: item.fields.excerpt,
  //       category: item.fields.category,
  //       readTime: item.fields.readTime,
  //       content: item.fields.content,
  //       author: item.fields.author || 'Kaniz'
  //     }));
  //   },
  //
  //   async getPost(slug) {
  //     const url = `https://cdn.contentful.com/spaces/${this.spaceId}/entries?access_token=${this.accessToken}&content_type=${this.contentType}&fields.slug=${slug}`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     if (!data.items.length) return null;
  //     const item = data.items[0];
  //     return {
  //       slug: item.fields.slug,
  //       title: item.fields.title,
  //       date: item.fields.date,
  //       excerpt: item.fields.excerpt,
  //       category: item.fields.category,
  //       readTime: item.fields.readTime,
  //       content: item.fields.content,
  //       author: item.fields.author || 'Kaniz'
  //     };
  //   },
  //
  //   async getPostsByCategory(category) {
  //     const posts = await this.getPosts();
  //     return posts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  //   }
  // };

  // =============================================
  // EXAMPLE: Sanity Adapter (uncomment to use)
  // =============================================
  // const sanityAdapter = {
  //   name: 'sanity',
  //   projectId: 'YOUR_PROJECT_ID',
  //   dataset: 'production',
  //   apiVersion: '2024-01-01',
  //
  //   async _query(groq) {
  //     const encoded = encodeURIComponent(groq);
  //     const url = `https://${this.projectId}.api.sanity.io/v${this.apiVersion}/data/query/${this.dataset}?query=${encoded}`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     return data.result;
  //   },
  //
  //   async getPosts() {
  //     return this._query('*[_type == "post"] | order(date desc) { slug, title, date, excerpt, category, readTime, content, author }');
  //   },
  //
  //   async getPost(slug) {
  //     const results = await this._query(`*[_type == "post" && slug.current == "${slug}"][0]`);
  //     return results || null;
  //   },
  //
  //   async getPostsByCategory(category) {
  //     return this._query(`*[_type == "post" && category == "${category}"] | order(date desc)`);
  //   }
  // };

  // =============================================
  // ACTIVE ADAPTER — Change this to swap CMS
  // =============================================
  const activeAdapter = localAdapter;

  // Public API
  return {
    getPosts: () => activeAdapter.getPosts(),
    getPost: (slug) => activeAdapter.getPost(slug),
    getPostsByCategory: (cat) => activeAdapter.getPostsByCategory(cat),
    getAdapterName: () => activeAdapter.name
  };

})();
