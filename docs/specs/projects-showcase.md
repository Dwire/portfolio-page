# Projects Showcase

**Status:** In progress

## Purpose

Show recent work below the persona hero with a modern scroll feel. The showcase is persona-aware: the Engineer persona presents software projects, the Human persona presents tactile/creative builds (surfboard art, custom shelves). The slider's transformation carries all the way down the page.

## User experience

- Below the hero, a heading ("Recent work" for Engineer, "Recent builds" for Human) introduces a list of project cards.
- Cards reveal as they enter the viewport: fade + rise, lightly staggered. Project images drift slower than the page scroll (parallax) for depth.
- Desktop: cards alternate image-left / image-right. Mobile: stacked.
- Each card: image (or a small gallery with keyboard-operable navigation), title, description, optional tags and link.
- Moving the persona slider crossfades the project set to the new persona's list.

## Technical approach

- `src/content/projects.ts` exports one typed list. Each project: `{ id, title, description, images, persona: 'engineer' | 'human', tags?, link? }`. Adding a project = edit this file, drop images in `src/assets/projects/`.
- `src/components/ProjectsSection/` derives the active persona from `progress` (threshold 0.5), filters projects, and swaps lists with `AnimatePresence` crossfade. Heading text swaps with persona.
- `src/components/ProjectCard/` handles `whileInView` reveal and `useScroll({ target })` + `useTransform` image parallax. Gallery state (active image index) is local.
- Placeholder projects ship with styled gradient placeholder images until real content is added.

## Accessibility

- Cards are `<article>`s with heading structure under the section heading.
- Gallery navigation buttons are real buttons with labels ("Show image 2 of 3"); arrow-key support within the gallery.
- Reduced motion: no parallax, reveal becomes a simple fade or static render.

## Out of scope

- Project detail pages or routing.
- Filtering/search beyond the persona split.
- CMS or remote content — content is in-repo by design.
