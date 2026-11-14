# Architecture

## System overview

The game is a client-side React application created with Create React App. It has no backend, database, external API, or account system. Game state is held in React component state and resets when the page reloads.

## Application entry point

`src/index.js` finds the root DOM element and mounts the App component inside React Strict Mode. Global CSS is imported at this entry point.

## App component

`src/App.js` owns the game state and rules:

- A deck is created from six image definitions, with two instances of each image.
- Each card instance receives a unique ID.
- Fisher-Yates shuffling randomizes the deck.
- The first and second selections are stored separately.
- A turn increments when the second card is selected.
- An effect compares the selected cards and marks matching instances.
- A timeout clears the selections and unlocks the board after the reveal interval.
- A completion effect detects when every card is matched.

## SingleCard component

`src/components/SingleCard.js` renders one card as a native button. It receives the card data, selection handler, flipped state, and disabled state from App. The accessible name reflects whether the card is hidden, face up, or matched.

## Styling

- `src/index.css`: global typography, page background, box sizing, and focus defaults.
- `src/App.css`: page layout, heading, statistics, status, grid, and win message.
- `src/components/SingleCard.css`: card faces, flip transition, and focus treatment.

## Asset handling

Card images are stored in `public/img/` and referenced with root-relative paths such as `/img/cat.jpeg`. The files are copied to the production build as static assets.

## State lifecycle

A new round creates a new shuffled deck and resets turns, selections, lock state, win state, and status. A refresh initializes a fresh deck. There is no local storage or remote persistence.

## Design constraints

The current application favors a small component model over additional state-management libraries. If the game adds multiple modes, persistence, or multiplayer features, revisit state ownership and component boundaries before adding dependencies.