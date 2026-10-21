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
draft: true  # optional; drafts are skipped unless INCLUDE_DRAFTS=1 npm run generate:posts
---

First paragraph.

Second paragraph.
```

## Now section (mini-posts)

Short updates about papers, public repos and side projects live in
`content/now/*.md` and are generated into `data/nowItems.ts` by
`npm run generate:now` (also runs before production builds). The four
newest appear on the homepage; the full list is at `#now`.

```md
---
title: Short title
date: 2026-10-04
kind: paper | code | project
summary: One sentence shown on the homepage card.
link: https://...            # primary link (paper, demo, site); optional
link_label: Demo             # optional; defaults to Read / Repo / Open by kind
github: https://github.com/dafraile/...   # optional
tags: Agents, Oversight
draft: true                  # optional
---

One or two short paragraphs. Keep it under ~100 words.
```

To publish a new mini-post:

1. Create `content/now/YYYY-MM-DD-short-slug.md` with the frontmatter above (the filename becomes the item id).
2. Run `npm run generate:now` and check it locally with `npm run dev` (or `npm run build`).
3. Commit the markdown file together with the regenerated `data/nowItems.ts`, then push to `main`. The Pages deploy regenerates and publishes it.

Add `draft: true` to keep an entry out of the build; preview drafts with `INCLUDE_DRAFTS=1 npm run generate:now`.

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
