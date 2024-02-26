import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SIZES, COLORS, FONT } from "../../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { ProgressContext } from "../../navigators/ProgressContext";
import FormContainer from "../../Authentification/formulaire/formContainer";
import FormInput from "../../Authentification/formulaire/formInput";
import { Formik } from "formik";
import FormInput2 from "../../Authentification/formulaire/formInput2";
import BaseButton from "../../../../components/Buttons/Base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userLogin } from "../../../../context/LoginProvider";
import * as Yup from "yup";

const Location_Page = () => {
  const navigation = useNavigation();
  const { data, setData, imagesPlant } = userLogin();
  const [error, setError] = useState("");
  // const imagePlantObject = JSON.parse(imagePlant);
  console.log("voici les photos: " ,imagesPlant);
  // console.log("IMAGE PLANT OBJECT",imagePlantObject);
  console.log("mes données: " + data.plantName);

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
    setFieldValue(fieldName, value);
  };

  const goToDatesPage = () => {
    console.log("go to dates page");
    navigation.navigate("PostAd", { screen: "Dates_Page" });
  };

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
              // onSubmit={signUp}
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
                      onChangeText={(value) =>
                        handleOnChangeText(value, "number")
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
                      value={values.street}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "street", setFieldValue)
                      }
                      label="Rue"
                      placeholder="Rue des Pins"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      width="100%"
                      height={45}
                      onBlur={handleBlur("street")}
                    />
                  </View>
                  <View>
                    <FormInput
                      value={values.Postal}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "Postal", setFieldValue)
                      }
                      label="Code postal"
                      placeholder="25"
                      autoCapitalize="none"
                      color={COLORS.primary}
                      onBlur={handleBlur("postal")}
                    />
                  </View>
                  <View>
                    <FormInput
                      value={values.Town}
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
                </>
              )}
            </Formik>
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
