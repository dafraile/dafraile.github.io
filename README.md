# dafraile.github.io

Personal site built with React + Vite and deployed to GitHub Pages.

## Local development

1. Install dependencies:
   `npm install`
2. Run the dev server:
   `npm run dev`

## Journal workflow (Markdown -> site)

Journal posts are source-controlled in:
`content/posts/*.md`

The app reads posts from a generated file:
`data/blogPosts.ts`

Generate it manually:

```bash
npm run generate:posts
```

It also runs automatically before production builds via `prebuild`.

## Markdown post format

Each post must include frontmatter and body text:

```md
---
title: Your Post Title
date: 2026-02-16
summary: One sentence summary shown in listings.
tags: LLMs, Healthcare, Notes
external_link: https://example.com/original-post  # optional
---

First paragraph.

Second paragraph.
```

## Easy publish command

Use the publish script with any markdown file path:

```bash
npm run publish:post -- /absolute/or/relative/path/to/post.md
```

What it does:
1. Copies the file into `content/posts/` using `YYYY-MM-DD-title-slug.md` naming.
2. Regenerates `data/blogPosts.ts`.

Optional git actions:

```bash
npm run publish:post -- ./my-new-post.md --commit
npm run publish:post -- ./my-new-post.md --push
```

- `--commit`: commits the new post + generated data.
- `--push`: commits and pushes to `origin/main` (this triggers GitHub Pages deploy).
- `--message "..."`: custom commit message.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys the site to GitHub Pages.
