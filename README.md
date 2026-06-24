# ME — Two-Sided Portfolio

A single-page portfolio for GJD with one core mechanic: a draggable slider that morphs the page between two personas.

- **Engineer** — professional headshot, slate/navy theme, engineering profile, software projects.
- **Human** — fun headshot, coral/pink theme, personal bio, tactile builds (surfboards, shelves).

Dragging the divider across the portrait reveals the other headshot before/after-style while the theme, content, and projects showcase transform with it. Below the hero, projects reveal on scroll with image parallax.

## Stack

Vite · React 19 · TypeScript (strict) · Framer Motion (`motion`) · CSS modules + CSS custom properties · Vitest + React Testing Library

## Getting started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
```

## Scripts

| Script            | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server                |
| `npm test`        | Run the Vitest suite                     |
| `npm run lint`    | ESLint over the project                  |
| `npm run format`  | Prettier write over the project          |
| `npm run build`   | Type-check + production build to `dist/` |
| `npm run preview` | Serve the production build locally       |

## Architecture

A single Framer Motion value `progress` (0 = Engineer, 1 = Human), owned by `src/App.tsx`, drives everything:

- `src/components/PersonaPortrait/` — stacked headshots with a draggable divider; clip-path reveal.
- `src/components/PersonaTheme/` — interpolates CSS custom properties between the two palettes.
- `src/components/EngineerPanel/`, `src/components/HumanPanel/` — persona content sections.
- `src/components/ProjectsSection/`, `src/components/ProjectCard/` — persona-aware, scroll-animated showcase.

See `docs/specs/` for per-feature specs, and **`AGENTS.md` for project guidelines** (documentation rules, coding standards, testing requirements) — read it before contributing.

## Editing content

All copy and project data live in typed modules under `src/content/` — no component changes needed:

- `src/content/engineer.ts` — professional blurb and focus areas
- `src/content/human.ts` — personal bio items
- `src/content/projects.ts` — projects (each tagged `engineer` or `human`); project images and MP4 videos go in `src/assets/projects/`

Project cards accept still images, MP4 videos, and placeholders. A project with one media item renders without gallery dots; projects with multiple media items render dot controls. Autoplaying project videos must be muted, looped, and inline.

### Headshots

Replace the placeholders by dropping your photos at:

- `src/assets/headshot-pro.jpg` — professional headshot
- `src/assets/headshot-fun.jpg` — fun headshot

Both are cropped to a shared aspect ratio automatically.

## Deploying (Cloudflare Pages)

Static build, zero config: connect this repo in the Cloudflare Pages dashboard with build command `npm run build` and output directory `dist`.
