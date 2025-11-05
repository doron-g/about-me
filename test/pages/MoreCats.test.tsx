import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MoreCats from '../../src/pages/MoreCats';

describe('MoreCats', () => {
  it('renders the page title', () => {
    render(<MoreCats />);
    expect(screen.getByText('More Cats')).toBeTruthy();
  });

  it('renders the "Fetch More Cats" button', () => {
    render(<MoreCats />);
    expect(screen.getByRole('button', { name: /fetch more cats/i })).toBeTruthy();
  });

  it('fetches and displays more cats when the button is clicked', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        url: 'https://loremflickr.com/320/240/cat',
      } as Response)
    );

    render(<MoreCats />);
    const button = screen.getByRole('button', { name: /fetch more cats/i });
    fireEvent.click(button);

    // Wait for the images to be fetched and displayed
    await screen.findAllByRole('img');
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(5);
  });
});
