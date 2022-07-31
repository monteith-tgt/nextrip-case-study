export type Agency = {
  agency_id: number;
  agency_name: string;
};

export type AlertMessage = {
  stop_closed: boolean;
  alert_text?: string;
};

export type Departure = {
  actual: boolean;
  trip_id: string;
  stop_id: number;
  departure_text?: string;
  departure_time: number;
  description?: string;
  gate?: string;
  route_id?: string;
  route_short_name?: string;
  direction_id: number;
  direction_text?: string;
  terminal?: string;
  schedule_relationship?: string;
};

export type Direction = {
  direction_id: number;
  direction_name?: string;
};

export type Place = {
  place_code?: string;
  description?: string;
};

export type Route = {
  route_id?: number;
  agency_id: string;
  route_label?: string;
};

export type Stop = {
  stop_id: number;
  latitude: number;
  longitude: number;
  description?: string;
};

export type Vehicle = {
  trip_id?: string;
  direction_id: number;
  direction?: string;
  location_time: number;
  route_id?: string;
  terminal?: string;
  latitude: number;
  longitude: number;
  bearing: number;
  odometer: number;
  speed: number;
};
