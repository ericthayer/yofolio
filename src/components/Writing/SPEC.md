# Writing

## Intent

Present Eric Thayer's writing practice as part of the existing one-page portfolio,
with an editorial collection focused on design, UX, design systems, and frontend
development.

## Usage

`Writing` renders between the featured experience and the closing portfolio
content:

```tsx
<Writing />
```

The initial collection uses realistic draft entries that can be replaced with
published article metadata and URLs later.

## Architecture

- React 19 canary and Material UI 7.
- React and React DOM canary releases are exact-pinned. The repository npm
  configuration uses legacy peer resolution because MUI and Emotion declare
  stable React peer ranges that intentionally exclude prerelease builds.
- Static, typed article and topic data stored at module scope.
- Local topic-filter state managed by `useState`.
- The component introduces no router, remote data, or additional UI library.

## Content Model

Each article includes:

- A stable identifier.
- Title and concise summary.
- One or more topics.
- A draft or publication label.
- Estimated reading time.
- An optional URL for future published entries.

The topic controls include All, Design, UX, Design Systems, and Frontend.

## Accessibility

- Use a semantic `section` with the existing `#writing` navigation target.
- Preserve the page's single hero `h1`; use an `h2` for the section and `h3`
  headings for articles.
- Render the collection as a semantic list of `article` elements.
- Give the topic control group an accessible name and expose selection with
  native button semantics.
- Announce the visible article count after filtering with a polite live region.
- Keep every control at least 44 CSS pixels high and keyboard operable.

## Responsive Design

- Use a single editorial column on narrow screens.
- Move article metadata beside article content at medium widths without changing
  reading order.
- Allow topic controls to wrap without horizontal scrolling at 320 CSS pixels.
- Use only existing theme colors, typography, spacing, borders, and breakpoints.

## Performance

- Keep all static data outside the render function.
- Derive the filtered collection during render; the collection is intentionally
  small and does not require memoization.
- Import MUI components directly.
- Do not add images, network requests, or remote assets.

## Acceptance Criteria

- The existing Writing navigation link reaches the new section.
- The collection includes realistic draft entries spanning all four requested
  subject areas.
- Topic filtering updates the visible entries and count immediately.
- The layout remains readable at 320, 768, 1024, and 1440 CSS pixels.
- Heading hierarchy, focus order, accessible names, and color usage meet WCAG
  2.1 AA expectations.
- Existing build and lint commands pass.

## Changelog

- 2026-08-16: Documented exact canary pinning and npm peer resolution required
  for reproducible clean installs.
- 2026-08-16: Initial specification for the Writing section.
