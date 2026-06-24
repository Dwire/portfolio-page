# Projects Showcase

**Status:** Shipped

## Purpose

Show recent work below the persona hero with a modern scroll feel. The showcase is persona-aware: the Engineer persona presents software projects, the Human persona presents tactile/creative builds (surfboard art, custom shelves). The slider's transformation carries all the way down the page.

## User experience

- Below the hero, a heading ("Recent work" for Engineer, "Recent builds" for Human) introduces a list of project cards.
- Cards reveal as they enter the viewport: fade + rise, lightly staggered. Project images drift slower than the page scroll (parallax) for depth.
- Desktop: cards alternate image-left / image-right. Mobile: stacked.
- Each card: media, title, description, optional tags and link. Media can be a single autoplaying muted video, a single image/placeholder, or a small image gallery with keyboard-operable navigation.
- Single-media cards do not show gallery dots. Multi-media cards show dot buttons for switching between items.
- Moving the persona slider crossfades the project set to the new persona's list.

## Technical approach

- `src/content/projects.ts` exports one typed list. Each project: `{ id, title, description, images, persona: 'engineer' | 'human', tags?, link? }`. The `images` array accepts imported image assets, imported MP4 video assets, and placeholders. Adding a project = edit this file, drop media in `src/assets/projects/`.
- The first Human project is video-only: `Spray-painted surfboards` renders a single muted, inline, autoplaying loop and therefore has no gallery dots. `Custom-built shelving` renders a five-image progression gallery from compressed 1600px-wide JPEG assets. Other Human projects can become multi-image galleries by adding more image entries.
- `src/components/ProjectsSection/` derives the active persona from `progress` (threshold 0.5), filters projects, and swaps lists with `AnimatePresence` crossfade. Heading text swaps with persona.
- `src/components/ProjectCard/` handles `whileInView` reveal and `useScroll({ target })` + `useTransform` media parallax. Gallery state (active media index) is local.
- Placeholder projects ship with styled gradient placeholder images until real content is added.

## Accessibility

- Cards are `<article>`s with heading structure under the section heading.
- Gallery navigation buttons are real buttons with labels ("Show image 2 of 3").
- Autoplay videos are muted, inline, looped, and exposed with an accessible label.
- Reduced motion: no parallax, reveal becomes a simple fade or static render.

## Out of scope

- Project detail pages or routing.
- Filtering/search beyond the persona split.
- CMS or remote content — content is in-repo by design.
