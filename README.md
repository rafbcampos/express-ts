# express-ts

Simple TS API exposing a single endpoint.

## Overview

This is an API empowered by Express written in TypeScript, exposing a single endpoint.
It could have a safe list of URLs for CORS and use [helmet](https://helmetjs.github.io/) to add basic security features.
The POST request body is validated using [yup](https://github.com/jquense/yup), and `getResponse` should yield different errors depending on its cause.

## Running it locally

- Clone or download this repository;
- Install dependencies with `yarn` or `npm install`;
- `yarn serve` or `npm run serve` to start the server listening to requests to `localhost:3000`

## Testing

`yarn test` or `npm test`

This repo has unit tests for utility functions and uses `supertest` to simulate HTTP calls.

## Technologies

- typescript
- express
- cors
- helmet
- yup
- jest
- supertest
