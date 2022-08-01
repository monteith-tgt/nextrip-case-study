import type { Direction } from '~/interfaces/nextrip';

export interface DirectionsScreenProps {
  directions: Direction[];
  selectedDirectionId?: string;
}
