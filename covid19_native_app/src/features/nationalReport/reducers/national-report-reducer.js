import * as Actions from "../actions";
import { setState } from "../../../utilities/helper";

const initialState = {
  districtData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DISTRICT_DATA:
      return setState(state, "districtData", action);
    default:
      return state;
  }
};
