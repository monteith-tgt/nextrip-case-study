import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useCatch, useFetcher, useLoaderData, useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';

import { getResultByStop } from '~/client/nextrip';
import StopForm from '~/components/StopForm';
import type { NexTripResult, ProblemDetails } from '~/interfaces/nextrip';
import ResultsScreen from '~/screens/results';

export const loader: LoaderFunction = async ({ params }) => {
  const result: NexTripResult | ProblemDetails = await getResultByStop(params?.stopId);
  if (result.success) {
    return json(result);
  }
  throw new Response(result.detail, { status: result.status });
};

export function CatchBoundary() {
  const caught = useCatch();
  return <StopForm error={caught} />;
}

const StopIdRoute = () => {
  const loaderData: NexTripResult = useLoaderData();
  const [result, setResult] = useState(loaderData);
  const fetcher = useFetcher();
  const params = useParams();

  useEffect(() => {
    const resultInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetcher.load(`/stops/${params.stopId}`);
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

export default StopIdRoute;
