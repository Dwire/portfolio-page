# Product

## Register

brand

## Users

Tech recruiters, engineering managers, and hiring decision-makers evaluating GJD for a
role. They arrive skeptical and time-constrained — often skimming on mobile between other
candidates — and need to establish credibility fast. Secondary visitors are professional
contacts and peers GJD points to the site directly. The job to be done: in under a minute,
decide that GJD is both technically serious and a distinctive person worth a conversation.

## Product Purpose

A single-page personal portfolio whose entire concept is one mechanic: a draggable slider
that morphs the page between two personas — **Engineer** (professional headshot, slate/navy
theme, software work) and **Human** (fun headshot, coral/pink theme, tactile builds like
surfboards and shelves). A single `progress` value (0 = Engineer, 1 = Human) drives the
headshot reveal, theme colors, content panel, and which projects show. Below the hero,
projects reveal on scroll with image parallax.

Success: a recruiter walks away convinced GJD can build polished software end-to-end *and*
remembers the person behind it. The site itself is the proof of craft — it has to be good,
because for an engineer, a sloppy portfolio is disqualifying and a beautiful one is evidence.

## Brand Personality

**Crafted, dual, playful.** Confident without bragging; the duality is the voice, not a
gimmick. The Engineer side is precise and substantive; the Human side is warm and tactile.
The slider should feel like a small delight that rewards curiosity — playful, but in service
of a real idea (a person who is two things at once), never cute for its own sake. Tone:
first-person, direct, lightly witty. Show the work; let it speak.

## Anti-references

- **Generic dev portfolio**: dark-mode template, gradient hero blob, "I build cool things,"
  a grid of repo cards, skill-bar charts. The bootcamp-grad look.
- **Corporate SaaS landing**: cream background, tiny tracked uppercase eyebrows, big-number
  metric cards, stock 3D illustration. Safe and forgettable.
- **Gimmicky / over-animated**: cursor trails, everything-fades-in-on-scroll, parallax on
  every element. The slider is the one intentional motion centerpiece; the rest stays calm.
- **Sterile minimalism**: black Helvetica on white with no point of view. Restraint is fine;
  restraint *without personality* is not — the duality and craft must come through.

## Design Principles

- **The site is the résumé.** Every detail is evidence of engineering taste; ship nothing a
  recruiter could read as careless. Craft is the argument.
- **One mechanic, fully committed.** The persona slider is the whole idea. Spend the wow
  budget here and keep everything else quiet so it lands.
- **Two truths, one person.** Engineer and Human are equal and genuinely different — distinct
  themes and content — but clearly the same individual. Never collapse one into a footnote.
- **Playful, never twitchy.** Delight comes from the core interaction rewarding exploration,
  not from ambient animation. Motion is intentional or absent.
- **Credible in a glance, rewarding on a drag.** A skimmer gets the point in five seconds;
  the curious get more by interacting. Don't gate the substance behind the gimmick.

## Accessibility & Inclusion

Target **WCAG 2.2 AA**: body text ≥4.5:1 and large text ≥3:1 against the interpolated theme
at every slider position, fully keyboard-operable interactions, semantic HTML, meaningful alt
text, visible focus states. The persona slider is a `role="slider"` with full arrow-key
support. The persona-morph motion is core to the concept, so `prefers-reduced-motion` gets a
clean instant fallback (snap between states, simple fades) rather than removing the mechanic.
