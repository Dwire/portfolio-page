# Persona Slider

**Status:** In progress

## Purpose

The site's core mechanic. GJD has two sides — full-stack engineer and outdoors-loving, surfboard-painting human — and visitors should be able to physically slide between them. The interaction itself demonstrates the craft the professional blurb claims.

## User experience

- The hero shows a portrait with a vertical divider handle. Left of the divider is the professional headshot; right of it, the fun headshot is revealed as the divider moves (before/after photo slider).
- Dragging the handle right transforms the whole page: theme colors interpolate from cool slate/navy to warm coral/pink, the engineering profile fades/slides out as the personal bio enters, and the projects section below swaps to match.
- Releasing the handle snaps it to the nearer persona with spring physics — the page always settles fully on one persona.
- Clicking/tapping either persona's side of the portrait, or its label, animates the slider to that persona.
- On load the page shows the Engineer persona.

## Technical approach

- `src/App.tsx` owns `progress = useMotionValue(0)` (0 = Engineer, 1 = Human) and passes it down. A spring (`useSpring`) smooths snapping.
- `src/components/PersonaPortrait/` stacks the two headshots; the fun photo is revealed with a `clip-path: inset()` driven by `progress`. The divider handle is a Framer Motion draggable mapped back to `progress`.
- `src/components/PersonaTheme/` wraps the page and maps `progress` to CSS custom properties (`--color-bg`, `--color-surface`, `--color-accent`, `--color-text`, ...) via `useTransform` color interpolation. All components style themselves with these variables only.
- `src/components/EngineerPanel/` and `src/components/HumanPanel/` render the two content sections; opacity/translate are functions of `progress`. The non-dominant panel gets `aria-hidden` and `inert`-like treatment (no focusable elements).
- Content comes from `src/content/engineer.ts` and `src/content/human.ts`.
- Headshots live in `src/assets/headshot-pro.jpg` and `src/assets/headshot-fun.jpg`; both are cropped to a shared aspect ratio with `object-fit: cover` so the reveal aligns.

## Accessibility

- The handle is a `role="slider"` (`aria-valuemin=0`, `aria-valuemax=100`, `aria-label="Persona: engineer to human"`). Arrow keys nudge; Home/End jump to a persona; the value snaps on key release like on drag release.
- Persona side-click targets are real `<button>`s.
- The faded panel is `aria-hidden`; screen readers only encounter the settled persona's content.
- `prefers-reduced-motion`: springs and slides are replaced with instant or fade-only transitions; the clip reveal still works (it is user-driven, not autonomous motion).

## Out of scope

- Persisting the chosen persona across visits.
- More than two personas.
- URL routing per persona.
