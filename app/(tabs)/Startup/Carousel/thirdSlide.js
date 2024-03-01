import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import background from "../../../../constants/background";
import { useNavigation } from "@react-navigation/native";
import FormSubmitButton from "../../Authentification/formulaire/formSubmitButton";
import { COLORS, FONT } from "../../../../constants/themes";
import Icons from "../../.././../constants/icons";

export default function Slide3() {
  const navigation = useNavigation();
  const marginBottom = "20%";
  const goToNextScreen = () => {
    // navigation.navigate("Authentification", { screen: "Test" });
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
        <Image source={Icons.thirdSlideIcon}></Image>
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
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: FONT.bold,
    color: COLORS.secondary,
    textAlign: "center",
  },
});
