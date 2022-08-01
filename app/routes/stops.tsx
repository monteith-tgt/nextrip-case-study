import { Outlet, useCatch } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';

import { getRoutes } from '~/client/nextrip';
import type { ProblemDetails, Route } from '~/interfaces/nextrip';
import HeaderNav from '~/components/HeaderNav';
import Footer from '~/components/Footer';
import StopForm from '~/components/StopForm';

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const stopId = formData.get('stopId');

  if (!stopId) {
    throw new Response('Stop ID required', { status: 403 });
  }

  return redirect(`/stops/${stopId}`);
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <>
      <HeaderNav />
      <main className="flex">
        <p>{caught.data}</p>
        <StopForm error={caught} />
      </main>
      <Footer />
    </>
  );
}

export const loader: LoaderFunction = async () => {
  const routes: Route[] | ProblemDetails = await getRoutes();
  return json(routes);
};

const Index = () => {
  return (
    <>
      <HeaderNav />
      <main className="flex">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Index;
