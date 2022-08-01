import type { Route, Direction, Place, NexTripResult, ProblemDetails } from '~/interfaces/nextrip';

export const getRoutes = (): Promise<Route[] | ProblemDetails> => {
  return new Promise(resolve =>
    fetch('https://svc.metrotransit.org/nextripv2/routes').then(response => resolve(response.json())),
  );
};

export const getDirections = (routeId?: string): Promise<Direction[] | ProblemDetails> => {
  if (!routeId) Promise.reject({ error: 'Route ID missing.' });
  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`).then(response => resolve(response.json())),
  );
};

export const getPlaces = (routeId?: string, directionId?: string): Promise<Place[] | ProblemDetails> => {
  if (!routeId || !directionId) Promise.reject({ error: 'One or more of a route ID or direction ID is missing.' });
  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`).then(response =>
      resolve(response.json()),
    ),
  );
};

export const getResults = (
  routeId?: string,
  directionId?: string,
  placeCode?: string,
): Promise<NexTripResult | ProblemDetails> => {
  if (!routeId || !directionId)
    Promise.reject({ error: 'One or more of a route ID, direction ID, or placeCode is missing.' });

  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/${routeId}/${directionId}/${placeCode}`).then(response =>
      resolve(response.json()),
    ),
  );
};

export async function getResultByStop(stopId?: string) {
  const response = await fetch(`https://svc.metrotransit.org/nextripv2/${stopId}`).then(res => res.json());
  if (response.stops && response.departures) {
    return {
      success: true,
      ...response,
    };
  }
  return {
    success: false,
    ...response,
  };
}
