import type { Departure } from '~/interfaces/nextrip';

function DepartureRow({ departure }: { departure: Departure }) {
  const { route_short_name, gate, terminal } = departure;
  const routeName = [route_short_name, gate, terminal].filter(str => !!str).join('');
  return (
    <tr>
      <td>{routeName}</td>
      <td>{departure.description}</td>
      <td>
        {departure.actual && <img src="/images/broadcast-blue.svg" alt="Live departure time" />}
        <span>{departure.departure_text}</span>
      </td>
    </tr>
  );
}

export default DepartureRow;
