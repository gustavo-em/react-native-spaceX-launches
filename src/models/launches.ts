export interface Launch {
  fairings: any;
  links: any;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tbd: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: any[];
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: any[];
  id: string;
}

export interface LaunchesState {
  launches: Launch[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface LaunchesFulfilledAction {
  type: string;
  payload: Launch[];
}

export interface LaunchesRejectedAction {
  payload: any;
  type: string;
  error: {
    message: string;
  };
}
