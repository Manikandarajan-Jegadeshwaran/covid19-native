import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import store from "./src/store";
import Layout from "./layout";
import RootNavigation from "./src/navigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000",
    accent: "green"
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Layout>
          <RootNavigation />
        </Layout>
      </PaperProvider>
    </Provider>
  );
}
