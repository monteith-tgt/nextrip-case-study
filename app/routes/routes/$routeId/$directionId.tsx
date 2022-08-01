import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useCatch, useLoaderData, useParams } from '@remix-run/react';

import { getPlaces } from '~/client/nextrip';
import type { Place, ProblemDetails } from '~/interfaces/nextrip';
import PlacesScreen from '~/screens/places';

export const loader: LoaderFunction = async ({ params }) => {
  const places: Place[] | ProblemDetails = await getPlaces(params?.routeId, params?.directionId);
  if (!Array.isArray(places)) {
    throw new Response('Direction Not Found', { status: 404 });
  }
  return json(places);
};

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h2>
        {caught.status}: {caught.data}
      </h2>
      <p>Please select a direction.</p>
    </div>
  );
}

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
