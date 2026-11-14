import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { src: '/img/cat.jpeg', name: 'Cat' },
  { src: '/img/cat2.jpeg', name: 'Curious cat' },
  { src: '/img/kitten.jpeg', name: 'Kitten' },
  { src: '/img/kitten2.jpeg', name: 'Playful kitten' },
  { src: '/img/kucing.jpeg', name: 'Little cat' },
  { src: '/img/kucing2.jpeg', name: 'Sleepy cat' },
];

function createShuffledDeck() {
  const deck = [...cardImages, ...cardImages].map((card, index) => ({
    ...card,
    id: `${card.src}-${index}`,
    matched: false,
  }));

  // Fisher-Yates shuffle avoids the bias of sorting with Math.random().
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }

  return deck;
}

function App() {
  const [cards, setCards] = useState(createShuffledDeck);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [status, setStatus] = useState('Choose two cards to find a matching pair.');

  const startNewGame = () => {
    setCards(createShuffledDeck());
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setIsLocked(false);
    setGameWon(false);
    setStatus('New game started. Find all six pairs.');
  };

  const handleChoice = (card) => {
    if (isLocked || gameWon || card.matched) return;
    if (choiceOne && choiceOne.id === card.id) return;
    if (choiceTwo) return;

    if (choiceOne) {
      setChoiceTwo(card);
      setTurns((previousTurns) => previousTurns + 1);
    } else {
      setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (!choiceOne || !choiceTwo) return undefined;

    setIsLocked(true);
    const isMatch = choiceOne.src === choiceTwo.src;

    if (isMatch) {
      setCards((previousCards) =>
        previousCards.map((card) =>
          card.id === choiceOne.id || card.id === choiceTwo.id
            ? { ...card, matched: true }
            : card
        )
      );
      setStatus('Match found. Keep going!');
    } else {
      setStatus('Not a match. The cards will turn over shortly.');
    }

    const timeout = window.setTimeout(() => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setIsLocked(false);
    }, isMatch ? 450 : 1000);

    return () => window.clearTimeout(timeout);
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameWon(true);
      setIsLocked(true);
      setStatus(`You matched every pair in ${turns} turns. Well played!`);
    }
  }, [cards, turns]);

  const matchedPairs = cards.filter((card) => card.matched).length / 2;

  return (
    <main className="App">
      <header className="game-header">
        <p className="eyebrow">A little challenge for your brain</p>
        <h1>Memory Game</h1>
        <p className="game-intro">
          Turn over two cards at a time. Remember their places and match all six pairs.
        </p>
        <button className="new-game-button" type="button" onClick={startNewGame}>
          New Game
        </button>
      </header>

      <section className="game-panel" aria-label="Memory game">
        <div className="game-stats" aria-label="Game progress">
          <p><span>Turns</span><strong>{turns}</strong></p>
          <p><span>Pairs</span><strong>{matchedPairs} / {cardImages.length}</strong></p>
        </div>

        <p className="game-status" role="status" aria-live="polite">{status}</p>

        <div className="card-grid" aria-label="Cards">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={
                card === choiceOne ||
                card === choiceTwo ||
                card.matched
              }
              disabled={isLocked || gameWon || card.matched}
            />
          ))}
        </div>

        {gameWon && (
          <div className="win-message" role="status">
            <h2>All pairs matched!</h2>
            <p>You completed the game in {turns} turns.</p>
            <button type="button" onClick={startNewGame}>Play Again</button>
          </div>
        )}
      </section>

      <footer className="game-footer">
        <p>Take your time, remember the cards, and enjoy the game.</p>
      </footer>
    </main>
  );
}

export default App;
