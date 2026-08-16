# Copilot instructions for yofolio

## Project snapshot

- This is a one-page portfolio built with React 19, TypeScript, Vite, and MUI 7.3+.
- Styling uses MUI themes and Emotion. The current implementation is React/MUI, even where older starter-kit documentation describes Bootstrap, vanilla JavaScript, or SCSS.
- The source tree and `package.json` are authoritative for the current stack.
- Existing repository guidance lives in `.agents/AGENTS.md` and `.agents/rules/`; follow those rules when they are more specific than this summary.

## Commands

Run these from the repository root:

```bash
npm ci             # Install the lockfile-pinned dependencies
npm run dev        # Start the Vite development server
npm run build      # Type-check with tsc -b, then create the production bundle
npm run lint       # Run ESLint across the repository
npm run preview    # Serve the built dist/ output locally
```

There is currently no `test` script or test runner configured in `package.json`, so there is no supported single-test command. Use `npm run build` and `npm run lint` as the current automated checks.

### Workspace and command guardrails

- Use the active repository/workspace path supplied by the session and tool context. Do not reconstruct an absolute path from a branch or session name, because worktree directories can differ after a rename.
- Run package scripts exactly as declared in `package.json`. Before forwarding extra CLI flags, confirm that the underlying tool supports them; otherwise use the plain script command.
- Keep searches focused on relevant project paths such as `src/`, `.github/`, and `.agents/`. Exclude dependency and generated directories such as `node_modules/`, `dist/`, and coverage output unless the task specifically concerns them.

## Architecture

- `src/main.tsx` is the Vite entry point. It loads the DM Sans variable font and mounts `App` with the site title.
- `src/App.tsx` owns the page shell: sticky header/footer, navigation, theme-mode state, theme persistence, and composition of the page sections.
- `src/theme/` defines the design tokens and MUI component overrides. `theme.ts` creates light and dark themes from the palettes, typography, breakpoints, and branded components.
- Theme mode is `light | dark | system`, defaults to `system`, follows `prefers-color-scheme` in system mode, and persists the selection under the `themeMode` localStorage key.
- `src/components/Hero/` implements the hero as a compound component backed by `HeroContext`; `DefaultHero` is the page-level implementation.
- `src/components/List/NavList.tsx` is the shared, data-driven renderer for text navigation and icon links. Link data belongs in `src/data/navigationLinks.ts` or `src/data/socialLinks.ts`, not in repeated JSX.
- `src/components/PortfolioContent/` owns the current static portfolio sections and their typed, module-scope content: core strengths, CoBank experience, and the “Two Truths and a Fib” section.
- `src/assets/` contains local SVG icons and branding assets. Avoid introducing remote placeholder imagery into the portfolio.

### Composition flow

```text
main.tsx
  └─ App
      ├─ ThemeProvider (selected light/dark theme)
      ├─ AppBar
      │   ├─ NavList(mainNavLinks)
      │   └─ theme menu
      ├─ main
      │   ├─ DefaultHero
      │   └─ PortfolioContent
      │       ├─ Core strengths
      │       ├─ Featured CoBank experience
      │       └─ Two Truths and a Fib
      └─ footer
          ├─ NavList(footerNavLinks)
          └─ NavList(socialNavLinks, variant="icon")
```

The theme boundary is intentionally centralized in `App`: `theme/components.ts`
provides palettes, typography, breakpoints, and MUI overrides; `theme/theme.ts`
assembles light and dark theme objects; `App` selects the active object from
the persisted mode and system preference. The page content and navigation are
static data mapped into presentational components—there is no API, router, or
database layer in the current application.

## Repository-specific conventions

- Use strict TypeScript. `tsconfig.app.json` enables `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, and related checks; use `import type` for type-only imports.
- Follow the folder-per-component pattern under `src/components/`: use a PascalCase folder and `ComponentName.tsx`, keep component-local assets/docs beside it, and export reusable components through a local `index.ts`.
- Prefer functional components and hooks with explicit interfaces for props. Existing components commonly provide both a named export and a default export; preserve the local module’s established export style.
- Use direct MUI imports (for example, `@mui/material/Button`) and MUI v7 Grid syntax (`size={{ xs: 12, md: 6 }}`). Use the theme’s palette, typography, spacing, and breakpoints through `sx` rather than inventing one-off design tokens.
- Keep static mapped content at module scope and render it through typed arrays, as in `PortfolioContent` and `NavList`.
- Preserve semantic HTML and keyboard behavior: use anchors for navigation, buttons for actions, meaningful heading hierarchy, lists for grouped content, `alt` text and explicit dimensions for images, and accessible names for icon-only controls.
- New major components/features should include a colocated `SPEC.md` before implementation, following `.agents/rules/spec-driven-development.md`.
- Preserve established visual composition and theme behavior unless the task explicitly requests a design change. Avoid unrelated refactors.

## Useful repository docs

- `HERO_USAGE.md` — compound Hero API and composition examples.
- `NAVLIST_REFACTORING.md` — data-driven `NavList` variants and navigation data shape.
- `THEME_PERSISTENCE.md` — theme mode behavior and persistence details.
- `src/components/PortfolioContent/SPEC.md` — specification for the current portfolio content sections.
