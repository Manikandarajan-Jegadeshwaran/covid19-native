import { combineReducers } from "redux";
import dashboardInfo from "../../dashboard/reducers/dashBd-reducer";
import nationalReportInfo from "./national-report-reducer";

export default combineReducers({ dashboardInfo, nationalReportInfo });
