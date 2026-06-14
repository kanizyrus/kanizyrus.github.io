# Kaniz.Dev

Personal publication by Ping-Hsien Lin (Kaniz).

Essays on AI, engineering leadership, fintech, game systems, and the craft of building things that matter.

**Live:** [kanizyrus.github.io](https://kanizyrus.github.io) · **RSS:** [feed.xml](https://kanizyrus.github.io/feed.xml)

## Stack

- [Eleventy 3](https://www.11ty.dev/) — static site generator
- Editorial typography: Newsreader (serif), Inter (sans), JetBrains Mono (code)
- Warm off-white palette with amber accent
- Zero client-side frameworks — vanilla CSS + minimal JS

## Development

```bash
npm install        # first time only
npm run dev        # local server at http://localhost:8080
npm run build      # build to _site/
```

## Writing a New Essay

Create `src/posts/my-essay.md`:

```markdown
---
title: "My Essay Title"
date: 2026-06-14
excerpt: "One sentence description."
category: AI
readTime: "5 min read"
layout: post.njk
permalink: /essays/{{ page.fileSlug }}/
---

Markdown content here.
```

Push to `main` → builds and deploys automatically.

## Structure

```
src/
├── _includes/
│   ├── base.njk           # Shared layout (nav, footer, meta)
│   └── post.njk           # Essay layout
├── _data/
│   ├── site.json          # Site metadata + social links
│   └── year.js            # Copyright year
├── posts/                 # Essays (markdown + frontmatter)
│   ├── leadership-mistake.md
│   ├── pymlo-trust.md
│   ├── ai-tools-reality.md
│   └── ci-pipeline-story.md
├── css/                   # Design system (8 files)
├── js/                    # Nav toggle + scroll reveal
├── assets/                # Favicon, OG image
├── index.njk              # Homepage
├── about.njk              # About
├── blog.njk               # Essay listing
├── 404.njk                # Error page
├── sitemap.njk            # XML sitemap
└── robots.njk             # robots.txt

eleventy.config.js         # Eleventy config (ESM)
```

## Features

- **SEO**: Open Graph, Twitter cards, canonical URLs, sitemap, robots.txt
- **RSS**: Atom feed at `/feed.xml`
- **Accessibility**: Skip-to-content, focus-visible, WCAG AA contrast, aria-expanded, prefers-reduced-motion
- **Performance**: 0.35s build, zero client-side frameworks, 11 static HTML files

## Deployment

Pushes to `main` auto-deploy via GitHub Actions → GitHub Pages.

## License

© 2026 Kaniz.Dev
