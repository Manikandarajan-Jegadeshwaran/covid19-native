import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import store from "./src/store";
import Layout from "./layout";
import DrawerNavigation from "./src/navigation";
import * as Font from "expo-font";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000",
    accent: "green"
  }
};

export default function App() {
  React.useEffect(() => {
    Font.loadAsync({
      "roboto-light": require("./assets/font/roboto-light.ttf")
    });
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Layout>
          <DrawerNavigation />
        </Layout>
      </PaperProvider>
    </Provider>
  );
}
