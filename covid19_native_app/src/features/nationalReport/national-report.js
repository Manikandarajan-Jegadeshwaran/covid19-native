import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, View, FlatList, StyleSheet, Alert, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import Wrapper from "../../components/wrapper";
import { getDashboardData } from "../dashboard/api";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StateItemTitle, StateItemContent } from "./components";
import { DashBoardScreens } from "../../utilities/constants";
import { getDistrictWiseData } from "./api";

function NationalReport(props) {
  const { navigation, route } = props;
  const { stateWiseData } = route?.params;

  const [query, setQuery] = React.useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  const [stateData, setStateData] = React.useState([]);
  const dispatch = useDispatch();

  const deviceId = useSelector(
    ({ nationalReportStore }) =>
      nationalReportStore?.nationalReportInfo?.deviceId
  );

  const stateWiseDataFromAPI = useSelector(
    ({ nationalReportStore }) =>
      nationalReportStore?.dashboardInfo?.stateWiseData
  );

  React.useEffect(() => {
    setRefreshing(false);
    setStateData(stateWiseData?.length > 0 ? stateWiseData : []);
  }, [stateWiseData]);

  React.useEffect(() => {
    setRefreshing(false);
    stateWiseDataFromAPI?.length > 0 && setStateData(stateWiseDataFromAPI);
  }, [stateWiseDataFromAPI]);

  function getStateData() {
    const data = stateData.filter(each => each.state.toLowerCase() !== "total");
    if (query === "") {
      return data;
    }

    return data.filter(
      each =>
        each.state.toLowerCase().indexOf(query.toLocaleLowerCase().trim()) >
          -1 ||
        each.confirmed.toLowerCase().indexOf(query.toLocaleLowerCase().trim()) >
          -1 ||
        each.active.toLowerCase().indexOf(query.toLocaleLowerCase().trim()) >
          -1 ||
        each.deaths.toLowerCase().indexOf(query.toLocaleLowerCase().trim()) >
          -1 ||
        each.recovered.toLowerCase().indexOf(query.toLocaleLowerCase().trim()) >
          -1 ||
        each.delta.confirmed
          .toLowerCase()
          .indexOf(query.toLocaleLowerCase().trim()) > -1
    );
  }

  function handleSearch(text) {
    setQuery(text);
  }

  function handleRefresh() {
    setRefreshing(true);
    dispatch(getDashboardData());
  }

  return (
    <Wrapper>
      <View style={styles.container}>
        <Searchbar
          placeholder={"Search"}
          value={query}
          onChangeText={handleSearch}
        />

        <View style={styles.listContainer}>
          <FlatList
            refreshing={refreshing}
            onRefresh={handleRefresh}
            data={getStateData()}
            keyExtractor={item => item.state}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <StateItem {...{ item }} />}
          />
        </View>
        {/* <Button onPress={() => navigation.goBack()} title='Go back home' /> */}
      </View>
    </Wrapper>
  );
}

function StateItem(props) {
  const { item } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch()

  function handleNavigation() {
    navigation.navigate(DashBoardScreens.DISTRICT_REPORT, { item });
    dispatch(getDistrictWiseData());
  }

  return (
    <View style={styles.stateItem}>
      <View style={styles.itemRight}>
        <TouchableOpacity onPress={handleNavigation}>
          <StateItemTitle {...{ item }} />
          <StateItemContent {...{ item }} />
        </TouchableOpacity>
      </View>
    </View>
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
  sortContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  listContainer: {
    margin: 10,
    width: "100%",
    marginBottom: 20
  },
  stateItem: {
    flexDirection: "row",
    width: "100%",
    //padding: 10,
    marginBottom: 10,
    backgroundColor: "#1350581c",
    borderRadius: 10
  },
  itemLeft: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1350584c",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  state: {
    flex: 12,
    fontSize: 20
  },
  confirmed: {
    fontSize: 20
  },
  itemRight: {
    flex: 12,
    padding: 10,
    paddingLeft: 10,
    justifyContent: "flex-start"
  }
});

export default NationalReport;
