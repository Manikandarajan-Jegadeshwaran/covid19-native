import React from "react";
import { DashBoardScreens } from "../utilities/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();
import DashBoardHome from "../features/dashboard/home";
import NationalReport from "../features/nationalReport";
import DistrictReport from "../features/nationalReport/district-report";

import { View, Text } from "react-native";

function Sample() {
  return (
    <View>
      <Text>asdfasdf</Text>
    </View>
  );
}

function RootNavigation() {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerTitle: App.OFFICE_NAME,
    //   headerLeft: props => <GoBack {...props} />,
    //   headerRight: props => <Logout {...props} />
    // }}
    >
      <Stack.Screen name={DashBoardScreens.HOME} component={DashBoardHome} />
      <Stack.Screen
        name={DashBoardScreens.NATIONAL_REPORT}
        component={NationalReport}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name={DashBoardScreens.DISTRICT_REPORT}
        component={DistrictReport}
        options={{ headerLeft: () => null }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
