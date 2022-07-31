import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { getRoutes } from '~/client/nextrip';
import type { Route } from '~/interfaces/nextrip';
import RoutesScreen from '~/screens/routes';

export const loader: LoaderFunction = async ({ params }) => {
  const routes: Route[] = await getRoutes();
  return json(routes);
};

const Index = () => {
  const routes = useLoaderData();
  return (
    <>
      <header className="text-center my-4">
        <h1 className="text-3xl font-bold">Real-time Departures</h1>
        <p>Find your next bus by route or stop</p>
        <nav>
          <ul className="flex justify-center">
            <li>
              <a className="block p-4 mx-8" href="#">
                Find by Route
              </a>
            </li>
            <li>
              <a className="block p-4 mx-8" href="#">
                Find by Stop
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex">
        <RoutesScreen routes={routes} />
        <div>
          <p>Please select a route.</p>
        </div>
      </main>
      <footer className="flex justify-center">
        <a className="text-center block p-4 mx-8 w-full max-w-xs" href="#">
          Start over
        </a>
      </footer>
    </>
  );
};

export default Index;
