import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('starts on the engineer persona', () => {
    render(<App />);
    expect(screen.getByRole('slider', { name: 'Persona' })).toHaveAttribute('aria-valuenow', '0');
    expect(screen.getByText('The engineer').closest('section')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
    expect(screen.getByText('The human').closest('section')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('heading', { name: 'Recent work' })).toBeInTheDocument();
  });

  it('switches to the human persona and back', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Human' }));
    expect(screen.getByRole('slider', { name: 'Persona' })).toHaveAttribute('aria-valuenow', '1');
    expect(screen.getByText('The human').closest('section')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
    expect(await screen.findByRole('heading', { name: 'Recent builds' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Engineer' }));
    expect(screen.getByText('The engineer').closest('section')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
    expect(await screen.findByRole('heading', { name: 'Recent work' })).toBeInTheDocument();
  });
});
