import { describe, expect, it } from 'vitest';
import { engineer } from './engineer';
import { human } from './human';
import { projects } from './projects';

describe('content modules', () => {
  it('engineer content has intro paragraphs, focus areas, and links', () => {
    expect(engineer.intro.length).toBeGreaterThan(0);
    expect(engineer.focusAreas.length).toBeGreaterThan(0);
    expect(engineer.links.length).toBeGreaterThan(0);
    for (const link of engineer.links) {
      expect(link.url).toMatch(/^https?:\/\//);
    }
  });

  it('human content has an intro and facts', () => {
    expect(human.intro).not.toBe('');
    expect(human.facts.length).toBeGreaterThan(0);
    for (const fact of human.facts) {
      expect(fact.text).not.toBe('');
      expect(fact.emoji).not.toBe('');
    }
  });

  it('projects cover both personas with unique ids and at least one media item each', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(projects.some((project) => project.persona === 'engineer')).toBe(true);
    expect(projects.some((project) => project.persona === 'human')).toBe(true);
    for (const project of projects) {
      expect(project.images.length).toBeGreaterThan(0);
      for (const media of project.images) {
        expect(media.alt).not.toBe('');
        if (media.type === 'placeholder') {
          expect(media.gradient).toBeDefined();
        } else {
          expect(media.src).not.toBe('');
        }
      }
    }
  });

  it('shelves project has a multi-image gallery', () => {
    const shelves = projects.find((project) => project.id === 'shelves');

    expect(shelves).toBeDefined();
    expect(shelves?.images).toHaveLength(5);
    expect(shelves?.images.every((media) => media.type === 'image')).toBe(true);
  });
});
