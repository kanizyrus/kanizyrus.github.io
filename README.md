# Kaniz.Dev

Personal publication and digital garden by Ping-Hsien Lin (Kaniz).

Essays on AI, engineering leadership, fintech, game systems, and the craft of building things that matter.

**Live:** [https://kanizyrus.github.io](https://kanizyrus.github.io)

## Stack

- Vanilla HTML / CSS / JavaScript — no build step, no dependencies
- Editorial typography: Newsreader (serif), Inter (sans), JetBrains Mono (code)
- Warm graphite palette with amber accent
- Pluggable content adapter for headless CMS compatibility

## Local Development

```bash
# Python
python -m http.server 3000

# Node
npx serve .

# VS Code
# Right-click index.html → Open with Live Server
```

## Content

Blog posts live in `content/posts.json`. The content adapter (`js/content.js`) supports swapping to Contentful, Sanity, or any headless CMS by replacing the active adapter.

## Structure

```
├── index.html        # Editorial homepage
├── about.html        # Intellectual biography
├── blog.html         # Essay index
├── post.html         # Individual essay page
├── content/
│   └── posts.json    # Blog post data (local CMS)
├── css/
│   ├── tokens.css    # Design tokens
│   ├── reset.css     # CSS reset
│   ├── base.css      # Typography & layout
│   ├── components.css # Tags, buttons, loading
│   ├── nav.css       # Navigation
│   ├── hero.css      # Homepage sections
│   ├── pages.css     # About, essays, post styles
│   └── animations.css # Scroll reveal
├── js/
│   ├── main.js       # Nav toggle, active links
│   ├── scroll.js     # Intersection observer
│   ├── content.js    # CMS content adapter
│   └── blog.js       # Essay rendering
└── assets/
    └── favicon.svg
```

## Deployment

Pushes to `main` auto-deploy to GitHub Pages via Actions.

## License

© 2026 Kaniz.Dev
