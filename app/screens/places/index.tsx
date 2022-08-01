import type { PlacesScreenProps } from './props';
import PlaceCard from '~/components/PlaceCard';
import { Link } from '@remix-run/react';

const PlacesScreen = ({ places, selectedPlaceCode }: PlacesScreenProps) => {
  return (
    <div className="mx-4 px-2 py-2 mb-2 flex-initial border-b sm:border-0 border-gray-300">
      <h2 className="text-2xl uppercase font-bold">Stops</h2>
      {selectedPlaceCode ? (
        <div>
          <h3 className="font-bold">{places.find(place => place.place_code == selectedPlaceCode)?.description}</h3>
          <Link className="text-sm text-blue-900 underline" to=".">
            Change Stop
          </Link>
        </div>
      ) : (
        <div className="max-h-96 scrolling-touch overflow-y-scroll p-2">
          <ul>
            {places.map(place => (
              <PlaceCard
                selected={selectedPlaceCode == place.place_code}
                key={`place_${place.place_code}`}
                place={place}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlacesScreen;
