import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text } from "react-native";
import { SIZES, COLORS, FONT } from "../../../../constants/themes";
import { StyleSheet } from "react-native";
import FormContainer from "../../Authentification/formulaire/formContainer";
import FormInput from "../../Authentification/formulaire/formInput";
import FormSubmitButton from "../../Authentification/formulaire/formSubmitButton";
import { Formik } from "formik";
import FormInput2 from "../../Authentification/formulaire/formInput2";
import { userLogin } from "../../../../context/LoginProvider";
import * as Yup from "yup";

const Location_Page = ({ navigation }) => {
  const { data, setData } = userLogin();
  const [error, setError] = useState("");
  console.log(data + "popooopoo");

  const validationSchema = Yup.object({
    number: Yup.number()
      .required("Number is required!")
      .min(1, "Number must be at least 1.")
      .max(9999, "Number must be at most 9999."),
    street: Yup.string().required("Street is required!"),
    postal: Yup.string()
      .trim()
      .min(5, "Postal code must be at least 8 characters long.")
      .required("Postal code is required!"),
    Town: Yup.string().required("Town is required!"),
  });
  const handleOnChangeText = (value, fieldName, setFieldValue) => {
    // const trimmedValue = value.replace(/^\s+|\s+$/g, "");
    setFieldValue(fieldName, value);
  };
  const goToDatesPage = (values) => {
    try {
      // Enlever les espaces au début et à la fin de chaque valeur
      const trimmedValues = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.trim()])
      );

      // Mettre à jour le contexte avec les données du formulaire
      setData({ ...data, ...trimmedValues });
      console.log(data);
      // Naviguez vers la page suivante ou effectuez d'autres actions nécessaires
      navigation.navigate("PostAd", { screen: "Dates_Page" });
    } catch (error) {
      console.error("Error navigating to Dates_Page:", error);
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
            {error ? (
              <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
                {error}
              </Text>
            ) : null}
            <Formik
              initialValues={{
                number: "",
                street: "",
                postal: "",
                Town: "",
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
                      error={touched.name && errors.name}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "number", setFieldValue)
                      }
                      label="N°"
                      placeholder="25"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      width="100%"
                      height={45}
                      onBlur={handleBlur("number")}
                    />
                    <FormInput2
                      value={values.postal}
                      error={touched.name && errors.name}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "postal", setFieldValue)
                      }
                      label="Code postal"
                      placeholder="34430"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      width="100%"
                      height={45}
                      onBlur={handleBlur("postal")}
                    />
                  </View>
                  <View>
                    <FormInput
                      value={values.street}
                      error={touched.name && errors.name}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "street", setFieldValue)
                      }
                      label="Rue"
                      placeholder="Rue des Pins"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      onBlur={handleBlur("street")}
                    />
                  </View>
                  <View>
                    <FormInput
                      value={values.Town}
                      error={touched.name && errors.name}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "Town", setFieldValue)
                      }
                      label="Ville"
                      placeholder="25"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      onBlur={handleBlur("Town")}
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
