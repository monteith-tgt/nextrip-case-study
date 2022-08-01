import type { ResultsScreenProps } from './props';
import ResultCard from '~/components/ResultCard';

const ResultsScreen = ({ result }: ResultsScreenProps) => {
  return (
    <div className="mx-4 px-2 py-2 mb-2 flex-1">
      {' '}
      <ResultCard result={result} />
    </div>
  );
};

export default ResultsScreen;
