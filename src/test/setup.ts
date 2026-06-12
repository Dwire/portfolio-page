import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// RTL's auto-cleanup needs a global afterEach, which we don't enable.
afterEach(() => {
  cleanup();
});

// jsdom lacks the observers framer-motion uses for whileInView/layout.
class ObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

vi.stubGlobal('IntersectionObserver', ObserverStub);
vi.stubGlobal('ResizeObserver', ObserverStub);

// Report reduced motion so persona transitions resolve synchronously in tests.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: query.includes('prefers-reduced-motion'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
