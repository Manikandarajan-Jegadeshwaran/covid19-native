import { combineReducers } from "redux";
import dashBdStore from "../features/dashboard/reducers";

const createReducer = otherReducers =>
  combineReducers({ dashBdStore, ...otherReducers });

export default createReducer;
