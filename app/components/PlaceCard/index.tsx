import { Link } from '@remix-run/react';

import { TEST_IDS } from '~/constants/test/testId';
import type { Place } from '~/interfaces/nextrip';

function PlaceCard({ place, selected }: { place: Place; selected?: boolean }) {
  return (
    <li data-testid={`${TEST_IDS.PLACECARD}-${place.place_code}`}>
      <Link className={selected ? `font-bold` : ``} to={`${place.place_code}`}>
        {place.description}
      </Link>
    </li>
  );
}

export default PlaceCard;
