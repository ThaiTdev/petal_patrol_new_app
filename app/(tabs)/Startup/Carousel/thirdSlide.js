// Slide3.js
import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import background from "../../../../constants/background";
// import { Image, TouchableOpacity } from "react-native";
// import icon from "../../../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import FormSubmitButton from "../../Authentification/formulaire/formSubmitButton";

export default function Slide3() {
  const navigation = useNavigation();
  const goToNextScreen = () => {
    navigation.navigate("Authentification", { screen: "FirstCo" });
    console.log("Navigating to FirstConnexion");
  };

  return (
    <ImageBackground
      source={background.backgroundThirdSlide}
      style={styles.background}
    >
      <View style={styles.slide}>
        <Text style={styles.text}>Rejoignez notre communauté </Text>
      </View>
      {/* <TouchableOpacity style={styles.iconBoxArrow} onPress={goToLogin}>
        <Image source={icon.arrow} style={styles.iconArrow}></Image>
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.iconBoxArrow} onPress={goToNextScreen}>
        <Image source={icon.arrow} style={styles.iconArrow}></Image>r
      </TouchableOpacity> */}
      <FormSubmitButton onPress={goToNextScreen} title="let's go!" />
    </ImageBackground>
  );
}

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
