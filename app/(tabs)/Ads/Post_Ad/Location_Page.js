import React, { useState, useContext, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text } from "react-native";
import { SIZES, COLORS, FONT } from "../../../../constants/themes";
import { StyleSheet } from "react-native";
import { ProgressContext } from "../../navigators/ProgressContext";
import FormContainer from "../../Authentification/formulaire/formContainer";
import FormInput from "../../Authentification/formulaire/formInput";
import FormSubmitButton from "../../Authentification/formulaire/formSubmitButton";
import { Formik } from "formik";
import FormInput2 from "../../Authentification/formulaire/formInput2";
import { userLogin } from "../../../../context/LoginProvider";
import * as Yup from "yup";

const validationSchema = Yup.object({
  number: Yup.number()
    .min(1, "Number must be at least 1.")
    .max(9999, "Number must be at most 9999.")
    .required("Number is required!"),
  street: Yup.string().required("Street is required!"),
  zip: Yup.string()
    .trim()
    .min(5, "Postal code must be at least 5 characters long.")
    .required("Postal code is required!"),
  city: Yup.string().required("City is required!"),
});

const Location_Page = ({ navigation }) => {
  const { allData, setAllData } = userLogin();
  const { handleNextStep } = useContext(ProgressContext);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");
  let addressString = "";

  useEffect(() => {
    handleNextStep();
    setCompleted(true);
  }, [completed]);

  const handleOnChangeText = (value, fieldName, setFieldValue) => {
    setFieldValue(fieldName, value);
  };

  const goToDatesPage = async (values) => {
    try {
      // Enlever les espaces au début et à la fin de chaque valeur
      const trimmedValues = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.trim()])
      );

      // Mettre à jour le contexte avec les données du formulaire
      const { number, street, ...restValues } = trimmedValues;

      addressString = number + " " + street;
      addressStringComplet = `${addressString} ${restValues.zip} ${restValues.city}`;
      console.log("Mon adresse: " + addressStringComplet);

      //j'ai encodez l'adresse pour inclure dans l'URL
      const encodedAddress = encodeURIComponent(addressStringComplet);

      // URL de l'API Nominatim
      const apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      if (data && data.length > 0) {
        const { lat: latitude, lon: longitude } = data[0];
        setCompleted(true);
        console.log(
          `La latitude enregistrée: ${latitude}, La Longitude enregistrée: ${longitude}`
        );
      } else {
        throw new Error("Adresse non trouvée");
      }

      setAllData({
        ...allData,
        ...restValues,
        address: addressString,
        coordinates: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        },
        allow_advices: false,
      });

      // Naviguez vers la page suivante ou effectuez d'autres actions nécessaires
      navigation.navigate("PostAd", { screen: "Dates_Page" });
    } catch (error) {
      setError(`Error navigating to Dates_Page: ${error.message}`);
      console.error(error);
      // Gérez les erreurs si nécessaire
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: COLORS.tertiary }}
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      extraScrollHeight={50}
    >
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
            <Formik
              initialValues={{
                number: "",
                street: "",
                zip: "",
                city: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => goToDatesPage(values)}
            >
              {({
                values,
                errors,
                touched,
                isSubmitting,
                handleBlur,
                handleSubmit,
                setFieldValue,
              }) => (
                <>
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
                      value={values.number}
                      error={
                        touched.number && (
                          <Text style={{ color: "red", fontSize: 10 }}>
                            {errors.number}
                          </Text>
                        )
                      }
                      onChangeText={(value) =>
                        handleOnChangeText(value, "number", setFieldValue)
                      }
                      label="*N°"
                      placeholder="25"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      width="100%"
                      height={45}
                      onBlur={handleBlur("number")}
                    />

                    <FormInput2
                      value={values.zip}
                      error={
                        touched.zip && (
                          <Text style={{ color: "red", fontSize: 10 }}>
                            {errors.zip}
                          </Text>
                        )
                      }
                      onChangeText={(value) =>
                        handleOnChangeText(value, "zip", setFieldValue)
                      }
                      label="*Code postal"
                      placeholder="34430"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      width="100%"
                      height={45}
                      onBlur={handleBlur("zip")}
                    />
                  </View>
                  <View>
                    <FormInput
                      value={values.street}
                      error={
                        touched.street && (
                          <Text style={{ color: "red", fontSize: 10 }}>
                            {errors.street}
                          </Text>
                        )
                      }
                      onChangeText={(value) =>
                        handleOnChangeText(value, "street", setFieldValue)
                      }
                      label="*Rue"
                      placeholder="Rue des Pins"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      onBlur={handleBlur("street")}
                    />
                  </View>
                  <View>
                    <FormInput
                      value={values.city}
                      error={
                        touched.city && (
                          <Text style={{ color: "red", fontSize: 10 }}>
                            {errors.city}
                          </Text>
                        )
                      }
                      onChangeText={(value) =>
                        handleOnChangeText(value, "city", setFieldValue)
                      }
                      label="*Ville"
                      placeholder="Montpellier"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      onBlur={handleBlur("city")}
                    />
                  </View>
                  <FormSubmitButton
                    submitting={isSubmitting}
                    onPress={handleSubmit}
                    title="Continuer"
                    color={COLORS.secondary}
                    marginTop={25}
                    height={40}
                    padding={10}
                  />
                </>
              )}
            </Formik>
          </FormContainer>
        </View>
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
    width: "90%",
    height: "100%",
    justifyContent: "flex-start",
  },
});

export default Location_Page;
