# nextrip-case-study

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

## GitHub Actions

Anything that gets into the `main` branch will be deployed to production after running tests/build/etc. Anything in the `dev` branch will be deployed to staging. There is a also a `qa` branch that is used for testing.

## Testing

### Cypress

You'll find end-to-end tests in the `cypress` directory. As you make changes, add to an existing file or create a new file in the `cypress/integration/e2e` directory to test your changes.

To run a specific test(flow) in development, run `FLOW=books yarn cypress:run:flow` which will start the dev server for the app as well as the Cypress client. Make sure the app is running.

By _flow_ we want to define some user flows that we will test. For example, if we want to test the app with a user that wants to see the list of books, we can test that by running `FLOW=books yarn cypress:run:flow`.

This can be later extended to run multiple flows. Followed the provided example to extend this further.

### Vitest

You can run the tests with `yarn test` or `yarn vitest:coverage` to also show the coverage.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.
