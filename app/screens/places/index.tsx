import type { PlacesScreenProps } from './props';
import PlaceCard from '~/components/PlaceCard';

const PlacesScreen = ({ places, selectedPlaceCode }: PlacesScreenProps) => {
  return (
    <ul>
      {places.map(place => (
        <PlaceCard selected={selectedPlaceCode == place.place_code} key={`place_${place.place_code}`} place={place} />
      ))}
    </ul>
  );
};

export default PlacesScreen;
