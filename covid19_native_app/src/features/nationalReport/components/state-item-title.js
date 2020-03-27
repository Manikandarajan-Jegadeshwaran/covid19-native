import * as React from "react";
import { Button, View, FlatList, StyleSheet, Alert, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";

function StateItemTitle(props) {
    const { item } = props;
    const {
      container,
      indicatorContainer,
      indicatorIcon,
      indicatorVal,
      title,
      confirmationCount
    } = StateItemTitleStyles;
  
    return (
      <View style={container}>
        {item.delta.confirmed > 0 && (
          <View style={indicatorContainer}>
            <Octicons name='arrow-up' color='red' style={indicatorIcon} />
            <Text style={indicatorVal}>{item.delta.confirmed}</Text>
          </View>
        )}
        <Text style={title}>{item.state}</Text>
        <Text style={confirmationCount}>{item.confirmed}</Text>
      </View>
    );
  }
  
  const StateItemTitleStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    },
    indicatorContainer: {
      alignItems: "center",
      flexDirection: "row",
      paddingRight: 5
    },
    indicatorIcon: {
      fontSize: 15
    },
    indicatorVal: {
      fontSize: 15,
      color: "red"
    },
    title: {
      flex: 12,
      fontSize: 20
    },
    confirmationCount: {
      alignSelf: "flex-end",
      justifyContent: "center",
      fontSize: 20,
      fontWeight: "500",
      color: "grey"
    }
  });

  export default StateItemTitle