---
name: ME — Engineer / Human
description: A two-persona portfolio whose entire surface interpolates between a slate Developer Console and a coral Workshop as one slider moves.
colors:
  engineer-bg: "#0f172a"
  engineer-surface: "#1c2840"
  engineer-text: "#e6edf6"
  engineer-text-muted: "#93a5bd"
  engineer-accent: "#38bdf8"
  engineer-accent-contrast: "#06283d"
  engineer-border: "#2b3a55"
  human-bg: "#fff4f1"
  human-surface: "#ffffff"
  human-text: "#43262c"
  human-text-muted: "#92686f"
  human-accent: "#e85d75"
  human-accent-contrast: "#ffffff"
  human-border: "#f4d7d3"
typography:
  display:
    fontFamily: "Avenir Next, Avenir, Segoe UI, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.04em"
  title:
    fontFamily: "Avenir Next, Avenir, Segoe UI, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Avenir Next, Avenir, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Avenir Next, Avenir, Segoe UI, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  media: "0.9rem"
  card: "1.25rem"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "clamp(2rem, 5vw, 4rem)"
components:
  project-card:
    backgroundColor: "{colors.human-surface}"
    textColor: "{colors.human-text}"
    rounded: "{rounded.card}"
    padding: "1.25rem"
  tag-pill:
    textColor: "{colors.human-text-muted}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.7rem"
  link-cta:
    textColor: "{colors.human-accent}"
    typography: "{typography.body}"
---

# Design System: ME — Engineer / Human

## 1. Overview

**Creative North Star: "The Developer Console & The Workshop"**

This is not one theme with an accent swap. It is two physical rooms bridged by a single
slider. At `progress: 0` you stand in **the Developer Console** — a deep slate-navy room lit
only by screen-glow, cyan light catching the edges of things, the calm precision of someone
reading a stack trace at night. At `progress: 1` you step into **the Workshop** — a warm,
near-white space full of coral light, foam dust, and shaped wood, where the same person
builds surfboards and shelves with their hands. Every position between is a real, valid room:
eight CSS custom properties interpolate continuously, so the entire page — background, text,
borders, shadows, accent — recolors as one gesture. The interpolation *is* the craft.

The system rejects the bootcamp-grad dark-mode portfolio (gradient hero blob, repo-card grid,
skill bars) and the cream-and-tracked-eyebrow SaaS landing in equal measure. It also refuses
to be twitchy: there is exactly one motion centerpiece (the persona morph), and the rest of
the page stays calm so that one move lands. Components feel **tactile and precise** —
hand-built and engineered at once: soft 20px radii, real depth, confident spacing, nothing
flimsy. The duality is the entire voice, so neither room is allowed to become a footnote of
the other; they are equal, opposite, and unmistakably the same person.

**Key Characteristics:**
- One `progress` value (0 → 1) drives bg, surface, text, muted text, accent, accent-contrast, border, and shadow simultaneously.
- Two fully resolved palettes; the live surface is whatever sits between them.
- Tactile-precise components: 20px card radius, full-pill tags, real interpolated shadows.
- One motion centerpiece (persona morph + slider); reveal/parallax stay quiet and supportive.
- Single type family carrying the whole system through weight and size, never decoration.

## 2. Colors

The palette is a **dual system**: two complete, opposing rooms that the page interpolates
between in OKLCH-smooth steps. No color is used raw — every component references a `--color-*`
custom property that the slider animates, so "the accent" is whatever the dimmer currently
reads.

### Primary
- **Console Cyan** (`#38bdf8`): the Engineer accent — links, the active slider track, focus
  rings at `progress: 0`. Screen-glow on slate; cool and exact.
- **Workshop Coral** (`#e85d75`): the Human accent — the same roles at `progress: 1`. Warm,
  tactile, a little playful. The accent literally morphs from one to the other as you slide.

### Neutral — The Console (engineer, progress 0)
- **Slate Night** (`#0f172a`): page background. Also the pre-mount body color so there is no flash before the theme mounts.
- **Slate Surface** (`#1c2840`): raised cards and panels against the night.
- **Console Ink** (`#e6edf6`): primary text; near-white on slate, ≥4.5:1.
- **Console Muted** (`#93a5bd`): secondary text, descriptions, the role line.
- **Console Border** (`#2b3a55`): hairline dividers and card strokes.

### Neutral — The Workshop (human, progress 1)
- **Warm Plaster** (`#fff4f1`): page background; an off-white pushed barely toward coral, never a "cream" beige.
- **Workshop White** (`#ffffff`): raised cards lift cleanly off the plaster.
- **Workshop Ink** (`#43262c`): primary text; a deep warm brown-plum, ≥4.5:1 on white.
- **Workshop Muted** (`#92686f`): secondary text; a dusty rose-brown, never gray.
- **Workshop Border** (`#f4d7d3`): soft coral-tinted hairlines.

### Named Rules
**The Two-Rooms Rule.** Color is never chosen — it is *read off the slider*. A component that
hardcodes `#38bdf8` or `#e85d75` is a bug; reference `var(--color-accent)` so it morphs.
Engineer colors and Human colors must never appear on screen at the same `progress` except as
the interpolation between them.

**The No-Gray Rule.** Muted text is a desaturated shade of its own room's hue (slate-blue on
the Console, rose-brown in the Workshop), never neutral gray. Gray here reads as washed-out
and breaks the warmth/coolness of whichever room you're in.

## 3. Typography

