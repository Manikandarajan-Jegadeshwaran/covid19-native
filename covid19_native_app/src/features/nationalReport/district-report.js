import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar, Card } from "react-native-paper";
import Wrapper from "../../components/wrapper";
import { getDistrictWiseData } from "./api";

function DistrictReport(props) {
  const { route } = props;
  const { item } = route?.params;
  const [query, setQuery] = React.useState("");

  const { container, titleContainer, title, titleValue } = styles;

  const districtData = useSelector(
    ({ nationalReportStore }) =>
      nationalReportStore?.nationalReportInfo?.districtData
  );

  let districtInfo = null;
  let districtNames = [];
  if (districtData && item) {
    const { state } = item;
    districtInfo = districtData[state]?.districtData;
    districtNames = districtInfo && Object.keys(districtInfo);
  }

  function handleSearch(text) {
    setQuery(text);
  }

  function getDistrictNames() {
    if (query === "") {
      return districtNames;
    }

    return districtNames.filter(
      dist => dist.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
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
          <View style={titleValue}>
            <Text style={styles.total}>Total </Text>
            <Text style={styles.districtValue}>{item.confirmed}</Text>
          </View>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={getDistrictNames()}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <DistrictItem {...{ districtName: item, districtInfo }} />
            )}
          />
        </View>
      </View>
    </Wrapper>
  );
}

function DistrictItem(props) {
  const { districtInfo, districtName } = props;
  const district = districtInfo[districtName];
  return (
    <>
      <Card style={styles.districtItem}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{districtName}</Text>
          <Text>{district.confirmed}</Text>
        </View>
      </Card>
    </>
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
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 20,
    fontWeight: "500"
  },
  titleValue: {
    flexDirection: "row"
  },
  listContainer: {
    margin: 10,
    width: "100%",
    marginBottom: 20
  },
  districtItem: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10
  },
  total: {
    paddingTop: 2,
    fontSize: 15
  },
  districtValue: {
    fontSize: 18
  }
});

export default DistrictReport;
