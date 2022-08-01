import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useCatch, useLoaderData, useParams } from '@remix-run/react';

import { getDirections } from '~/client/nextrip';
import type { Direction, ProblemDetails } from '~/interfaces/nextrip';
import DirectionsScreen from '~/screens/directions';

export const loader: LoaderFunction = async ({ params }) => {
  const directions: Direction[] | ProblemDetails = await getDirections(params?.routeId);
  if (!Array.isArray(directions)) {
    throw new Response('Route ID Not Found', { status: 404 });
  }
  return json(directions);
};

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h2>
        {caught.status}: {caught.data}
      </h2>
      <p>Please select a route.</p>
    </div>
  );
}

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
