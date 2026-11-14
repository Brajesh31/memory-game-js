# Deployment

## Build

Install dependencies from the committed lockfile and create the production build:

```bash
npm ci
npm run build
```

Create React App writes the optimized static site to `build/`.

## Static hosting

Deploy the contents of `build/` to a static hosting provider such as GitHub Pages, Netlify, Cloudflare Pages, or a conventional web server.

The game uses static assets from `public/img/`. Confirm that the host preserves the expected asset paths. If deploying below a subpath, configure the Create React App homepage/base path correctly and verify image paths before release.

## Hosting checklist

- Use HTTPS.
- Deploy the contents of `build/`, not the source directory.
- Confirm the root page loads.
- Confirm every card image is served successfully.
- Test New Game and Play Again.
- Test on desktop and mobile viewport sizes.
- Verify keyboard operation and focus visibility.
- Confirm no secrets or local environment files are included.
- Review image ownership and redistribution permissions.

## Server requirements

The current application does not need an application server, database, environment variables, or API proxy. It is a static client-side game.

## Rollback

Keep the previous static build artifact available in the hosting provider. If a release breaks the game, restore the previous known-good build and investigate the failing commit separately.