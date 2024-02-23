import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SIZES, COLORS, FONT } from "../../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { ProgressContext } from "../../navigators/ProgressContext";
import FormContainer from "../../Authentification/formulaire/formContainer";
import FormInput from "../../Authentification/formulaire/formInput";
import FormInput2 from "../../Authentification/formulaire/formInput2";
import BaseButton from "../../../../components/Buttons/Base";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Location_Page = () => {
  const navigation = useNavigation();
  const [completed, setCompleted] = useState(false);
  const [locationInfo, setLocationInfo] = useState({
    number: "",
    street: "",
    Postal: "",
    Town: "",
  });
  const { number, street, Postal, Town } = locationInfo;
  const goToDatesPage = () => {
    console.log("go to dates page");
    navigation.navigate("PostAd", { screen: "Dates_Page" });
  };

  const { handleNextStep } = useContext(ProgressContext);
  useEffect(() => {
    AsyncStorage.getItem("Add_Photos_Completed").then((locationInfo) => {
      if (locationInfo !== null) {
        setCompleted(true);
      }
    });
  }, [completed]);

  useEffect(() => {
    handleNextStep();
    setCompleted(true);
  }, [completed]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 20,
            color: COLORS.primary,
            fontFamily: "Merriweather-Bold",
            marginTop: 20,
            width: "50%",
            lineHeight: 30,
          }}
        >
          The place to be
        </Text>
        <Text
          style={{
            fontSize: SIZES.medium,
            color: COLORS.secondary,
            marginTop: 20,
            width: "70%",
            fontWeight: FONT.bold,
          }}
        >
          Indiquez à nos plant-sitters l’adresse où ils pourront trouver votre
          plante
        </Text>
        <Text
          style={{
            fontSize: SIZES.small,
            color: COLORS.primary,
            marginTop: 15,
            width: "50%",
            fontWeight: FONT.bold,
            marginLeft: 10,
          }}
        >
          Ajouter l'adresse
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormContainer>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <FormInput2
                value={number}
                onChangeText={(value) => handleOnChangeText(value, "number")}
                label="N°"
                placeholder="25"
                autoCapitalize="none"
                color={COLORS.primary}
                width="100%"
                height={45}
              />
              <FormInput2
                value={street}
                onChangeText={(value) => handleOnChangeText(value, "street")}
                label="Rue"
                placeholder="Rue des Pins"
                autoCapitalize="none"
                color={COLORS.primary}
                width="100%"
                height={45}
              />
            </View>
            <View>
              <FormInput
                value={Postal}
                onChangeText={(value) => handleOnChangeText(value, "Postal")}
                label="Code postal"
                placeholder="25"
                autoCapitalize="none"
                color={COLORS.primary}
              />
            </View>
            <View>
              <FormInput
                value={Town}
                onChangeText={(value) => handleOnChangeText(value, "Town")}
                label="Ville"
                placeholder="25"
                autoCapitalize="none"
                color={COLORS.primary}
              />
            </View>
          </FormContainer>
          <BaseButton
            title="Continuer"
            height={40}
            padding={10}
            marginTop={25}
            handlePress={goToDatesPage}
          ></BaseButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.tertiary,
    position: "relative",
  },
  subContainer: {
    width: "90%",
    height: "100%",
    justifyContent: "flex-start",
  },
});

export default Location_Page;
