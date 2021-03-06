import axios from "axios";
import * as Actions from "../actions";

export const getDashboardData = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.covid19india.org/data.json")
        .then(res => {
          if (res?.data) {
            dispatch(Actions.setDelta(res.data.key_values));
            dispatch(Actions.setStateWiseData(res.data.statewise));
            resolve(res.data);
          }
        })
        .catch(err => {});
    });
  };
};
