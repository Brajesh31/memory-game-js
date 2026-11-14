# Contributing

Contributions that improve correctness, usability, accessibility, testing, documentation, and maintainability are welcome.

## Before you begin

1. Read the README and relevant files in docs/.
2. Search existing issues and pull requests for related work.
3. Discuss large changes before implementing them.
4. Keep changes focused.
5. Do not commit credentials, personal information, generated build output, or local environment files.

## Development setup

Use Node.js 20 and npm.

```bash
git clone https://github.com/Brajesh31/memory-game-js.git
cd memory-game-js
npm ci
npm start
```

## Code guidelines

### React and JavaScript
- Prefer clear names and small components.
- Keep game rules in App unless a new component boundary has a clear purpose.
- Give each card instance a stable unique ID.
- Avoid mutating React state directly.
- Clean up timers and subscriptions created by effects.
- Do not add dependencies for functionality that the browser or existing stack already provides.

### Accessibility
- Use native controls where possible.
- Keep card buttons keyboard-operable.
- Preserve meaningful accessible names and live status announcements.
- Maintain visible focus indicators.
- Respect reduced-motion preferences.

### CSS
- Preserve mobile and desktop layouts.
- Avoid fixed widths that break narrow screens.
- Keep focus styles visible.
- Test card face positioning and flip behavior after style changes.

### Tests
- Add or update React Testing Library tests for behavior changes.
- Avoid assertions that depend on random deck order.
- Run the test suite once with `npm test -- --watchAll=false`.
- Run `npm run build` before submitting.

### Documentation
- Update README and docs when setup, rules, behavior, or limitations change.
- Add user-visible changes to CHANGELOG.md.
- Do not claim a test passed unless it was actually run.

## Pull request checklist

- [ ] The change has a clear purpose.
- [ ] Tests were added or updated where appropriate.
- [ ] `npm test -- --watchAll=false` passes.
- [ ] `npm run build` passes.
- [ ] Keyboard and responsive behavior were reviewed.
- [ ] No credentials or unrelated files were committed.
- [ ] Documentation and changelog were updated where needed.

## Pull requests

Keep each pull request focused. Explain the problem, implementation, validation performed, screenshots for visual changes, and known limitations. The maintainer may request changes when behavior is untested or scope is unclear.