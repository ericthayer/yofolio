# Writing Publishing

The Writing section is a local, Git-backed publishing workflow powered by Astro
content collections. Markdown and MDX files are the CMS.

## Create a draft

```bash
npm run new:article -- "Your article title"
```

This creates `src/content/writing/your-article-title.md` with safe draft
defaults. The command will not overwrite an existing article.

## Edit and preview

```bash
npm run dev
```

Drafts appear in the home-page Writing index during development and have
previewable detail pages at `/writing/{file-name}/`. Production builds exclude
drafts from both surfaces.

## Frontmatter

```yaml
---
title: Your article title
summary: A concise description used by the index and page metadata.
topics:
  - design
  - ux
readingTime: 7
draft: true
# Optional featured media:
# media:
#   - type: image
#     src: /media/article-cover.webp
#     alt: Describe the image for someone who cannot see it.
#     width: 1600
#     height: 900
#     caption: Optional caption.
---
```

Supported topics are:

- `design`
- `ux`
- `design-systems`
- `frontend`

Astro validates every entry during content sync and build. Markdown body
headings should begin at `##` because the article layout supplies the page `h1`.

## Add media

Put local assets in `public/media/` and reference them with a root-relative URL
such as `/media/article-cover.webp`. Featured media can be declared in
frontmatter:

```yaml
media:
  - type: image
    src: /media/article-cover.webp
    alt: Describe the image for someone who cannot see it.
    width: 1600
    height: 900
    loading: lazy
    caption: Optional caption.
```

Images require meaningful alternative text and explicit dimensions. Use
`loading: eager` only for the first above-the-fold image; all other images should
remain lazy-loaded.

Videos require a title, dimensions, a poster when available, and a WebVTT
captions file:

```yaml
media:
  - type: video
    src: /media/walkthrough.mp4
    title: Product walkthrough
    width: 1920
    height: 1080
    poster: /media/walkthrough-poster.webp
    captions: /media/walkthrough.en.vtt
```

PDFs and other downloadable documents use the document type:

```yaml
media:
  - type: document
    src: /media/design-review.pdf
    title: Design review PDF
    description: A printable version of the decisions discussed in this article.
    mimeType: application/pdf
    label: Download the PDF
```

For media inside the article body, use semantic HTML in Markdown with explicit
`alt`, `width`, `height`, `loading`, and `decoding` attributes. Use MDX and
`ArticleMedia` when you need the validated video or document renderer.

## Publish

1. Finish the article and verify it locally.
2. Add a publication date and change the draft flag:

   ```yaml
   publishedAt: 2026-08-16
   draft: false
   ```

3. Run `npm run build`.
4. Commit the article file. The normal deployment publishes the static index
   entry and `/writing/{file-name}/` page.

## Use MDX when needed

Rename an entry to `.mdx` when it needs imported components. Prefer Markdown for
prose-only articles so authoring and rendering stay simple.
