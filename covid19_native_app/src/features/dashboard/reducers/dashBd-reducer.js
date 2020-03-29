import * as Actions from "../actions";
import { setState } from "../../../utilities/helper";

const initialState = {
  dashBoardData: [],
  stateWiseData: [],
  caseSeries: [],
  delta: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DASH_BOARD_DATA:
      return setState(state, "dashBoardData", action);
    case Actions.SET_DELTAS:
      return setState(state, "delta", action);
    case Actions.SET_STATE_WISE_DATA:
      return setState(state, "stateWiseData", action);
    case Actions.SET_TIME_SERIES_DATA:
      return setstate(state, "caseSeries", action);
    default:
      return state;
  }
};
