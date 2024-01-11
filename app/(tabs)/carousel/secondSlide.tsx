// Slide2.js
import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import background from "../../../constants/background";

const Slide2 = () => (
  <ImageBackground
    source={background.backgroundSecondSlide}
    style={styles.background}
  >
    <View style={styles.slide}>
      <Text style={styles.text}>Plant ‘sitting entre passionnés</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Slide2;
