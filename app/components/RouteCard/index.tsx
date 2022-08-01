import { Link } from '@remix-run/react';
import { TEST_IDS } from '~/constants/test/testId';
import type { Route } from '~/interfaces/nextrip';

function RouteCard({ route, selected }: { route: Route; selected?: boolean }) {
  return (
    <li data-testid={`${TEST_IDS.ROUTECARD}-${route.route_id}`}>
      <Link className={`underline ${selected ? `font-bold` : ``}`} to={`/routes/${route.route_id}`}>
        {route.route_label}
      </Link>
    </li>
  );
}

export default RouteCard;
