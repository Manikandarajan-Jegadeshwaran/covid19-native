import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { getDashboardData } from "../features/dashboard/api";
import { useNavigation } from "@react-navigation/native";
import { Screens, DashBoardScreens } from "../utilities/constants";
import DashBoardGraph from "./dashbd-graph";

function Cases(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { stateWiseData, delta, refreshData, caseSeries } = props;
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setRefreshing(false);
  }, [stateWiseData]);

  const { active, confirmed, deaths, recovered, lastupdatedtime } =
    stateWiseData?.length > 0
      ? stateWiseData?.filter(
          eachState => eachState.state.toLowerCase() === "total"
        )[0]
      : {};

  const { confirmeddelta, recovereddelta, deceaseddelta } =
    delta?.length > 0 ? delta[0] : {};

  function handleRefresh() {
    setRefreshing(true);
    dispatch(getDashboardData());
  }

  function goToNationalReport() {
    navigation.navigate(Screens.NATIONAL_REPORT, { stateWiseData });
  }

  function goToAbout() {
    navigation.navigate(DashBoardScreens.ABOUT);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.appTitle}>
          <Text style={styles.header}>INDIA COVID-19 TRACKER</Text>
          <Text>{`updated ${lastupdatedtime}`}</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.tiles}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          <Tile
            name='Confirmed'
            count={confirmed}
            delta={confirmeddelta}
            style={styles.confirmed}
            caseSeries={caseSeries}
          />
          <Tile
            name='Active'
            count={active}
            // delta={confirmeddelta}
            style={styles.active}
            caseSeries={caseSeries}
          />
          <Tile
            name='Recovered'
            count={recovered}
            delta={recovereddelta}
            style={styles.recovered}
            caseSeries={caseSeries}
          />
          <Tile
            name='Deceased'
            count={deaths}
            delta={deceaseddelta}
            style={styles.deceased}
            caseSeries={caseSeries}
          />

          <DashBoardGraph
            {...{ caseSeries, confirmed, active, recovered, deaths }}
          />
        </ScrollView>
        <View style={styles.next}>
          <TouchableOpacity onPress={goToNationalReport}>
            <Entypo name='chevron-thin-right' style={styles.nextIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.about}>
          <TouchableOpacity onPress={goToAbout}>
            <Text style={styles.aboutText}>About India Covid 19 Tracker</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function Tile(props) {
  const navigation = useNavigation();

  function goToCaseReport() {
    const option = {
      name: props.name,
      delta: props.delta,
      count: props.count,
      caseSeries: props.caseSeries
    };

    navigation.navigate(DashBoardScreens.CASES_REPORT, { option });
  }

  return (
    <View style={styles.tile}>
      <TouchableOpacity onPress={goToCaseReport}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ ...props.style, ...styles.name }}>{props.name}</Text>
          {props.delta && (
            <Text style={{ ...props.style, ...styles.delta }}>
              [+{props.delta}]
            </Text>
          )}
          <Text style={{ ...props.style, ...styles.count }}>{props.count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  appTitle: {
    marginTop: 20,
    alignItems: "center"
  },
  header: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight:'600'
  },
  tiles: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "flex-start"
  },
  tile: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    minHeight: 100,
    alignItems: "center"
  },
  confirmed: {
    color: "#ff073a"
  },
  active: {
    color: "#007bff",
    marginBottom: 5
  },
  recovered: {
    color: "#28a745"
  },
  deceased: {
    color: "#6c757d"
  },
  name: {
    fontSize: 20,
    textTransform: "uppercase",
    paddingBottom: 10
  },
  delta: {
    fontSize: 10,
    paddingBottom: 5
  },
  count: {
    fontSize: 25,
    fontWeight: "700",
    paddingBottom: 10
  },
  next: {
    position: "absolute",
    right: 0,
    marginRight: 10,
    top: "45%"
  },
  nextIcon: { fontSize: 50, color: "grey" },
  about: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center"
  },
  aboutText: {
    color: "grey"
  }
});

export default Cases;
