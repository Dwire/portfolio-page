import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { motionValue } from 'motion/react';
import { PersonaPortrait } from './PersonaPortrait';

const renderPortrait = (active: 'engineer' | 'human' = 'engineer') => {
  const onSelect = vi.fn();
  render(<PersonaPortrait progress={motionValue(0)} active={active} onSelect={onSelect} />);
  return { onSelect };
};

describe('PersonaPortrait', () => {
  it('renders both headshots', () => {
    renderPortrait();
    expect(screen.getByAltText(/the engineer/i)).toBeInTheDocument();
    expect(screen.getByAltText(/the human/i)).toBeInTheDocument();
  });

  it('exposes a keyboard slider that switches personas with arrow keys', () => {
    const { onSelect } = renderPortrait();
    const slider = screen.getByRole('slider', { name: 'Persona' });
    expect(slider).toHaveAttribute('aria-valuenow', '0');
    expect(slider).toHaveAttribute('aria-valuetext', 'Engineer');

    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(onSelect).toHaveBeenCalledWith('human');

    fireEvent.keyDown(slider, { key: 'Home' });
    expect(onSelect).toHaveBeenCalledWith('engineer');
  });

  it('reflects the human persona in slider state', () => {
    renderPortrait('human');
    const slider = screen.getByRole('slider', { name: 'Persona' });
    expect(slider).toHaveAttribute('aria-valuenow', '1');
    expect(slider).toHaveAttribute('aria-valuetext', 'Human');
  });

  it('switches personas via the label buttons', async () => {
    const user = userEvent.setup();
    const { onSelect } = renderPortrait();

    await user.click(screen.getByRole('button', { name: 'Human' }));
    expect(onSelect).toHaveBeenCalledWith('human');

    await user.click(screen.getByRole('button', { name: 'Engineer' }));
    expect(onSelect).toHaveBeenCalledWith('engineer');
  });
});
