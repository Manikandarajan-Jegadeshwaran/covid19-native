import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DashBoard from "../features/dashboard";
import { Screens } from "../utilities/constants";
import NationalReport from "../features/nationalReport";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name={Screens.DASH_BOARD} component={DashBoard} />
        <Drawer.Screen
          name={Screens.NATIONAL_REPORT}
          component={NationalReport}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
