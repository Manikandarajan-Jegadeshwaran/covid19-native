import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import Wrapper from "../../components/wrapper";

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
  let districtCollection = [];
  if (districtData && item) {
    const { state } = item;
    districtInfo = districtData[state]?.districtData;
    districtInfo &&
      Object.keys(districtInfo).forEach(districtName => {
        districtCollection.push({
          districtName,
          data: districtInfo[districtName]
        });
      });
  }

  function handleSearch(text) {
    setQuery(text);
  }

  function getDistricts() {
    let data = districtCollection;
    if (query !== "") {
      data = districtCollection.filter(
        each =>
          each.districtName.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    }

    return data.sort(
      (a, b) => Number(b.data.confirmed) - Number(a.data.confirmed)
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
            <Text style={styles.districtValue}>{item.confirmed}</Text>
          </View>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            style={{ height: "100%" }}
            data={getDistricts()}
            keyExtractor={item => item.districtName}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <DistrictItem {...{ item }} />}
          />
        </View>
      </View>
      <View style={{height:100}}>
        <Text/>
      </View>
    </Wrapper>
  );
}

function DistrictItem(props) {
  const { item } = props;
  return (
    <>
      <View style={styles.districtItem}>
        <View style={{width:'100%', flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 15 }}>{item.districtName}</Text>
          <Text style={{ fontSize: 20 }}>{item.data.confirmed}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
    width: "95%",
    height: "100%"
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
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
    marginBottom: 10,
    height: "100%"
  },
  districtItem: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#004FF91c",
    borderRadius: 5
  },
  total: {
    paddingTop: 2,
    fontSize: 15
  },
  districtValue: {
    fontSize: 20
  }
});

export default DistrictReport;
