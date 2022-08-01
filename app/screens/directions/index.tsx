import { Link } from '@remix-run/react';
import DirectionCard from '~/components/DirectionCard';
import type { DirectionsScreenProps } from './props';

const DirectionsScreen = ({ directions, selectedDirectionId }: DirectionsScreenProps) => {
  return (
    <div className="mx-4 px-2 py-2 mb-2 flex-initial border-b sm:border-0 border-gray-300">
      <h2 className="text-2xl uppercase font-bold">Directions</h2>
      {selectedDirectionId ? (
        <div>
          <h3 className="font-bold">
            {directions.find(direction => direction.direction_id == selectedDirectionId)?.direction_name}
          </h3>
          <Link className="text-sm text-blue-900 underline" to=".">
            Change Direction
          </Link>
        </div>
      ) : (
        <div className="max-h-96 overflow-y-scroll p-2">
          <ul>
            {directions.map(direction => (
              <DirectionCard
                selected={selectedDirectionId == direction.direction_id}
                key={`direction_${direction.direction_id}`}
                direction={direction}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DirectionsScreen;
