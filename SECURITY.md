# Security Policy

## Scope

This repository contains a client-side React memory game. It currently has no backend, authentication, database, payment processing, or external API integration.

## Reporting a vulnerability

Do not publish exploitable vulnerabilities, credentials, or private information in a public issue. Contact the maintainer privately through the contact route on the GitHub profile. Include:
- A concise description of the issue.
- The affected file or commit, if known.
- Reproduction steps or a safe proof of concept.
- Potential impact and suggested mitigation, if available.

Please allow reasonable time for investigation before public disclosure.

## Dependency security

The project uses Create React App through react-scripts 5.0.1. The dependency tree contains older transitive packages and has a historical Dependabot resolution failure. Review security alerts and update pull requests carefully. Do not force incompatible dependency versions without running the complete test suite and production build.

## Asset security and licensing

The repository includes local image files. Confirm their provenance and redistribution permissions before reusing or repackaging them. The root MIT license does not automatically relicense third-party artwork.

## Secrets and private data

The current game does not require secrets and does not intentionally collect personal data. Do not introduce credentials into source files or commit local environment files. If future features add accounts, APIs, analytics, or persistence, document the data flow and security controls before release.

## Supported project

Security reports should identify the current default branch or a supported release. This is a small project and response times are not guaranteed.