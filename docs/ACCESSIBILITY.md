# Accessibility

## Purpose

The game should be usable without relying exclusively on a mouse or on visual recognition. Accessibility is part of the component contract and should be preserved as the interface evolves.

## Current implementation

- The game is rendered inside a main landmark.
- Every card is a native button and can receive keyboard focus.
- Card accessible names communicate whether a card is hidden, face up, or matched.
- Decorative images inside card buttons use empty alternative text to avoid duplicate announcements.
- A polite live region announces game status, including matches, misses, and completion.
- Keyboard focus has a visible outline.
- Reduced-motion preferences disable the card flip transition.
- The layout adapts to narrower screens.

## Manual test checklist

1. Navigate the entire game using Tab and Shift+Tab.
2. Activate cards with Enter and Space.
3. Confirm focus is visible on every card and game control.
4. Confirm screen readers announce card state changes.
5. Confirm the status region announces a match, a mismatch, and game completion.
6. Confirm matched cards are no longer actionable.
7. Enable reduced motion in the operating system and confirm the flip animation is removed.
8. Zoom to 200% and check that cards remain usable without horizontal scrolling.

## Known gaps

The repository does not currently include an automated accessibility testing tool or a documented screen-reader/browser certification matrix. Automated unit tests do not prove WCAG conformance.

## Reporting an issue

Use the bug report template and include browser, operating system, assistive technology, steps to reproduce, and expected behavior. Do not include personal information.