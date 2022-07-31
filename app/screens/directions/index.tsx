import type { DirectionsScreenProps } from './props';

const DirectionsScreen = ({ directions }: DirectionsScreenProps) => {
  return (
    <div>
      <pre>{JSON.stringify(directions, null, 2)}</pre>
    </div>
  );
};

export default DirectionsScreen;
