import type { NexTripResult } from '~/interfaces/nextrip';

/**
 * NexTrip Results for Route 21, Eastbound, Selby & Dale
 * https://svc.metrotransit.org/nextripv2/21/0/SLDA
 */

const results: NexTripResult = {
  stops: [
    {
      stop_id: 17022,
      latitude: 44.946533,
      longitude: -93.126716,
      description: 'Selby Ave & Dale St',
    },
  ],
  alerts: [
    {
      stop_closed: false,
      alert_text:
        'The following stop is closed for Route 21 until further notice due to construction: Marshall Ave & Montrose Place - Stop #16946',
    },
    {
      stop_closed: false,
      alert_text:
        'The following stop is closed for Routes 21 and 5 other routes until further notice: Smith Ave & 5th St W - Stop #52758 (eastbound)',
    },
  ],
  departures: [
    {
      actual: true,
      trip_id: '21177557-JUN22-MVS-BUS-Sunday-02',
      stop_id: 17022,
      departure_text: '4 Min',
      departure_time: 1659286740,
      description: 'Selby-Lake / St Paul',
      route_id: '21',
      route_short_name: '21',
      direction_id: 0,
      direction_text: 'EB',
      terminal: 'A',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '21177545-JUN22-MVS-BUS-Sunday-02',
      stop_id: 17022,
      departure_text: '12:20',
      departure_time: 1659288000,
      description: 'Selby-Lake / St Paul',
      route_id: '21',
      route_short_name: '21',
      direction_id: 0,
      direction_text: 'EB',
      terminal: 'A',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '21177614-JUN22-MVS-BUS-Sunday-02',
      stop_id: 17022,
      departure_text: '12:40',
      departure_time: 1659289200,
      description: 'Selby-Lake / St Paul',
      route_id: '21',
      route_short_name: '21',
      direction_id: 0,
      direction_text: 'EB',
      terminal: 'A',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '21177519-JUN22-MVS-BUS-Sunday-02',
      stop_id: 17022,
      departure_text: '1:02',
      departure_time: 1659290520,
      description: 'Selby-Lake / St Paul',
      route_id: '21',
      route_short_name: '21',
      direction_id: 0,
      direction_text: 'EB',
      terminal: 'A',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '21177640-JUN22-MVS-BUS-Sunday-02',
      stop_id: 17022,
      departure_text: '1:21',
      departure_time: 1659291660,
      description: 'Selby-Lake / St Paul',
      route_id: '21',
      route_short_name: '21',
      direction_id: 0,
      direction_text: 'EB',
      terminal: 'A',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '21177628-JUN22-MVS-BUS-Sunday-02',
      stop_id: 17022,
      departure_text: '1:42',
      departure_time: 1659292920,
      description: 'Selby-Lake / St Paul',
      route_id: '21',
      route_short_name: '21',
      direction_id: 0,
      direction_text: 'EB',
      terminal: 'A',
      schedule_relationship: 'NoData',
    },
  ],
};

export default results;
