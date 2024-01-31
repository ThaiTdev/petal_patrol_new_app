import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";
import images from "../../../constants/images";
import FormSubmitButton from "../Authentification/formulaire/formSubmitButton";
import { useNavigation } from "@react-navigation/native";

const ModalSendMail = ({ Title, Comment }) => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate("Authentification", { screen: "Login" });
  };
  return (
    <View style={styles.mondalContainer}>
      <View style={styles.modalBox}>
        <Image style={styles.logo} source={images.logo2} />
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.Comment}>{Comment}</Text>
        <View style={styles.boxButton}>
          <FormSubmitButton
            onPress={goToLogin}
            title="Revenir à L'accueil"
            color={COLORS.secondary}
            marginTop={10}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mondalContainer: {
    position: "absolute",
    backgroundColor: "rgba(204, 204, 204, 0.5)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(1)",
    transition: "transform 0.5s ease-in-out",
  },
  modalBox: {
    backgroundColor: COLORS.tertiary,
    width: "70%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderRadius: 10,
    padding: 20,
  },
  logo: {
    width: 100, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1, // Ratio d'aspect (width / height)
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 30,
  },
  title: {
    color: COLORS.secondary,
    fontSize: SIZES.large,
    fontWeight: FONT.bold,
    textAlign: "center",
    marginBottom: 20,
  },
  Comment: {
    fontSize: SIZES.small,
    textAlign: "center",
    marginBottom: 3,
  },

  boxButton: {
    width: "100%",
  },
});

export default ModalSendMail;
