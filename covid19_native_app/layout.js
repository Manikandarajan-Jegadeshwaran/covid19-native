import React from "react";
import { View } from "react-native";

function Layout(props) {
  return (
    <View style={{ flex: 1}}>{props.children}</View>
  );
}

export default React.memo(Layout);
