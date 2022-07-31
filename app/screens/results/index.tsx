import type { ResultsScreenProps } from './props';

const ResultsScreen = ({ result }: ResultsScreenProps) => {
  return (
    <div>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default ResultsScreen;
