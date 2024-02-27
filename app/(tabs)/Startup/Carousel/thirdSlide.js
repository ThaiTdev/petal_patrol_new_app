// Slide3.js
import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import background from "../../../../constants/background";
import { useNavigation } from "@react-navigation/native";
import FormSubmitButton from "../../Authentification/formulaire/formSubmitButton";
import { COLORS } from "../../../../constants/themes";

export default function Slide3() {
  const navigation = useNavigation();
  const marginBottom = "20%";
  const goToNextScreen = () => {
    navigation.navigate("Authentification", { screen: "FirstCo" });
    // navigation.navigate("Ads", { screen: "AdsList" }); // route pour tester mes devs à supprimer
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
      <FormSubmitButton
        onPress={goToNextScreen}
        title="let's go!"
        marginBottom={marginBottom}
        color={COLORS.primary}
      />
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
