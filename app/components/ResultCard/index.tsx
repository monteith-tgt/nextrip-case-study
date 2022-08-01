import { TEST_IDS } from '~/constants/test/testId';
import type { NexTripResult } from '~/interfaces/nextrip';
import DepartureRow from '../DepartureRow';

function ResultCard({ result }: { result: NexTripResult; selected?: boolean }) {
  const routeDescription = result.stops?.at(0)?.description;
  const stopId = result.stops?.at(0)?.stop_id;

  return (
    <div data-testid={`${TEST_IDS.RESULTCARD}`}>
      <div className="">
        <h3>{routeDescription}</h3>
        <span>Stop#: {stopId}</span>
      </div>
      {result.departures?.length ? (
        <table>
          <caption className="sr-only">{`Departures for ${routeDescription}`}</caption>
          <thead>
            <tr>
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
