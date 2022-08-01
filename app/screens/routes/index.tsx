import { Link } from '@remix-run/react';
import RouteCard from '~/components/RouteCard';
import type { RoutesScreenProps } from './props';

const RoutesScreen = ({ routes, selectedRouteId }: RoutesScreenProps) => {
  return (
    <div className="mx-4 px-2 py-2 mb-2 flex-initial border-b sm:border-0 border-gray-300">
      {' '}
      <h2 className="text-2xl uppercase font-bold">Routes</h2>
      {selectedRouteId ? (
        <div>
          <h3 className="font-bold">{routes.find(route => route.route_id == selectedRouteId)?.route_label}</h3>
          <Link className="text-sm text-blue-900 underline" to="/routes">
            Change Route
          </Link>
        </div>
      ) : (
        <div className="scrolling-touch max-h-96 overflow-y-scroll p-2">
          <ul>
            {routes.map(route => (
              <RouteCard selected={selectedRouteId === route.route_id} key={`route_${route.route_id}`} route={route} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoutesScreen;