**Display / Body / Label Font:** Avenir Next (falling back to Avenir, Segoe UI, system-ui,
sans-serif).

**Character:** One humanist-geometric sans carries the entire system. There is no second
family — the contrast comes from weight and size, not from pairing. Avenir's warm, slightly
geometric letterforms read as confident and approachable in both rooms: precise enough for the
Console, friendly enough for the Workshop. The single-family discipline keeps the wow budget on
the persona mechanic, not on type.

### Hierarchy
- **Display / Name** (600, `1.4rem`, line-height 1.1, letter-spacing `0.04em`): the wordmark in the header; the one place letters are gently tracked open.
- **Title** (600, `1.3rem`, line-height 1.25, letter-spacing `-0.01em`): project card titles and section headings.
- **Body** (400, `1rem`, line-height 1.6): descriptions and bio copy. Cap measure at 65–75ch.
- **Label** (400, `0.78rem`): tag pills and the footer line; small, quiet, never all-caps-tracked as a section eyebrow.

### Named Rules
**The One-Family Rule.** No second typeface. If a moment seems to need contrast, reach for
weight (400 ↔ 600) or size, never a new font. The persona morph is the page's only flourish.

## 4. Elevation

The system is **soft-layered, not flat** — depth is real but quiet, and the shadow itself is
part of the interpolation. Cards lift off the page with a single large, diffuse shadow whose
*color* is theme-bound: a near-black blue in the Console (`rgba(2, 8, 23, 0.55)`), a soft rose
in the Workshop (`rgba(151, 71, 89, 0.18)`). The shadow recolors with the room, so elevation
never looks pasted-on.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 18px 44px var(--color-shadow)`): the only elevation token. Large offset and blur for a gentle, tactile float under project cards and panels.

### Named Rules
**The Theme-Bound Shadow Rule.** Shadows use `var(--color-shadow)`, never a hardcoded
`rgba(0,0,0,…)`. A black shadow in the Workshop looks dirty; the rose shadow belongs to the room.

## 5. Components

Components are **tactile and precise**: soft radii, real depth, confident spacing — hand-built
but engineered, never flimsy or over-decorated.

### Project Card
- **Corner Style:** Generously rounded (`1.25rem` / 20px); inner media `0.9rem`.
- **Background:** `var(--color-surface)` — lifts off the page in either room.
- **Shadow Strategy:** the single Card-lift token (see Elevation); theme-bound color.
- **Border:** 1px `var(--color-border)` hairline.
- **Layout:** asymmetric two-column `minmax(0, 5fr) minmax(0, 6fr)`, media and body alternating sides (`.flip` reverses order); collapses to one column below 47rem.
- **Internal Padding:** `1.25rem`.

### Tags
- **Style:** full-pill (`999px`), 1px `var(--color-border)`, `var(--color-text-muted)` text, no fill. `0.78rem`, padding `0.25rem 0.7rem`.

### Media (within cards)
- **Style:** `16/10` aspect, `0.9rem` radius, `overflow: hidden`. Inner wrapper is oversized (`inset: -10% 0`) so scroll parallax never exposes an edge.
- **Gallery dots:** circular (`0.85rem`), `var(--color-accent-contrast)` ring; filled when `aria-pressed`. Rendered only when a project has multiple media items.

### Links / CTA
- **Style:** inline text link in `var(--color-accent)`, weight 600, no underline at rest; underline on `:hover` / `:focus-visible`. The accent morphs cyan ↔ coral with the slider. There is no filled button — the colored link is the call to action.

### Persona Slider (signature component)
- The page's core mechanic: a `role="slider"` dragging a divider across stacked headshots (clip-path reveal), driving the `progress` motion value (0 = Engineer, 1 = Human) that recolors the whole page.
- **Focus:** global `:focus-visible` is a `3px solid var(--color-accent)` outline, offset `2px` — visible in both rooms.
- **Keyboard:** full arrow-key support; `prefers-reduced-motion` snaps between states with a simple fade rather than removing the mechanic.

## 6. Do's and Don'ts

### Do:
- **Do** reference `var(--color-*)` tokens for every color, so each component morphs with the slider (The Two-Rooms Rule).
- **Do** keep muted text as a desaturated shade of the room's own hue (slate-blue / rose-brown), never gray (The No-Gray Rule).
- **Do** carry hierarchy with weight (400 ↔ 600) and size in the single Avenir family (The One-Family Rule).
- **Do** use the theme-bound shadow (`var(--color-shadow)`) for elevation, never a hardcoded black.
- **Do** let the persona morph be the one motion centerpiece; keep reveal-on-scroll and parallax quiet and supportive.
- **Do** keep both rooms equal — Engineer and Human get the same structural weight; neither is a footnote.

### Don't:
- **Don't** build the generic dev portfolio: gradient hero blob, "I build cool things," a repo-card grid, or skill-bar charts.
- **Don't** drift toward the corporate SaaS landing: cream backgrounds, tiny uppercase tracked eyebrows above every section, big-number metric cards, stock 3D illustration.
- **Don't** get gimmicky or over-animated: no cursor trails, no fade-in on every section, no parallax on every element. One intentional mechanic, not a twitching page.
- **Don't** collapse into sterile minimalism: black Helvetica on white with no point of view. Restraint without the duality and craft is failure here.
- **Don't** hardcode a persona's hex value or use a black `rgba` shadow; both break the interpolation.
- **Don't** introduce a second font family or all-caps tracked body copy.
