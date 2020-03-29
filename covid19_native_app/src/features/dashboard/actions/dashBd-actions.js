export const SET_DEVICE_ID = "Set [Deive Id] for Login";
export const SET_DASH_BOARD_DATA = "Set [Dash board data] for Home page";
export const SET_STATE_WISE_DATA = "Set [State wise data] for home page";
export const SET_TIME_SERIES_DATA = "Set [Time Series] for Graph";
export const SET_DELTAS = "Set [delta of overall count] for home page";
import axios from "axios";

export const setDeviceId = payload => dispatch =>
  dispatch({ type: SET_DEVICE_ID, payload });

export const setDashboardData = payload => dispatch =>
  dispatch({ type: SET_DASH_BOARD_DATA, payload });

export const setStateWiseData = payload => dispatch =>
  dispatch({ type: SET_STATE_WISE_DATA, payload });

export const setTimeSeriesData = payload => dispatch =>
  dispatch({ type: SET_TIME_SERIES_DATA, payload });

export const setDelta = payload => dispatch =>
  dispatch({ type: SET_DELTAS, payload });
