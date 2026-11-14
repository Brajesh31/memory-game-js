# Project Overview

## Summary

Memory Game is a single-player card matching game built with React. A round contains twelve cards representing six image pairs. The player reveals cards two at a time and tries to remember their positions until every pair is matched.

## Goals

- Keep the game simple to understand and quick to play.
- Make each round different through deck shuffling.
- Provide clear feedback for matches, mismatches, and completion.
- Keep the implementation small and readable.
- Support keyboard operation and responsive layouts.
- Add repeatable tests and reliable CI validation.

## Non-goals

The current project does not aim to provide accounts, online multiplayer, leaderboards, cloud persistence, image uploads, or a content-management system.

## User flow

A visitor opens the page, sees a shuffled deck, selects two cards, receives match feedback, and repeats until the deck is complete. The visitor can start a new round at any time.

## Current implementation

React 18 and Create React App power the interface. The card assets are local files in public/img. The application has no backend and does not transmit game state to a server.

## Success criteria

A normal round should allow a player to reveal cards, count turns, retain matching pairs, hide mismatched pairs after a short delay, and complete the game. New Game should reset all state and produce a newly shuffled deck.