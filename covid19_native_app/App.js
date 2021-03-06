import React from "react";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import store from "./src/store";
import Layout from "./layout";
import DrawerNavigation from "./src/navigation";

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
          <DrawerNavigation />
        </Layout>
      </PaperProvider>
    </Provider>
  );
}
