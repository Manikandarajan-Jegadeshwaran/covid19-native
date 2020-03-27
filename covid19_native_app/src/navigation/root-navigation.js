import React from "react";
import { Screens } from "../utilities/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();
import DashBoard from '../features/dashboard'

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerTitle: App.OFFICE_NAME,
        //   headerLeft: props => <GoBack {...props} />,
        //   headerRight: props => <Logout {...props} />
        // }}
      >
        <Stack.Screen
          name={Screens.HOME}
          component={DashBoard}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
