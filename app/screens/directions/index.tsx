import DirectionCard from '~/components/DirectionCard';
import type { DirectionsScreenProps } from './props';

const DirectionsScreen = ({ directions }: DirectionsScreenProps) => {
  return (
    <ul>
      {directions.map(direction => (
        <DirectionCard key={`direction_${direction.direction_id}`} direction={direction} />
      ))}
    </ul>
  );
};

export default DirectionsScreen;
