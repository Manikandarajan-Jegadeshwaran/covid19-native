import React from "react";
import { DashBoardScreens, Screens } from "../utilities/constants";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();
import DashBoardHome from "../features/dashboard/home";
import NationalReport from "../features/nationalReport";
import DistrictReport from "../features/nationalReport/district-report";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import CaseReport from "../components/case-report";
import About from "../components/about";

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
      <Stack.Screen
        name={DashBoardScreens.HOME}
        component={DashBoardHome}
        options={{
          headerShown: false
          //headerRight: props => <GotoNationalReport {...props} />
        }}
      />
      <Stack.Screen
        name={DashBoardScreens.NATIONAL_REPORT}
        component={NationalReport}
        options={{ headerRight: props => <HomeButton {...props} /> }}
      />
      <Stack.Screen
        name={DashBoardScreens.DISTRICT_REPORT}
        component={DistrictReport}
        options={{ headerRight: props => <HomeButton {...props} /> }}
      />
      <Stack.Screen
        name={DashBoardScreens.CASES_REPORT}
        component={CaseReport}
        options={{ headerRight: props => <HomeButton {...props} /> }}
      />
      <Stack.Screen
        name={DashBoardScreens.ABOUT}
        component={About}
        options={{ headerRight: props => <HomeButton {...props} /> }}
      />
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
        <Entypo name='home' size={18} />
      </TouchableOpacity>
    </View>
  );
}

function GotoNationalReport(props) {
  const navigation = useNavigation();
  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity
        onPress={() => navigation.push(DashBoardScreens.NATIONAL_REPORT)}
      >
        <MaterialIcons name='navigate-next' size={25} />
      </TouchableOpacity>
    </View>
  );
}

export default RootNavigation;
