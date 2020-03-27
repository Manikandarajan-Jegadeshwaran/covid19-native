import axios from "axios";
import * as Actions from "../actions";

export const getDashboardData = () => {
  return dispatch => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then(res => {
        if (res?.data) {
          if (res.data?.statewise) {
            dispatch(Actions.setStateWiseData(res.data.statewise));
          }
          if (res.data?.key_values) {
            dispatch(Actions.setDelta(res.data.key_values));
          }
        }
      })
      .catch(err => {});
  };
};
