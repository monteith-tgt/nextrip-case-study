import RouteCard from '~/components/RouteCard';
import type { RoutesScreenProps } from './props';

const RoutesScreen = ({ routes, selectedRouteId }: RoutesScreenProps) => {
  return (
    <ul>
      {routes.map(route => (
        <RouteCard selected={selectedRouteId === route.route_id} key={`route_${route.route_id}`} route={route} />
      ))}
    </ul>
  );
};

export default RoutesScreen;
