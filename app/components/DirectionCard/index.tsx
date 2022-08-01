import { Link } from '@remix-run/react';

import { TEST_IDS } from '~/constants/test/testId';
import type { Direction } from '~/interfaces/nextrip';

function DirectionCard({ direction, selected }: { direction: Direction; selected?: boolean }) {
  return (
    <li data-testid={`${TEST_IDS.DIRECTIONCARD}-${direction.direction_id}`}>
      <Link className={`underline ${selected ? `font-bold` : ``}`} to={`${direction.direction_id}`}>
        {direction.direction_name}
      </Link>
    </li>
  );
}

export default DirectionCard;
