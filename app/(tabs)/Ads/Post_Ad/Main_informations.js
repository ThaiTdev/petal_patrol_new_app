import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import images from "../../../../constants/images";
import { View, Text, TextInput } from "react-native";
import { SIZES, COLORS } from "../../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import BaseButton from "../../../../components/Buttons/Base";
import { userLogin } from "../../../../context/LoginProvider";

const Main_informations = () => {
  const { setAllData } = userLogin();
  const [charCount, setCharCount] = useState(0);
  const [charCount2, setCharCount2] = useState(0);
  const [messageError, setMessageError] = useState("");
  const [messageError2, setMessageError2] = useState("");
  const [valueText, setValueText] = useState("");
  const [valueText2, setValueText2] = useState("");

  const handleTextChange = (text) => {
    const trimmedText = text.trim();
    setCharCount(trimmedText.length);
    setValueText(trimmedText);
  };

  const handleTextChange2 = (text) => {
    const trimmedText = text.trim();
    setCharCount2(trimmedText.length);
    setValueText2(trimmedText);
  };

  const navigation = useNavigation();
  const goToAddPhotos = () => {
    console.log("go to add photos");

    // Vérifier si le texte contient uniquement des espaces
    const isWhiteSpaceOnly =
      valueText.trim() === "" || valueText2.trim() === "";

    if (charCount <= 3 || isWhiteSpaceOnly) {
      setMessageError(
        "Désolé vous devez entrer un nom de plante de plus de trois lettres"
      );
      setMessageError2("");
    } else if (charCount2 <= 5 || isWhiteSpaceOnly) {
      setMessageError2(
        "Désolé vous devez entrer une petite description de plus de cinq lettres"
      );
      setMessageError("");
    } else {
      setMessageError("");
      setMessageError2("");
      navigation.navigate("PostAd", { screen: "Add_Photos" });
    }
  };

  useEffect(() => {
    setAllData({ name: valueText.trim(), description: valueText2.trim() });
    console.log("hello" + valueText);
    console.log("hello" + valueText2);
  }, [valueText, valueText2]);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: COLORS.tertiary }}
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
      extraScrollHeight={80}
    >
      <Text
        style={{
          fontSize: 20,
          color: COLORS.primary,
          fontFamily: "Merriweather-Bold",
          marginTop: 20,
        }}
      >
        Commencez par l'essentiel
      </Text>
      <View style={styles.subContainer}>
        <View style={styles.subContainerHeader}>
          <Text style={styles.description}>
            Indiquez le nom de votre plante, il sera placé en tant que titre de
            votre annonce !
          </Text>
          <Image source={images.logo} style={styles.logo}></Image>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nom de votre protégée</Text>
          <TextInput
            placeholder="Orchidée du Japon"
            placeholderTextColor="#babdc2"
            style={[styles.input, { color: "black" }]}
            onChangeText={handleTextChange}
            maxLength={40}
          />
          {messageError ? (
            <Text style={{ color: "red", fontSize: SIZES.small }}>
              {messageError}
            </Text>
          ) : null}
          <Text style={styles.charCount}>{charCount}/40</Text>
        </View>
        <Text style={styles.cgv}>
          <Text style={{ textDecorationLine: "underline" }}>Voir </Text>les
          finalités de traitement de vos données personnelles
        </Text>
      </View>
      <View style={styles.subContainer2}>
        <View style={styles.subContainerHeader}>
          <Text style={styles.description}>
            Afin d’informer au mieux nos botanistes, décrivez le problème que
            vous rencontrez avec votre plante
          </Text>
          <Image source={images.pencil} style={styles.pencil}></Image>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Dites nous tout !</Text>
          <TextInput
            placeholder="Ajoutez une description..."
            placeholderTextColor="#babdc2"
            style={[
              styles.input,
              { color: "black", height: 80, paddingTop: 12 },
            ]}
            onChangeText={handleTextChange2}
            maxLength={100}
            multiline={true} // Enable multiline input
          />
          {messageError2 ? (
            <Text style={{ color: "red", fontSize: SIZES.small }}>
              {messageError2}
            </Text>
          ) : null}
          <Text style={styles.charCount}>{charCount2}/100</Text>
        </View>
      </View>
      <View style={styles.buttonContinueStyle}>
        <BaseButton
          title="Continuer"
          height={40}
          padding={10}
          marginBottom={20}
          handlePress={goToAddPhotos}
        ></BaseButton>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  subContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "visible",
    height: 200,
    width: "65%",
  },
  subContainer2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "visible",
    height: 280,
    width: "65%",
  },
  subContainerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "visible",
    height: "80%",
    width: "100%",
  },
  description: {
    width: "70%",
    fontFamily: "Roboto-Medium",
    color: COLORS.secondary,
    fontSize: 12,
  },
  logo: {
    width: 60,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: COLORS.white,
    height: 45,
    borderRadius: 8,
    fontSize: 15,
    paddingLeft: 20,
    marginBottom: 10,
    fontFamily: "Roboto-Regular",
    width: "108%",
  },
  inputLabel: {
    position: "relative",
    left: 10,
    top: 7,
    zIndex: 1,
    fontFamily: "Roboto-Medium",
    color: COLORS.primary,
    alignSelf: "flex-start",
  },
  charCount: {
    alignSelf: "flex-end",
    fontFamily: "Roboto-Light",
    fontSize: 12,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 70,
  },
  cgv: {
    fontFamily: "Roboto-Light",
    fontSize: 9.5,
    width: "100%",
    textAlign: "center",
    color: COLORS.primary,
  },
  pencil: {
    width: 50,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  buttonContinueStyle: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 20,
  },
});
export default Main_informations;
