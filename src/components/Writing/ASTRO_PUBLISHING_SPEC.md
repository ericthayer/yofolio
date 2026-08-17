# Astro Publishing

## Intent

Turn the Writing section into a Git-backed publishing system that lets one author
create a Markdown or MDX file, preview it locally, and publish it by committing
the file. Astro becomes the static-site build shell while the existing React and
MUI portfolio remains the interactive home-page experience.

## Author Experience

1. Run `npm run new:article -- "Article title"`.
2. Edit the generated draft in `src/content/writing/`.
3. Run `npm run dev` and preview the article locally.
4. Set `draft: false` and add `publishedAt` when ready.
5. Commit the content file; the production build publishes it.

No account, database, admin interface, or remote CMS is required.

## Architecture

- Astro owns HTML documents, static routes, content loading, and production
  output.
- `@astrojs/react` renders the existing `App` as a client-only React island on
  the home page so its current MUI and Emotion behavior is preserved.
- `@astrojs/mdx` enables optional MDX entries alongside Markdown.
- Astro's build-time content collection uses the local glob loader and a Zod
  schema for frontmatter validation and editor types.
- The home page queries article metadata in Astro and passes a serializable
  article array into the React Writing section.
- `src/pages/writing/[id].astro` generates one static detail route for each
  visible article and renders the collection entry body.
- Drafts are visible during local development and excluded from production
  index and detail routes.

## Content Contract

Each article requires:

- `title`: non-empty string.
- `summary`: non-empty string.
- `topics`: one or more values from Design, UX, Design Systems, and Frontend.
- `readingTime`: positive integer in minutes.
- `draft`: boolean.
- Optional `media`: validated featured images, captioned videos, and document
  links. Images require alternative text and dimensions; videos require captions.

Published entries also include `publishedAt`. The file name supplies the stable,
URL-safe entry ID.

## Accessibility

- Preserve the home page's current heading hierarchy and filter semantics.
- Article pages use one `h1`; Markdown body headings begin at `h2`.
- Provide a visible, semantic link back to the Writing index.
- Media uses semantic HTML, explicit image dimensions, lazy loading by default,
  native video controls, and captions tracks for video.
- Keep prose measure readable, links visibly identifiable, and focus styling
  supplied by MUI/theme defaults.
- Preserve reduced-motion handling for the React index transitions.

## Performance

- Prerender every route to static HTML.
- Hydrate only the React portfolio island; article bodies require no client
  JavaScript.
- Pass metadata only, not Markdown body content, into React.
- Keep media static and use browser-native loading, decoding, and video controls.
- Keep local build-time content as the source of truth; no runtime API request.

## Safety and Validation

- The scaffold command rejects empty titles and existing target files.
- Slugs are deterministic lowercase kebab case.
- Generated files default to `draft: true`.
- Production builds exclude drafts, while development includes them for preview.
- Frontmatter schema failures stop content sync and builds.

## Not Doing

- Browser-based content editing, authentication, or editorial roles.
- A database or third-party CMS.
- Comments, search, feeds, pagination, or analytics.
- Automated publishing outside the existing Git/deployment workflow.

## Acceptance Criteria

- `npm run dev`, `npm run build`, and `npm run lint` use the Astro project.
- The home page preserves the existing portfolio and reads Writing entries from
  the content collection.
- Every draft is previewable locally and absent from a production build.
- Every published article receives a static `/writing/{id}/` page.
- A generated article passes schema validation without manual frontmatter fixes.
- A clean npm install is reproducible.

## Changelog

- 2026-08-16: Initial specification for the Astro Git-backed publishing system.
