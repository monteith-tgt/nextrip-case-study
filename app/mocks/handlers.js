import { rest } from 'msw';
import data from '../data/books';

export default [
  rest.get('https://www.mock-api.com', (_, response, context) => {
    return response(context.status(200), context.json(data));
  }),
];
