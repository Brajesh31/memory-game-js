import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled && !card.matched) {
      handleChoice(card);
    }
  };

  const accessibleName = card.matched
    ? `${card.name} card, matched`
    : flipped
      ? `${card.name} card, face up`
      : `Reveal card: ${card.name}`;

  return (
    <button
      className={`memory-card ${flipped ? 'flipped' : ''}`}
      type="button"
      onClick={handleClick}
      disabled={disabled || card.matched}
      aria-label={accessibleName}
      aria-pressed={flipped}
    >
      <span className="card-inner">
        <img className="front" src={card.src} alt="" draggable="false" />
        <img className="back" src="/img/gambar.jpg" alt="" draggable="false" />
      </span>
    </button>
  );
}
