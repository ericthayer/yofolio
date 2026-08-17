![Yofolio: an open-source portfolio starter kit](https://github.com/user-attachments/assets/7bba3591-afdb-46f0-8349-fef9a6e28ee8)

# Yofolio: An Open-Source Portfolio Starter Kit

[yofolio.design](https://yofolio.design/)

Yofolio is Eric Thayer's portfolio and writing site. It combines a React and MUI
portfolio with an Astro-powered, Git-backed publishing workflow.

Astro owns the static site build and article routes. The existing React portfolio
is preserved as an interactive island, while Markdown and MDX files provide a
lightweight CMS-like authoring experience without a database or admin service.

## Features

- **Astro Publishing:** Generate static article pages from validated Markdown or
  MDX content collections.
- **React and MUI Portfolio:** Preserve the responsive one-page portfolio,
  interactive theme controls, and topic filtering.
- **Git-Backed Content:** Preview drafts locally and publish by changing
  frontmatter and committing the article.
- **Typed Content Contract:** Catch missing or invalid article metadata during
  content sync and production builds.

## Technical Details

- Astro 7 static output with `@astrojs/react` and `@astrojs/mdx`.
- React 19 canary, TypeScript, Material UI, and Emotion.
- Local content collection in `src/content/writing/`.
- Publishing instructions in
  [`src/components/Writing/PUBLISHING.md`](src/components/Writing/PUBLISHING.md).

## Commands

```bash
npm ci
npm run dev
npm run new:article -- "Article title"
npm test
npm run lint
npm run build
```

## Roadmap

### Q4 2024 ([release](https://github.com/ericthayer/portfolio-starter-kit/releases/tag/0.40.0))

- **Landing Page:** responsive layout, core functionality
- **Styled Theme:** SCSS mapping & theme system
- **Lighthouse:** monitring performance and accessibility
- **PWA:** passing Progressive Web App standards
- **Deploy Pipeline:** auto-deployed and hosted on Netlify

### Q1 2025

- **Resume Templates:** HTML, Word/PDF
- **Example Templates:** demo templates
    - **Case Study:** featured project article (in-depth, media-heavy)
    - **Broshure:** related work/skills example (consise and informative)
    - **Coverletter:** audience specific callout or engagement (brief and engaging)
    - **Postcard:** insights highlighting examples of expertise (compact-form, links to work)

### Q2 2025

- **Admin Panel:** access app configs (view-only)
    - **Application:** view application metadata
    - **Theme Builder:** view theme information
    - **Export Site:** export site via .zip
- **Onboarding:** documentation and supporting media

### Q3 2025

- **App Config:** update metadata & deploy build
- **CMS:** update & manage content types
- **Theme Builder:** update look & feel via UI

### Q4 2025 (v1.0.0-beta)

- **Multi-page Support:** create & deploy multiple templates
- **Vue/React Support:** optional SPA support
<!-- - **Visual Testing:** Chromatic integration -->
