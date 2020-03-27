import * as React from "react";
import { Button, View, FlatList, StyleSheet, Alert, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";

function StateItemContent(props) {
    const { item } = props;
    const {
      container,
      content,
      p10,
      active,
      indicatorContainer,
      indicatorVal,
      recovered,
      deceased
    } = StateItemContentStyles;
    return (
      <View style={container}>
        <View style={content}>
          <Text style={active}>{`Active ${item.active}`}</Text>
        </View>
        <View style={{ ...content, ...p10 }}>
          {item.delta.recovered > 0 && (
            <View style={indicatorContainer}>
              <Octicons name='arrow-up' color='red' />
              <Text style={indicatorVal}>{item.delta.recovered}</Text>
            </View>
          )}
          <Text style={recovered}>{`Recovered ${item.recovered}`}</Text>
        </View>
        <View style={{ ...content, ...p10 }}>
          {item.delta.deaths > 0 && (
            <View style={indicatorContainer}>
              <Octicons name='arrow-up' color='red' />
              <Text style={indicatorVal}>{item.delta.deaths}</Text>
            </View>
          )}
          <Text style={deceased}>{`Deceased ${item.deaths}`}</Text>
        </View>
      </View>
    );
  }
  
  const StateItemContentStyles = StyleSheet.create({
    container: {
      flex: 12,
      flexDirection: "row",
      paddingTop: 5,
      flexWrap: "wrap"
    },
    content: {
      flexDirection: "row"
    },
    p10: {
      paddingLeft: 10
    },
    active: {
      color: "#007bff99",
      fontWeight: "500"
    },
    recovered: { color: "#28a74599", fontWeight: "500" },
    deceased: { color: "#6c757d99", fontWeight: "500" },
    indicatorContainer: {
      alignItems: "center",
      flexDirection: "row",
      paddingRight: 2
    },
    indicatorVal: {
      fontSize: 10,
      color: "red"
    }
  });

  export default StateItemContent