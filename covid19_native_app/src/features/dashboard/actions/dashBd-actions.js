export const SET_LOGGED_IN = "Set [Login Status] for user";
export const SET_REGISTERED_DEVICE_STATUS =
  "Set [Registered device status] for user";
export const SET_DEVICE_ID = "Set [Deive Id] for Login";
import axios from "axios";

export const setLoggedIn = payload => dispatch =>
  dispatch({ type: SET_LOGGED_IN, payload });

export const setRegDeviceStatus = payload => dispatch =>
  dispatch({ type: SET_REGISTERED_DEVICE_STATUS, payload });

export const setDeviceId = payload => dispatch =>
  dispatch({ type: SET_DEVICE_ID, payload });


