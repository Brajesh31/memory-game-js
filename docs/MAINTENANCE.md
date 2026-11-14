# Maintenance and CI

## Branch and workflow expectations

The default branch is `main`. Workflows that validate application code must trigger on pushes to and pull requests targeting `main`.

## GitHub Actions

### Node.js CI

The Node.js CI workflow runs on Node.js 20. It installs from the committed lockfile with `npm ci`, runs the Jest suite once, creates a production build, and verifies expected build output.

### CodeQL

CodeQL analyzes the JavaScript codebase on pushes, pull requests, and a weekly schedule. Its permissions are limited to repository read access and security event upload.

### Markdown Lint

Markdown lint checks documentation and repository Markdown files. It is not a substitute for code tests.

### README timestamp

The timestamp workflow is manual-only. Hourly and push-triggered timestamp commits add noise without improving documentation quality. Update the README when content changes, not merely because time passed.

### Dependabot

Dependabot checks npm dependencies and GitHub Actions weekly. Review proposed changes, inspect lockfile diffs, and run CI before merging. Do not merge updates solely because Dependabot created them.

## Historical workflow audit

At the time of the maintenance pass, the repository had 155 workflow runs in the available history:
- 146 README timestamp runs, all successful.
- 9 Dependabot update runs, 8 successful and 1 failed.
- No runs were recorded for the repository's original Node.js CI workflow because it targeted `master` while the repository default branch is `main`.

The failed Dependabot run reported an inability to find a security update for deepmerge and a dependency-resolution conflict around webpack-dev-server constrained by react-scripts 5.0.1. This is a Dependabot resolver issue involving the legacy toolchain. The new Dependabot configuration schedules future version updates, but it does not retroactively repair that historical run or guarantee every security update can be resolved.

## Release checklist

1. Review the diff and dependency changes.
2. Run `npm ci`.
3. Run `npm test -- --watchAll=false`.
4. Run `npm run build`.
5. Confirm all required GitHub Actions checks pass on the target commit.
6. Review CodeQL alerts and Dependabot pull requests.
7. Check the deployed site and static image paths.
8. Record meaningful user-visible changes in CHANGELOG.md.