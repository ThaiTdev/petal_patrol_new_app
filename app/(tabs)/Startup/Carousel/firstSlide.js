import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import background from "../../../../constants/background";

const Slide1 = () => {
  const navigation = useNavigation();

  const handleSlideRight = () => {
    // Naviguer vers l'écran précédent
    navigation.goBack();
  };

  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      onIndexChanged={(index) => {
        // Lorsque l'index du swiper change, vous pouvez gérer le glissement ici
        if (index === 1) {
          handleSlideRight();
        }
      }}
    >
      <ImageBackground
        source={background.backgroundFirstSlide}
        style={styles.background}
      >
        <View style={styles.slide}>
          <Text style={styles.text}>Conseils Botaniques</Text>
        </View>
      </ImageBackground>
      {/* Ajoutez d'autres écrans ici */}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
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

export default Slide1;
