import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import Wrapper from "../../components/wrapper";
import { getDistrictWiseData } from "./api";

function DistrictReport(props) {
  const { route } = props;
  const { item } = route?.params;
  const [query, setQuery] = React.useState("");

  const { container, titleContainer, title } = styles;

  const districtData = useSelector(
    ({ nationalReportStore }) =>
      nationalReportStore?.nationalReportInfo?.districtData
  );

  let districtInfo = null;
  if (districtData && item) {
    const { state } = item;
    districtInfo = districtData[state];
  }

  function handleSearch(text) {
    setQuery(text);
  }

  return (
    <Wrapper>
      <View style={container}>
        <Searchbar
          placeholder='Search'
          value={query}
          onChangeText={handleSearch}
        />
        <View style={titleContainer}>
          <Text style={title}>{item.state}</Text>
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
    width: "95%"
  },
  titleContainer: {
    marginTop: 10,
    alignSelf: "flex-start"
  },
  title: {
    fontSize: 20,
    fontWeight: "500"
  }
});

export default DistrictReport;
