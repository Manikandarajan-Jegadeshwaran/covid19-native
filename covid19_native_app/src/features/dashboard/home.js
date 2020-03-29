import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import withReducer from "../../store/withReducer";
import reducer from "./reducers";
import { getDashboardData } from "./api";

import Wrapper from "../../components/wrapper";
import Cases from "../../components/cases";

function DashBoardHome(props) {
  const dispatch = useDispatch();

  const stateWiseData = useSelector(
    ({ dashBdStore }) => dashBdStore?.dashboardInfo?.stateWiseData
  );
  const delta = useSelector(
    ({ dashBdStore }) => dashBdStore?.dashboardInfo?.delta
  );


  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  function refreshData() {
    dispatch(getDashboardData());
  }

  return (
    <Wrapper>
      <View style={styles.container}>
        <Cases {...{ stateWiseData, delta, refreshData }} />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default withReducer("dashBdStore", reducer)(DashBoardHome);
