import type { Route, Direction, Place, NexTripResult } from '~/interfaces/nextrip';

export const getRoutes = (): Promise<Route[]> => {
  return new Promise(resolve =>
    fetch('https://svc.metrotransit.org/nextripv2/routes').then(response => resolve(response.json())),
  );
};

export const getDirections = (routeId?: string): Promise<Direction[]> => {
  if (!routeId) Promise.reject({ error: 'Route ID missing.' });
  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`).then(response => resolve(response.json())),
  );
};

export const getPlaces = (routeId?: string, directionId?: string): Promise<Place[]> => {
  if (!routeId || !directionId) Promise.reject({ error: 'One or more of a route ID or direction ID is missing.' });
  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`).then(response =>
      resolve(response.json()),
    ),
  );
};

export const getResults = (routeId?: string, directionId?: string, placeCode?: string): Promise<NexTripResult> => {
  if (!routeId || !directionId)
    Promise.reject({ error: 'One or more of a route ID, direction ID, or placeCode is missing.' });

  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/${routeId}/${directionId}/${placeCode}`).then(response =>
      resolve(response.json()),
    ),
  );
};
