import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {

  // Plugins
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "posts",
      limit: 20,
    },
    metadata: {
      language: "en",
      title: "Kaniz.Dev",
      subtitle: "Ping-Hsien Lin. Writing about building software, leading people, and figuring things out.",
      base: "https://kanizyrus.github.io/",
      author: {
        name: "Ping-Hsien Lin",
      }
    }
  });

  // Passthrough copy — CSS, JS, and assets go through unchanged
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Blog post collection — sorted by date, newest first
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Date formatting filter
  eleventyConfig.addFilter("formatDate", function(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  });

  // Short date (2026.05)
  eleventyConfig.addFilter("shortDate", function(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${year}.${month}`;
  });

  // ISO date for sitemap and meta tags
  eleventyConfig.addFilter("isoDate", function(date) {
    return new Date(date).toISOString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
