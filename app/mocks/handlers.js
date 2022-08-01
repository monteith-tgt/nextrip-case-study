import { rest } from 'msw';
import data from '../data/books';
import routes from '../data/routes';
import directions from '../data/directions';
import places from '../data/places';
import results from '../data/results';
import stops from '../data/stops';

export default [
  rest.get('https://www.mock-api.com', (_, response, context) => {
    return response(context.status(200), context.json(data));
  }),

  rest.get('https://svc.metrotransit.org/nextripv2/routes', (_, response, context) => {
    return response(context.status(200), context.json(routes));
  }),

  rest.get('https://svc.metrotransit.org/nextripv2/directions/*', (_, response, context) => {
    return response(context.status(200), context.json(directions));
  }),

  rest.get('https://svc.metrotransit.org/nextripv2/stops/*/*', (_, response, context) => {
    return response(context.status(200), context.json(places));
  }),

  rest.get('https://svc.metrotransit.org/nextripv2/*/*/*', (_, response, context) => {
    return response(context.status(200), context.json(results));
  }),

  rest.get('https://svc.metrotransit.org/nextripv2/*', (_, response, context) => {
    return response(context.status(200), context.json(stops));
  }),
];
