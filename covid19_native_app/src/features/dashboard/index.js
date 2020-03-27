import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import withReducer from "../../store/withReducer";
import reducer from "./reducers";

function Dashboard(props) {
  const dispatch = useDispatch();
  const deviceId = useSelector(
    ({ dashBdStore }) => dashBdStore?.dashboardInfo?.deviceId
  );
  return (
    <View>
      <Text>{deviceId}</Text>
    </View>
  );
}

export default withReducer("dashBdStore", reducer)(Dashboard);
