# Changelog

Notable changes to the project are recorded here. Dates use ISO 8601 format.

## [Unreleased]

### Added
- Automated tests for initial rendering, card selection, turn counting, and restarting.
- Accessibility support for keyboard-operable card buttons and live game status.
- Responsive layout improvements and reduced-motion support.
- GitHub Actions for Node.js CI, CodeQL, and Markdown linting.
- Dependabot configuration for npm and GitHub Actions updates.
- Technical documentation, contributor guidance, and repository policies.

### Changed
- Replaced the original random-sort shuffle with Fisher-Yates.
- Improved game state handling, match feedback, and completion messaging.
- Replaced Create React App starter metadata with game-specific metadata.
- Changed README timestamp automation to a manual-only workflow.

### Fixed
- Corrected the original CI branch mismatch: the previous workflow targeted master while the repository default branch is main.
- Replaced the starter test that searched for a removed Create React App link.
- Prevented a selected card from being selected twice in the same turn.
- Ensured individual matched card instances are marked, rather than every card sharing the same image source.

## [2026-11-14]

### Maintenance baseline
- Added root MIT license notice for original material the maintainer is authorized to license.
- Documented current technical limitations and third-party image rights review requirements.

## Notes

This changelog records repository changes. It does not claim that the project has passed a full security, accessibility, or cross-browser certification.