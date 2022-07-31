import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import { getResults } from '~/client/nextrip';
import type { NexTripResult } from '~/interfaces/nextrip';
import ResultsScreen from '~/screens/results';

export const loader: LoaderFunction = async ({ params }) => {
  const result: NexTripResult = await getResults(params?.routeId, params?.directionId, params?.placeCode);
  return json(result);
};

const DirectionsRoute = () => {
  const result: NexTripResult = useLoaderData();

  return (
    <>
      <ResultsScreen result={result} />
      <Outlet />
    </>
  );
};

export default DirectionsRoute;
