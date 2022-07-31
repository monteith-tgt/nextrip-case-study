import type { Place } from '~/interfaces/nextrip';

/**
 * Places (Stops) for Route 21, Eastbound
 * https://svc.metrotransit.org/nextripv2/stops/21/0
 */

const places: Place[] = [
  {
    place_code: 'UPTS',
    description: 'Uptown Transit Station',
  },
  {
    place_code: 'LALY',
    description: 'Lake St and Lyndale Ave',
  },
  {
    place_code: 'BLLK',
    description: 'Lake St and Blaisdell Ave',
  },
  {
    place_code: 'CHLA',
    description: 'Chicago Lake Transit Center',
  },
  {
    place_code: 'CELA',
    description: 'Lake St and Cedar Ave',
  },
  {
    place_code: 'LAHI',
    description: 'Lake St/ Midtown Station',
  },
  {
    place_code: 'TWAY',
    description: 'Transit Way and 27th Ave',
  },
  {
    place_code: '36LA',
    description: 'Lake St and 36th Ave',
  },
  {
    place_code: 'MARS',
    description: 'Marshall Ave and Cleveland Ave',
  },
  {
    place_code: 'SNUN',
    description: 'University Ave and Snelling Ave',
  },
  {
    place_code: 'SLHA',
    description: 'Selby Ave and Hamline Ave',
  },
  {
    place_code: 'SLDA',
    description: 'Selby Ave and Dale St',
  },
  {
    place_code: '5MIN',
    description: '5th St and Minnesota St',
  },
  {
    place_code: 'UNDP',
    description: 'Union Depot',
  },
];

export default places;
