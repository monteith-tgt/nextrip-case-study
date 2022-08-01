import { Outlet, useCatch } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';

import { getRoutes } from '~/client/nextrip';
import type { Route } from '~/interfaces/nextrip';
import HeaderNav from '~/components/HeaderNav';
import Footer from '~/components/Footer';

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();

  const stopId = formData.get('stopId');

  const errors = {
    stopId: stopId ? null : 'Stop ID is required.',
  };

  const hasErrors = Object.values(errors).some(errorMessage => errorMessage);

  if (hasErrors) {
    return json(errors);
  }

  return redirect(`/stops/${stopId}`);
}

export function CatchBoundary() {
  const caught = useCatch();

  return <p>Status {caught.status}</p>;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export const loader: LoaderFunction = async ({ params }) => {
  const routes: Route[] = await getRoutes();
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
