import type { Place } from '~/interfaces/nextrip';

export interface PlacesScreenProps {
  places: Place[];
  selectedPlaceCode?: string;
}
