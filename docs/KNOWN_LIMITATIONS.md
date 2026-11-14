# Known Limitations

## Product scope

- The game contains one fixed set of six pairs.
- There is no timer, score multiplier, leaderboard, or difficulty setting.
- There is no multiplayer mode.
- There is no user account, authentication, or cloud save.
- A page refresh starts a new round.
- There is no sound or configurable theme.

## Technical scope

- The application uses Create React App and react-scripts 5.0.1.
- Create React App is a legacy toolchain. A migration to a maintained build tool should be planned separately and tested against the existing behavior.
- Game state is owned by the App component.
- Card artwork is stored in the public directory.
- The project has no backend or runtime API dependency.

## Quality assurance

- Unit tests cover a subset of core game behavior.
- There is no browser end-to-end test suite.
- There is no automated visual regression test.
- Manual screen-reader testing has not been certified.
- Static CI checks do not guarantee all browser interactions work.

## Asset rights

The repository contains image files in public/img. Their original source and redistribution rights have not been fully audited. Do not assume the root MIT license automatically covers those images. Verify the rights before redistributing them outside the repository.

## Dependency maintenance

The existing Create React App dependency tree contains older transitive packages. Dependabot has reported a historical resolution failure for some security updates. Review dependency update pull requests carefully and plan a toolchain migration rather than forcing incompatible transitive versions.