import type { RoutesScreenProps } from './props';

const RoutesScreen = ({ routes }: RoutesScreenProps) => {
  return (
    <div>
      <pre>{JSON.stringify(routes, null, 2)}</pre>
    </div>
  );
};

export default RoutesScreen;
