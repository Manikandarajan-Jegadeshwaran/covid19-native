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
import { Screens } from "../utilities/constants";

function Cases(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { stateWiseData, delta, refreshData } = props;
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

  return (
    <>
      <View style={styles.container}>
        <View>
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
          />
          <Tile
            name='Active'
            count={active}
            delta={confirmeddelta}
            style={styles.active}
          />
          <Tile
            name='Recovered'
            count={recovered}
            delta={recovereddelta}
            style={styles.recovered}
          />
          <Tile
            name='Deceased'
            count={deaths}
            delta={deceaseddelta}
            style={styles.deceased}
          />
        </ScrollView>
        <View style={styles.next}>
          <TouchableOpacity onPress={goToNationalReport}>
            <Entypo name='chevron-thin-right' style={styles.nextIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function Tile(props) {
  return (
    <View style={styles.tile}>
      <Text style={{ ...props.style, ...styles.name }}>{props.name}</Text>
      <Text style={{ ...props.style, ...styles.delta }}>[{props.delta}]</Text>
      <Text style={{ ...props.style, ...styles.count }}>{props.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 10,
    padding: 10
  },
  header: {
    fontSize: 18,
    letterSpacing: 2
  },
  tiles: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
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
    color: "#ff073a99"
  },
  active: {
    color: "#007bff99"
  },
  recovered: {
    color: "#28a74599"
  },
  deceased: {
    color: "#6c757d99"
  },
  name: {
    fontSize: 18,
    textTransform: "uppercase",
    paddingBottom: 10
  },
  delta: {
    fontSize: 10,
    paddingBottom: 10
  },
  count: {
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 10
  },
  next: {
    position: "absolute",
    right: 0,
    marginRight: 10,
    top: "45%"
  },
  nextIcon: { fontSize: 50, color: "grey" }
});

export default Cases;
