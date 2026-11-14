# Installation

## Requirements

- Node.js 20.x.
- npm.
- Git.
- A modern browser.

The repository uses npm and the committed `package-lock.json`. Do not use Yarn or Bun for the documented installation process.

## Clone

```bash
git clone https://github.com/Brajesh31/memory-game-js.git
cd memory-game-js
```

## Install dependencies

```bash
npm ci
```

Use `npm ci` rather than `npm install` for a clean, lockfile-based installation. If the lockfile and package manifest are inconsistent, fix the dependency metadata deliberately and commit the updated lockfile.

## Start development

```bash
npm start
```

The development server normally opens at http://localhost:3000.

## Run tests

```bash
npm test -- --watchAll=false
```

## Create a production build

```bash
npm run build
```

The optimized static files are written to `build/`.

## Common installation issues

- If port 3000 is occupied, stop the process using it or accept the alternate port offered by the development server.
- If installation fails, confirm the Node.js version and network access.
- If images do not load, verify that the expected image files exist in `public/img/`.
- If the build reports an OpenSSL/Webpack compatibility issue, use the Node.js 20 runtime configured in CI and inspect the current react-scripts compatibility before changing Node versions.