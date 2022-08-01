import { TEST_IDS } from '~/constants/test/testId';
import type { NexTripResult } from '~/interfaces/nextrip';
import DepartureRow from '../DepartureRow';

function ResultCard({ result }: { result: NexTripResult; selected?: boolean }) {
  const routeDescription = result.stops?.at(0)?.description;
  const stopId = result.stops?.at(0)?.stop_id;

  return (
    <div className="w-full" data-testid={`${TEST_IDS.RESULTCARD}`}>
      <div className="mb-4">
        <h2 className="text-2xl uppercase font-bold">{routeDescription}</h2>
        <p className="text-sm">Stop#: {stopId}</p>
      </div>
      {result.alerts?.map(alert => (
        <p
          className={`p-3 border mb-3 text-sm rounded ${
            alert.stop_closed
              ? 'border-red-800 bg-red-300 text-red-800'
              : 'bg-yellow-200 border-yellow-900 text-yellow-900'
          }`}
          key={`alert-${alert.alert_text}`}
          role="alert">
          {alert.alert_text}
        </p>
      ))}
      {result.departures?.length ? (
        <table className="mt-4 w-full">
          <caption className="sr-only">{`Departures for ${routeDescription}`}</caption>
          <thead>
            <tr className="text-xl font-bold">
              <td>Route</td>
              <td>Destination</td>
              <td>Departs</td>
            </tr>
          </thead>
          <tbody>
            {result.departures?.map(departure => (
              <DepartureRow key={departure.trip_id} departure={departure} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No departures at this time.</p>
      )}
    </div>
  );
}

export default ResultCard;
