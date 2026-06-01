# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Description

Spotiapp is an Angular application that consumes the Spotify Web API to display information about artists, new releases, and top tracks.

## Requirements

Before running the project, make sure you have:

- Node.js installed.
- npm installed.
- Angular CLI installed.
- A Spotify Developer account.
- A valid Spotify Web API access token.

## Spotify Developer Setup

This application uses the Spotify Web API, so you need a Spotify Developer account to obtain an `access_token`.

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
2. Log in with your Spotify account.
3. Create a new app.
4. Use the Spotify Web API authentication flow to generate an access token.
5. Use the token as a Bearer token in requests to Spotify.

The authorization header must follow this format:

Example:
- text Authorization: Bearer BQxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## Important note about access tokens

Spotify access tokens expire after a short period of time. If the app starts returning errors such as `400 Bad Request`, `401 Unauthorized`, or authorization-related errors, the token may have expired and you will need to generate a new one.

## Security recommendation

Do not commit real Spotify tokens, client secrets, or private credentials directly into the source code.

For learning or local testing, you may temporarily use a token in the Angular environment files, but remember that Angular runs in the browser, so any value included in the frontend bundle can be inspected by users.

For a more secure implementation, use a backend server to handle Spotify authentication and keep sensitive credentials such as `client_secret` outside the Angular application.

The backend should be responsible for:

- Requesting access tokens from Spotify.
- Storing private credentials securely.
- Refreshing or regenerating tokens when needed.
- Sending only the required Spotify data back to the Angular app.
