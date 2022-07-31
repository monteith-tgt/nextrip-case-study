import type { Route, Direction, Place, NexTripResult } from '~/interfaces/nextrip';

export const getRoutes = (): Promise<Route[]> => {
  return new Promise(resolve =>
    fetch('https://svc.metrotransit.org/nextripv2/routes').then(response => resolve(response.json())),
  );
};

export const getDirections = (routeId: string): Promise<Direction[]> => {
  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`).then(response => resolve(response.json())),
  );
};

export const getPlaces = (routeId: string, directionId: number): Promise<Place[]> => {
  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`).then(response =>
      resolve(response.json()),
    ),
  );
};

export const getResults = (routeId: string, directionId: number, placeCode: string): Promise<NexTripResult[]> => {
  return new Promise(resolve =>
    fetch(`https://svc.metrotransit.org/nextripv2/${routeId}/${directionId}/${placeCode}`).then(response =>
      resolve(response.json()),
    ),
  );
};
