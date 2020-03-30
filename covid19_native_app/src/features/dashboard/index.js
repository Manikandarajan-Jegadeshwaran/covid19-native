import React from "react";
import { useSelector, useDispatch } from "react-redux";
import withReducer from "../../store/withReducer";
import reducer from "./reducers";
import { DashBoardNavigation } from "../../navigation";

function Dashboard(props) {
  const dispatch = useDispatch();
  const deviceId = useSelector(
    ({ dashBdStore }) => dashBdStore?.dashboardInfo?.deviceId
  );
  return <DashBoardNavigation />;
}

export default withReducer("dashBdStore", reducer)(Dashboard);
