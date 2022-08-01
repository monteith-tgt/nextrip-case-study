import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useCatch, useFetcher, useLoaderData, useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { getResults } from '~/client/nextrip';
import type { NexTripResult, ProblemDetails } from '~/interfaces/nextrip';
import ResultsScreen from '~/screens/results';

export const loader: LoaderFunction = async ({ params }) => {
  const result: NexTripResult | ProblemDetails = await getResults(
    params?.routeId,
    params?.directionId,
    params?.placeCode,
  );

  return json(result);
};

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h2>
        {caught.status}: {caught.data}
      </h2>
      <p>Please select a stop.</p>
    </div>
  );
}

const DirectionsRoute = () => {
  const loaderData: NexTripResult = useLoaderData();
  const [result, setResult] = useState(loaderData);
  const fetcher = useFetcher();
  const params = useParams();

  useEffect(() => {
    const resultInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetcher.load(`/routes/${params.routeId}/${params.directionId}/${params.placeCode}`);
      }
    }, 30 * 1000);

    return () => clearInterval(resultInterval);
  }, [fetcher, params]);

  useEffect(() => {
    if (fetcher.data) {
      setResult(fetcher.data);
    }
  }, [fetcher.data]);

  return (
    <>
      <ResultsScreen result={result} />
      <Outlet />
    </>
  );
};

export default DirectionsRoute;
