import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { getPlaces } from '~/client/nextrip';
import type { Place } from '~/interfaces/nextrip';
import PlacesScreen from '~/screens/places';

export const loader: LoaderFunction = async ({ params }) => {
  const places: Place[] = await getPlaces(params?.routeId, params?.directionId);
  return json(places);
};

const DirectionsRoute = () => {
  const places: Place[] = useLoaderData();

  return (
    <>
      <PlacesScreen places={places} />
      <Outlet />
    </>
  );
};

export default DirectionsRoute;
