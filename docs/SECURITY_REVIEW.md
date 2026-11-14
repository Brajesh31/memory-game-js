# Security Review

## Scope

This review covers the React application source, public assets, package metadata, and GitHub Actions configuration. It is not a penetration test or an independent security certification.

## Observed application boundary

The game runs entirely in the browser. It has no backend, authentication, database, payment integration, or external API calls. No credentials are required for normal game operation.

## Controls in the current implementation

- Card content is rendered through React rather than raw HTML insertion.
- Card interactions use native button elements.
- There is no dynamic HTML rendering of user-supplied content.
- The game does not persist personal information.
- CI uses read-only repository permissions except the dedicated manual README timestamp workflow.
- The README timestamp workflow has write permission only because it commits a documentation timestamp.

## Risks and follow-up

| Area | Observation | Recommended action |
| --- | --- | --- |
| Dependency tree | Create React App 5.0.1 has older transitive dependencies and a historical Dependabot resolution failure | Review security alerts and plan migration to a maintained build tool |
| Image assets | Source and redistribution rights are not fully documented | Audit asset provenance and retain required notices |
| CI actions | Workflows depend on third-party GitHub Actions | Review action releases and pin to verified commit SHAs where stricter supply-chain controls are required |
| Browser-only game | No server-side data boundary exists | No server controls are needed for current functionality; reassess if accounts or online scores are added |

## Dependabot history

A historical Dependabot update run failed because it could not find a security update for deepmerge and encountered dependency constraints around webpack-dev-server under react-scripts 5.0.1. The failure is not evidence of a runtime exploit in this game, but it signals maintenance limitations in the legacy dependency tree. Do not force incompatible overrides without testing the full build.

## Reporting

Report security concerns privately using SECURITY.md. Do not publish exploit details or private information in public issues.