# Testing

## Test stack

The repository uses Jest and React Testing Library through Create React App. Tests render the real App component and interact with the card buttons.

## Run the test suite

```bash
npm test -- --watchAll=false
```

## Current automated coverage

- Initial game heading and twelve card buttons render.
- Selecting two cards increments the turn counter.
- Matching cards produce a match status.
- Starting a new game resets the deck and turn count.
- Selecting the same card twice does not complete a turn.

## Production build

```bash
npm run build
```

The CI workflow runs tests and the production build using Node.js 20.

## Manual regression checklist

1. Load the game and confirm twelve cards appear.
2. Select two matching cards and confirm they remain face up.
3. Select two different cards and confirm they turn face down after the delay.
4. Confirm the turn count increments once per two-card selection.
5. Confirm a card cannot be selected twice during one turn.
6. Confirm matched cards cannot be selected again.
7. Complete all six pairs and verify the win message.
8. Start a new game during a turn and verify all state resets.
9. Use keyboard-only navigation and activate cards with Enter or Space.
10. Check the layout at mobile and desktop widths.
11. Enable reduced motion and verify card transitions are removed.
12. Confirm every image path resolves.

## Test limitations

The current suite does not include browser automation, visual regression, performance testing, or comprehensive assistive-technology tests. A passing unit test suite should not be represented as complete browser validation.