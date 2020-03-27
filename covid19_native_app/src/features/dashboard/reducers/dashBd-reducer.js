import * as Actions from "../actions";
import { setState } from "../../../utilities/helper";

const initialState = {
  loggedIn: false,
  registeredDevice: true,
  deviceId: "asdfadfasf adfasdfds"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_LOGGED_IN:
      return setState(state, "loggedIn", action);
    case Actions.SET_DEVICE_ID:
      return setState(state, "deviceId", action);
    case Actions.SET_REGISTERED_DEVICE_STATUS:
      return setState(state, "registeredDevice", action);
    default:
      return state;
  }
};
