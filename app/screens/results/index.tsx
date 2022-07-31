import type { ResultsScreenProps } from './props';
import ResultCard from '~/components/ResultCard';

const ResultsScreen = ({ result }: ResultsScreenProps) => {
  return (
    <div>
      <ResultCard result={result} />
    </div>
  );
};

export default ResultsScreen;
