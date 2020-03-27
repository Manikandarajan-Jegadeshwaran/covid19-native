import React from "react";
import { View, ImageBackground } from "react-native";

function Wrapper(props) {
  const { children } = props;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bg5.jpg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode='cover'
      >
        {children}
      </ImageBackground>
    </View>
  );
}

export default React.memo(Wrapper);
