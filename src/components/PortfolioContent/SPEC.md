# Portfolio Content

## Intent

Replace placeholder portfolio copy with concise, resume-backed positioning for
Eric Thayer's work in AI-enabled design systems, agentic workflows, and
front-end architecture.

## Usage

`PortfolioContent` renders below the hero and contains:

- Three core-strength cards.
- A featured CoBank experience summary.
- Three statements for a "Two Truths and a Fib" prompt.

The existing hero remains responsible for the page title and introduction.

## Architecture

- React 19 and Material UI 7.
- Static, typed content stored at module scope.
- Semantic sections and lists with the existing theme's spacing, typography,
  color, and responsive Grid patterns.
- No new state, dependencies, assets, or network requests.

## Accessibility

- Preserve one page-level `h1` in the hero.
- Use sequential `h2` and `h3` headings.
- Render achievements and game statements as semantic lists.
- Keep static content non-interactive.
- Add scroll margin to anchored sections for sticky navigation.

## Performance

- Avoid remote placeholder imagery and additional bundle dependencies.
- Keep all static content hoisted outside component render functions.

## Acceptance Criteria

- Hero presents Principal Design Engineer / UX Systems Lead positioning and
  emphasizes AI-enabled systems and front-end engineering.
- Core strengths cover agentic systems, scalable front-end architecture, and
  accessibility/developer enablement.
- CoBank content includes 120+ users, 40% faster development, 37% fewer
  performance/accessibility errors, and 33% fewer drift-related fixes.
- The game includes two resume-backed achievements and one clearly framed,
  plausible exaggeration.
- Existing lint and build commands pass.

## Changelog

- 2026-08-16: Initial specification for the portfolio content refresh.
