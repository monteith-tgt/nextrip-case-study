import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData, useParams } from '@remix-run/react';

import { getPlaces } from '~/client/nextrip';
import type { Place } from '~/interfaces/nextrip';
import PlacesScreen from '~/screens/places';

export const loader: LoaderFunction = async ({ params }) => {
  const places: Place[] = await getPlaces(params?.routeId, params?.directionId);
  return json(places);
};

const DirectionsRoute = () => {
  const places: Place[] = useLoaderData();
  const params = useParams();

  return (
    <>
      <PlacesScreen selectedPlaceCode={params.placeCode} places={places} />
      <Outlet />
    </>
  );
};

export default DirectionsRoute;
