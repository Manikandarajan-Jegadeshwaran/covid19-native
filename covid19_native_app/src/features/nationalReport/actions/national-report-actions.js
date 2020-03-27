export const SET_DISTRICT_DATA = "Set [District data] for report";
import axios from "axios";

export const setDistrictData = payload => dispatch =>
  dispatch({ type: SET_DISTRICT_DATA, payload });
