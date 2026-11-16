# charliemassry.com

Personal homepage and blog, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Layout

- `src/pages/index.astro`: homepage (`/`), styled by `src/styles/home.css`, background `public/photo.jpg`
- `src/content/blog/*.md`: blog posts, served at `/posts/<file-name>/`
- `src/pages/posts/`: post list (`/posts/`), post page, and RSS feed (`/posts/rss.xml`)
- `src/components/Bio.astro`: author bio shown on the blog, photo in `src/assets/pic.jpg`
- `src/site.ts`: site title, author, and social handles
- `public/CNAME`: custom domain

## Writing a post

Add `src/content/blog/<number>-<slug>.md`:

```md
---
title: "My new post"
date: "2026-11-15"
---

Post body in Markdown.
```

## Commands

```sh
npm install
npm run dev       # local server at http://localhost:4321
npm run build     # build to dist/
npm run preview   # serve the built site
```

## Deploying

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
The repo's Pages source must be set to "GitHub Actions".

`public/posts/sw.js` retires the service worker the old Gatsby blog installed; it can be deleted once old visitors have cycled through (a year or so).
