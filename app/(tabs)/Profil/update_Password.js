import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";
import Icons from "../../../constants/icons";
import { accountService } from "../../_services/accountService";
import * as Yup from "yup";
import { Formik } from "formik";
import FormContainer from "../Authentification//formulaire/formContainer";
import FormInput from "../Authentification/formulaire/formInput";
import FormSubmitButton from "../Authentification/formulaire/formSubmitButton";

const validationSchema = Yup.object({
  holdPassword: Yup.string()
    .trim()
    .min(8, "Password is too short!")
    .required("Password is required!"),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short!")
    .required("Password is required!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password does not match!"
  ),
});

const UpdatePassword = () => {
  const navigation = useNavigation();
  const handleOnChangeText = (value, fieldName, setFieldValue) => {
    setFieldValue(fieldName, value);
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

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

  return (
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
          <View>
            <Text style={styles.title}>Mot de passe</Text>
          </View>
        </View>
      </View>
      <View style={styles.BodyContainer}>
        <View style={styles.subPage}>
          <View style={styles.containerForm}>
            <FormContainer>
              <Formik
                initialValues={{
                  holdPassword: "",
                  password: "",
                  confirmPassword: "",
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
                      value={values.holdPassword}
                      error={touched.holdPassword && errors.holdPassword}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "holdPassword", setFieldValue)
                      }
                      onBlur={handleBlur("password")}
                      autoCapitalize="none"
                      secureTextEntry
                      label="Ancien mot de passe"
                      placeholder="********"
                      color={COLORS.white}
                    />
                    <FormInput
                      value={values.password}
                      error={touched.password && errors.password}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "password", setFieldValue)
                      }
                      onBlur={handleBlur("password")}
                      autoCapitalize="none"
                      secureTextEntry
                      label="Nouveau Mot de passe"
                      placeholder="********"
                      color={COLORS.white}
                    />
                    <FormInput
                      value={values.confirmPassword}
                      error={touched.confirmPassword && errors.confirmPassword}
                      onChangeText={(value) =>
                        handleOnChangeText(
                          value,
                          "confirmPassword",
                          setFieldValue
                        )
                      }
                      onBlur={handleBlur("confirmPassword")}
                      autoCapitalize="none"
                      secureTextEntry
                      label="*Confirme mot de passe"
                      placeholder="********"
                      color={COLORS.white}
                    />
                    <FormSubmitButton
                      submitting={isSubmitting}
                      onPress={handleSubmit}
                      title="Modifier"
                      color={COLORS.secondary}
                      marginTop={10}
                    />
                  </>
                )}
              </Formik>
            </FormContainer>
          </View>
        </View>
      </View>
    </View>
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
    borderBottomColor: "black",
    borderBottomRightRadius: "50%",
  },
  LinksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginTop: 20,
  },
  title: {
    alignItems: "baseline",
    color: COLORS.secondary,
    fontSize: SIZES.xxLarge,
    fontWeight: FONT.bold,
    marginLeft: "6%",
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

export default UpdatePassword;
