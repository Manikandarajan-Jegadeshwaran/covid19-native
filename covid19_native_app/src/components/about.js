import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import Wrapper from "./wrapper";

function About(pros) {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Not an official Application</Text>
        <Text style={styles.text}>
          It is an open source tracking application of COVID 19
        </Text>
        <Text style={styles.text}>
          Thanks for the API support from Covid19India.Org
        </Text>
        <Text
          style={{ ...styles.text, ...styles.link }}
          onPress={() =>
            Linking.openURL(
              "https://github.com/Manikandarajan-Jegadeshwaran/covid19-native"
            )
          }
        >
          Covid19-native Repository
        </Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../../assets/corona/1.png")}
          />
          <Image
            style={styles.img}
            source={require("../../assets/corona/2.png")}
          />
          <Image
            style={styles.img}
            source={require("../../assets/corona/3.png")}
          />
          <Image
            style={styles.img}
            source={require("../../assets/corona/4.png")}
          />
        </View>
        <Text style={styles.quote}>Stay Calm, Stay Safe and Stay Alone</Text>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center"
  },
  link: {
    color: "blue"
  },
  imgContainer: {
    flexDirection: "column",
    marginTop: 10
  },
  img: {
    height: 50,
    width: 50,
    margin: 5,
    backgroundColor: "#cccccc99",
    borderRadius: 50
  },
  quote: {
    fontSize: 18,
    marginTop: 10
  }
});

export default About;
