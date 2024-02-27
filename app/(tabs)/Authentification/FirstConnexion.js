import React from "react";
import logo from "../../../constants/images";
import { SIZES, COLORS } from "../../../constants/themes";
import images from "../../../constants/images";
import { View, TouchableOpacity } from "react-native";
import { StyleSheet, Image, Text } from "react-native";
import FormSubmitButton from "./formulaire/formSubmitButton";
import SocialButton from "./formulaire/socialButton";
import FormContainer from "./formulaire/formContainer";

const FirstConnexion = ({ navigation }) => {
  const NewMarginTop = "60%";
  const goToLogin = () => {
    navigation.navigate("Authentification", { screen: "Login" });
    console.log("Navigating to Login");
  };
  const goToSignup = () => {
    navigation.navigate("Authentification", { screen: "Signup" });
    console.log("Navigating to Signup");
  };
  const goToConfidential = () => {
    navigation.navigate("Authentification", { screen: "Confidentials" });
    console.log("Navigating to Confidentials");
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={logo.titleHomePage} style={styles.titleHomePage}></Image>
        <Image source={logo.logo} style={styles.logo2}></Image>
        <FormContainer NewMarginTop={NewMarginTop}>
          <FormSubmitButton
            onPress={goToSignup}
            title="Signup"
            color={COLORS.primary}
          />
          <SocialButton title="Continuer avec Google" images={images.google} />
          <SocialButton title="Continuer avec Apple" images={images.apple} />
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              textAlignVertical: "center", // Utilisez cette propriété pour aligner le texte verticalement
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: COLORS.gray,
              }}
            >
              Déjà un compte?
            </Text>
            <TouchableOpacity onPress={goToLogin}>
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.secondary,
                  marginLeft: 10,
                }}
              >
                Connectez-Vous
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              textAlignVertical: "center",
            }}
          >
            <TouchableOpacity onPress={goToConfidential}>
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.secondary,
                  marginLeft: 10,
                  marginTop: 20,
                }}
              >
                CGU
              </Text>
            </TouchableOpacity>
          </View>
        </FormContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.tertiary,
    position: "relative",
  },
  subContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center", // Alignement vertical au centre
    // alignItems: "center", // Alignement horizontal au centre
  },

  titleHomePage: {
    position: "absolute",
    left: "50%",
    marginLeft: "-30%",
    top: "3%",
    width: 280, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1, // Ratio d'aspect (width / height)
    resizeMode: "contain",
    zIndex: 1000,
  },

  logo2: {
    position: "absolute",
    left: "50%",
    marginLeft: "-20%",
    top: "9%",
    width: 200, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1, // Ratio d'aspect (width / height)
    resizeMode: "contain",
  },
  containerButton: {
    borderBlockColor: "black",
  },
});
export default FirstConnexion;
