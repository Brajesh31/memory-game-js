# Game Rules and State

## Deck

The deck is generated from six image definitions. Each definition is duplicated to create twelve card instances. Every instance has a unique ID so that the two cards in a pair can be tracked independently.

## Turn definition

A turn consists of selecting two different face-down cards. The counter increments when the second card is selected. Clicking the same card twice does not create a turn.

## Match evaluation

Two cards match when their image source values are equal. Both selected card instances are marked as matched. Matched cards remain face up and cannot be selected again.

## Mismatch behavior

When the two selected images do not match, the board is locked briefly so the player can see both cards. The selections are then cleared and the cards return to their hidden state.

## Completion

The game is complete when every card instance is marked as matched. The completion message reports the number of turns and disables further card interaction until the player starts another game.

## New game

New Game and Play Again generate a new shuffled deck and reset the turn counter, selected cards, lock state, completion state, and status message.

## Shuffle

The deck uses the Fisher-Yates algorithm. It swaps each position with a randomly selected position from the remaining unshuffled range. This avoids the distribution bias introduced by sorting with a random comparator.

## Current fixed settings

- Six pairs.
- Twelve cards.
- One deck theme.
- No timer.
- No persisted high score.
- No difficulty selector.