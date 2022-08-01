import { useLoaderData, useParams } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { getRoutes } from '~/client/nextrip';
import type { Route } from '~/interfaces/nextrip';
import RoutesScreen from '~/screens/routes';
import HeaderNav from '~/components/HeaderNav';
import Footer from '~/components/Footer';

export const loader: LoaderFunction = async () => {
  const routes = await getRoutes();
  return json(routes);
};

const Index = () => {
  const routes: Route[] = useLoaderData();
  const params = useParams();

  return (
    <>
      <HeaderNav />
      <main className="max-w-screen-xl lg:flex lg:justify-start mx-auto">
        <RoutesScreen selectedRouteId={params.routeId} routes={routes} />
        <div>
          <p>Please select a route.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
