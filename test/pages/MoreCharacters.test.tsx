import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MoreCharacters from '../../src/pages/MoreCharacters';

describe('MoreCharacters', () => {
  it('renders the page title', () => {
    render(<MoreCharacters />);
    expect(screen.getByText('More Characters')).toBeTruthy();
  });

  it('renders the "Get More Characters" button', () => {
    render(<MoreCharacters />);
    expect(screen.getByRole('button', { name: /get more characters/i })).toBeTruthy();
  });

  it('fetches and displays more characters when the button is clicked', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
            { id: 2, name: 'Morty Smith', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
          ]
        }),
      } as Response)
    );

    render(<MoreCharacters />);
    const button = screen.getByRole('button', { name: /get more characters/i });
    fireEvent.click(button);

    // Wait for the images to be fetched and displayed
    await screen.findAllByRole('img');
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);
  });
});
