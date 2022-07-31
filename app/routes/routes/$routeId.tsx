import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData, useParams } from '@remix-run/react';

import { getDirections } from '~/client/nextrip';
import type { Direction } from '~/interfaces/nextrip';
import DirectionsScreen from '~/screens/directions';

export const loader: LoaderFunction = async ({ params }) => {
  const directions: Direction[] = await getDirections(params?.routeId);
  return json(directions);
};

const DirectionsRoute = () => {
  const directions: Direction[] = useLoaderData();
  const params = useParams();

  return (
    <>
      <DirectionsScreen selectedDirectionId={params.directionId} directions={directions} />
      <Outlet />
    </>
  );
};

export default DirectionsRoute;
