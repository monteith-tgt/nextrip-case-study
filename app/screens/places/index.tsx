import type { PlacesScreenProps } from './props';

const PlacesScreen = ({ places }: PlacesScreenProps) => {
  return (
    <div>
      <pre>{JSON.stringify(places, null, 2)}</pre>
    </div>
  );
};

export default PlacesScreen;
