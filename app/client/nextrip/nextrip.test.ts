import { expect } from 'vitest';
import { getRoutes, getDirections, getPlaces, getResults, getResultByStop } from './index';

import routesData from '~/data/routes';
import directionsData from '~/data/directions';
import placesData from '~/data/places';
import resultsData from '~/data/results';
import stopsData from '~/data/stops';

describe('Client API Handlers', () => {
  test('getRoutes() resolves to correct data', () => {
    return getRoutes().then(routes => {
      expect(routes).toMatchObject(routesData);
    });
  });

  test('getDirections() resolves to correct data', () => {
    return getDirections('21').then(directions => {
      expect(directions).toMatchObject(directionsData);
    });
  });

  test('getPlaces() resolves to correct data', () => {
    return getPlaces('21', '0').then(places => {
      expect(places).toMatchObject(placesData);
    });
  });

  test('getResults() resolves to correct data', () => {
    return getResults('21', '0', 'SLDA').then(results => {
      expect(results).toMatchObject(resultsData);
    });
  });

  test('getResultByStop() resolves to correct data', () => {
    return getResultByStop('123').then(result => {
      expect(result).toMatchObject(stopsData);
    });
  });
});
