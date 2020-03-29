import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import withReducer from "../../store/withReducer";
import reducer from "./reducers";
import { getDashboardData } from "./api";

import Wrapper from "../../components/wrapper";
import Cases from "../../components/cases";

function DashBoardHome(props) {
  const dispatch = useDispatch();
  const [caseSeries, setCaseSeries] = useState([]);

  const stateWiseData = useSelector(
    ({ dashBdStore }) => dashBdStore?.dashboardInfo?.stateWiseData
  );

  const delta = useSelector(
    ({ dashBdStore }) => dashBdStore?.dashboardInfo?.delta
  );

  function callAPI() {
    dispatch(getDashboardData()).then(res => {
      if (res?.cases_time_series) {
        setCaseSeries(res.cases_time_series);
      }
    });
  }

  useEffect(() => {
    callAPI();
  }, []);

  function refreshData() {
    callAPI();
  }

  return (
    <Wrapper>
      <View style={styles.container}>
        <Cases {...{ stateWiseData, delta, refreshData, caseSeries }} />
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
