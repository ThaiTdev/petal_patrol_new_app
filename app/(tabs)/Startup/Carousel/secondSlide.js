import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import background from "../../../../constants/background";
import { COLORS, SIZES, FONT } from "../../../../constants/themes";
import Icons from "../../.././../constants/icons";

const Slide2 = () => (
  <ImageBackground
    source={background.backgroundSecondSlide}
    style={styles.background}
  >
    <View style={styles.slide}>
      <Image source={Icons.secondSlideIcon}></Image>
      <Text style={styles.text}>Plant Sitting entre passionnés</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: FONT.bold,
    color: COLORS.primary,
    textAlign: "center",
  },
});

export default Slide2;
