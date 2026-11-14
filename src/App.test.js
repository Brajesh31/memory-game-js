import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('Memory Game', () => {
  test('renders the game and twelve cards', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /memory game/i })).toBeInTheDocument();
    expect(screen.getByText(/turns/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^reveal card:/i })).toHaveLength(12);
  });

  test('counts a turn after the second card is selected', async () => {
    render(<App />);

    const matchingCards = screen.getAllByRole('button', { name: 'Reveal card: Cat' });
    expect(matchingCards).toHaveLength(2);

    fireEvent.click(matchingCards[0]);
    fireEvent.click(matchingCards[1]);

    expect(await screen.findByText('1')).toBeInTheDocument();
    expect(screen.getByText(/match found/i)).toBeInTheDocument();
  });

  test('starts a fresh game and resets the turn count', async () => {
    render(<App />);

    const matchingCards = screen.getAllByRole('button', { name: 'Reveal card: Cat' });
    fireEvent.click(matchingCards[0]);
    fireEvent.click(matchingCards[1]);

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /new game/i }));

    expect(screen.getAllByRole('button', { name: /^reveal card:/i })).toHaveLength(12);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText(/new game started/i)).toBeInTheDocument();
  });

  test('does not allow a card to be selected twice in the same turn', () => {
    render(<App />);

    const matchingCards = screen.getAllByRole('button', { name: 'Reveal card: Cat' });
    fireEvent.click(matchingCards[0]);
    fireEvent.click(matchingCards[0]);

    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
