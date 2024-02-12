import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONT } from "../../constants/themes";
import Icons from "../../constants/icons";
import logo from "../../constants/images";
import { accountService } from "../_services/accountService";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "./Authentification/formulaire/formInput";
import FormInput2 from "./Authentification/formulaire/formInput2";
import FormContainer from "./Authentification/formulaire/formContainer";
import FormSubmitButton from "./Authentification/formulaire/formSubmitButton";

const validationSchema = Yup.object({
  objet: Yup.string()
    .trim()
    .min(1, "Invalid object!")
    .required("object is required!"),
  messageText: Yup.string(),
});

const ContactSupport = () => {
  const navigation = useNavigation();
  const handleOnChangeText = (value, fieldName, setFieldValue) => {
    setFieldValue(fieldName, value);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  ////  A modifier
  const signUp = async (values, formikActions) => {
    try {
      const res = await accountService.signup(values);
      setValideMessage(res.data.message);
      setShowModal(true);
      formikActions.resetForm();
    } catch (error) {
      updateError("Une erreur s'est produite lors de l'inscription", setError);
    } finally {
      formikActions.setSubmitting(false);
    }
  };
  ////

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.page}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.page}>
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <View style={styles.LinksContainer}>
                <TouchableOpacity onPress={handleGoBack}>
                  <Image
                    source={Icons.arrowBackGreen}
                    style={{ ...styles.icons, marginLeft: 10 }}
                  />
                </TouchableOpacity>
                <Image
                  source={Icons.CloseButtonGreen}
                  style={{ ...styles.icons, marginRight: 10 }}
                />
              </View>
              <View style={styles.boxLogo}>
                <Image
                  source={logo.titleHomePage}
                  style={styles.titleHomePage}
                />
                <Image source={logo.logo} style={styles.logo2} />
              </View>
            </View>
          </View>
          <View style={styles.BodyContainer}>
            <View style={styles.subPage}>
              <Text
                style={{
                  color: COLORS.lightWhite,
                  fontSize: SIZES.large,
                  marginTop: 30,
                  fontWeight: FONT.bold,
                }}
              >
                Vous souhaitez nous contacter ?
              </Text>
              <Image
                source={Icons.letter}
                style={{ width: 80, height: 80, marginTop: 20 }}
              />
              <FormContainer>
                <View style={styles.containerForm}>
                  <Formik
                    initialValues={{
                      objet: "",
                      messageText: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={signUp}
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
                        <FormInput
                          value={values.objet}
                          onChangeText={(value) =>
                            handleOnChangeText(value, "objet", setFieldValue)
                          }
                          onBlur={handleBlur("objet")}
                          label="Oui c'est pour quoi ?"
                          placeholder="Objet du message"
                          color={COLORS.white}
                        />

                        <FormInput2
                          value={values.messageText}
                          onChangeText={(value) =>
                            handleOnChangeText(
                              value,
                              "messageText",
                              setFieldValue
                            )
                          }
                          onBlur={handleBlur("messageText")}
                          label="Dite nous tout !"
                          placeholder="Votre message..."
                          color={COLORS.white}
                        />
                        <FormSubmitButton
                          submitting={isSubmitting}
                          onPress={handleSubmit}
                          title="Envoyer"
                          color={COLORS.secondary}
                          marginTop={10}
                        />
                      </>
                    )}
                  </Formik>
                </View>
              </FormContainer>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
  },

  //Header styles
  headerContainer: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "column",
    backgroundColor: COLORS.tertiary,
    width: "100%",
    borderColor: "black",
    height: "100%",
    alignItems: "center",
    borderBottomRightRadius: "50%",
    position: "relative",
  },
  boxLogo: {
    position: "absolute",
    top: 15,
  },
  LinksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginTop: 20,
  },
  titleHomePage: {
    width: 100, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1, // Ratio d'aspect (width / height)
    resizeMode: "contain",
  },

  logo2: {
    width: 65, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1, // Ratio d'aspect (width / height)
    resizeMode: "contain",
    position: "absolute",
    zIndex: 1000,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -28 }, { translateY: -28 }],
  },

  //Body styles
  BodyContainer: {
    backgroundColor: COLORS.tertiary,
    height: "100%",
  },

  subPage: {
    backgroundColor: COLORS.primary,
    height: "100%",
    borderTopLeftRadius: "50%",
    alignItems: "center",
  },
  containerForm: {
    marginTop: 20,
  },
});

export default ContactSupport;
