# nextrip-case-study

## Project Information

### Live Demo

[https://nextrip-case-study.vercel.app/](https://nextrip-case-study.vercel.app/)

### Trello

[nextrip-case-study Board](https://trello.com/invite/b/iobvTDak/119a582cc7cc7392324532e950b1243a/nextrip-case-study)

## Development

Make sure the dependencies are installed

```sh
yarn
```

Afterwards, start the Remix development server like so:

```sh
yarn dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

### Precommit hooks

The pre-commit hook will run the following commands:

```sh
yarn hook
```

### Relevant code

```sh
/app..
  /___tests___    Route tests
  /client         Client API helper
  /components     Components
  /interfaces     Types
  /routes         Route entry files
  /screens        Page components
```

## Deployment

This stack has a github action for automated deploy on merge on the following branches: **qa**, **dev** or **main**.

From the settings in the repository you need to add Actions secrets so that the github action can deploy your app:

- VERCEL_ORG_ID
- VERCEL_PROJECT_ID
- VERCEL_TOKEN

If you'd like to avoid using github action deploy, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

### Testing

You can run the tests with `yarn test` or `yarn vitest:coverage` to also show the coverage.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

## Assumptions

- "Minneapolis Metro Transit bus line" refers to all metro transit, and not just bus types
- This app is not scaled to a large audience. If scaled, external service requests would need to be throttled and/or cached
- Stops by route and direction are variable and need to be fetched at runtime
- Routes, Directions, Places are not variable and can be fetched at build time
- Traffic skews heavier to mobile

## Regrets & Challenges

Testing (w/ RTL and Cypress) proved more difficult with Remix than I was led to believe. Unit testing capabilities seems limited (albeit somewhat intentionally: [Github Issue](https://github.com/remix-run/remix/discussions/2481)).

The Cypress issues semed more PEBKAC, but I moved past them in order to complete the application. Ultimately, I ran out of time.

In an ideal production scenario, there would be heavier coverage through integration tests focused on real user flows and interactions. A number of states are also uncovered because of my challenges with testing in Remix.
