import * as Actions from "../actions";
import { setState } from "../../../utilities/helper";

const initialState = {
  dashBoardData: [],
  stateWiseData: [],
  delta: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DASH_BOARD_DATA:
      return setState(state, "dashBoardData", action);
    case Actions.SET_STATE_WISE_DATA:
      return setState(state, "stateWiseData", action);
    case Actions.SET_DELTAS:
      return setState(state, "delta", action);
    default:
      return state;
  }
};
