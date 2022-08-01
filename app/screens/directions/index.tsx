import DirectionCard from '~/components/DirectionCard';
import type { DirectionsScreenProps } from './props';

const DirectionsScreen = ({ directions, selectedDirectionId }: DirectionsScreenProps) => {
  return (
    <ul>
      {directions.map(direction => (
        <DirectionCard
          selected={selectedDirectionId == direction.direction_id}
          key={`direction_${direction.direction_id}`}
          direction={direction}
        />
      ))}
    </ul>
  );
};

export default DirectionsScreen;
