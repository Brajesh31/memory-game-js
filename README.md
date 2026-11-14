# Memory Game

A browser-based card matching game built with React. Turn over two cards at a time, remember their positions, and find all six matching pairs. The project uses a small React component structure, local image assets, and Create React App scripts.

> **Project scope:** This repository is a client-side game. It does not include accounts, a backend, a database, online leaderboards, or multiplayer functionality.

## Table of Contents

1. [Overview](#1-overview)
2. [Features](#2-features)
3. [How to Play](#3-how-to-play)
4. [Technology Stack](#4-technology-stack)
5. [Repository Structure](#5-repository-structure)
6. [Requirements](#6-requirements)
7. [Installation](#7-installation)
8. [Available Commands](#8-available-commands)
9. [Game Rules and State](#9-game-rules-and-state)
10. [Architecture](#10-architecture)
11. [Accessibility](#11-accessibility)
12. [Testing](#12-testing)
13. [Continuous Integration](#13-continuous-integration)
14. [Security and Privacy](#14-security-and-privacy)
15. [Deployment](#15-deployment)
16. [Troubleshooting](#16-troubleshooting)
17. [Known Limitations](#17-known-limitations)
18. [Roadmap](#18-roadmap)
19. [Contributing](#19-contributing)
20. [Support](#20-support)
21. [License](#21-license)
22. [Maintainer](#22-maintainer)

## 1. Overview

Memory Game is a small matching game designed around short, repeatable rounds. The deck contains six unique cat photographs, with two copies of each image. The player reveals cards in pairs and tries to remember where each image is located.

The application is built with React 18 and Create React App. The deck is generated in the browser, shuffled at the start of each round, and tracked with component state. Images are served from the repository's public assets.

## 2. Features

- Twelve cards representing six matching pairs.
- Randomized deck order for every new game.
- Turn counter that increases after the second card is selected.
- Matched pairs remain visible.
- Brief reveal interval for mismatched cards.
- New Game and Play Again controls.
- Win state when all six pairs have been found.
- Keyboard-operable card buttons with accessible names.
- Live status feedback for matches, misses, and game completion.
- Responsive four-column desktop and three-column mobile card layouts.
- Reduced-motion support for card transitions.

## 3. How to Play

1. Start the game. The twelve cards are shuffled automatically.
2. Select any face-down card to reveal its image.
3. Select a second card.
4. If the images match, the pair remains face up.
5. If they do not match, both cards turn face down after a short delay.
6. Continue until all six pairs are matched.
7. Use New Game or Play Again to restart with a newly shuffled deck.

A turn is counted when the second card in a pair is selected. Selecting the same card twice does not count as a turn.

## 4. Technology Stack

| Technology | Purpose |
| --- | --- |
| React 18 | Component rendering and game state |
| JavaScript | Deck generation, selection logic, and match evaluation |
| CSS | Card flip transitions and responsive layout |
| Create React App | Development server, test runner, and production build |
| React Testing Library | Component behavior tests |
| Jest | Test execution through Create React App |
| npm | Dependency installation and scripts |
| GitHub Actions | CI, CodeQL, Markdown validation, and maintenance automation |

The current project uses Create React App through react-scripts 5.0.1. Create React App is a legacy build tool, but this repository retains its existing setup to avoid an unnecessary migration during a game and documentation maintenance pass.

## 5. Repository Structure

```text
memory-game-js/
├── .github/
│   ├── dependabot.yml
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       ├── codeql.yml
│       ├── markdown-lint.yml
│       ├── node.js.yml
│       └── update-readme.yml
├── docs/
│   ├── ACCESSIBILITY.md
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   ├── GAME_RULES.md
│   ├── INSTALLATION.md
│   ├── KNOWN_LIMITATIONS.md
│   ├── MAINTENANCE.md
│   ├── OVERVIEW.md
│   ├── SECURITY_REVIEW.md
│   ├── TESTING.md
│   └── TROUBLESHOOTING.md
├── public/
│   ├── img/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── SingleCard.js
│   │   └── SingleCard.css
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── SUPPORT.md
├── package.json
└── package-lock.json
```

## 6. Requirements

- Node.js 22.x for the documented CI runtime.
- npm, which is included with Node.js.
- A modern browser with JavaScript enabled.
- Git for cloning and contributing.

Use the npm lockfile for reproducible dependency installation. Do not use Yarn or Bun for this repository's documented workflow.

## 7. Installation

Clone the repository:

```bash
git clone https://github.com/Brajesh31/memory-game-js.git
cd memory-game-js
```

Install the exact dependency tree from the committed lockfile:

```bash
npm ci
```

Start the local development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). The development server reloads the page when source files change.

## 8. Available Commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm test -- --watchAll=false` | Run the Jest test suite once |
| `npm run build` | Create an optimized production build in `build/` |
| `npm ci` | Install the exact versions recorded in package-lock.json |

The default `npm test` command starts Jest in watch mode. Use the documented non-watch command in CI and when a single test run is required.

## 9. Game Rules and State

The game uses twelve card instances created from six image definitions. Each card receives a unique instance ID, even when two cards share the same image source.

| State | Responsibility |
| --- | --- |
| `cards` | Shuffled deck and matched state for each card |
| `turns` | Number of completed two-card selections |
| `choiceOne` | First card selected in the current turn |
| `choiceTwo` | Second card selected in the current turn |
| `isLocked` | Prevents further input while the pair is being evaluated |
| `gameWon` | Stops interaction after all pairs are matched |
| `status` | Text announced to the player through a live region |

The deck uses a Fisher-Yates shuffle. Two cards match when their image source is the same. Matched state is stored on the two card instances, not on every card that happens to share a source.

See [Game Rules](docs/GAME_RULES.md) and [Architecture](docs/ARCHITECTURE.md).

## 10. Architecture

The application has a small component structure:

- `src/index.js` mounts the React application.
- `src/App.js` owns the deck, turn count, selected cards, lock state, match evaluation, and win condition.
- `src/components/SingleCard.js` renders one interactive card and exposes its state to assistive technology.
- `src/App.css` styles the page layout, game statistics, and completion state.
- `src/components/SingleCard.css` styles card faces and flip transitions.
- `public/img/` contains the local card artwork.

The application does not call an external API or persist game state. A page refresh starts a new round.

## 11. Accessibility

Cards are native buttons rather than clickable images. Each card exposes an accessible name that changes with its state. The game status uses a polite live region. Focus styles are visible, images inside buttons are decorative to assistive technology, and reduced-motion preferences disable card transitions.

These improvements establish a baseline, not a claim of full WCAG conformance. Manual keyboard and screen-reader testing is still required. See [Accessibility](docs/ACCESSIBILITY.md).

## 12. Testing

The test suite uses Jest and React Testing Library through Create React App. Tests cover initial rendering, card count, turn counting, duplicate selection protection, and restarting the game.

Run tests once:

```bash
npm test -- --watchAll=false
```

Run the production build:

```bash
npm run build
```

The CI workflow runs both commands on Node.js 22. Manual browser checks are still needed for visual behavior, keyboard interaction, responsive layouts, and real card-flip timing. See [Testing](docs/TESTING.md).

## 13. Continuous Integration

GitHub Actions includes:

- **Node.js CI:** installs dependencies with `npm ci`, runs tests, creates a production build, and verifies build output on pushes to `main` and pull requests targeting `main`.
- **CodeQL:** analyzes JavaScript for supported security issues.
- **Markdown Lint:** checks repository Markdown files.
- **README timestamp:** manual-only workflow to avoid unnecessary scheduled commits.
- **Dependabot:** weekly npm and GitHub Actions update proposals.

A green CI run confirms only the checks that actually ran. It does not prove that every browser interaction or third-party dependency is free of defects. See [Maintenance](docs/MAINTENANCE.md).

## 14. Security and Privacy

- The game runs locally in the browser and does not collect account details.
- No backend, database, authentication, analytics, or remote game API is included.
- Do not add credentials to source files or commit local environment files.
- Keep dependencies updated and review Dependabot proposals before merging.
- Preserve the provenance and license notices for card images and other third-party assets.
- Report security issues privately using [SECURITY.md](SECURITY.md).

The image files are served from this repository. Their ownership and redistribution permissions should be verified before packaging or reusing them elsewhere. See [Security Review](docs/SECURITY_REVIEW.md).

## 15. Deployment

The production build is generated in the `build/` directory:

```bash
npm run build
```

Deploy the contents of `build/` to a static hosting provider. Configure the host to serve `index.html` for the site root. The current application does not require server-side routes or environment variables.

See [Deployment](docs/DEPLOYMENT.md).

## 16. Troubleshooting

| Problem | Likely cause | Suggested action |
| --- | --- | --- |
| `npm ci` fails | Node/npm mismatch, network issue, or lockfile conflict | Use Node 20 and rerun `npm ci` |
| Development server does not start | Port 3000 is already in use | Stop the other process or use the port prompt |
| Images are missing | Asset path or filename mismatch | Check files under `public/img/` and the `/img/` paths |
| Tests run continuously | Jest watch mode is enabled | Use `npm test -- --watchAll=false` |
| Build fails with OpenSSL error | Older Webpack toolchain with newer Node/OpenSSL | Use the documented Node 20 CI runtime |
| Cards cannot be selected | Game is evaluating a pair or the card is already matched | Wait for the current turn to finish |

See [Troubleshooting](docs/TROUBLESHOOTING.md) for a more detailed checklist.

## 17. Known Limitations

- The game has one fixed deck and one difficulty level.
- The images are local assets with no in-game theme selector.
- There is no timer, scoring system, leaderboard, or persistence.
- There is no multiplayer mode or user account system.
- Game state resets when the page is refreshed.
- The project still uses Create React App and react-scripts 5.0.1.
- Automated tests cover core interactions but not every browser and assistive-technology combination.
- The rights and provenance of the existing image assets still need a complete audit.

See [Known Limitations](docs/KNOWN_LIMITATIONS.md).

## 18. Roadmap

Potential improvements are listed in [Known Limitations](docs/KNOWN_LIMITATIONS.md) and the maintenance notes. Sensible next steps include more difficulty levels, an optional timer, a score summary, broader test coverage, and a deliberate migration plan away from Create React App. A migration should be handled separately from routine maintenance.

## 19. Contributing

Contributions that improve correctness, accessibility, testing, documentation, and maintainability are welcome.

1. Read [CONTRIBUTING.md](CONTRIBUTING.md).
2. Keep changes focused and compatible with the current React application.
3. Add or update tests for behavior changes.
4. Run the test suite and production build.
5. Update documentation when behavior or setup changes.
6. Do not commit generated build output, secrets, or unrelated files.

## 20. Support

Use GitHub Issues for reproducible bugs and focused feature requests. Do not post credentials, private information, or security-sensitive details in public issues. See [SUPPORT.md](SUPPORT.md).

## 21. License

This repository includes an MIT License with the copyright notice:

`Copyright (c) 2026 Brajesh Kumar`

The root license applies only to original project material that the maintainer owns or is authorized to license. Third-party packages, image assets, fonts, and other resources remain subject to their respective licenses and terms. See [LICENSE](LICENSE).

## 22. Maintainer

**Brajesh Kumar**

Repository: [github.com/Brajesh31/memory-game-js](https://github.com/Brajesh31/memory-game-js)

---

Last updated: 2026-11-14
