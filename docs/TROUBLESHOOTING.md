# Troubleshooting

## npm ci fails

Confirm that Node.js 20 and npm are installed. Check network connectivity and verify that package.json and package-lock.json are committed together. Use `npm ci` for clean installs rather than manually deleting lockfile entries.

## Development server does not start

Port 3000 may already be in use. Stop the process occupying the port or use the alternate port offered by Create React App.

## Build reports an OpenSSL or Webpack error

The project uses react-scripts 5.0.1. Use the Node.js 20 runtime configured in CI and inspect the exact build error before changing dependencies. Do not upgrade individual Webpack packages blindly because react-scripts has version constraints.

## Cards are not visible

Check the browser console and confirm that the image files exist in public/img. The source paths in the deck are root-relative, for example /img/cat.jpeg. If the site is deployed below a subpath, verify the public URL configuration.

## A card cannot be selected

The board is temporarily locked while a pair is being evaluated. Matched cards are intentionally disabled. Wait for the mismatch delay to finish or start a new game.

## Tests keep running

The default Create React App test command starts in watch mode. Use:

```bash
npm test -- --watchAll=false
```

## Dependabot cannot update a package

Review the dependency graph and the error explanation in the Dependabot run logs. The existing react-scripts 5.0.1 dependency tree has constraints that can prevent certain transitive security updates. Do not force a version override without verifying compatibility through tests and a production build.

## A workflow did not run

Confirm that the workflow targets the main branch. The original Node.js CI workflow targeted master, which did not match this repository's default branch. The updated workflow now targets main.

## Deployed site shows an older version

Confirm that the latest build was generated and deployed, then clear or invalidate the host cache. Verify that the deployed build contains the expected HTML and image assets.