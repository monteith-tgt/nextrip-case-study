import type { NexTripResult } from '~/interfaces/nextrip';

const result: NexTripResult = {
  stops: [
    {
      stop_id: 56029,
      latitude: 44.954047,
      longitude: -93.097459,
      description: 'Robert St Station',
    },
  ],
  alerts: [
    {
      stop_closed: false,
      alert_text: 'METRO Blue and Green Lines will be testing the use of two-car trains beginning Saturday, July 9.',
    },
  ],
  departures: [
    {
      actual: false,
      trip_id: '21228902-JUN22-RAIL-Sunday-02',
      stop_id: 56029,
      departure_text: '11:23',
      departure_time: 1659327780,
      description: 'to Mpls-Target Field',
      route_id: '902',
      route_short_name: 'Green',
      direction_id: 1,
      direction_text: 'WB',
      schedule_relationship: 'Scheduled',
    },
  ],
};

export default result;
