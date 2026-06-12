# Project Guidelines

These guidelines apply to every change in this repository — human or agent. Read this file before writing code.

## Project overview

A single-page personal portfolio site for GJD with one core mechanic: two personas connected by an interactive drag slider.

- **Engineer** (professional headshot, cool slate/navy theme): engineering profile and software projects.
- **Human** (fun headshot, warm coral/pink theme): personal bio and tactile/creative projects.

A single `progress` motion value (0 = Engineer, 1 = Human) drives the headshot reveal, theme colors, visible content panel, and which projects are showcased. Below the hero, a projects section animates with scroll (reveal-on-scroll, image parallax).

**Stack:** Vite + React 19 + TypeScript (strict), Framer Motion (`motion` package), CSS modules + CSS custom properties, Vitest + React Testing Library. Deployed as a static build to Cloudflare Pages.

## Documentation rules

- **README**: update `README.md` in the same change as anything it describes — setup steps, npm scripts, architecture, content editing, deployment. A PR that changes behavior but not the README is incomplete.
- **Feature specs**: every non-trivial feature gets a spec in `docs/specs/<feature-name>.md`, created _before_ implementation and updated whenever the feature's behavior changes. Copy `docs/specs/_TEMPLATE.md` to start. A spec that no longer matches the code is a bug.
- Specs describe intent and behavior, not implementation history. Keep them current, not chronological.

## TypeScript / React guidelines

- TypeScript `strict` mode stays on. No `any` — use `unknown` plus narrowing. Exported functions and components get explicit types; locals rely on inference.
- Function components only; logic lives in hooks. One component per file. Props interfaces are named `<Component>Props`.
- **Content lives in `src/content/`**, in typed data modules — never hard-coded inside components. Editing a blurb or adding a project must never require touching a component.
- Styling: CSS modules per component (`Component.module.css`) plus global CSS custom properties for theming. The persona theme works by interpolating CSS variables — components must reference `var(--...)` tokens, never raw persona colors.
- Animation: Framer Motion (`motion`) is the only animation dependency. Every animation must honor `prefers-reduced-motion` (use `useReducedMotion()`; fall back to instant changes or simple fades).
- Accessibility is non-negotiable: all interactions keyboard-operable, semantic HTML, meaningful alt text, visible focus states. The persona slider is a `role="slider"` with full keyboard support.

## Testing guidelines

- Vitest + React Testing Library. Every component with logic gets a test file alongside it (`Component.test.tsx`).
- Test behavior through the user-facing surface (roles, labels, text), not implementation details.
- Before declaring any work done, run and pass: `npm test`, `npm run lint`, `npm run build`.

## Workflow rules

- Small, focused commits with descriptive messages.
- Never commit `dist/`, secrets, or `.env` files.
- New dependencies require a stated justification in the commit message — this site should stay lean.
- Format with Prettier (`npm run format`); don't hand-format against it.
