import { Outlet, useLoaderData, useParams } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { getRoutes } from '~/client/nextrip';
import type { Route } from '~/interfaces/nextrip';
import RoutesScreen from '~/screens/routes';
import HeaderNav from '~/components/HeaderNav';
import Footer from '~/components/Footer';

export const loader: LoaderFunction = async () => {
  const routes: Route[] = await getRoutes();
  return json(routes);
};

const Index = () => {
  const routes: Route[] = useLoaderData();
  const params = useParams();

  return (
    <>
      <HeaderNav />
      <main className="flex">
        <RoutesScreen selectedRouteId={params.routeId} routes={routes} />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Index;
