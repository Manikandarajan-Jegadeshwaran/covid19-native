import React from "react";
import { DashBoardScreens, Screens } from "../utilities/constants";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import DashBoardHome from "../features/dashboard/home";
import NationalReport from "../features/nationalReport";
import DistrictReport from "../features/nationalReport/district-report";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import CaseReport from "../components/case-report";
import About from "../components/about";

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTitle: App.OFFICE_NAME,
        // headerLeft: props => <GoBack {...props} />,
        headerRight: props => <HomeButton {...props} />
      }}
    >
      <Stack.Screen
        name={DashBoardScreens.HOME}
        component={DashBoardHome}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={DashBoardScreens.NATIONAL_REPORT}
        component={NationalReport}
      />
      <Stack.Screen
        name={DashBoardScreens.DISTRICT_REPORT}
        component={DistrictReport}
      />
      <Stack.Screen
        name={DashBoardScreens.CASES_REPORT}
        component={CaseReport}
      />
      <Stack.Screen name={DashBoardScreens.ABOUT} component={About} />
    </Stack.Navigator>
  );
}

function HomeButton(props) {
  const navigation = useNavigation();
  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(DashBoardScreens.HOME)}
      >
        <Entypo name='home' size={25} color='grey' />
      </TouchableOpacity>
    </View>
  );
}

function GotoNationalReport(props) {
  const navigation = useNavigation();
  return (
    <View style={{ paddingRight: 20 }}>
      <TouchableOpacity
        onPress={() => navigation.push(DashBoardScreens.NATIONAL_REPORT)}
      >
        <MaterialIcons name='navigate-next' size={25} />
      </TouchableOpacity>
    </View>
  );
}

export default RootNavigation;
