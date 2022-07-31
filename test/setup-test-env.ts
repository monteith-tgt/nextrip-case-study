import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import handlers from '../app/mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'warn' });
  console.info('=== MSW Initialized');
});

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
